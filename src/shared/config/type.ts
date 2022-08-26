import { Signer} from "ethers";
import {Web3Provider} from "@ethersproject/providers/src.ts/web3-provider";

export interface blockChainState {
   address:string,
   balance:null | number,
   provider:null | Web3Provider,
   contract:null | any,
   signer:null | Signer,
   txBeingSent:boolean,
   error:false | string,
}