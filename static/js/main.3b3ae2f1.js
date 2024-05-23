/*! For license information please see main.3b3ae2f1.js.LICENSE.txt */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${e=>e.theme.colors.primary};
  border-top: 0px solid ${e=>e.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  flex: 1;
  width: 90%;
  color: ${e=>e.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,_b=e=>{const{floatingCamera:n,scrollElement:r,setFloatingCamera:i}=Fx((e=>e)),a=(0,t.useCallback)((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;null==r||r.scroll({top:t*r.scrollHeight,behavior:"smooth"}),null==e||e.onRequestClose()}),[r,e]);return t.createElement(vb(),Kg({ariaHideApp:!1,closeTimeoutMS:500,style:{overlay:{backgroundColor:"rgba(0,0,0,0.9)",zIndex:1},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderWidth:0,backgroundColor:"rgba(0,0,0,0.0)",height:"80%"}}},e),xb.map((e=>t.createElement(yb,{onClick:()=>a(e.position)},e.name))))},{navTitle:bb}=S_,wb=Le.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: ${e=>e.windowWidth}px; /* Adjust width based on window width */
  height: 50px;
  z-index: 1;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};
`,Sb=Le.div`
  flex-grow: 1;
  text-align: center;
  padding-left: 65px; /* Add 1 pixel padding to the left */
`,Mb=Le.button`
  display: flex;
  align-items: center;
  height: 100%;
  width: 60px;
  border: 1px none;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,Ab=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(window.innerWidth);return(0,t.useEffect)((()=>{const e=()=>{i(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),t.createElement(lb.CSSTransitionGroup,{transitionName:"example",transitionAppearTimeout:500,transitionAppear:!0,transitionEnter:!0,transitionLeave:!0},t.createElement(_b,{isOpen:e,onRequestClose:()=>n(!1)}),t.createElement(wb,{windowWidth:r,theme:Qy},t.createElement(Sb,null,bb),t.createElement(Mb,{onClick:()=>n(!0)},t.createElement(gb,{color:Qy.colors.primary,size:30}))))},{relevantStops:Eb}=S_,Cb=Le.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  height: 40px;
  padding: 0px 40px;
  z-index: 19999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  font-size: 25px;
  font-weight: bold;
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};
`,Tb=Le.button`
  padding: 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${e=>e.theme.colors.primary};
  border-top: 0px solid ${e=>e.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,Rb=Le.div`
  display: flex;
  justify-content: space-between;
  background-color: ${e=>e.theme.colors.contrast};
  opacity: 0.4;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  height: 50px;
  z-index: 99999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.dark};
  font-size: 29px;
  font-weight: bold;
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};

  &:hover {
    opacity: 1;
  }
`,Bb=Le.div`
  position: absolute;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary};
  opacity: 0.2;
  z-index: -1;
  width: ${e=>100*e.progress}%;
`;const Pb=function(){const{floatingCamera:e,setFloatingCamera:n,scrollElement:r}=Fx(),[i,a]=(0,t.useState)(0);(0,t.useEffect)((()=>{r&&(r.onscroll=()=>{const{scrollTop:e,scrollHeight:t}=r;a(1.125*e/t)})}),[r]);const o=(0,t.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return null==r?void 0:r.scroll({top:e*r.scrollHeight,behavior:"smooth"})}),[r]);return e?t.createElement(Rb,{onClick:()=>n(!1)},t.createElement("div",null),t.createElement("div",null,"Go Back."),t.createElement("div",null)):t.createElement(Cb,null,t.createElement("div",null),t.createElement(Tb,{onClick:()=>{let e=Math.floor(i*Eb.length-.3);i*Eb.length===8&&(e=6),e>=0&&o(Eb[e].position)},className:"controls"},"Prev page"),t.createElement(Tb,{onClick:()=>{let e=Math.ceil(i*Eb.length+.69);e<=Eb.length&&o(Eb[e].position)},className:"controls"},"Next page"),t.createElement("div",null),t.createElement(Bb,{progress:i}))};const Lb=function(){return t.createElement(Te,{theme:Qy},t.createElement(Ab,null),t.createElement(Pb,null),t.createElement(sb,null))},Ib=e=>{e&&e instanceof Function&&n.e(27).then(n.bind(n,4027)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};r.createRoot(document.getElementById("root")).render(t.createElement(t.StrictMode,null,t.createElement(Lb,null))),Ib()})()})();