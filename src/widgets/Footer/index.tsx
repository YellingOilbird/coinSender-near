import { FooterWrap } from "./footer.styled";
import { Powered } from "pages/Home/Home.styled";
import near from 'shared/lib/assets/img/near.svg';

export const Footer = () => {
    return (
        <FooterWrap>
            <div className='container'>
                <Powered>
                <img src={near} width='40px' alt=''></img>
                    <p>
                        Project brewed at
                        <a href='https://learnnear.club/lnc-barrel/'style={{color:"blue"}}>
                            &nbsp;LNC Barrel
                        </a>
                    </p>
                <img src={near} width='40px' alt=''></img>
                </Powered>
            </div>
        </FooterWrap>
    )
}