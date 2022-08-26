import { withProviders } from "./providers";
import {ConnectMetamask} from "features/connectMetamask";
import {ConnectOtherWallets} from "features/connectOtherWallets";
import {InitBlockChainData} from "processes/initWeb3State";

function App() {
   return (
      <InitBlockChainData>
         <div className="App">
            <ConnectMetamask />
            <ConnectOtherWallets />
         </div>
      </InitBlockChainData>
   );
}

export default withProviders(App);
