Object.defineProperty(exports,'__esModule',{value:!0});var e=require('react/jsx-runtime'),o=require('react'),t=require('ui-its-icons'),r=require('styled-components'),l=require('d3'),n=require('underscore'),a=require('antd'),s=require('styled-components/macro');function c(e){return e&&'object'==typeof e&&'default'in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var o=Object.create(null);return e&&Object.keys(e).forEach((t=>{if('default'!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,r.get?r:{enumerable:!0,get:()=>e[t]})}})),o.default=e,Object.freeze(o)}var d,u,p,h=c(o),g=c(r),b=i(l),m=c(n),x=c(s);(e=>{e.primary='primary',e.danger='danger',e.orange='orange',e.yellow='yellow',e.green='green',e.purple='purple',e.magenta='magenta',e.blue='blue',e.white='white',e.transparent='transparent'})(d||(d={})),(e=>{e.large='large',e.default='default',e.small='small'})(u||(u={})),(e=>{e.default='default',e.translucent='translucent',e.transparent='transparent'})(p||(p={}));const f={fontSettings:{large:'16px',default:'14px',small:'13px',extraSmall:'12px'},decoration:{largeBorderRadiusOnlyTop:'16px 16px 0 0',defaultBorderRadiusOnlyTop:'8px 8px 0 0',smallBorderRadiusOnlyTop:'4px 4px 0 0',largeBorderRadiusOnlyBottom:'0 0 16px 16px',defaultBorderRadiusOnlyBottom:'0 0 8px 8px',smallBorderRadiusOnlyBottom:'0 0 4px 4px',largeBorderRadius:'16px',defaultBorderRadius:'8px',smallBorderRadius:'4px',defaultBackgroundFilter:'blur(18px)',smallBackgroundFilter:'blur(16px)',defaultBoxShadow:'0px 2px 8px rgba(107, 138, 228, 0.12)',greenBoxShadow:'0px 18px 40px rgba(39, 174, 96, 0.08)',orangeBoxShadow:'0px 18px 40px rgba(242, 153, 74, 0.08)',redBoxShadow:'0px 18px 40px rgba(235, 87, 87, 0.08)',primaryBoxShadow:'0px -18px 40px rgba(107, 138, 228, 0.02), 0px 18px 40px rgba(107, 138, 228, 0.08)'},colors:{gray_1000:'#1A2138',gray_800:'#6A7B9B',gray_600:'#C1CBD8',gray_200:'#F1F3F6',white:'#FFFFFF',red_600:'#CA3F4B',red_500:'#EB5757',red_300:'#F7BABA',red_opacity:'rgba(235, 87, 87, 0.08)',orange_600:'#D07636',orange_500:'#F2994A',orange_300:'#FBCE92',orange_opacity:'rgba(242, 153, 74, 0.08)',yellow_600:'#D0A637',yellow_500:'#F2C94C',yellow_300:'#FBE693',yellow_opacity:'rgba(242, 201, 76, 0.08)',verdant_600:'#18814F',verdant_500:'#219653',verdant_300:'#76DF8E',verdant_opacity:'rgba(33, 150, 83, 0.08)',green_600:'#1C955B',green_500:'#27AE60',green_300:'#7BE693',green_opacity:'rgba(39, 174, 96, 0.08)',eco_600:'#51B283',eco_500:'#6FCF97',eco_300:'#ADF0BC',eco_opacity:'rgba(111, 207, 151, 0.08)',blue_600:'#2263CB',blue_500:'#2F80ED',blue_300:'#81BFF9',blue_opacity:'rgba(47, 128, 237, 0.08)',cyan_600:'#207ABC',cyan_500:'#2D9CDB',cyan_300:'#B3E1FD',cyan_opacity:'rgba(45, 156, 219, 0.08)',azure_600:'#3EA2D0',azure_500:'#56CCF2',azure_300:'#99F1FB',azure_opacity:'rgba(86, 204, 242, 0.08)',purple_600:'#793BC0',purple_500:'#9B51E0',purple_300:'#D197F5',purple_opacity:'rgba(155, 81, 224, 0.08)',violet_600:'#954EBA',violet_500:'#BB6BD9',violet_300:'#E9A9F3',violet_opacity:'rgba(187, 107, 217, 0.08)',magenta_600:'#C03BA0',magenta_500:'#E051AF',magenta_300:'#F597C2',magenta_opacity:'rgba(224, 81, 175, 0.08)'}};var $={offset:{addMarginsProps:e=>{var o,t,r,l,n;return`\n    margin: ${null!==(o=e.m)&&void 0!==o?o:''};\n    margin-top: ${null!==(t=e.mt)&&void 0!==t?t:''};\n    margin-bottom: ${null!==(r=e.mb)&&void 0!==r?r:''};\n    margin-left: ${null!==(l=e.ml)&&void 0!==l?l:''};\n    margin-right: ${null!==(n=e.mr)&&void 0!==n?n:''};\n`},addPaddingsProps:e=>{var o,t,r,l,n;return`\n    padding: ${null!==(o=e.p)&&void 0!==o?o:''};\n    padding-top: ${null!==(t=e.pt)&&void 0!==t?t:''};\n    padding-bottom: ${null!==(r=e.pb)&&void 0!==r?r:''};\n    padding-left: ${null!==(l=e.pl)&&void 0!==l?l:''};\n    padding-right: ${null!==(n=e.pr)&&void 0!==n?n:''};\n`}},color:{opacityColor:(e,o)=>`\n    ${b.rgb(e).copy({opacity:o})}\n`},text:{defaultTextStyle:(e,o='default')=>`\n  font-weight: 600;\n  font-size: ${e.theme.fontSettings[o]};\n  line-height: 140%;\n`,defaultTitleStyle:(e,o)=>{switch(o){case 1:return'\n        font-weight: bold;\n        font-size: 48px;\n        line-height: 59px;\n      ';case 2:return'\n        font-weight: bold;\n        font-size: 36px;\n        line-height: 45px;\n      ';case 3:return'\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 30px;\n      ';case 4:return'\n        font-weight: bold;\n        font-size: 18px;\n        line-height: 22px;\n      ';case 5:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.large};\n        line-height: 140%;\n      `;case 6:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.default};\n        line-height: 140%;\n      `;case 7:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.small};\n        line-height: 140%;\n      `}}}};const{addPaddingsProps:y,addMarginsProps:_}=$.offset,{defaultTitleStyle:v}=$.text,{opacityColor:w}=$.color,k=r.keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,j=r.keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`,B=g.default.div`
  position: absolute;
`,S=g.default.div``,C=g.default.button`
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

  ${e=>v(e,7)}
  ${e=>e.fontSize?'font-size:'+e.fontSize+';':''}

  padding: 11px;
  ${e=>_(e)};

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
    ${e=>v(e,5)}
  }

  ${e=>y(e)}
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

    & ${S} {
      color: transparent;
    }

    & ${B} {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
        animation: ${k} 1.3s linear infinite;
        color: inherit;
        margin-right: 0;
      }
    }

  }

  & .wave {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${j} .6s linear;
    background-color: ${e=>w(e.theme.colors.white,.5)};
  }
`,O={StyledButton:C,PrimaryButton:g.default(C)`
  background: ${e=>e.theme.colors.blue_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.blue_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.blue_300};
  }

  &.style--translucent {
    background: ${e=>w(e.theme.colors.blue_500,.08)};
    color: ${e=>e.theme.colors.blue_500};

    &:hover {
      background: ${e=>w(e.theme.colors.blue_500,.16)};
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
`,DangerButton:g.default(C)`
  background: ${e=>e.theme.colors.red_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.red_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.red_300};
  }

  &.style--translucent {
    background: ${e=>w(e.theme.colors.red_500,.08)};
    color: ${e=>e.theme.colors.red_500};

    &:hover {
      background: ${e=>w(e.theme.colors.red_500,.16)};
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
`,OrangeButton:g.default(C)`
  background: ${e=>e.theme.colors.orange_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.orange_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.orange_300};
  }

  &.style--translucent {
    background: ${e=>w(e.theme.colors.orange_500,.08)};
    color: ${e=>e.theme.colors.orange_500};

    &:hover {
      background: ${e=>w(e.theme.colors.orange_500,.16)};
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
`,YellowButton:g.default(C)`
  background: ${e=>e.theme.colors.yellow_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.yellow_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.yellow_300};
  }

  &.style--translucent {
    background: ${e=>w(e.theme.colors.yellow_500,.08)};
    color: ${e=>e.theme.colors.yellow_500};

    &:hover {
      background: ${e=>w(e.theme.colors.yellow_500,.16)};
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
`,GreenButton:g.default(C)`
  background: ${e=>e.theme.colors.green_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.green_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.green_300};
  }

  &.style--translucent {
    background: ${e=>w(e.theme.colors.green_500,.08)};
    color: ${e=>e.theme.colors.green_500};

    &:hover {
      background: ${e=>w(e.theme.colors.green_500,.16)};
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
`,PurpleButton:g.default(C)`
  background: ${e=>e.theme.colors.purple_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.purple_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.purple_300};
  }

  &.style--translucent {
    background: ${e=>w(e.theme.colors.purple_500,.08)};
    color: ${e=>e.theme.colors.purple_500};

    &:hover {
      background: ${e=>w(e.theme.colors.purple_500,.16)};
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
`,MagentaButton:g.default(C)`
  background: ${e=>e.theme.colors.magenta_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.magenta_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.magenta_300};
  }

  &.style--translucent {
    background: ${e=>w(e.theme.colors.magenta_500,.08)};
    color: ${e=>e.theme.colors.magenta_500};

    &:hover {
      background: ${e=>w(e.theme.colors.magenta_500,.16)};
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
`,BlueButton:g.default(C)`
  background: ${e=>e.theme.colors.cyan_500};
  color: ${e=>e.theme.colors.white};

  &:hover {
    background: ${e=>e.theme.colors.cyan_600};
  }

  &.disabled {
    background: ${e=>e.theme.colors.cyan_300};
  }

  &.style--translucent {
    background: ${e=>w(e.theme.colors.cyan_500,.08)};
    color: ${e=>e.theme.colors.cyan_500};

    &:hover {
      background: ${e=>w(e.theme.colors.cyan_500,.16)};
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
`,WhiteButton:g.default(C)`
  box-shadow: 0px 2px 8px rgba(47, 128, 237, 0.12);
  background-color: ${e=>e.theme.colors.white};
  color: ${e=>e.theme.colors.gray_1000};
  
  &.disabled {
    color: ${e=>e.theme.colors.gray_600};
  }
`,LoadingIconWrap:B,TextWrap:S},{StyledButton:z,LoadingIconWrap:F,TextWrap:I,PrimaryButton:A,DangerButton:T,OrangeButton:P,YellowButton:M,GreenButton:E,PurpleButton:D,MagentaButton:R,BlueButton:W,WhiteButton:L}=O,Y=(o,t)=>{switch(t){case d.primary:return e.jsx(A,Object.assign({},o),void 0);case d.danger:return e.jsx(T,Object.assign({},o),void 0);case d.orange:return e.jsx(P,Object.assign({},o),void 0);case d.yellow:return e.jsx(M,Object.assign({},o),void 0);case d.green:return e.jsx(E,Object.assign({},o),void 0);case d.purple:return e.jsx(D,Object.assign({},o),void 0);case d.magenta:return e.jsx(R,Object.assign({},o),void 0);case d.blue:return e.jsx(W,Object.assign({},o),void 0);case d.white:return e.jsx(L,Object.assign({},o),void 0);default:return e.jsx(z,Object.assign({},o),void 0)}},N=l=>{var{disabled:n,buttonStyle:a=p.default,type:s,icon:c,size:i=u.default,loading:d,onClick:h,clickEffect:g=!0,children:b,rounded:m,value:x,className:$}=l,y=
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
function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&'function'==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)o.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]])}return t}(l,['disabled','buttonStyle','type','icon','size','loading','onClick','clickEffect','children','rounded','value','className']);const _=o.useCallback((e=>{const o=e.currentTarget,t=document.createElement('span'),r=Math.max(null==o?void 0:o.clientWidth,null==o?void 0:o.clientHeight),l=r/2,{x:n,y:a}=o.getBoundingClientRect();t.style.width=t.style.height=`${r}px`,t.style.left=e.clientX-n-l+'px',t.style.top=e.clientY-a-l+'px',t.classList.add('wave');const s=o.querySelector('.wave');s&&s.remove(),o.appendChild(t)}),[]),v=o.useCallback((e=>{d||(g&&_(e),h&&h(e,x))}),[d,g,_,h,x]),w=o.useMemo((()=>{const e=$?$.split(' '):[];return n&&e.push('disabled'),a&&s&&e.push(`style--${a}`),i&&e.push(`size--${i}`),m&&e.push('rounded'),d&&e.push('loading'),b||e.push('empty'),e.join(' ')}),[$,n,a,s,i,m,d,b]),k=o.useMemo((()=>e.jsxs(e.Fragment,{children:[c,e.jsx(I,{children:b},void 0),d&&e.jsx(F,{children:e.jsx(t.LoadingIcon,{},void 0)},void 0)]},void 0)),[c,b,d]),j=Object.assign(Object.assign({},y),{className:w,children:k,onClick:v});return e.jsx(r.ThemeProvider,Object.assign({theme:f},{children:Y(j,s)}),void 0)},q={GroupWrap:g.default.div`
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
`},{GroupWrap:G}=q,H=(o,t,r)=>{var l,n,a,s,c,i;const u=o.props,p=u.value&&u.value===r,h=null!==(l=u.type)&&void 0!==l?l:d.primary,g=u.icon?u.icon:p?void 0:t.defaultIcon,b=null!==(a=null!==(n=o.key)&&void 0!==n?n:u.value)&&void 0!==a?a:m.default.uniqueId(),x=null!==(i=null===(c=null===(s=o.props)||void 0===s?void 0:s.className)||void 0===c?void 0:c.split(' '))&&void 0!==i?i:[];let f,$;x.push('group__button'),p?($=t.selectButton,f=u.children,x.push('group__button--active')):($=t.deselectButton,f=null);const y=Object.assign(Object.assign({},o.props),{buttonStyle:$,type:h,children:f,icon:g,onClick:t.onChange,className:x.join(' ')});return e.jsx(N,Object.assign({},y),b)},V=(e,o,t,r)=>{let l=r?[...r]:[];if(e&&'object'==typeof e)if(Array.isArray(e)){for(const r of e)if(r.type===h.default.Fragment)l=V(r.props.children,o,t,l);else if(r.type===N){const e=H(r,o,t);l.push(e)}}else if('type'in e)if(e.type===h.default.Fragment)l=V(e.props.children,o,t,l);else if(e.type===N){const r=H(e,o,t);l.push(r)}return l},J=N;J.Group=({value:r,buttonGap:l=8,selectButton:n=p.default,deselectButton:a=p.translucent,defaultIcon:s=e.jsx(t.StarIcon,{},void 0),onChange:c,defaultValue:i,children:d})=>{const[u,h]=o.useState();o.useEffect((()=>{i&&h(i)}),[i]);const g=o.useCallback(((e,o)=>{c&&c(e,o),h(o)}),[c]),b=o.useMemo((()=>{if(d){return V(d,{selectButton:n,deselectButton:a,defaultIcon:s,onChange:g},null!=r?r:u)}return null}),[d,s,a,u,g,n,r]);return e.jsx(G,Object.assign({gap:l},{children:b}),void 0)};const{defaultTitleStyle:X}=$.text,K=g.default.span`
  ${e=>X(e,7)};
  color: ${e=>e.theme.colors.gray_1000};
  margin-left: 16px;
`,Q=g.default.div`
  width: ${e=>e.checkboxSize?`${e.checkboxSize}px`:'20px'};
  height: ${e=>e.checkboxSize?`${e.checkboxSize}px`:'20px'};
  color: ${e=>e.theme.colors.blue_500};

  & svg {
    width: ${e=>e.checkboxSize?`${e.checkboxSize}px`:'20px'};
    height: ${e=>e.checkboxSize?`${e.checkboxSize}px`:'20px'};
  }
`,U=g.default(t.DragIcon)`
  width: 20px;
  height: 20px;
  margin-left: 4px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,Z=g.default.input`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
`,ee={CheckboxWrap:g.default.label`
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
    
    & ${Q},
    & ${K} {
      color: ${e=>e.theme.colors.gray_600};
    }
  }
`,CheckboxText:K,CheckboxIcon:Q,CheckboxInput:Z,CheckboxDragIcon:U},{CheckboxWrap:oe,CheckboxText:te,CheckboxIcon:re,CheckboxInput:le,CheckboxDragIcon:ne}=ee,ae=({checked:l=!1,value:n,checkboxSize:a,moved:s,disabled:c,name:i,iconRender:d,onChange:u,children:p})=>{const[h,g]=o.useState(!1);o.useEffect((()=>g(l)),[l]);const b=o.useMemo((()=>d?d(h):h?e.jsx(t.ActiveCheckBoxIcon,{},void 0):e.jsx(t.CheckBoxIcon,{},void 0)),[d,h]),m=o.useMemo((()=>{const e=[];return c&&e.push('disabled'),e.join(' ')}),[c]),x=o.useCallback((e=>{const o=e.currentTarget.checked;g(o),u&&u(o,n,e)}),[u,n]),$=o.useCallback((e=>{(s||c)&&e.preventDefault()}),[c,s]);return e.jsx(r.ThemeProvider,Object.assign({theme:f},{children:e.jsxs(oe,Object.assign({onClick:$,className:m},{children:[e.jsx(re,Object.assign({checkboxSize:a},{children:b}),void 0),s&&e.jsx(ne,{},void 0),e.jsx(le,{name:i,type:'checkbox',onChange:x,checked:h},void 0),p&&e.jsx(te,{children:p},void 0)]}),void 0)}),void 0)},se={GroupWrap:g.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`},{GroupWrap:ce}=se,ie=(e,o)=>({key:'object'==typeof e.value?JSON.stringify(e.value):e.value,checked:o.has(e.value)}),de=(e,t,r)=>{var l;if(e.type===ae&&(null===(l=e.props)||void 0===l?void 0:l.value)){const{key:l,checked:n}=ie(e.props,t);return o.createElement(ae,Object.assign({},e.props,{key:l,checked:n,onChange:r}),e.props.children)}return null},ue=(e,o,t,r)=>{let l=r?[...r]:[];if(e&&'object'==typeof e)if(Array.isArray(e))for(const r of e)if(r.type===h.default.Fragment)l=ue(r.props.children,o,t,l);else{const e=de(r,o,t);l.push(e)}else if('type'in e)if(e.type===h.default.Fragment)l=ue(e.props.children,o,t,l);else{const r=de(e,o,t);l.push(r)}return l},pe=ae;pe.Group=({options:t,value:l=[],onChange:n,children:a})=>{const[s,c]=o.useState();o.useEffect((()=>c(new Set(l))),[l]);const i=o.useCallback(((e,o)=>{const t=new Set(s);t.has(o)?t.delete(o):t.add(o),c(t),n&&n(Array.from(t))}),[s,n]),d=o.useMemo((()=>{let o=[];return t&&t.length&&s&&(o=t.map((o=>{const{key:t,checked:r}=ie(o,s);return e.jsx(ae,Object.assign({onChange:i,checked:r,value:o.value},{children:o.label}),t)}))),o}),[s,i,t]),u=o.useMemo((()=>a&&s?ue(a,s,i):null),[a,s,i]);return e.jsx(r.ThemeProvider,Object.assign({theme:f},{children:e.jsxs(ce,{children:[d,u]},void 0)}),void 0)};const{defaultTitleStyle:he}=$.text,ge=g.default.div`
  display: flex;
  flex-direction: column;

  & * {
    box-sizing: border-box;
  }
`,be=g.default.span`
  margin-top: 4px;
  color: ${e=>e.theme.colors.gray_800};
  ${e=>he(e,7)}
`,me=g.default.span`
  color: ${e=>e.theme.colors.gray_800};
  ${e=>he(e,6)}
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
`,xe=g.default.div`
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
`,fe={StyledInputContainer:ge,StyledInputLabel:be,StyledInputWrap:g.default.div`
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

    & ${me} {
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
    & ${me} {
      font-size: ${e=>e.theme.fontSettings.small};
      color: ${e=>e.theme.colors.blue_500};
      transform: translateY(-10px);
    }
  }

  &.icon {
    & ${me} {
      left: 48px;
      width: calc(100% - 64px);
    }

    &.optional {
      & ${me} {
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

    & ${xe} {
      right: 8px;
    }
  }

  &.error {
    border-color: ${e=>e.theme.colors.red_500};

    & .ant-input-suffix,
    & .ant-input-prefix,
    & ${me},
    & ${xe},
    & + ${be} {
      color: ${e=>e.theme.colors.red_500};
    }
  }

  &.disabled {
    background: ${e=>e.theme.colors.gray_200};
    border-color: transparent;

    & .ant-input-prefix,
    ${me} {
      color: ${e=>e.theme.colors.gray_600};
    }
  }
`,OptionalInput:xe,StyledInputEditablePlaceholder:me};var $e;(e=>{e.password='password'})($e||($e={}));const{StyledInputContainer:ye,StyledInputWrap:_e,StyledInputEditablePlaceholder:ve,StyledInputLabel:we,OptionalInput:ke}=fe;var je;(e=>{e.default='default',e.multiple='multiple'})(je||(je={}));const{opacityColor:Be}=$.color,{defaultTitleStyle:Se}=$.text,Ce=x.default.span`
  ${e=>Se(e,6)};

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
`,Oe=x.default.span`
  ${e=>Se(e,7)}

  margin-top: 4px;
  color: ${e=>e.theme.colors.gray_800};
`,ze=x.default.span`
  ${e=>Se(e,6)}

  position: absolute;
  bottom: 6px;
  left: 14px;
  pointer-events: none;
`,Fe={StyledSelect:x.default.div`
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
    ${e=>Se(e,6)}
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
    box-shadow: 0 2px 8px ${e=>Be(e.theme.colors.blue_500,.12)};
    backdrop-filter: ${e=>e.theme.decoration.defaultBackgroundFilter};
    border-radius: ${e=>e.theme.decoration.defaultBorderRadius};
  }

  & .ant-select-dropdown-menu-item {
    padding: 9px 12px;
    ${e=>Se(e,6)};
    color: ${e=>e.theme.colors.gray_1000};
    border-radius: ${e=>e.theme.decoration.defaultBorderRadius};
  }

  & .ant-select-dropdown-menu-item-selected,
  & .ant-select-dropdown-menu-item-active {
    background-color: ${e=>Be(e.theme.colors.blue_500,.08)} !important;
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

    &.search ${Ce} {
      top: 6px;
      font-size: ${e=>e.theme.fontSettings.small};
      color: ${e=>e.theme.colors.blue_500};
    }
  }

  &.selected {

    & ${Ce} {
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
      ${e=>Se(e,6)}
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
      ${e=>Se(e,6)};
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
        ${e=>Se(e,6)};
        padding: 0;
      }
    }

    & ${Ce} {
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
    & ${ze},
    & ${Ce} {
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
      & ${Ce} {
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
    & ${Oe},
    & ${Ce} {
      color: ${e=>e.theme.colors.red_500} !important;
    }

    & .ant-select-selection-selected-value {
      color: ${e=>e.theme.colors.gray_800};
    }
  }

  &.disabled {
    pointer-events: none;

    & .ant-select-arrow,
    & ${Ce} {
      color: ${e=>e.theme.colors.gray_600};
    }

    & .ant-select-selection-selected-value {
      color: ${e=>e.theme.colors.gray_800};
    }
  }
`,Placeholder:Ce,HelpPlaceholder:Oe,MultipleLabel:ze},{Option:Ie}=a.Select,{StyledSelect:Ae,Placeholder:Te,MultipleLabel:Pe,HelpPlaceholder:Me}=Fe,{defaultTitleStyle:Ee}=$.text,De=g.default.span`
  pointer-events: none;
  position: absolute;
  left: 18px;
  top: 21px;
  color: ${e=>e.theme.colors.gray_800};
  transition: all 0.1s linear;

  ${e=>Ee(e,7)};
`,Re=g.default.span`
  margin-top: 4px;

  ${e=>Ee(e,7)};

  color: ${e=>e.theme.colors.gray_800};
`,We=g.default(t.BaselineCheckIcon)`
  color: ${e=>e.theme.colors.blue_500};
  position: absolute;
  top: 19px;
  right: 19px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,Le=g.default.textarea`
  padding: 28px 16px 16px;
  border: 2px solid transparent;
  outline: none;
  transition: all 0.1s linear;
  height: 100%;
  border-radius: ${e=>e.theme.decoration.defaultBorderRadius};
  background-color: ${e=>e.theme.colors.gray_200};
  color: ${e=>e.theme.gray_1000};
  resize: ${e=>e.resizable?'both':'none'};

  ${e=>Ee(e,6)};

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

    & + ${De} {
      top: 10px;
      color: ${e=>e.theme.colors.blue_500};
    }
  }
`,Ye={StyledTextAreaWrap:g.default.div`
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
    & ${De} {
      top: 10px;
      color: ${e=>e.theme.colors.blue_500};
    }
  }

  &.error {

    & ${Le} {
      border-color: ${e=>e.theme.colors.red_500};
    }

    & ${De} {
      color: ${e=>e.theme.colors.red_500};
    }
  }

  &.disabled {

    & ${Le} {
      pointer-events: none;
      resize: none;
      color: ${e=>e.theme.colors.gray_800};
    }

    & ${De} {
      color: ${e=>e.theme.colors.gray_600};
    }
  }
`,StyledTextArea:Le,StyledTextAreaPlaceholder:De,StyledTextAreaLabel:Re,SuccessIcon:We},{StyledTextAreaWrap:Ne,StyledTextArea:qe,StyledTextAreaPlaceholder:Ge,StyledTextAreaLabel:He,SuccessIcon:Ve}=Ye;exports.Button=J,exports.Checkbox=pe,exports.Input=({value:l='',disabled:n,small:s,placeholder:c,editableHelp:i='Введите данные',label:d,icon:u,error:p,onChange:h,onBlur:g,onFocus:b,name:m,width:x,optional:$,optionalIcon:y,type:_})=>{const[v,w]=o.useState(!1),[k,j]=o.useState();o.useEffect((()=>j(l)),[l]);const B=o.useMemo((()=>v?i:c),[i,c,v]),S=o.useMemo((()=>{const e=[];return s&&e.push('small'),u&&e.push('icon'),v&&e.push('focus'),(v||k)&&e.push('placeholder_top'),p&&e.push('error'),n&&e.push('disabled'),$&&e.push('optional'),e.join(' ')}),[n,p,u,k,$,s,v]),C=o.useMemo((()=>{if($){const o=y||e.jsx(t.StarIcon,{},void 0);return e.jsx(ke,Object.assign({onClick:$},{children:o}),void 0)}return null}),[$,y]),O=o.useCallback((()=>{w(!0),b&&b()}),[b]),z=o.useCallback((()=>{w(!1),g&&g()}),[g]),F=o.useCallback((e=>{j(e.currentTarget.value),h&&h(e.currentTarget.value)}),[h]),I=o.useMemo((()=>_===$e.password?e.jsx(a.Input.Password,{onFocus:O,onBlur:z,disabled:n,value:k,placeholder:B,onChange:F,name:m,prefix:u},void 0):e.jsxs(e.Fragment,{children:[e.jsx(a.Input,{onFocus:O,onBlur:z,disabled:n,prefix:u,value:k,placeholder:B,onChange:F,name:m},void 0),C]},void 0)),[n,u,k,m,z,F,O,C,B,_]);return e.jsx(r.ThemeProvider,Object.assign({theme:f},{children:e.jsxs(ye,{children:[e.jsxs(_e,Object.assign({className:S,width:x},{children:[!s&&e.jsx(ve,{children:c},void 0),I]}),void 0),d&&e.jsx(we,{children:d},void 0)]},void 0)}),void 0)},exports.Select=({placeholder:l,value:n,searchPlaceholder:s,disabled:c,showSearch:i,label:d,options:u=[],required:p,error:h,allowClear:g,small:b,mode:x=je.default,width:$,onChange:y,onFocus:_,onBlur:v})=>{const[w,k]=o.useState(),[j,B]=o.useState(!1),[S,C]=o.useState(h),[O,z]=o.useState(!1),[F,I]=o.useState(2),[A,T]=o.useState([]),P=o.useRef(null);o.useEffect((()=>C(h)),[h]),o.useEffect((()=>k(n)),[n]);const M=o.useMemo((()=>w&&!S?e.jsx(t.BaselineCheckIcon,{},void 0):e.jsx(t.ChevronDownIcon,{},void 0)),[w,S]),E=o.useMemo((()=>{let e=[];return c&&e.push('disabled'),j&&e.push('focused'),S&&e.push('error'),g&&e.push('clear'),b&&e.push('small'),i&&e.push('search'),(Array.isArray(w)&&w.length||!Array.isArray(w)&&w)&&e.push('selected'),e.join(' ')}),[c,j,w,S,g,b,i]),D=o.useMemo((()=>j&&i),[j,i]),R=o.useMemo((()=>D&&e.jsx('span',{children:s||'Поиск данных...'},void 0)),[s,D]),W=o.useMemo((()=>u.filter((e=>e.value===w))),[u,w]),L=o.useMemo((()=>{const e=A.length?A:u;return m.default.without(e,W[0])}),[A,u,W]),Y=o.useMemo((()=>m.default.first([...W,...L].map((e=>o.createElement(Ie,Object.assign({},e,{className:'styledOption',key:e.value}),null==e?void 0:e.label))),10*F)),[F,L,W]),N=o.useMemo((()=>'multiple'===x&&Array.isArray(w)&&w.length>0&&!O?e.jsxs(Pe,{children:['Выбрано значений: ',w.length]},void 0):null),[O,x,w]),q=o.useCallback(((e,o)=>{if(k(e),p){const o=Array.isArray(e)?!e.length:!e;C(o)}y&&y(e,o)}),[y,p]),G=o.useCallback((()=>{p&&!w?C(!0):h||C(!1),z(!1),v&&v()}),[p,w,h,v]),H=o.useCallback((()=>{_&&_()}),[_]),V=o.useCallback((e=>{B(e),e||I(2)}),[]),J=o.useCallback((e=>{const{target:o}=e,{scrollTop:t,offsetHeight:r,scrollHeight:l}=o;!!(t&&r&&l)&&t+r===l&&I(F+1)}),[F]),X=o.useCallback((e=>{if(e){const o=u.filter((o=>o.label.toLocaleLowerCase().includes(e.toLocaleLowerCase())));T(o),z(!0)}else T([]),z(!1)}),[u]);return e.jsx(r.ThemeProvider,Object.assign({theme:f},{children:e.jsxs(Ae,Object.assign({ref:P,className:E,width:$},{children:[e.jsx(a.Select,Object.assign({className:'ant-select-customize-input',onFocus:H,onBlur:G,onChange:q,onPopupScroll:J,suffixIcon:M,showSearch:i,onSearch:X,placeholder:R,value:w,allowClear:g,onDropdownVisibleChange:V,getPopupContainer:()=>P.current,mode:x,clearIcon:e.jsx(t.CloseIcon,{},void 0)},{children:Y}),void 0),e.jsx(Te,{children:l||'Выберите данные'},void 0),d&&e.jsx(Me,{children:d},void 0),N]}),void 0)}),void 0)},exports.TextArea=({resizable:t=!1,placeholder:l,editableHelp:n='Введите данные',disabled:a,value:s,error:c=!1,label:i,width:d,height:u,onChange:p,onBlur:h,onFocus:g})=>{const[b,m]=o.useState();o.useEffect((()=>m(s)),[s]);const x=o.useMemo((()=>{const e=[];return a&&e.push('disabled'),b&&e.push('placeholder_top'),c&&e.push('error'),e.join(' ')}),[a,c,b]),$=o.useCallback((()=>{g&&g()}),[g]),y=o.useCallback((()=>{h&&h()}),[h]),_=o.useCallback((e=>{const o=e.currentTarget.value;m(o),p&&p(o)}),[p]);return e.jsx(r.ThemeProvider,Object.assign({theme:f},{children:e.jsxs(Ne,Object.assign({className:x,width:d,height:u},{children:[e.jsx(qe,{resizable:t,onFocus:$,onBlur:y,onChange:_,value:b,placeholder:n},void 0),l&&e.jsx(Ge,{children:l},void 0),i&&e.jsx(He,{children:i},void 0),!!b&&!c&&e.jsx(Ve,{},void 0)]}),void 0)}),void 0)};
//# sourceMappingURL=index.js.map
