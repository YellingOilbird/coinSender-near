"use strict";(self.webpackChunkfront_tc=self.webpackChunkfront_tc||[]).push([[994],{1994:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var i,o,a,s,c,r,l,d,m,x,p,h,g,u,f,j=t(168),k=t(8789),v=k.ZP.div(i||(i=(0,j.Z)(["\n  width: 70%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  \n  @media(max-width:779px) {\n    flex-direction: column;\n  }\n"]))),w=k.ZP.i(o||(o=(0,j.Z)(["\n  margin-bottom: 0;\n  margin-right: 0;\n\n  @media(max-width:779px) {\n    display: none;\n  }\n"]))),Z=k.ZP.section(a||(a=(0,j.Z)(["\n  @media(max-width:480px) {\n    width: 100% !important;\n  }\n"]))),b=k.ZP.section(s||(s=(0,j.Z)(["\n  @media(max-width:480px) {\n    width: 100% !important;\n  }\n"]))),y=k.ZP.h2(c||(c=(0,j.Z)(["\n  font-size: 32px;\n  animation:blink 3s ease-in-out;\n  margin: 0 5px;\n  margin-top:10px;\n\n  @media(max-width:770px) {\n    font-size: 27px;\n  }\n\n  @media(max-width:480px) {\n    font-size: 20px;\n  }\n\n  @media(max-width:350px) {\n    font-size: 25px;\n  }\n\n  @media(max-width:320px) {\n    font-size: 20px;\n  }\n"]))),I=k.ZP.p(r||(r=(0,j.Z)(["\n  @media(max-width:320px) {\n    font-size: 12px;\n    margin: 15px 0;\n  }\n"]))),N=k.ZP.div(l||(l=(0,j.Z)(["\n  display: block;\n"]))),S=k.ZP.div(d||(d=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom:20px;\n"]))),P=k.ZP.a(m||(m=(0,j.Z)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: 15px;\n  font-size: 17px;\n  \n  @media(max-width: 320px) {\n    width: 100%;\n    font-size: 14px;\n  }\n"]))),z=k.ZP.div(x||(x=(0,j.Z)(["\n  padding-top: 100px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]))),C=k.ZP.h2(p||(p=(0,j.Z)(["\n  margin: 20px 0;\n"]))),E=k.ZP.h1(h||(h=(0,j.Z)(["\n  font-size: 35px;\n  margin-top: 40px;\n  margin-bottom: 20px;\n  text-align: center;\n  \n  @media(max-width: 1350px) {\n    font-size: 30px;\n  }\n\n  @media(max-width: 1005px) {\n    font-size: 25px;\n  }\n\n  @media(max-width: 805px) {\n    font-size: 20px;\n  }\n"]))),_=k.ZP.h2(g||(g=(0,j.Z)(["\n  font-size: 20px;\n  text-align: center;\n\n  @media(max-width: 780px) {\n    font-size: 16px;\n  }\n"]))),R=k.ZP.button(u||(u=(0,j.Z)(["\n  position: sticky;\n\n  @media(max-width: 780px) {\n    width: 50%;\n  }\n"]))),A=k.ZP.i(f||(f=(0,j.Z)(["\n  margin-bottom: 0;\n  margin-right: 0;\n"]))),T=t(8275),B=t(184),D=function(){return(0,B.jsx)("div",{className:"container",children:(0,B.jsxs)(z,{children:[(0,B.jsx)(A,{style:{marginBottom:"10px"},className:"nes-icon coin"}),(0,B.jsx)(C,{children:"COINSENDER"}),(0,B.jsx)(_,{children:"This is pre-audited BETA version. Use at your own risk!"}),(0,B.jsxs)(E,{children:["Sign with NEAR to continue ","->"]}),(0,B.jsx)(R,{className:"nes-btn",onClick:T.x4,children:"Sign In"})]})})},F=t(2791),H=t(119),K=t(3257),O=function(){var n=(0,H.C)((function(n){return n.tokens})).tokens,e=(0,H.T)();return(0,B.jsxs)("select",{id:"token_select",onChange:function(n){e((0,K.o4)(n.target.value.split(":")))},children:[(0,B.jsx)("option",{value:"NEAR:24:NEAR",children:"NEAR"}),n.length>0&&n.map((function(n){return(0,B.jsx)("option",{value:"".concat(n[1].contract_id,":").concat(n[1].decimals,":").concat(n[1].ticker),children:n[1].ticker},n[0])}))]})};var U=t.p+"static/media/near.47b91dd0f0f6779467e85ea380257884.svg",V=function(){var n=(0,H.C)((function(n){return n.tokens.tokens}));return(0,B.jsxs)(N,{children:[(0,B.jsxs)(S,{children:[(0,B.jsx)("p",{children:"NEAR"}),(0,B.jsx)("img",{width:"40px",src:U,alt:""})]}),n.length>0&&n.map((function(n){return(0,B.jsxs)(S,{children:[(0,B.jsx)("p",{children:n[1].ticker}),(0,B.jsx)("img",{width:"40px",src:n[1].icon,alt:""})]},n[1].ticker)}))]})},Y=t(6871),q=function(){var n=(0,Y.s0)(),e=(0,H.C)((function(n){return n.tokens.activeToken}));return(0,B.jsx)("div",{className:"item",onClick:function(){var t=e[0],i=e[1],o=e[2];localStorage.setItem("token_id",t),localStorage.setItem("token_ticker",o),localStorage.setItem("token_decimals",i),console.log(e),n("/processing/verify/".concat(t))},children:(0,B.jsx)(P,{id:"check",className:"nes-btn",children:"CHECK & VERIFY RECEPIENTS"})})},G=function(){return(0,F.useEffect)((function(){localStorage.removeItem("vault"),localStorage.removeItem("token_id"),localStorage.removeItem("coin"),localStorage.removeItem("token_ticker"),localStorage.removeItem("token_decimals"),localStorage.removeItem("need_to_fund"),localStorage.removeItem("chunkProcessed"),localStorage.removeItem("chunkProcessedIndex"),localStorage.removeItem("remaining_counter"),localStorage.removeItem("transition"),localStorage.removeItem("operations"),localStorage.removeItem("total"),localStorage.removeItem("remaining")}),[]),(0,B.jsx)("div",{children:""!==window.accountId?(0,B.jsxs)("div",{children:[(0,B.jsx)("section",{className:"nes-container",style:{backgroundColor:"cornflowerblue"},children:(0,B.jsx)("section",{className:"nes-select",children:(0,B.jsx)(O,{})})}),(0,B.jsx)(Z,{id:"description",className:"data",style:{display:"block",margin:"auto",width:"70%",padding:"10px"},children:(0,B.jsx)("section",{className:"topic",children:(0,B.jsxs)(b,{id:"main",className:"nes-container with-title is-centered",style:{top:"10px"},children:[(0,B.jsxs)(v,{children:[(0,B.jsx)(w,{className:"nes-icon coin"}),(0,B.jsx)(y,{children:"coinsender"}),(0,B.jsx)(w,{className:"nes-icon coin"})]}),(0,B.jsxs)(I,{children:[(0,B.jsx)("strong",{children:"Coinsender "}),"allows send tokens to many accounts using one single transaction"]}),(0,B.jsx)(q,{})]})})}),(0,B.jsxs)("div",{id:"supported",className:"nes-table-responsive",style:{textAlign:"center",display:"block"},children:[(0,B.jsx)("h1",{style:{marginBottom:"20px"},children:"supported tokens:"}),(0,B.jsx)("table",{style:{margin:"auto",top:"10px",width:"30%",border:"0"},children:(0,B.jsx)(V,{})})]})]}):(0,B.jsx)(D,{})})}}}]);
//# sourceMappingURL=994.766c65c0.chunk.js.map