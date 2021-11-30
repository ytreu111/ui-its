Object.defineProperty(exports,'__esModule',{value:!0});var e=require('react/jsx-runtime'),o=require('react'),r=require('ui-its-icons'),t=require('antd'),l=require('styled-components'),n=require('d3');function a(e){return e&&'object'==typeof e&&'default'in e?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var o=Object.create(null);return e&&Object.keys(e).forEach((r=>{if('default'!==r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,t.get?t:{enumerable:!0,get:()=>e[r]})}})),o.default=e,Object.freeze(o)}var c=a(l),i=s(n);const d={fontSettings:{large:'16px',default:'14px',small:'13px',extraSmall:'12px'},decoration:{largeBorderRadiusOnlyTop:'16px 16px 0 0',defaultBorderRadiusOnlyTop:'8px 8px 0 0',smallBorderRadiusOnlyTop:'4px 4px 0 0',largeBorderRadiusOnlyBottom:'0 0 16px 16px',defaultBorderRadiusOnlyBottom:'0 0 8px 8px',smallBorderRadiusOnlyBottom:'0 0 4px 4px',largeBorderRadius:'16px',defaultBorderRadius:'8px',smallBorderRadius:'4px',defaultBackgroundFilter:'blur(18px)',smallBackgroundFilter:'blur(16px)',defaultBoxShadow:'0px 2px 8px rgba(107, 138, 228, 0.12)',greenBoxShadow:'0px 18px 40px rgba(39, 174, 96, 0.08)',orangeBoxShadow:'0px 18px 40px rgba(242, 153, 74, 0.08)',redBoxShadow:'0px 18px 40px rgba(235, 87, 87, 0.08)',primaryBoxShadow:'0px -18px 40px rgba(107, 138, 228, 0.02), 0px 18px 40px rgba(107, 138, 228, 0.08)'},colors:{gray_1000:'#1A2138',gray_800:'#6A7B9B',gray_600:'#C1CBD8',gray_200:'#F1F3F6',white:'#FFFFFF',red_600:'#CA3F4B',red_500:'#EB5757',red_300:'#F7BABA',red_opacity:'rgba(235, 87, 87, 0.08)',orange_600:'#D07636',orange_500:'#F2994A',orange_300:'#FBCE92',orange_opacity:'rgba(242, 153, 74, 0.08)',yellow_600:'#D0A637',yellow_500:'#F2C94C',yellow_300:'#FBE693',yellow_opacity:'rgba(242, 201, 76, 0.08)',verdant_600:'#18814F',verdant_500:'#219653',verdant_300:'#76DF8E',verdant_opacity:'rgba(33, 150, 83, 0.08)',green_600:'#1C955B',green_500:'#27AE60',green_300:'#7BE693',green_opacity:'rgba(39, 174, 96, 0.08)',eco_600:'#51B283',eco_500:'#6FCF97',eco_300:'#ADF0BC',eco_opacity:'rgba(111, 207, 151, 0.08)',blue_600:'#2263CB',blue_500:'#2F80ED',blue_300:'#81BFF9',blue_opacity:'rgba(47, 128, 237, 0.08)',cyan_600:'#207ABC',cyan_500:'#2D9CDB',cyan_300:'#B3E1FD',cyan_opacity:'rgba(45, 156, 219, 0.08)',azure_600:'#3EA2D0',azure_500:'#56CCF2',azure_300:'#99F1FB',azure_opacity:'rgba(86, 204, 242, 0.08)',purple_600:'#793BC0',purple_500:'#9B51E0',purple_300:'#D197F5',purple_opacity:'rgba(155, 81, 224, 0.08)',violet_600:'#954EBA',violet_500:'#BB6BD9',violet_300:'#E9A9F3',violet_opacity:'rgba(187, 107, 217, 0.08)',magenta_600:'#C03BA0',magenta_500:'#E051AF',magenta_300:'#F597C2',magenta_opacity:'rgba(224, 81, 175, 0.08)'}};var u={offset:{addMarginsProps:e=>{var o,r,t,l,n;return`\n    margin: ${null!==(o=e.m)&&void 0!==o?o:''};\n    margin-top: ${null!==(r=e.mt)&&void 0!==r?r:''};\n    margin-bottom: ${null!==(t=e.mb)&&void 0!==t?t:''};\n    margin-left: ${null!==(l=e.ml)&&void 0!==l?l:''};\n    margin-right: ${null!==(n=e.mr)&&void 0!==n?n:''};\n`},addPaddingsProps:e=>{var o,r,t,l,n;return`\n    padding: ${null!==(o=e.p)&&void 0!==o?o:''};\n    padding-top: ${null!==(r=e.pt)&&void 0!==r?r:''};\n    padding-bottom: ${null!==(t=e.pb)&&void 0!==t?t:''};\n    padding-left: ${null!==(l=e.pl)&&void 0!==l?l:''};\n    padding-right: ${null!==(n=e.pr)&&void 0!==n?n:''};\n`}},color:{opacityColor:(e,o)=>`\n    ${i.rgb(e).copy({opacity:o})}\n`},text:{defaultTextStyle:(e,o='default')=>`\n  font-weight: 600;\n  font-size: ${e.theme.fontSettings[o]};\n  line-height: 140%;\n`,defaultTitleStyle:(e,o)=>{switch(o){case 1:return'\n        font-weight: bold;\n        font-size: 48px;\n        line-height: 59px;\n      ';case 2:return'\n        font-weight: bold;\n        font-size: 36px;\n        line-height: 45px;\n      ';case 3:return'\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 30px;\n      ';case 4:return'\n        font-weight: bold;\n        font-size: 18px;\n        line-height: 22px;\n      ';case 5:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.large};\n        line-height: 140%;\n      `;case 6:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.default};\n        line-height: 140%;\n      `;case 7:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.small};\n        line-height: 140%;\n      `}}}};const{defaultTitleStyle:p}=u.text,h=c.default.div`
  display: flex;
  flex-direction: column;
  
  & * {
    box-sizing: border-box;
  }
`,g=c.default.span`
  margin-top: 4px;
  color: ${e=>e.theme.colors.gray_800};
  ${e=>p(e,7)}
`,m=c.default.span`
  color: ${e=>e.theme.colors.gray_800};
  ${e=>p(e,6)}
  position: absolute;
  left: 16px;
  top: 17px;
  z-index: 1;
  text-align: left;
  user-select: none;
  pointer-events: none;
  transition: all 0.2s ease;
  width: calc(100% - 32px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,b=c.default.div`
  position: absolute;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  color: ${e=>e.theme.colors.blue_500};
  cursor: pointer;
  
  & svg{
    width: 20px;
    height: 20px;
  }
`,_={StyledInputContainer:h,StyledInputLabel:g,StyledInputWrap:c.default.div`
  overflow: hidden;
  position: relative;
  height: 56px;
  width: 100%;
  cursor: text;
  max-width: ${e=>e.width?'number'==typeof e.width?`${e.width}px`:e.width:'306px'};
  border-radius: 8px;
  background: ${e=>e.theme.colors.gray_200};
  border: 2px solid transparent;
  display: flex;

  &:hover {
    border: 2px solid ${e=>e.theme.colors.blue_500};
  }

  & .ant-input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: #35446F;
    padding: 26px 16px 6px;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    box-shadow: none;
    outline: none;

    &:hover {
      border: none !important;
    }

    &::placeholder {
      color: transparent;
    }
  }
  
  & .ant-input-password{
    width: 100%;
    
    & .ant-input-suffix{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 18px;
      color: ${e=>e.theme.colors.blue_500};
      
      & svg{
        width: 20px;
        height: 20px;
      }
    }
  }

  &.small {
    height: 40px;

    & .ant-input {
      padding: 11px 14px;

      &::placeholder {
        color: ${e=>e.theme.colors.gray_800};
      }
    }
  }

  &.focus {
    border-color: ${e=>e.theme.colors.blue_500};

    & .ant-input::placeholder {
      color: ${e=>e.theme.colors.gray_600};
    }
  }

  &.placeholder_top {
    & ${m} {
      font-size: ${e=>e.theme.fontSettings.small}
      color: ${e=>e.theme.colors.blue_500};
      transform: translateY(-10px);
    }
  }

  &.icon {

    & .ant-input-affix-wrapper {
      width: 100%;
    }

    & ${m} {
      left: 52px;
      width: calc(100% - 68px);
    }

    & .ant-input-prefix {
      left: 16px;
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      color: ${e=>e.theme.colors.blue_500};
    }

    & .ant-input {
      padding-left: 52px;
    }
  }
  
  &.optional {

    & .ant-input{
      padding-right: 46px;
    }
  }

  &.error {
    border-color: ${e=>e.theme.colors.red_500};

    & .ant-input-prefix,
    & ${m},
    & ${b},
    & + ${g} {
      color: ${e=>e.theme.colors.red_500};
    }
  }

  &.clear {
    & .ant-input {
      padding-right: 8px;
    }
  }

  &.disabled {
    background: ${e=>e.theme.colors.gray_200};
    border-color: transparent;

    & .ant-input-prefix,
    ${m} {
      color: ${e=>e.theme.colors.gray_600};
    }
  }

  &.auto {
    width: 100%;
    max-width: 100%;
  }
`,OptionalInput:b,StyledInputEditablePlaceholder:m};var x;(e=>{e.password='password'})(x||(x={}));const{StyledInputContainer:$,StyledInputWrap:f,StyledInputEditablePlaceholder:y,StyledInputLabel:v,OptionalInput:w}=_;var k,B,j;(e=>{e.primary='primary',e.danger='danger',e.orange='orange',e.yellow='yellow',e.green='green',e.purple='purple',e.magenta='magenta',e.blue='blue',e.transparent='transparent'})(k||(k={})),(e=>{e.large='large',e.default='default',e.small='small'})(B||(B={})),(e=>{e.default='default',e.translucent='translucent',e.transparent='transparent'})(j||(j={}));const{addPaddingsProps:O,addMarginsProps:F}=u.offset,{defaultTitleStyle:C}=u.text,{opacityColor:S}=u.color,z=l.keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,E=l.keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`,I=c.default.div`
  position: absolute;
`,P=c.default.div``,A=c.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  height: 40px;
  overflow: hidden;

  ${e=>C(e,7)}
  ${e=>e.fontSize?'font-size:'+e.fontSize+';':''}

  padding: 11px;
  ${e=>F(e)};

  width: ${e=>e.width?e.width:'auto'};
  border-radius: ${e=>e.rounded?'50%':e.theme.decoration.defaultBorderRadius};

  &.disabled {
    pointer-events: none;
  }

  &.translucent {
    backdrop-filter: ${e=>e.theme.decoration.smallBackgroundFilter};
  }

  &.stroke {
    background: white !important;
    border: 2px solid transparent;
  }

  &.transparent {
    background: transparent !important;
  }

  &.small {
    padding: 5px;
    height: 28px;
  }

  &.large {
    height: 56px;
    padding: 11px;
    ${e=>C(e,5)}
  }

  ${e=>O(e)}
  & svg {
    ${e=>(e=>{const o=e.iconSize;let r='20px',t='20px';return o&&('object'==typeof o?(r=o.width,t=o.height):r=t=`${o}px`),`\n    width: ${r};\n    height: ${t};\n  `})(e)};
    color: ${e=>e.iconColor};
    margin-right: ${e=>void 0!==e.iconMargin?`${e.iconMargin}px`:'8px'};
    margin-bottom: -1px;
    margin-top: -1px;
  }

  & * {
    box-sizing: border-box;
  }

  &.loading {
    & svg {
      color: transparent;
    }

    & ${P} {
      color: transparent;
    }

    & ${I} {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
        animation: ${z} 1.3s linear infinite;
        color: inherit;
        margin-right: 0;
      }
    }

  }

  & .wave {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${E} .6s linear;
    background-color: ${e=>S(e.theme.colors.white,.5)};
  }
`,D={StyledButton:A,PrimaryButton:c.default(A)`
  background: ${e=>e.theme.colors.blue_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.blue_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.blue_300};
  }

  &.translucent {
    background: ${e=>S(e.theme.colors.blue_500,.08)};
    color: ${e=>e.theme.colors.blue_500};

    &:hover {
      background: ${e=>S(e.theme.colors.blue_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.blue_300};
    }
  }

  &.stroke {
    border-color: ${e=>e.theme.colors.blue_500};
    color: ${e=>e.theme.colors.blue_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.blue_300};
      color: ${e=>e.theme.colors.blue_300};
    }
  }

  &.transparent {
    color: ${e=>e.theme.colors.blue_500};
  }
`,DangerButton:c.default(A)`
  background: ${e=>e.theme.colors.red_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.red_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.red_300};
  }

  &.translucent {
    background: ${e=>S(e.theme.colors.red_500,.08)};
    color: ${e=>e.theme.colors.red_500};

    &:hover {
      background: ${e=>S(e.theme.colors.red_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.red_300};
    }
  }

  &.stroke {
    border-color: ${e=>e.theme.colors.red_500};
    color: ${e=>e.theme.colors.red_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.red_300};
      color: ${e=>e.theme.colors.red_300};
    }
  }

  &.transparent {
    color: ${e=>e.theme.colors.red_500};
  }
`,OrangeButton:c.default(A)`
  background: ${e=>e.theme.colors.orange_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.orange_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.orange_300};
  }

  &.translucent {
    background: ${e=>S(e.theme.colors.orange_500,.08)};
    color: ${e=>e.theme.colors.orange_500};

    &:hover {
      background: ${e=>S(e.theme.colors.orange_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.orange_300};
    }
  }

  &.stroke {
    border-color: ${e=>e.theme.colors.orange_500};
    color: ${e=>e.theme.colors.orange_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.orange_300};
      color: ${e=>e.theme.colors.orange_300};
    }
  }

  &.transparent {
    color: ${e=>e.theme.colors.orange_500};
  }
`,YellowButton:c.default(A)`
  background: ${e=>e.theme.colors.yellow_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.yellow_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.yellow_300};
  }

  &.translucent {
    background: ${e=>S(e.theme.colors.yellow_500,.08)};
    color: ${e=>e.theme.colors.yellow_500};

    &:hover {
      background: ${e=>S(e.theme.colors.yellow_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.yellow_300};
    }
  }

  &.stroke {
    border-color: ${e=>e.theme.colors.yellow_500};
    color: ${e=>e.theme.colors.yellow_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.yellow_300};
      color: ${e=>e.theme.colors.yellow_300};
    }
  }

  &.transparent {
    color: ${e=>e.theme.colors.yellow_500};
  }
`,GreenButton:c.default(A)`
  background: ${e=>e.theme.colors.green_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.green_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.green_300};
  }

  &.translucent {
    background: ${e=>S(e.theme.colors.green_500,.08)};
    color: ${e=>e.theme.colors.green_500};

    &:hover {
      background: ${e=>S(e.theme.colors.green_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.green_300};
    }
  }

  &.stroke {
    border-color: ${e=>e.theme.colors.green_500};
    color: ${e=>e.theme.colors.green_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.green_300};
      color: ${e=>e.theme.colors.green_300};
    }
  }

  &.transparent {
    color: ${e=>e.theme.colors.green_500};
  }
`,PurpleButton:c.default(A)`
  background: ${e=>e.theme.colors.purple_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.purple_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.purple_300};
  }

  &.translucent {
    background: ${e=>S(e.theme.colors.purple_500,.08)};
    color: ${e=>e.theme.colors.purple_500};

    &:hover {
      background: ${e=>S(e.theme.colors.purple_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.purple_300};
    }
  }

  &.stroke {
    border-color: ${e=>e.theme.colors.purple_500};
    color: ${e=>e.theme.colors.purple_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.purple_300};
      color: ${e=>e.theme.colors.purple_300};
    }
  }

  &.transparent {
    color: ${e=>e.theme.colors.purple_500};
  }
`,MagentaButton:c.default(A)`
  background: ${e=>e.theme.colors.magenta_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.magenta_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.magenta_300};
  }

  &.translucent {
    background: ${e=>S(e.theme.colors.magenta_500,.08)};
    color: ${e=>e.theme.colors.magenta_500};

    &:hover {
      background: ${e=>S(e.theme.colors.magenta_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.magenta_300};
    }
  }

  &.stroke {
    border-color: ${e=>e.theme.colors.magenta_500};
    color: ${e=>e.theme.colors.magenta_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.magenta_300};
      color: ${e=>e.theme.colors.magenta_300};
    }
  }

  &.transparent {
    color: ${e=>e.theme.colors.magenta_500};
  }
`,BlueButton:c.default(A)`
  background: ${e=>e.theme.colors.cyan_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.cyan_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.cyan_300};
  }

  &.translucent {
    background: ${e=>S(e.theme.colors.cyan_500,.08)};
    color: ${e=>e.theme.colors.cyan_500};

    &:hover {
      background: ${e=>S(e.theme.colors.cyan_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.cyan_300};
    }
  }

  &.stroke {
    border-color: ${e=>e.theme.colors.cyan_500};
    color: ${e=>e.theme.colors.cyan_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.cyan_300};
      color: ${e=>e.theme.colors.cyan_300};
    }
  }

  &.transparent {
    color: ${e=>e.theme.colors.cyan_500};
  }
`,LoadingIconWrap:I,TextWrap:P},{StyledButton:M,LoadingIconWrap:T,TextWrap:R,PrimaryButton:W,DangerButton:q,OrangeButton:L,YellowButton:Y,GreenButton:G,PurpleButton:H,MagentaButton:N,BlueButton:X}=D,J=(o,r)=>{switch(r){case k.primary:return e.jsx(W,Object.assign({},o),void 0);case k.danger:return e.jsx(q,Object.assign({},o),void 0);case k.orange:return e.jsx(L,Object.assign({},o),void 0);case k.yellow:return e.jsx(Y,Object.assign({},o),void 0);case k.green:return e.jsx(G,Object.assign({},o),void 0);case k.purple:return e.jsx(H,Object.assign({},o),void 0);case k.magenta:return e.jsx(N,Object.assign({},o),void 0);case k.blue:return e.jsx(X,Object.assign({},o),void 0);default:return e.jsx(M,Object.assign({},o),void 0)}};exports.Button=t=>{var{disabled:n,style:a=j.default,type:s,icon:c,size:i=B.default,loading:u,onClick:p,clickEffect:h=!0,children:g}=t,m=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&'function'==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)o.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]])}return r}(t,['disabled','style','type','icon','size','loading','onClick','clickEffect','children']);const b=o.useCallback((e=>{const o=e.currentTarget,r=document.createElement('span'),t=Math.max(null==o?void 0:o.clientWidth,null==o?void 0:o.clientHeight),l=t/2,{x:n,y:a}=o.getBoundingClientRect();r.style.width=r.style.height=`${t}px`,r.style.left=e.clientX-n-l+'px',r.style.top=e.clientY-a-l+'px',r.classList.add('wave');const s=o.querySelector('.wave');s&&s.remove(),o.appendChild(r)}),[]),_=o.useCallback((e=>{u||(h&&b(e),p&&p(e))}),[h,b,p,u]),x=o.useMemo((()=>{const e=[];return n&&e.push('disabled'),a&&s&&e.push(a),i&&e.push(i),u&&e.push('loading'),e.join(' ')}),[n,u,i,a,s]),$=o.useMemo((()=>e.jsxs(e.Fragment,{children:[c,e.jsx(R,{children:g},void 0),u&&e.jsx(T,{children:e.jsx(r.LoadingIcon,{},void 0)},void 0)]},void 0)),[c,g,u]),f=Object.assign(Object.assign({},m),{className:x,children:$,onClick:_});return e.jsx(l.ThemeProvider,Object.assign({theme:d},{children:J(f,s)}),void 0)},exports.Input=({value:n='',disabled:a,small:s,placeholder:c,editableHelp:i='Введите данные',label:u,icon:p,error:h,autoWidth:g,onChange:m,onBlur:b,onFocus:_,name:k,width:B,optional:j,optionalIcon:O,type:F})=>{const[C,S]=o.useState(!1),[z,E]=o.useState(n);o.useEffect((()=>E(null!=n?n:void 0)),[n]);const I=o.useMemo((()=>C?i:c),[i,c,C]),P=o.useMemo((()=>{const e=[];return s&&e.push('small'),g&&e.push('auto'),p&&e.push('icon'),C&&e.push('focus'),(C||z)&&e.push('placeholder_top'),h&&e.push('error'),a&&e.push('disabled'),j&&e.push('optional'),e.join(' ')}),[g,a,h,p,z,j,s,C]),A=o.useMemo((()=>{if(j){const o=O||e.jsx(r.StarIcon,{},void 0);return e.jsx(w,Object.assign({onClick:j},{children:o}),void 0)}return null}),[j,O]),D=o.useCallback((()=>{S(!0),_&&_()}),[_]),M=o.useCallback((()=>{S(!1),b&&b()}),[b]),T=o.useCallback((e=>{E(e.currentTarget.value),m&&m(e.currentTarget.value)}),[m]),R=o.useMemo((()=>F===x.password?e.jsx(t.Input.Password,{onFocus:D,onBlur:M,disabled:a,value:z,placeholder:I,onChange:T,name:k,prefix:p,iconRender:o=>o?e.jsx(r.EyeInvisibleIcon,{},void 0):e.jsx(r.EyeIcon,{},void 0)},void 0):e.jsxs(e.Fragment,{children:[e.jsx(t.Input,{onFocus:D,onBlur:M,disabled:a,prefix:p,value:z,placeholder:I,onChange:T,name:k},void 0),A]},void 0)),[a,p,z,k,M,T,D,A,I,F]);return e.jsx(l.ThemeProvider,Object.assign({theme:d},{children:e.jsxs($,{children:[e.jsxs(f,Object.assign({className:P,width:B},{children:[!s&&e.jsx(y,{children:c},void 0),R]}),void 0),u&&e.jsx(v,{children:u},void 0)]},void 0)}),void 0)};
//# sourceMappingURL=index.js.map
