import*as e from'd3';import{jsx as t,jsxs as o}from'react/jsx-runtime';import{useState as r,useMemo as a,useCallback as n}from'react';import{Input as l}from'antd';import{ThemeProvider as p}from'styled-components';import i from'styled-components/macro';const d={fontSettings:{large:'16px',default:'14px',small:'13px',extraSmall:'12px'},decoration:{largeBorderRadiusOnlyTop:'16px 16px 0 0',defaultBorderRadiusOnlyTop:'8px 8px 0 0',largeBorderRadiusOnlyBottom:'0 0 16px 16px',defaultBorderRadiusOnlyBottom:'0 0 8px 8px',largeBorderRadius:'16px',defaultBorderRadius:'8px',defaultBackgroundFilter:'blur(18px)',smallBackgroundFilter:'blur(16px)',defaultBoxShadow:'0px 2px 8px rgba(107, 138, 228, 0.12)',greenBoxShadow:'0px 18px 40px rgba(39, 174, 96, 0.08)',orangeBoxShadow:'0px 18px 40px rgba(242, 153, 74, 0.08)',redBoxShadow:'0px 18px 40px rgba(235, 87, 87, 0.08)',primaryBoxShadow:'0px -18px 40px rgba(107, 138, 228, 0.02), 0px 18px 40px rgba(107, 138, 228, 0.08)'},colors:{gray_1000:'#1A2138',gray_800:'#6A7B9B',gray_600:'#C1CBD8',gray_200:'#F1F3F6',white:'#FFFFFF',red_600:'#CA3F4B',red_500:'#EB5757',red_300:'#F7BABA',red_opacity:'rgba(235, 87, 87, 0.08)',orange_600:'#D07636',orange_500:'#F2994A',orange_300:'#FBCE92',orange_opacity:'rgba(242, 153, 74, 0.08)',yellow_600:'#D0A637',yellow_500:'#F2C94C',yellow_300:'#FBE693',yellow_opacity:'rgba(242, 201, 76, 0.08)',verdant_600:'#18814F',verdant_500:'#219653',verdant_300:'#76DF8E',verdant_opacity:'rgba(33, 150, 83, 0.08)',green_600:'#1C955B',green_500:'#27AE60',green_300:'#7BE693',green_opacity:'rgba(39, 174, 96, 0.08)',eco_600:'#51B283',eco_500:'#6FCF97',eco_300:'#ADF0BC',eco_opacity:'rgba(111, 207, 151, 0.08)',blue_600:'#2263CB',blue_500:'#2F80ED',blue_300:'#81BFF9',blue_opacity:'rgba(47, 128, 237, 0.08)',cyan_600:'#207ABC',cyan_500:'#2D9CDB',cyan_300:'#B3E1FD',cyan_opacity:'rgba(45, 156, 219, 0.08)',azure_600:'#3EA2D0',azure_500:'#56CCF2',azure_300:'#99F1FB',azure_opacity:'rgba(86, 204, 242, 0.08)',purple_600:'#793BC0',purple_500:'#9B51E0',purple_300:'#D197F5',purple_opacity:'rgba(155, 81, 224, 0.08)',violet_600:'#954EBA',violet_500:'#BB6BD9',violet_300:'#E9A9F3',violet_opacity:'rgba(187, 107, 217, 0.08)',magenta_600:'#C03BA0',magenta_500:'#E051AF',magenta_300:'#F597C2',magenta_opacity:'rgba(224, 81, 175, 0.08)'}};var s={color:{opacityColor:(t,o)=>`\n    ${e.rgb(t).copy({opacity:o})}\n`},text:{defaultTextStyle:(e,t='default')=>`\n  font-weight: 600;\n  font-size: ${e.theme.fontSettings[t]};\n  line-height: 140%;\n`,defaultTitleStyle:(e,t)=>{switch(t){case 1:return'\n        font-weight: bold;\n        font-size: 48px;\n        line-height: 59px;\n      ';case 2:return'\n        font-weight: bold;\n        font-size: 36px;\n        line-height: 45px;\n      ';case 3:return'\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 30px;\n      ';case 4:return'\n        font-weight: bold;\n        font-size: 18px;\n        line-height: 22px;\n      ';case 5:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.large};\n        line-height: 140%;\n      `;case 6:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.default};\n        line-height: 140%;\n      `;case 7:return`\n        font-weight: bold;\n        font-size: ${e.theme.fontSettings.small};\n        line-height: 140%;\n      `}}}};const{defaultTextStyle:c}=s.text,h=i.div`
  width: 100%;
  max-width: 306px;
`,u=i.span`
  ${e=>c(e,'small')}
  margin-top: 4px;
  color: ${e=>e.theme.colors.gray_800};
`,g=i.span`
  ${e=>c(e)}
  color: ${e=>e.theme.colors.gray_800};
  position: absolute;
  left: 16px;
  top: 17px;
  z-index: 1;
  text-align: left;
  user-select: none;
  pointer-events: none;
  transition: all 0.2s ease;
`,x={StyledInputContainer:h,StyledInputLabel:u,StyledInputWrap:i.div`
  overflow: hidden;
  position: relative;
  height: 56px;
  width: 100%;
  border-radius: ${e=>e.theme.decoration.defaultBorderRadius};
  background: ${e=>e.theme.colors.gray_200};
  border: 2px solid transparent;
  display: flex;

  &:hover {
    border: 2px solid ${e=>e.theme.colors.blue_500};
  }

  & .ant-input {
    ${e=>c(e)}
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: ${e=>e.theme.colors.gray_1000};
    padding: 26px 40px 6px 16px;
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
    width: 100%;
  }

  &.small {
    height: 40px;
    max-width: 184px;

    & .ant-input {
      padding: 11px 14px;

      &::placeholder {
        color: ${e=>e.theme.colors.gray_800};
      }
    }

  }

  &.focus {
    border-color: ${e=>e.theme.colors.blue_500};
    background: ${e=>e.theme.colors.white};

    & .ant-input::placeholder {
      color: ${e=>e.theme.colors.gray_600};
    }
  }

  &.placeholder_top {
    & ${g} {
      font-size: ${e=>e.theme.fontSettings.small};
      color: ${e=>e.theme.colors.blue_500};
      transform: translateY(-10px);
    }
  }

  &.icon {
    & ${g} {
      left: 52px;
    }

    & svg {
      width: 20px;
      height: 20px;
    }

    & .ant-input-prefix {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: ${e=>e.theme.colors.blue_500};
    }

    & .ant-input {
      padding-left: 52px;
    }
  }

  &.error {
    border-color: ${e=>e.theme.colors.red_500};

    ${g},
    ${u},
    & .ant-input-prefix {
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

    ${g} {
      color: ${e=>e.theme.colors.gray_600};
    }
  }

  &.auto {
    max-width: 100%;
  }
`,StyledInputEditablePlaceholder:g},{StyledInputContainer:_,StyledInputWrap:m,StyledInputEditablePlaceholder:b,StyledInputLabel:f}=x,y=({value:e='',disabled:i,small:s,placeholder:c,editableHelp:h='Введите данные',label:u,icon:g,error:x,allowClear:y,autoWidth:B,onChange:F,onBlur:w,onFocus:$,name:v})=>{const[C,S]=r(!1),[A,E]=r(e),z=a((()=>!(!y||!A||i)),[y,i,A]),D=a((()=>C?h:c),[h,c,C]),I=a((()=>{const e=[];return s&&e.push('small'),B&&e.push('auto'),g&&e.push('icon'),C&&e.push('focus'),(C||A)&&e.push('placeholder_top'),x&&e.push('error'),z&&e.push('clear'),i&&e.push('disabled'),e.join(' ')}),[B,i,x,g,A,z,s,C]),R=n((()=>{S(!0),$&&$()}),[$]),T=n((()=>{S(!1),w&&w()}),[w]),k=n((e=>{E(e.currentTarget.value),F&&F(e.currentTarget.value)}),[F]);return t(p,Object.assign({theme:d},{children:o(_,{children:[o(m,Object.assign({className:I},{children:[!s&&t(b,{children:c},void 0),t(l,{onFocus:R,onBlur:T,disabled:i,prefix:g,value:A,placeholder:D,onChange:k,name:v},void 0)]}),void 0),u&&t(f,{children:u},void 0)]},void 0)}),void 0)};export{y as Input,s as styleMixins,d as theme};
//# sourceMappingURL=index.esm.js.map
