import near from 'shared/lib/assets/img/near.svg'
import {
   Coins,
   CoinsWrap,
   Description,
   DescriptionText,
   GoldCoin,
   MainMenu,
   Next,
   Title,
   TitleWrap
} from "./Home.styled";
import {useState} from "react";
import {useNavigate} from "react-router";
import {ConnectWallet} from "../../widgets/connectWallet";
import {useClearStorage} from "./helpers/clearStorage";

const Home = () => {
   const navigate = useNavigate()
   const [token, setToken] = useState('NEAR:24:NEAR'.split(':'));
   useClearStorage()

   const onSetCoin = (ev:any) =>{
      setToken(ev.target.value.split(':'));
   }

   const onNext = () => {
      const current_token_id = token[0];
      const current_token_decimals = token[1];
      const current_token_ticker = token[2];

      localStorage.setItem("token_id", current_token_id);
      localStorage.setItem("token_ticker", current_token_ticker);
      localStorage.setItem("token_decimals", current_token_decimals);

      navigate(`/processing/verify/${current_token_id}`);
   }

   return(
      <div>
         {window.accountId !== '' ?
            <div>
               <section className="nes-container" style={{backgroundColor: 'cornflowerblue'}}>
                  <section className="nes-select">
                     <select id="token_select" onChange={onSetCoin}>
                        <option value="NEAR:24:NEAR">NEAR</option>
                        <option value="lnc.factory.tokenhub.testnet:18">LNC</option>
                        <option value="ref.fakes.testnet:18">REF</option>
                        <option value="guacharo.testnet:24">GUA</option>
                     </select>
                  </section>
               </section>

               <Description id="description" className="data"
                    style={{display: 'block', margin: 'auto', width: '70%', padding: '10px'}}>
                  <section className="topic">
                     <MainMenu id="main" className="nes-container with-title is-centered" style={{top: '10px'}}>
                        <TitleWrap>
                           <GoldCoin className="nes-icon coin"/>
                           <Title>
                              coinsender
                           </Title>
                           <GoldCoin className="nes-icon coin"/>
                        </TitleWrap>

                        <DescriptionText>
                           <strong>Coinsender </strong>
                           allows send tokens to many accounts using one
                           single transaction
                        </DescriptionText>

                        <div className="item" onClick={onNext}>
                           <Next id="check" className="nes-btn">
                              CHECK &amp; VERIFY
                              RECEPIENTS
                           </Next>
                        </div>
                     </MainMenu>
                  </section>
               </Description>

               <div id="supported" className="nes-table-responsive" style={{textAlign:'center', display:'block'}}>
                  <h1 style={{marginBottom: '20px'}}>supported tokens:</h1>
                  <table style={{margin: 'auto', top:'10px', width: '30%', border: '0'}}>
                     <CoinsWrap>
                        <Coins>
                           <p>Near</p>
                           <img
                              width='40px'
                              src={near}
                              alt=''
                           />
                        </Coins>

                        <Coins>
                           <p>LNC</p>
                           <img
                              width='40px'
                              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIACAAIAMBIgACEQEDEQH/xAAZAAADAAMAAAAAAAAAAAAAAAAABgcDBAj/xAAjEAACAgICAgMAAwAAAAAAAAABAgMEBQYAEQcSEyExFCJB/8QAGAEAAgMAAAAAAAAAAAAAAAAAAQMABwj/xAAlEQACAQMDBAIDAAAAAAAAAAABEQMAAgQxQWESIZHwUXGBwfH/2gAMAwEAAhEDEQA/AOqOHNHN5vF67jnyuZtCtVSSKJpCjN00kixoOlBP27qPz/fv64qZDzBq+L8h2/Gt2rk0yVXFJlROK3tVlVhMwhEoPSzeteZgr+vsqMVJ9W6zZHBLKCbLSV38J+GKva+aONC8p/v+U88ORWv5t3fyTFTbwTpWPvxpjMfl8lc2O49SvCLldbENGMwLJ72vidWf7CxB4ifcSDqmaPseS2rXIMtmdYva9kRJLWuY632TDPE5jf436HyxFlJjlAAdCrADvrjZ8OXHt6pEOGGPhjUP3alxZUc9ys78oo/R0rD5E1O3u+oXdboZaPGWrD15oLctU2EikhnjlUtGHQuCYwCPZf394jZDwNc2pdht75uMF3LZ2ji4I72LxQpGhZoT25YLMKySzdN1aVSpJBCOD2shVa7w5IcyaC3ojKDegex1T2HbTtRkxYpruq8MpannbTc1EcB4D3jx3UxaeLPK1fFSpgcfhsxBkcH/AC6V+epWirR5CKFZ42gn+OPpv7uHCQq31GDymeP9XymnarTwed27JbPk0LzXcrfIElmeRy8jKgJEUfsxCRKSqIFUdgd8YuHDPmzZIUpB5QB4ZAZ9+BQhxIoC4wR+SvDXvNf/2Q=="
                              alt=''
                           />
                        </Coins>

                        <Coins>
                           <p>REF</p>
                           <img
                              width='40px'
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='16 24 248 248' style='background: %23000'%3E%3Cpath d='M164,164v52h52Zm-45-45,20.4,20.4,20.6-20.6V81H119Zm0,18.39V216h41V137.19l-20.6,20.6ZM166.5,81H164v33.81l26.16-26.17A40.29,40.29,0,0,0,166.5,81ZM72,153.19V216h43V133.4l-11.6-11.61Zm0-18.38,31.4-31.4L115,115V81H72ZM207,121.5h0a40.29,40.29,0,0,0-7.64-23.66L164,133.19V162h2.5A40.5,40.5,0,0,0,207,121.5Z' fill='%23fff'/%3E%3Cpath d='M189 72l27 27V72h-27z' fill='%2300c08b'/%3E%3C/svg%3E%0A"
                              alt=''
                           />
                        </Coins>

                        <Coins>
                           <p>GUA</p>
                           <img src="" alt='' />
                        </Coins>
                     </CoinsWrap>
                  </table>
               </div>
            </div>
            :
            <ConnectWallet />
         }
      </div>
   )
}

export default Home;