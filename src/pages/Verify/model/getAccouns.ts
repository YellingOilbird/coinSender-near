import bigInt from "big-integer";
import {ConvertToYocto} from "../../../shared/lib/helpers/convert";
import {accountExists} from "../../../shared/lib/helpers/accountExits";
import {getDeposits} from "../../../shared/lib/helpers/getDeposits";

interface returnFn {
   total:number;
   accounts:Record<string, number>
}

export const verifyAcoounts = (
   value: string | undefined,
   setStatus: React.Dispatch<React.SetStateAction<string>>,
   coin:string,
) => async ():Promise<returnFn> => {
   let decimals = localStorage.getItem("token_decimals");
   let accounts:Record<string, number> = {};
   let result;
   let total = 0;

   if(value !== '' && value) {
      let input = value;
      const pattern = RegExp(/^([0-9a-zA-Z][\_\-0-9a-zA-Z.]*)[\t,|\||=| ]([0-9\.\,]+$)/, 'gm');

      while ((result = pattern.exec(input)) !== null) {
         const account_name = result[1].toLowerCase();
         const amount = parseFloat(result[2].replace(',', '.').replace(' ', ''))
         const isAcc = await accountExists(account_name);

         if (result[1] && amount && isAcc) {
            if (accounts.hasOwnProperty(account_name)) {
               accounts[account_name] += amount;
            } else
               accounts[account_name] = amount;
               total += amount;
         }
      }

      const deposit = await getDeposits(coin);
      const depositConvert = ConvertToYocto(deposit, Number(decimals))

      const totalConvert = ConvertToYocto(total, Number(decimals))
      const totalBigAmount = bigInt(totalConvert ? totalConvert : 0).toString()

      if(Number(bigInt(depositConvert ? depositConvert : 0)) >= Number(totalBigAmount) ) {
         setStatus('SEND');
      } else {
         setStatus('DEPOSIT');

         let amount = ConvertToYocto(total - Number(deposit), Number(decimals));
         let need_to_deposit = bigInt(amount ? amount : 0);

         localStorage.setItem('need_to_deposit', need_to_deposit.toString())
         localStorage.setItem('need_to_deposit_ui', (total - Number(deposit)).toString())
      }

      const operations = JSON.stringify(accounts);
      localStorage.setItem('operations',operations)
      localStorage.setItem('operations_number', Object.keys(accounts).length.toString())

      if(coin !== 'NEAR') {
         setStatus('STORAGE');
      }

   }

   return {total, accounts}
}