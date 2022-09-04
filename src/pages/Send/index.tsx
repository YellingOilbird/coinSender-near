import {Description, Wrapper, Btns} from 'shared/ui/Layout/style'
import {useLocation} from "react-router";
import {send_unsafe} from "./model/send";
import {withdraw} from "./model/withdraw";
import {useEffect, useState} from "react";


const Send = () => {
   const {pathname} = useLocation()
   const [counetr_accs, setCounetr_accs] = useState(0)

   useEffect(() => {
      const operations = localStorage.getItem("operations")
      const accounts = JSON.parse(operations ? operations : '[]');
      let accountsRaw = Object.keys(accounts);
      let remaining_accounts = Number(localStorage.getItem("remaining_counter"))

      if(!remaining_accounts) {
         setCounetr_accs(accountsRaw.length)
      } else if(remaining_accounts < 25) {
         setCounetr_accs(remaining_accounts)
      } else {
         setCounetr_accs(25)
      }
   }, [])

   return(
      <Wrapper>
         <Description mt="40px">
            Send tokens to checked recipients via "send" button. If you are send to more then 25 accounts it will be sliced automatically to chunks by 25 accounts per chunk.
         </Description>

         <Description mt="20px">
            Number of remaining recepients: 2.
            Click one more time on SEND to send to next account group (25 accounts). Check progress on redirected approval transaction page!
         </Description>

         <Btns mt="20px" className='nes-btn is-warning' onClick={send_unsafe(pathname)}>send to {counetr_accs} accounts</Btns>

         <Description mt="5px">
            send tokens. check remaining accounts below
         </Description>

         <Btns mt="20px" className='nes-btn is-success' onClick={withdraw}>withdraw</Btns>

      </Wrapper>
   )
}

export default Send;