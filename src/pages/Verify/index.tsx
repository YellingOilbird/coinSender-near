import {Wrapper, Btns, Error} from 'shared/ui/Layout/style'
import {useEffect, useState} from "react";
import {verifyAcoounts} from "./model/getAccouns";
import {Title, Description} from 'shared/ui/Layout/style';
import {VerifyStatus} from "widgets/status/verify";
import {deposit} from "./model/deposit";
import {DepositStatus} from "widgets/status/deposit";
import {useGoSend} from "shared/lib/helpers/goSend";
import {Textarea} from "features/textarea";
import {useLocation} from "react-router";
import {checkStorage} from "./model/checkStorage";
import {StorageStatus} from "../../widgets/status/storage";

const Verify = () => {
   const {pathname} = useLocation()

   const [error, setError] = useState('')
   const [status, setStatus] = useState('VERIFY')
   const [accounts, setAccounts] = useState('')
   const go = useGoSend();
   const clearAcoounts = () => {
      setAccounts('')
   }

   const coin = pathname.split('/')[3];

   useEffect(() => {
      const need_to_deposit = localStorage.getItem('need_to_deposit');
      const need_to_send = localStorage.getItem('need_to_send');

      const operations = localStorage.getItem('operations');

      if (
         need_to_send !== null &&
         operations !== null &&
         need_to_deposit === null
      ) {
         setStatus('SEND');
         setAccounts(operations ? operations : '')
      }
   }, [])

   return(
      <Wrapper>
         <Title>VERIFY AND CHECK ACCOUNTS</Title>
         {status === 'VERIFY' && <>
             <VerifyStatus />
             <Btns className='nes-btn' onClick={verifyAcoounts(accounts, setStatus, setError, coin, coin !== 'NEAR')}>VERIFY</Btns>
             <Btns className='nes-btn is-warning' onClick={clearAcoounts}>CLEAR ACCOUNTS</Btns>
            </> }

         {status === 'DEPOSIT' && <>
             <DepositStatus />
             <Btns className='nes-btn is-success' onClick={deposit(setStatus, coin)}>Deposit {Number(localStorage.getItem('need_to_deposit_ui')).toFixed(2)} {coin}</Btns>
         </> }

         {status === 'SEND' && <>
             <Btns className='nes-btn is-warning' onClick={go}>GO TO SEND!</Btns>
         </>
         }

         {status === 'STORAGE' && <>
             <StorageStatus />
             <Btns className='nes-btn' onClick={checkStorage(accounts, setStatus, coin)}>CHECK STORAGE</Btns>
         </>
         }

         <br />
         <Title style={{marginBottom:'5px'}}>EXAMPLES:</Title>
         <Description>
            <p>hello.testnet 1</p>
            <p>world.testnet 1</p>
         </Description>

         <Error>{error}</Error>

         <Textarea accounts={accounts} setAccounts={setAccounts} />
      </Wrapper>
   )
}

export default Verify;