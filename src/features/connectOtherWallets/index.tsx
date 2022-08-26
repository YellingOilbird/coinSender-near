import {useSetWeb3Data} from "../../shared/lib/setWeb3Data";
import {connectOtherWallet} from "./model";

export const ConnectOtherWallets = () => {
   const { setData } = useSetWeb3Data();

   const connectWallet = async () => {
      const contract = await connectOtherWallet()
      console.log(contract)
      setData(false,contract);
   }

   return(
      <button onClick={connectWallet}>connect wallets</button>
   )
}