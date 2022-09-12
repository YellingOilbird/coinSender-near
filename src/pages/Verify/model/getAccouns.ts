import bigInt from "big-integer";
import {ConvertToYocto} from "../../../shared/lib/helpers/convert";
import {accountExists} from "../../../shared/lib/helpers/accountExits";
import {getDeposits} from "../../../shared/lib/helpers/getDeposits";
import {utils} from 'near-api-js'

interface returnFn {
   total:number;
   accounts:Record<string, number>
}

export const verifyAcoounts = (
   value: string | undefined,
   setStatus: React.Dispatch<React.SetStateAction<string>>,
   setError: React.Dispatch<React.SetStateAction<string>>,
   coin:string,
   isStorage:boolean = false,
) => async ():Promise<returnFn | false> => {
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

      const totalConvert = ConvertToYocto(total, Number(decimals))
      const totalBigAmount = bigInt(totalConvert ? totalConvert : '0').toString();

      if(Number(deposit) >= Number(totalBigAmount) ) {
         setStatus('SEND');
      } else {
         setStatus('DEPOSIT');

         const need_to_deposit_ui= +(utils.format.formatNearAmount(
               totalBigAmount,
               Number(decimals)
            )) -
            +(utils.format.formatNearAmount(
               deposit,
               Number(decimals)
            )) + 0.1;

         const need_to_deposit=utils.format.parseNearAmount(need_to_deposit_ui.toString());

         console.log(need_to_deposit + ' deposit')
         console.log(need_to_deposit_ui + ' deposit_ui')

         localStorage.setItem('need_to_deposit', need_to_deposit ? need_to_deposit : '')
         localStorage.setItem('need_to_deposit_ui', need_to_deposit_ui.toFixed(0))
      }

      const operations = JSON.stringify(accounts);
      localStorage.setItem('operations',operations)
      localStorage.setItem('operations_number', Object.keys(accounts).length.toString())

      if(coin !== 'NEAR' && isStorage) {
         setStatus('STORAGE')
      }
   } else setError('There are no accounts')

   console.log(accounts)
   return {total, accounts}
}