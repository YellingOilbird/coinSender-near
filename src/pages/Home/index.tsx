import {
   Description,
   DescriptionText,
   GoldCoin,
   MainMenu,
   Title,
   TitleWrap
} from "./Home.styled";
import {ConnectWallet} from "widgets/connectWallet";
import {useClearStorage} from "./helpers/clearStorage";
import {ChangeToken} from "features/changeToken";
import {WhitedTokens} from "../../widgets/whitedTokens";

const Home = () => {
   useClearStorage()

   return(
      <div>
         {window.accountId !== '' ?
            <div>
               <section className="nes-container" style={{backgroundColor: 'cornflowerblue'}}>
                  <section className="nes-select">
                     <ChangeToken />
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

                     </MainMenu>
                  </section>
               </Description>

               <div id="supported" className="nes-table-responsive" style={{textAlign:'center', display:'block'}}>
                  <h1 style={{marginBottom: '20px'}}>supported tokens:</h1>
                  <table style={{margin: 'auto', top:'10px', width: '30%', border: '0'}}>
                     <WhitedTokens />
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