import {useSetWeb3Data} from "../../shared/lib/setWeb3Data";

export const ConnectMetamask = () => {
   const { setData } = useSetWeb3Data();

   return(
      <button onClick={() => setData(true)}>connect metamask</button>
   )
}