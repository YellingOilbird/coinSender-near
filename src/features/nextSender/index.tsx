import {Next} from "../../pages/Home/Home.styled";
import {useNavigate} from "react-router";
import {useAppSelector} from "app/model/hooks";

export const NextSender = () => {
   const navigate = useNavigate()
   const token = useAppSelector(state => state.tokens.activeToken);

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
      <div className="item" onClick={onNext}>
         <Next id="check" className="nes-btn">
            CHECK &amp; VERIFY
            RECEPIENTS
         </Next>
      </div>
   )
}