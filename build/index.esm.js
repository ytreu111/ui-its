import{jsxs as e,Fragment as o,jsx as t}from'react/jsx-runtime';import r,{useCallback as l,useMemo as n,useState as a,useEffect as i,createElement as s,useRef as c}from'react';import{LoadingIcon as d,StarIcon as p,DragIcon as h,ActiveCheckBoxIcon as u,CheckBoxIcon as g,BaselineCheckIcon as m,ChevronDownIcon as b,CloseIcon as x}from'ui-its-icons';import $,{keyframes as y,ThemeProvider as f}from'styled-components';import*as _ from'd3';import v from'underscore';import{Input as w,Select as k}from'antd';import B from'styled-components/macro';
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
***************************************************************************** */var S,C,z;(e=>{e.primary='primary',e.danger='danger',e.orange='orange',e.yellow='yellow',e.green='green',e.purple='purple',e.magenta='magenta',e.blue='blue',e.white='white',e.transparent='transparent'})(S||(S={})),(e=>{e.large='large',e.default='default',e.small='small'})(C||(C={})),(e=>{e.default='default',e.translucent='translucent',e.transparent='transparent'})(z||(z={}));const O={fontSettings:{large:'16px',default:'14px',small:'13px',extraSmall:'12px'},decoration:{largeBorderRadiusOnlyTop:'16px 16px 0 0',defaultBorderRadiusOnlyTop:'8px 8px 0 0',smallBorderRadiusOnlyTop:'4px 4px 0 0',largeBorderRadiusOnlyBottom:'0 0 16px 16px',defaultBorderRadiusOnlyBottom:'0 0 8px 8px',smallBorderRadiusOnlyBottom:'0 0 4px 4px',largeBorderRadius:'16px',defaultBorderRadius:'8px',smallBorderRadius:'4px',defaultBackgroundFilter:'blur(18px)',smallBackgroundFilter:'blur(16px)',defaultBoxShadow:'0px 2px 8px rgba(107, 138, 228, 0.12)',greenBoxShadow:'0px 18px 40px rgba(39, 174, 96, 0.08)',orangeBoxShadow:'0px 18px 40px rgba(242, 153, 74, 0.08)',redBoxShadow:'0px 18px 40px rgba(235, 87, 87, 0.08)',primaryBoxShadow:'0px -18px 40px rgba(107, 138, 228, 0.02), 0px 18px 40px rgba(107, 138, 228, 0.08)'},colors:{gray_1000:'#1A2138',gray_800:'#6A7B9B',gray_600:'#C1CBD8',gray_200:'#F1F3F6',white:'#FFFFFF',red_600:'#CA3F4B',red_500:'#EB5757',red_300:'#F7BABA',red_opacity:'rgba(235, 87, 87, 0.08)',orange_600:'#D07636',orange_500:'#F2994A',orange_300:'#FBCE92',orange_opacity:'rgba(242, 153, 74, 0.08)',yellow_600:'#D0A637',yellow_500:'#F2C94C',yellow_300:'#FBE693',yellow_opacity:'rgba(242, 201, 76, 0.08)',verdant_600:'#18814F',verdant_500:'#219653',verdant_300:'#76DF8E',verdant_opacity:'rgba(33, 150, 83, 0.08)',green_600:'#1C955B',green_500:'#27AE60',green_300:'#7BE693',green_opacity:'rgba(39, 174, 96, 0.08)',eco_600:'#51B283',eco_500:'#6FCF97',eco_300:'#ADF0BC',eco_opacity:'rgba(111, 207, 151, 0.08)',blue_600:'#2263CB',blue_500:'#2F80ED',blue_300:'#81BFF9',blue_opacity:'rgba(47, 128, 237, 0.08)',cyan_600:'#207ABC',cyan_500:'#2D9CDB',cyan_300:'#B3E1FD',cyan_opacity:'rgba(45, 156, 219, 0.08)',azure_600:'#3EA2D0',azure_500:'#56CCF2',azure_300:'#99F1FB',azure_opacity:'rgba(86, 204, 242, 0.08)',purple_600:'#793BC0',purple_500:'#9B51E0',purple_300:'#D197F5',purple_opacity:'rgba(155, 81, 224, 0.08)',violet_600:'#954EBA',violet_500:'#BB6BD9',violet_300:'#E9A9F3',violet_opacity:'rgba(187, 107, 217, 0.08)',magenta_600:'#C03BA0',magenta_500:'#E051AF',magenta_300:'#F597C2',magenta_opacity:'rgba(224, 81, 175, 0.08)'}};var j={offset:{addMarginsProps:e=>{var o,t,r,l,n;return`\n    margin: ${null!==(o=e.m)&&void 0!==o?o:''};\n    margin-top: ${null!==(t=e.mt)&&void 0!==t?t:''};\n    margin-bottom: ${null!==(r=e.mb)&&void 0!==r?r:''};\n    margin-left: ${null!==(l=e.ml)&&void 0!==l?l:''};\n    margin-right: ${null!==(n=e.mr)&&void 0!==n?n:''};\n`},addPaddingsProps:e=>{var o,t,r,l,n;return`\n    padding: ${null!==(o=e.p)&&void 0!==o?o:''};\n    padding-top: ${null!==(t=e.pt)&&void 0!==t?t:''};\n    padding-bottom: ${null!==(r=e.pb)&&void 0!==r?r:''};\n    padding-left: ${null!==(l=e.pl)&&void 0!==l?l:''};\n    padding-right: ${null!==(n=e.pr)&&void 0!==n?n:''};\n`}},color:{opacityColor:(e,o)=>`\n    ${_.rgb(e).copy({opacity:o})}\n`},text:{defaultTextStyle:(e,o='default')=>`\n  font-weight: 600;\n  font-size: ${e.theme.fontSettings[o]};\n  line-height: 140%;\n`,defaultTitleStyle:(e,o)=>{switch(o){case 1:return'\n        font-weight: bold;\n        font-size: 48px;\n        line-height: 59px;\n      ';case 2:return'\n        font-weight: bold;\n        font-size: 36px;\n        line-height: 45px;\n      ';case 3:return'\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 30px;\n      ';case 4:return'\n        font-weight: bold;\n        font-size: 18px;\n        line-height: 22px;\n      ';case 5:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.large};\n        line-height: 140%;\n      `;case 6:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.default};\n        line-height: 140%;\n      `;case 7:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.small};\n        line-height: 140%;\n      `}}}};const{addPaddingsProps:F,addMarginsProps:A}=j.offset,{defaultTitleStyle:I}=j.text,{opacityColor:T}=j.color,P=y`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,E=y`
  to {
    transform: scale(4);
    opacity: 0;
  }
`,D=$.div`
  position: absolute;
`,R=$.div``,W=$.button`
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

  ${e=>I(e,7)}
  ${e=>e.fontSize?'font-size:'+e.fontSize+';':''}

  padding: 11px;
  ${e=>A(e)};

  width: ${e=>e.width?e.width:'auto'};
  border-radius: ${e=>e.theme.decoration.defaultBorderRadius};

  &.disabled {
    pointer-events: none;
  }

  &.style--translucent {
    backdrop-filter: ${e=>e.theme.decoration.smallBackgroundFilter};
  }

  &.style--stroke {
    background: white !important;
    border: 2px solid transparent;
  }

  &.style--transparent {
    background: transparent !important;
  }

  &.size--small {
    padding: 5px;
    height: 28px;
  }

  &.size--large {
    height: 56px;
    padding: 11px;
    ${e=>I(e,5)}
  }

  ${e=>F(e)}
  & svg {
    ${e=>(e=>{const o=e.iconSize;let t='20px',r='20px';return o&&('object'==typeof o?(t=o.width,r=o.height):t=r=`${o}px`),`\n    width: ${t};\n    height: ${r};\n  `})(e)};
    color: ${e=>e.iconColor};
    margin-right: ${e=>void 0!==e.iconMargin?`${e.iconMargin}px`:'8px'};
    margin-bottom: -1px;
    margin-top: -1px;
  }

  &.empty {
    & svg {
      margin-right: 0;
    }
  }

  &.rounded {
    border-radius: ${e=>e.theme.decoration.largeBorderRadius};
  }

  & * {
    box-sizing: border-box;
  }

  &.loading {
    & svg {
      color: transparent;
    }

    & ${R} {
      color: transparent;
    }

    & ${D} {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
        animation: ${P} 1.3s linear infinite;
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
    background-color: ${e=>T(e.theme.colors.white,.5)};
  }
`,L={StyledButton:W,PrimaryButton:$(W)`
  background: ${e=>e.theme.colors.blue_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.blue_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.blue_300};
  }

  &.style--translucent {
    background: ${e=>T(e.theme.colors.blue_500,.08)};
    color: ${e=>e.theme.colors.blue_500};

    &:hover {
      background: ${e=>T(e.theme.colors.blue_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.blue_300};
    }
  }

  &.style--stroke {
    border-color: ${e=>e.theme.colors.blue_500};
    color: ${e=>e.theme.colors.blue_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.blue_300};
      color: ${e=>e.theme.colors.blue_300};
    }
  }

  &.style--transparent {
    color: ${e=>e.theme.colors.blue_500};
  }
`,DangerButton:$(W)`
  background: ${e=>e.theme.colors.red_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.red_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.red_300};
  }

  &.style--translucent {
    background: ${e=>T(e.theme.colors.red_500,.08)};
    color: ${e=>e.theme.colors.red_500};

    &:hover {
      background: ${e=>T(e.theme.colors.red_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.red_300};
    }
  }

  &.style--stroke {
    border-color: ${e=>e.theme.colors.red_500};
    color: ${e=>e.theme.colors.red_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.red_300};
      color: ${e=>e.theme.colors.red_300};
    }
  }

  &.style--transparent {
    color: ${e=>e.theme.colors.red_500};
  }
`,OrangeButton:$(W)`
  background: ${e=>e.theme.colors.orange_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.orange_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.orange_300};
  }

  &.style--translucent {
    background: ${e=>T(e.theme.colors.orange_500,.08)};
    color: ${e=>e.theme.colors.orange_500};

    &:hover {
      background: ${e=>T(e.theme.colors.orange_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.orange_300};
    }
  }

  &.style--stroke {
    border-color: ${e=>e.theme.colors.orange_500};
    color: ${e=>e.theme.colors.orange_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.orange_300};
      color: ${e=>e.theme.colors.orange_300};
    }
  }

  &.style--transparent {
    color: ${e=>e.theme.colors.orange_500};
  }
`,YellowButton:$(W)`
  background: ${e=>e.theme.colors.yellow_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.yellow_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.yellow_300};
  }

  &.style--translucent {
    background: ${e=>T(e.theme.colors.yellow_500,.08)};
    color: ${e=>e.theme.colors.yellow_500};

    &:hover {
      background: ${e=>T(e.theme.colors.yellow_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.yellow_300};
    }
  }

  &.style--stroke {
    border-color: ${e=>e.theme.colors.yellow_500};
    color: ${e=>e.theme.colors.yellow_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.yellow_300};
      color: ${e=>e.theme.colors.yellow_300};
    }
  }

  &.style--transparent {
    color: ${e=>e.theme.colors.yellow_500};
  }
`,GreenButton:$(W)`
  background: ${e=>e.theme.colors.green_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.green_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.green_300};
  }

  &.style--translucent {
    background: ${e=>T(e.theme.colors.green_500,.08)};
    color: ${e=>e.theme.colors.green_500};

    &:hover {
      background: ${e=>T(e.theme.colors.green_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.green_300};
    }
  }

  &.style--stroke {
    border-color: ${e=>e.theme.colors.green_500};
    color: ${e=>e.theme.colors.green_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.green_300};
      color: ${e=>e.theme.colors.green_300};
    }
  }

  &.style--transparent {
    color: ${e=>e.theme.colors.green_500};
  }
`,PurpleButton:$(W)`
  background: ${e=>e.theme.colors.purple_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.purple_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.purple_300};
  }

  &.style--translucent {
    background: ${e=>T(e.theme.colors.purple_500,.08)};
    color: ${e=>e.theme.colors.purple_500};

    &:hover {
      background: ${e=>T(e.theme.colors.purple_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.purple_300};
    }
  }

  &.style--stroke {
    border-color: ${e=>e.theme.colors.purple_500};
    color: ${e=>e.theme.colors.purple_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.purple_300};
      color: ${e=>e.theme.colors.purple_300};
    }
  }

  &.style--transparent {
    color: ${e=>e.theme.colors.purple_500};
  }
`,MagentaButton:$(W)`
  background: ${e=>e.theme.colors.magenta_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.magenta_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.magenta_300};
  }

  &.style--translucent {
    background: ${e=>T(e.theme.colors.magenta_500,.08)};
    color: ${e=>e.theme.colors.magenta_500};

    &:hover {
      background: ${e=>T(e.theme.colors.magenta_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.magenta_300};
    }
  }

  &.style--stroke {
    border-color: ${e=>e.theme.colors.magenta_500};
    color: ${e=>e.theme.colors.magenta_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.magenta_300};
      color: ${e=>e.theme.colors.magenta_300};
    }
  }

  &.style--transparent {
    color: ${e=>e.theme.colors.magenta_500};
  }
`,BlueButton:$(W)`
  background: ${e=>e.theme.colors.cyan_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.cyan_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.cyan_300};
  }

  &.style--translucent {
    background: ${e=>T(e.theme.colors.cyan_500,.08)};
    color: ${e=>e.theme.colors.cyan_500};

    &:hover {
      background: ${e=>T(e.theme.colors.cyan_500,.16)};
    }

    &.disabled {
      color: ${e=>e.theme.colors.cyan_300};
    }
  }

  &.style--stroke {
    border-color: ${e=>e.theme.colors.cyan_500};
    color: ${e=>e.theme.colors.cyan_500};

    &.disabled {
      border-color: ${e=>e.theme.colors.cyan_300};
      color: ${e=>e.theme.colors.cyan_300};
    }
  }

  &.style--transparent {
    color: ${e=>e.theme.colors.cyan_500};
  }
`,WhiteButton:$(W)`
  box-shadow: 0px 2px 8px rgba(47, 128, 237, 0.12);
  background-color: ${e=>e.theme.colors.white};
  color: ${e=>e.theme.colors.gray_1000};
  
  &.disabled {
    color: ${e=>e.theme.colors.gray_600};
  }
`,LoadingIconWrap:D,TextWrap:R},{StyledButton:Y,LoadingIconWrap:N,TextWrap:G,PrimaryButton:M,DangerButton:H,OrangeButton:q,YellowButton:V,GreenButton:J,PurpleButton:X,MagentaButton:K,BlueButton:Q,WhiteButton:U}=L,Z=(e,o)=>{switch(o){case S.primary:return t(M,Object.assign({},e),void 0);case S.danger:return t(H,Object.assign({},e),void 0);case S.orange:return t(q,Object.assign({},e),void 0);case S.yellow:return t(V,Object.assign({},e),void 0);case S.green:return t(J,Object.assign({},e),void 0);case S.purple:return t(X,Object.assign({},e),void 0);case S.magenta:return t(K,Object.assign({},e),void 0);case S.blue:return t(Q,Object.assign({},e),void 0);case S.white:return t(U,Object.assign({},e),void 0);default:return t(Y,Object.assign({},e),void 0)}},ee=r=>{var{disabled:a,buttonStyle:i=z.default,type:s,icon:c,size:p=C.default,loading:h,onClick:u,clickEffect:g=!0,children:m,rounded:b,value:x,className:$}=r,y=function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&'function'==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)o.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]])}return t}(r,['disabled','buttonStyle','type','icon','size','loading','onClick','clickEffect','children','rounded','value','className']);const _=l((e=>{const o=e.currentTarget,t=document.createElement('span'),r=Math.max(null==o?void 0:o.clientWidth,null==o?void 0:o.clientHeight),l=r/2,{x:n,y:a}=o.getBoundingClientRect();t.style.width=t.style.height=`${r}px`,t.style.left=e.clientX-n-l+'px',t.style.top=e.clientY-a-l+'px',t.classList.add('wave');const i=o.querySelector('.wave');i&&i.remove(),o.appendChild(t)}),[]),v=l((e=>{h||(g&&_(e),u&&u(e,x))}),[h,g,_,u,x]),w=n((()=>{const e=$?$.split(' '):[];return a&&e.push('disabled'),i&&s&&e.push(`style--${i}`),p&&e.push(`size--${p}`),b&&e.push('rounded'),h&&e.push('loading'),m||e.push('empty'),e.join(' ')}),[$,a,i,s,p,b,h,m]),k=n((()=>e(o,{children:[c,t(G,{children:m},void 0),h&&t(N,{children:t(d,{},void 0)},void 0)]},void 0)),[c,m,h]),B=Object.assign(Object.assign({},y),{className:w,children:k,onClick:v});return t(f,Object.assign({theme:O},{children:Z(B,s)}),void 0)},oe={GroupWrap:$.div`
  display: flex;

  & .group__button {
    flex-grow: 1;

    &:not(:last-of-type) {
      margin-right: ${e=>`${e.gap}px`};
    }
  }

  & .group__button--active {
    flex-grow: 2;
  }
`},{GroupWrap:te}=oe,re=(e,o,r)=>{var l,n,a,i,s,c;const d=e.props,p=d.value&&d.value===r,h=null!==(l=d.type)&&void 0!==l?l:S.primary,u=d.icon?d.icon:p?void 0:o.defaultIcon,g=null!==(a=null!==(n=e.key)&&void 0!==n?n:d.value)&&void 0!==a?a:v.uniqueId(),m=null!==(c=null===(s=null===(i=e.props)||void 0===i?void 0:i.className)||void 0===s?void 0:s.split(' '))&&void 0!==c?c:[];let b,x;m.push('group__button'),p?(x=o.selectButton,b=d.children,m.push('group__button--active')):(x=o.deselectButton,b=null);const $=Object.assign(Object.assign({},e.props),{buttonStyle:x,type:h,children:b,icon:u,onClick:o.onChange,className:m.join(' ')});return t(ee,Object.assign({},$),g)},le=(e,o,t,l)=>{let n=l?[...l]:[];if(e&&'object'==typeof e)if(Array.isArray(e)){for(const l of e)if(l.type===r.Fragment)n=le(l.props.children,o,t,n);else if(l.type===ee){const e=re(l,o,t);n.push(e)}}else if('type'in e)if(e.type===r.Fragment)n=le(e.props.children,o,t,n);else if(e.type===ee){const r=re(e,o,t);n.push(r)}return n},ne=ee;ne.Group=({value:e,buttonGap:o=8,selectButton:r=z.default,deselectButton:s=z.translucent,defaultIcon:c=t(p,{},void 0),onChange:d,defaultValue:h,children:u})=>{const[g,m]=a();i((()=>{h&&m(h)}),[h]);const b=l(((e,o)=>{d&&d(e,o),m(o)}),[d]),x=n((()=>{if(u){return le(u,{selectButton:r,deselectButton:s,defaultIcon:c,onChange:b},null!=e?e:g)}return null}),[u,c,s,g,b,r,e]);return t(te,Object.assign({gap:o},{children:x}),void 0)};const{defaultTitleStyle:ae}=j.text,ie=$.span`
  ${e=>ae(e,7)};
  color: ${e=>e.theme.colors.gray_1000};
  margin-left: 16px;
`,se=$.div`
  width: ${e=>e.checkboxSize?`${e.checkboxSize}px`:'20px'};
  height: ${e=>e.checkboxSize?`${e.checkboxSize}px`:'20px'};
  color: ${e=>e.theme.colors.blue_500};

  & svg {
    width: ${e=>e.checkboxSize?`${e.checkboxSize}px`:'20px'};
    height: ${e=>e.checkboxSize?`${e.checkboxSize}px`:'20px'};
  }
`,ce=$(h)`
  width: 20px;
  height: 20px;
  margin-left: 4px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,de=$.input`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
`,pe={CheckboxWrap:$.label`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: max-content;

  & * {
    box-sizing: border-box;
  }

  &.disabled {
    cursor: default;
    
    & ${se},
    & ${ie} {
      color: ${e=>e.theme.colors.gray_600};
    }
  }
`,CheckboxText:ie,CheckboxIcon:se,CheckboxInput:de,CheckboxDragIcon:ce},{CheckboxWrap:he,CheckboxText:ue,CheckboxIcon:ge,CheckboxInput:me,CheckboxDragIcon:be}=pe,xe=({checked:o=!1,value:r,checkboxSize:s,moved:c,disabled:d,name:p,iconRender:h,onChange:m,children:b})=>{const[x,$]=a(!1);i((()=>$(o)),[o]);const y=n((()=>h?h(x):t(x?u:g,{},void 0)),[h,x]),_=n((()=>{const e=[];return d&&e.push('disabled'),e.join(' ')}),[d]),v=l((e=>{const o=e.currentTarget.checked;$(o),m&&m(o,r,e)}),[m,r]),w=l((e=>{(c||d)&&e.preventDefault()}),[d,c]);return t(f,Object.assign({theme:O},{children:e(he,Object.assign({onClick:w,className:_},{children:[t(ge,Object.assign({checkboxSize:s},{children:y}),void 0),c&&t(be,{},void 0),t(me,{name:p,type:'checkbox',onChange:v,checked:x},void 0),b&&t(ue,{children:b},void 0)]}),void 0)}),void 0)},$e={GroupWrap:$.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`},{GroupWrap:ye}=$e,fe=(e,o)=>({key:'object'==typeof e.value?JSON.stringify(e.value):e.value,checked:o.has(e.value)}),_e=(e,o,t)=>{var r;if(e.type===xe&&(null===(r=e.props)||void 0===r?void 0:r.value)){const{key:r,checked:l}=fe(e.props,o);return s(xe,Object.assign({},e.props,{key:r,checked:l,onChange:t}),e.props.children)}return null},ve=(e,o,t,l)=>{let n=l?[...l]:[];if(e&&'object'==typeof e)if(Array.isArray(e))for(const l of e)if(l.type===r.Fragment)n=ve(l.props.children,o,t,n);else{const e=_e(l,o,t);n.push(e)}else if('type'in e)if(e.type===r.Fragment)n=ve(e.props.children,o,t,n);else{const r=_e(e,o,t);n.push(r)}return n},we=xe;we.Group=({options:o,value:r=[],onChange:s,children:c})=>{const[d,p]=a();i((()=>p(new Set(r))),[r]);const h=l(((e,o)=>{const t=new Set(d);t.has(o)?t.delete(o):t.add(o),p(t),s&&s(Array.from(t))}),[d,s]),u=n((()=>{let e=[];return o&&o.length&&d&&(e=o.map((e=>{const{key:o,checked:r}=fe(e,d);return t(xe,Object.assign({onChange:h,checked:r,value:e.value},{children:e.label}),o)}))),e}),[d,h,o]),g=n((()=>c&&d?ve(c,d,h):null),[c,d,h]);return t(f,Object.assign({theme:O},{children:e(ye,{children:[u,g]},void 0)}),void 0)};const{defaultTitleStyle:ke}=j.text,Be=$.div`
  display: flex;
  flex-direction: column;

  & * {
    box-sizing: border-box;
  }
`,Se=$.span`
  margin-top: 4px;
  color: ${e=>e.theme.colors.gray_800};
  ${e=>ke(e,7)}
`,Ce=$.span`
  color: ${e=>e.theme.colors.gray_800};
  ${e=>ke(e,6)}
  position: absolute;
  left: 14px;
  top: 17px;
  z-index: 1;
  text-align: left;
  user-select: none;
  pointer-events: none;
  transition: all 0.1s linear;
  width: calc(100% - 28px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,ze=$.div`
  position: absolute;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  color: ${e=>e.theme.colors.blue_500};
  cursor: pointer;
  z-index: 1;

  & svg {
    width: 20px;
    height: 20px;
  }
`,Oe={StyledInputContainer:Be,StyledInputLabel:Se,StyledInputWrap:$.div`
  overflow: hidden;
  position: relative;
  height: 56px;
  width: ${e=>e.width?'number'==typeof e.width?`${e.width}px`:e.width:'auto'};
  cursor: text;
  border-radius: 8px;
  background: ${e=>e.theme.colors.gray_200};
  border: 2px solid transparent;
  display: flex;
  transition: all 0.1s linear;

  &:hover {
    border: 2px solid ${e=>e.theme.colors.blue_500};
  }

  & .ant-input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: ${e=>e.theme.colors.gray_1000};
    padding: 26px 14px 6px;
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

  & .ant-input-affix-wrapper {
    background: transparent;
    border: none;
    padding: 0;
    width: 100%;

    &::before {
      content: unset;
    }

    &::after {
      content: unset;
    }

    & .ant-input-prefix {
      margin-right: 0;
      margin-left: 14px;
      color: ${e=>e.theme.colors.blue_500};

      & svg {
        height: 20px;
        width: 20px;
      }
    }

    & .ant-input-suffix {
      margin-left: 0;
      margin-right: 14px;
      color: ${e=>e.theme.colors.blue_500};

      & svg {
        width: 20px;
        height: 20px;
      }
    }

    & .ant-input {
      padding: 26px 14px 6px;
    }

    & .ant-input-password-icon {
      color: inherit;
    }
  }

  &.optional {
    & .ant-input {
      padding-right: 48px;
    }

    & ${Ce} {
      width: calc(100% - 64px);
    }
  }

  &.focus {
    border-color: ${e=>e.theme.colors.blue_500};

    & .ant-input::placeholder {
      color: ${e=>e.theme.colors.gray_600};
    }
  }

  &.placeholder_top {
    & ${Ce} {
      font-size: ${e=>e.theme.fontSettings.small};
      color: ${e=>e.theme.colors.blue_500};
      transform: translateY(-10px);
    }
  }

  &.icon {
    & ${Ce} {
      left: 48px;
      width: calc(100% - 64px);
    }

    &.optional {
      & ${Ce} {
        width: calc(100% - 96px);
      }
    }
  }

  &.small {
    height: 40px;

    & .ant-input {
      padding: 8px 12px;

      &::placeholder {
        color: ${e=>e.theme.colors.gray_800};
      }
    }

    & .ant-input-affix-wrapper {
      & .ant-input-prefix {
        margin-left: 8px;
      }

      & .ant-input-suffix {
        margin-right: 8px;
      }
    }

    &.optional {
      & .ant-input {
        padding-right: 36px;
      }
    }

    & ${ze} {
      right: 8px;
    }
  }

  &.error {
    border-color: ${e=>e.theme.colors.red_500};

    & .ant-input-suffix,
    & .ant-input-prefix,
    & ${Ce},
    & ${ze},
    & + ${Se} {
      color: ${e=>e.theme.colors.red_500};
    }
  }

  &.disabled {
    background: ${e=>e.theme.colors.gray_200};
    border-color: transparent;

    & .ant-input-prefix,
    ${Ce} {
      color: ${e=>e.theme.colors.gray_600};
    }
  }
`,OptionalInput:ze,StyledInputEditablePlaceholder:Ce};var je;(e=>{e.password='password'})(je||(je={}));const{StyledInputContainer:Fe,StyledInputWrap:Ae,StyledInputEditablePlaceholder:Ie,StyledInputLabel:Te,OptionalInput:Pe}=Oe,Ee=({value:r='',disabled:s,small:c,placeholder:d,editableHelp:h='Введите данные',label:u,icon:g,error:m,onChange:b,onBlur:x,onFocus:$,name:y,width:_,optional:v,optionalIcon:k,type:B})=>{const[S,C]=a(!1),[z,j]=a();i((()=>j(r)),[r]);const F=n((()=>S?h:d),[h,d,S]),A=n((()=>{const e=[];return c&&e.push('small'),g&&e.push('icon'),S&&e.push('focus'),(S||z)&&e.push('placeholder_top'),m&&e.push('error'),s&&e.push('disabled'),v&&e.push('optional'),e.join(' ')}),[s,m,g,z,v,c,S]),I=n((()=>{if(v){const e=k||t(p,{},void 0);return t(Pe,Object.assign({onClick:v},{children:e}),void 0)}return null}),[v,k]),T=l((()=>{C(!0),$&&$()}),[$]),P=l((()=>{C(!1),x&&x()}),[x]),E=l((e=>{j(e.currentTarget.value),b&&b(e.currentTarget.value)}),[b]),D=n((()=>B===je.password?t(w.Password,{onFocus:T,onBlur:P,disabled:s,value:z,placeholder:F,onChange:E,name:y,prefix:g},void 0):e(o,{children:[t(w,{onFocus:T,onBlur:P,disabled:s,prefix:g,value:z,placeholder:F,onChange:E,name:y},void 0),I]},void 0)),[s,g,z,y,P,E,T,I,F,B]);return t(f,Object.assign({theme:O},{children:e(Fe,{children:[e(Ae,Object.assign({className:A,width:_},{children:[!c&&t(Ie,{children:d},void 0),D]}),void 0),u&&t(Te,{children:u},void 0)]},void 0)}),void 0)};var De;(e=>{e.default='default',e.multiple='multiple'})(De||(De={}));const{opacityColor:Re}=j.color,{defaultTitleStyle:We}=j.text,Le=B.span`
  ${e=>We(e,6)};

  position: absolute;
  left: 14px;
  pointer-events: none;
  transition: all 0.15s linear;
  top: 16px;
  width: calc(100% - 62px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${e=>e.theme.colors.gray_800};
`,Ye=B.span`
  ${e=>We(e,7)}

  margin-top: 4px;
  color: ${e=>e.theme.colors.gray_800};
`,Ne=B.span`
  ${e=>We(e,6)}

  position: absolute;
  bottom: 6px;
  left: 14px;
  pointer-events: none;
`,Ge={StyledSelect:B.div`
  box-sizing: border-box;
  width: ${e=>e.width?'number'==typeof e.width?`${e.width}px`:e.width:'auto'};
  border: 2px solid transparent;
  height: 56px;
  transition: all .1s linear;
  position: relative;
  cursor: pointer;
  background-color: ${e=>e.theme.colors.gray_200};
  border-radius: ${e=>e.theme.decoration.defaultBorderRadius};

  &:hover {
    border-color: ${e=>e.theme.colors.blue_500};
  }

  & * {
    box-sizing: border-box;
  }

  //Стили селекта
  & .ant-select {
    width: 100%;
    height: 100%;
    display: block;
  }

  & .ant-select-selector {
    width: 100%;
    height: 100%;
  }

  & .ant-select-selection {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none !important;
    box-shadow: none;
    padding: 0;
    cursor: pointer;
  }

  & .ant-select-selection__rendered {
    margin: 0;
    width: 100%;
    height: 100%;
    line-height: 0;
  }

  & .ant-select-selection-selected-value {
    float: unset;
    position: absolute;
    left: 14px;
    bottom: 6px;
    ${e=>We(e,6)}
  }

  & .ant-select-search {
    display: none;
  }

  & .ant-select-arrow {
    pointer-events: none;
    width: auto;
    height: auto;
    right: 14px;
    margin-top: 0;
    transform: translateY(-50%);
    transition: all .2s linear;
    color: ${e=>e.theme.colors.blue_500};
    display: block;
    font-size: 0;

    & svg {
      width: 20px;
      height: 20px;
      transform: unset;
    }
  }

  & .ant-select-dropdown {
    padding: 8px;
    box-shadow: 0 2px 8px ${e=>Re(e.theme.colors.blue_500,.12)};
    backdrop-filter: ${e=>e.theme.decoration.defaultBackgroundFilter};
    border-radius: ${e=>e.theme.decoration.defaultBorderRadius};
  }

  & .ant-select-dropdown-menu-item {
    padding: 9px 12px;
    ${e=>We(e,6)};
    color: ${e=>e.theme.colors.gray_1000};
    border-radius: ${e=>e.theme.decoration.defaultBorderRadius};
  }

  & .ant-select-dropdown-menu-item-selected,
  & .ant-select-dropdown-menu-item-active {
    background-color: ${e=>Re(e.theme.colors.blue_500,.08)} !important;
    color: ${e=>e.theme.colors.blue_500} !important;
  }

  & .ant-select-selection--multiple {

    & .ant-select-selection__choice {
      display: none;
    }

    & ul {
      width: 100%;
      height: 100%;
    }

    & .ant-select-selector {
      padding: 0;
      cursor: pointer;
    }
  }

  //Стили классов компонента
  &.focused {
    border-color: ${e=>e.theme.colors.blue_500};

    &:not(.selected).clear {
      & .ant-select-selection__clear {
        display: none;
      }
    }

    & .ant-select-arrow {
      transform: translateY(-50%) rotate(180deg);
    }

    &.search ${Le} {
      top: 6px;
      font-size: ${e=>e.theme.fontSettings.small};
      color: ${e=>e.theme.colors.blue_500};
    }
  }

  &.selected {

    & ${Le} {
      top: 6px;
      font-size: ${e=>e.theme.fontSettings.small};
      color: ${e=>e.theme.colors.blue_500};
    }

    &:not(.error) .ant-select-arrow {
      transition: none;
      transform: translateY(-50%);
    }

    & .ant-select-selection-selected-value {
      padding: 0;
      ${e=>We(e,6)}
      color: ${e=>e.theme.colors.gray_1000};
      position: absolute;
      bottom: 6px;
      left: 14px;
      width: calc(100% - 62px);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &::after {
        content: unset;
      }
    }
  }

  &.search {
    & .ant-select-selection__placeholder {
      padding: 0 !important;
      color: ${e=>e.theme.colors.gray_600};
      ${e=>We(e,6)};
      left: 14px !important;
      bottom: 6px;
      top: unset;
      transform: unset;
      margin: 0 !important;
    }

    & .ant-select-search {
      width: 100%;
      height: 100%;
      position: unset;
      margin-top: 0;
      float: unset;

      & input {
        width: calc(100% - 62px);
        height: auto;
        display: block;
        position: absolute;
        left: 14px;
        bottom: 6px;
        color: ${e=>e.theme.colors.gray_1000};
        ${e=>We(e,6)};
        padding: 0;
      }
    }

    & ${Le} {
      z-index: 1;
    }

    &.focused {
      & .ant-select-search {
        display: block;
      }
    }
  }

  &.clear {
    &.selected:hover {
      & .ant-select-arrow {
        display: none;
      }
    }

    & .ant-select-selection__clear {
      background: transparent;
      width: auto;
      height: auto;
      margin-top: 0;
      transform: translateY(-50%);
      right: 14px;
      z-index: 3;
      top: 50%;

      & svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &.small {
    height: 40px;

    & .ant-select-selection-placeholder,
    & ${Ne},
    & ${Le} {
      top: 50%;
      transform: translateY(-50%);
      bottom: unset;
      left: 12px;
      width: calc(100% - 56px);
    }

    & .ant-select-selection__placeholder {
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
    }

    &.search.focused,
    &.selected {
      & ${Le} {
        display: none;
      }

      & .ant-select-selection-selected-value {
        top: 50%;
        transform: translateY(-50%);
        bottom: unset;
        left: 12px;
      }
    }

    & .ant-select-search {

      & input {
        padding: 0;
        z-index: 2;
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        bottom: unset;
      }
    }
  }

  &.error {
    border-color: ${e=>e.theme.colors.red_500};

    & .ant-select-arrow,
    & ${Ye},
    & ${Le} {
      color: ${e=>e.theme.colors.red_500} !important;
    }

    & .ant-select-selection-selected-value {
      color: ${e=>e.theme.colors.gray_800};
    }
  }

  &.disabled {
    pointer-events: none;

    & .ant-select-arrow,
    & ${Le} {
      color: ${e=>e.theme.colors.gray_600};
    }

    & .ant-select-selection-selected-value {
      color: ${e=>e.theme.colors.gray_800};
    }
  }
`,Placeholder:Le,HelpPlaceholder:Ye,MultipleLabel:Ne},{Option:Me}=k,{StyledSelect:He,Placeholder:qe,MultipleLabel:Ve,HelpPlaceholder:Je}=Ge,Xe=({placeholder:o,value:r,searchPlaceholder:d,disabled:p,showSearch:h,label:u,options:g=[],required:$,error:y,allowClear:_,small:w,mode:B=De.default,width:S,onChange:C,onFocus:z,onBlur:j})=>{const[F,A]=a(),[I,T]=a(!1),[P,E]=a(y),[D,R]=a(!1),[W,L]=a(2),[Y,N]=a([]),G=c(null);i((()=>E(y)),[y]),i((()=>A(r)),[r]);const M=n((()=>t(F&&!P?m:b,{},void 0)),[F,P]),H=n((()=>{let e=[];return p&&e.push('disabled'),I&&e.push('focused'),P&&e.push('error'),_&&e.push('clear'),w&&e.push('small'),h&&e.push('search'),(Array.isArray(F)&&F.length||!Array.isArray(F)&&F)&&e.push('selected'),e.join(' ')}),[p,I,F,P,_,w,h]),q=n((()=>I&&h),[I,h]),V=n((()=>q&&t('span',{children:d||'Поиск данных...'},void 0)),[d,q]),J=n((()=>g.filter((e=>e.value===F))),[g,F]),X=n((()=>{const e=Y.length?Y:g;return v.without(e,J[0])}),[Y,g,J]),K=n((()=>v.first([...J,...X].map((e=>s(Me,Object.assign({},e,{className:'styledOption',key:e.value}),null==e?void 0:e.label))),10*W)),[W,X,J]),Q=n((()=>'multiple'===B&&Array.isArray(F)&&F.length>0&&!D?e(Ve,{children:['Выбрано значений: ',F.length]},void 0):null),[D,B,F]),U=l(((e,o)=>{if(A(e),$){const o=Array.isArray(e)?!e.length:!e;E(o)}C&&C(e,o)}),[C,$]),Z=l((()=>{$&&!F?E(!0):y||E(!1),R(!1),j&&j()}),[$,F,y,j]),ee=l((()=>{z&&z()}),[z]),oe=l((e=>{T(e),e||L(2)}),[]),te=l((e=>{const{target:o}=e,{scrollTop:t,offsetHeight:r,scrollHeight:l}=o;!!(t&&r&&l)&&t+r===l&&L(W+1)}),[W]),re=l((e=>{if(e){const o=g.filter((o=>o.label.toLocaleLowerCase().includes(e.toLocaleLowerCase())));N(o),R(!0)}else N([]),R(!1)}),[g]);return t(f,Object.assign({theme:O},{children:e(He,Object.assign({ref:G,className:H,width:S},{children:[t(k,Object.assign({className:'ant-select-customize-input',onFocus:ee,onBlur:Z,onChange:U,onPopupScroll:te,suffixIcon:M,showSearch:h,onSearch:re,placeholder:V,value:F,allowClear:_,onDropdownVisibleChange:oe,getPopupContainer:()=>G.current,mode:B,clearIcon:t(x,{},void 0)},{children:K}),void 0),t(qe,{children:o||'Выберите данные'},void 0),u&&t(Je,{children:u},void 0),Q]}),void 0)}),void 0)},{defaultTitleStyle:Ke}=j.text,Qe=$.span`
  pointer-events: none;
  position: absolute;
  left: 18px;
  top: 21px;
  color: ${e=>e.theme.colors.gray_800};
  transition: all 0.1s linear;

  ${e=>Ke(e,7)};
`,Ue=$.span`
  margin-top: 4px;

  ${e=>Ke(e,7)};

  color: ${e=>e.theme.colors.gray_800};
`,Ze=$(m)`
  color: ${e=>e.theme.colors.blue_500};
  position: absolute;
  top: 19px;
  right: 19px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,eo=$.textarea`
  padding: 28px 16px 16px;
  border: 2px solid transparent;
  outline: none;
  transition: all 0.1s linear;
  height: 100%;
  border-radius: ${e=>e.theme.decoration.defaultBorderRadius};
  background-color: ${e=>e.theme.colors.gray_200};
  color: ${e=>e.theme.gray_1000};
  resize: ${e=>e.resizable?'both':'none'};

  ${e=>Ke(e,6)};

  &:hover {
    border-color: ${e=>e.theme.colors.blue_500};
  }

  &::placeholder {
    color: transparent;
  }

  &:focus,
  &:focus-visible,
  &:active {
    border-color: ${e=>e.theme.colors.blue_500};

    &::placeholder {
      color: ${e=>e.theme.colors.gray_600}
    }

    & + ${Qe} {
      top: 10px;
      color: ${e=>e.theme.colors.blue_500};
    }
  }
`,oo={StyledTextAreaWrap:$.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${e=>e.width?'string'==typeof e.width?e.width:`${e.width}px`:'auto'};
  height: ${e=>e.height?'string'==typeof e.height?e.height:`${e.height}px`:'auto'};

  & * {
    box-sizing: border-box;
  }

  &.placeholder_top {
    & ${Qe} {
      top: 10px;
      color: ${e=>e.theme.colors.blue_500};
    }
  }

  &.error {

    & ${eo} {
      border-color: ${e=>e.theme.colors.red_500};
    }

    & ${Qe} {
      color: ${e=>e.theme.colors.red_500};
    }
  }

  &.disabled {

    & ${eo} {
      pointer-events: none;
      resize: none;
      color: ${e=>e.theme.colors.gray_800};
    }

    & ${Qe} {
      color: ${e=>e.theme.colors.gray_600};
    }
  }
`,StyledTextArea:eo,StyledTextAreaPlaceholder:Qe,StyledTextAreaLabel:Ue,SuccessIcon:Ze},{StyledTextAreaWrap:to,StyledTextArea:ro,StyledTextAreaPlaceholder:lo,StyledTextAreaLabel:no,SuccessIcon:ao}=oo,io=({resizable:o=!1,placeholder:r,editableHelp:s='Введите данные',disabled:c,value:d,error:p=!1,label:h,width:u,height:g,onChange:m,onBlur:b,onFocus:x})=>{const[$,y]=a();i((()=>y(d)),[d]);const _=n((()=>{const e=[];return c&&e.push('disabled'),$&&e.push('placeholder_top'),p&&e.push('error'),e.join(' ')}),[c,p,$]),v=l((()=>{x&&x()}),[x]),w=l((()=>{b&&b()}),[b]),k=l((e=>{const o=e.currentTarget.value;y(o),m&&m(o)}),[m]);return t(f,Object.assign({theme:O},{children:e(to,Object.assign({className:_,width:u,height:g},{children:[t(ro,{resizable:o,onFocus:v,onBlur:w,onChange:k,value:$,placeholder:s},void 0),r&&t(lo,{children:r},void 0),h&&t(no,{children:h},void 0),!!$&&!p&&t(ao,{},void 0)]}),void 0)}),void 0)};export{ne as Button,we as Checkbox,Ee as Input,Xe as Select,io as TextArea};
//# sourceMappingURL=index.esm.js.map
