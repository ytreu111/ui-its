import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useCallback, useMemo, useState, useEffect } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { LoadingIcon, StarIcon } from 'ui-its-icons';
import * as d3 from 'd3';
import { Input as Input$1 } from 'antd';

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var ButtonTypeEnum;
(function (ButtonTypeEnum) {
    ButtonTypeEnum["primary"] = "primary";
    ButtonTypeEnum["danger"] = "danger";
    ButtonTypeEnum["orange"] = "orange";
    ButtonTypeEnum["yellow"] = "yellow";
    ButtonTypeEnum["green"] = "green";
    ButtonTypeEnum["purple"] = "purple";
    ButtonTypeEnum["magenta"] = "magenta";
    ButtonTypeEnum["blue"] = "blue";
    ButtonTypeEnum["transparent"] = "transparent";
})(ButtonTypeEnum || (ButtonTypeEnum = {}));
var ButtonSizeEnum;
(function (ButtonSizeEnum) {
    ButtonSizeEnum["large"] = "large";
    ButtonSizeEnum["default"] = "default";
    ButtonSizeEnum["small"] = "small";
})(ButtonSizeEnum || (ButtonSizeEnum = {}));
var ButtonStyle;
(function (ButtonStyle) {
    //TODO Временно убрано по просьбе дизайнеров, тк оно не используется в системе
    // stroke = 'stroke',
    ButtonStyle["default"] = "default";
    ButtonStyle["translucent"] = "translucent";
})(ButtonStyle || (ButtonStyle = {}));

const theme = {
    fontSettings: {
        large: '16px',
        default: '14px',
        small: '13px',
        extraSmall: '12px',
    },
    decoration: {
        largeBorderRadiusOnlyTop: '16px 16px 0 0',
        defaultBorderRadiusOnlyTop: '8px 8px 0 0',
        smallBorderRadiusOnlyTop: '4px 4px 0 0',
        largeBorderRadiusOnlyBottom: '0 0 16px 16px',
        defaultBorderRadiusOnlyBottom: '0 0 8px 8px',
        smallBorderRadiusOnlyBottom: '0 0 4px 4px',
        largeBorderRadius: '16px',
        defaultBorderRadius: '8px',
        smallBorderRadius: '4px',
        defaultBackgroundFilter: 'blur(18px)',
        smallBackgroundFilter: 'blur(16px)',
        defaultBoxShadow: '0px 2px 8px rgba(107, 138, 228, 0.12)',
        greenBoxShadow: '0px 18px 40px rgba(39, 174, 96, 0.08)',
        orangeBoxShadow: '0px 18px 40px rgba(242, 153, 74, 0.08)',
        redBoxShadow: '0px 18px 40px rgba(235, 87, 87, 0.08)',
        primaryBoxShadow: '0px -18px 40px rgba(107, 138, 228, 0.02), 0px 18px 40px rgba(107, 138, 228, 0.08)',
    },
    colors: {
        gray_1000: '#1A2138',
        gray_800: '#6A7B9B',
        gray_600: '#C1CBD8',
        gray_200: '#F1F3F6',
        white: '#FFFFFF',
        red_600: '#CA3F4B',
        red_500: '#EB5757',
        red_300: '#F7BABA',
        red_opacity: 'rgba(235, 87, 87, 0.08)',
        orange_600: '#D07636',
        orange_500: '#F2994A',
        orange_300: '#FBCE92',
        orange_opacity: 'rgba(242, 153, 74, 0.08)',
        yellow_600: '#D0A637',
        yellow_500: '#F2C94C',
        yellow_300: '#FBE693',
        yellow_opacity: 'rgba(242, 201, 76, 0.08)',
        verdant_600: '#18814F',
        verdant_500: '#219653',
        verdant_300: '#76DF8E',
        verdant_opacity: 'rgba(33, 150, 83, 0.08)',
        green_600: '#1C955B',
        green_500: '#27AE60',
        green_300: '#7BE693',
        green_opacity: 'rgba(39, 174, 96, 0.08)',
        eco_600: '#51B283',
        eco_500: '#6FCF97',
        eco_300: '#ADF0BC',
        eco_opacity: 'rgba(111, 207, 151, 0.08)',
        blue_600: '#2263CB',
        blue_500: '#2F80ED',
        blue_300: '#81BFF9',
        blue_opacity: 'rgba(47, 128, 237, 0.08)',
        cyan_600: '#207ABC',
        cyan_500: '#2D9CDB',
        cyan_300: '#B3E1FD',
        cyan_opacity: 'rgba(45, 156, 219, 0.08)',
        azure_600: '#3EA2D0',
        azure_500: '#56CCF2',
        azure_300: '#99F1FB',
        azure_opacity: 'rgba(86, 204, 242, 0.08)',
        purple_600: '#793BC0',
        purple_500: '#9B51E0',
        purple_300: '#D197F5',
        purple_opacity: 'rgba(155, 81, 224, 0.08)',
        violet_600: '#954EBA',
        violet_500: '#BB6BD9',
        violet_300: '#E9A9F3',
        violet_opacity: 'rgba(187, 107, 217, 0.08)',
        magenta_600: '#C03BA0',
        magenta_500: '#E051AF',
        magenta_300: '#F597C2',
        magenta_opacity: 'rgba(224, 81, 175, 0.08)',
    },
};

const defaultTextStyle = (props, size = 'default') => `
  font-weight: 600;
  font-size: ${props.theme.fontSettings[size]};
  line-height: 140%;
`;
const defaultTitleStyle$1 = (props, title) => {
    switch (title) {
        case 1: {
            return `
        font-weight: bold;
        font-size: 48px;
        line-height: 59px;
      `;
        }
        case 2: {
            return `
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
      `;
        }
        case 3: {
            return `
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
      `;
        }
        case 4: {
            return `
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
      `;
        }
        case 5: {
            return `
        font-weight: bold;
        font-size: ${props.theme.fontSettings.large};
        line-height: 140%;
      `;
        }
        case 6: {
            return `
        font-weight: bold;
        font-size: ${props.theme.fontSettings.default};
        line-height: 140%;
      `;
        }
        case 7: {
            return `
        font-weight: bold;
        font-size: ${props.theme.fontSettings.small};
        line-height: 140%;
      `;
        }
    }
};
const opacityColor$1 = (color, val) => `
    ${d3.rgb(color).copy({ opacity: val })}
`;
const addMarginsProps$1 = (props) => {
    var _a, _b, _c, _d, _e;
    return `
    margin: ${(_a = props.m) !== null && _a !== void 0 ? _a : ''};
    margin-top: ${(_b = props.mt) !== null && _b !== void 0 ? _b : ''};
    margin-bottom: ${(_c = props.mb) !== null && _c !== void 0 ? _c : ''};
    margin-left: ${(_d = props.ml) !== null && _d !== void 0 ? _d : ''};
    margin-right: ${(_e = props.mr) !== null && _e !== void 0 ? _e : ''};
`;
};
const addPaddingsProps$1 = (props) => {
    var _a, _b, _c, _d, _e;
    return `
    padding: ${(_a = props.p) !== null && _a !== void 0 ? _a : ''};
    padding-top: ${(_b = props.pt) !== null && _b !== void 0 ? _b : ''};
    padding-bottom: ${(_c = props.pb) !== null && _c !== void 0 ? _c : ''};
    padding-left: ${(_d = props.pl) !== null && _d !== void 0 ? _d : ''};
    padding-right: ${(_e = props.pr) !== null && _e !== void 0 ? _e : ''};
`;
};
var styleMixins = {
    offset: {
        addMarginsProps: addMarginsProps$1,
        addPaddingsProps: addPaddingsProps$1,
    },
    color: {
        opacityColor: opacityColor$1,
    },
    text: {
        defaultTextStyle,
        defaultTitleStyle: defaultTitleStyle$1,
    },
};

const { addPaddingsProps, addMarginsProps } = styleMixins.offset;
const { defaultTitleStyle } = styleMixins.text;
const { opacityColor } = styleMixins.color;
const parseIconSize = (props) => {
    console.log(props);
    const iconSize = props.iconSize;
    let width = '20px';
    let height = '20px';
    if (iconSize) {
        if (typeof iconSize === 'object') {
            width = iconSize.width;
            height = iconSize.height;
        }
        else {
            width = height = `${iconSize}px`;
        }
    }
    return `
    width: ${width};
    height: ${height};
  `;
};
const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const wave = keyframes `
  to {
    transform: scale(4);
    opacity: 0;
  }
`;
const LoadingIconWrap$1 = styled.div `
  position: absolute;
`;
const TextWrap$1 = styled.div ``;
const StyledButton$1 = styled.button `
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

  ${(props) => defaultTitleStyle(props, 7)}
  ${(props) => props.fontSize ? 'font-size:' + props.fontSize + ';' : ''}

  padding: 11px;
  ${(props) => addMarginsProps(props)};

  width: ${(props) => (props.width ? props.width : 'auto')};
  border-radius: ${(props) => (props.rounded ? '50%' : props.theme.decoration.defaultBorderRadius)};

  &.disabled {
    pointer-events: none;
  }

  &.translucent {
    backdrop-filter: ${(props) => props.theme.decoration.smallBackgroundFilter};
  }

  &.stroke {
    background: white !important;
    border: 2px solid transparent;
  }

  &.small {
    padding: 5px;
    height: 28px;
  }

  &.large {
    height: 56px;
    padding: 11px;
    ${(props) => defaultTitleStyle(props, 5)}
  }

  ${(props) => addPaddingsProps(props)}
  & svg {
    ${(props) => parseIconSize(props)};
    color: ${(props) => props.iconColor};
    margin-right: ${(props) => props.iconMargin !== undefined ? `${props.iconMargin}px` : '8px'};
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

    & ${TextWrap$1} {
      color: transparent;
    }

    & ${LoadingIconWrap$1} {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
        animation: ${rotate} 1.3s linear infinite;
        color: inherit;
        margin-right: 0;
      }
    }

  }

  & .wave {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${wave} .6s linear;
    background-color: ${(props) => opacityColor(props.theme.colors.white, 0.5)};
  }
`;
styled(StyledButton$1) `
 background: transparent;
`;
const PrimaryButton$1 = styled(StyledButton$1) `
  background: ${(props) => props.theme.colors.blue_500};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.blue_600};
  }

  &.disabled {
    background: ${(props) => props.theme.colors.blue_300};
  }

  &.translucent {
    background: ${(props) => opacityColor(props.theme.colors.blue_500, 0.08)};
    color: ${(props) => props.theme.colors.blue_500};

    &:hover {
      background: ${(props) => opacityColor(props.theme.colors.blue_500, 0.16)};
    }

    &.disabled {
      color: ${(props) => props.theme.colors.blue_300};
    }
  }

  &.stroke {
    border-color: ${(props) => props.theme.colors.blue_500};
    color: ${(props) => props.theme.colors.blue_500};

    &.disabled {
      border-color: ${(props) => props.theme.colors.blue_300};
      color: ${(props) => props.theme.colors.blue_300};
    }
  }
`;
const DangerButton$1 = styled(StyledButton$1) `
  background: ${(props) => props.theme.colors.red_500};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.red_600};
  }

  &.disabled {
    background: ${(props) => props.theme.colors.red_300};
  }

  &.translucent {
    background: ${(props) => opacityColor(props.theme.colors.red_500, 0.08)};
    color: ${(props) => props.theme.colors.red_500};

    &:hover {
      background: ${(props) => opacityColor(props.theme.colors.red_500, 0.16)};
    }

    &.disabled {
      color: ${(props) => props.theme.colors.red_300};
    }
  }

  &.stroke {
    border-color: ${(props) => props.theme.colors.red_500};
    color: ${(props) => props.theme.colors.red_500};

    &.disabled {
      border-color: ${(props) => props.theme.colors.red_300};
      color: ${(props) => props.theme.colors.red_300};
    }
  }
`;
const OrangeButton$1 = styled(StyledButton$1) `
  background: ${(props) => props.theme.colors.orange_500};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.orange_600};
  }

  &.disabled {
    background: ${(props) => props.theme.colors.orange_300};
  }

  &.translucent {
    background: ${(props) => opacityColor(props.theme.colors.orange_500, 0.08)};
    color: ${(props) => props.theme.colors.orange_500};

    &:hover {
      background: ${(props) => opacityColor(props.theme.colors.orange_500, 0.16)};
    }

    &.disabled {
      color: ${(props) => props.theme.colors.orange_300};
    }
  }

  &.stroke {
    border-color: ${(props) => props.theme.colors.orange_500};
    color: ${(props) => props.theme.colors.orange_500};

    &.disabled {
      border-color: ${(props) => props.theme.colors.orange_300};
      color: ${(props) => props.theme.colors.orange_300};
    }
  }
`;
const YellowButton$1 = styled(StyledButton$1) `
  background: ${(props) => props.theme.colors.yellow_500};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.yellow_600};
  }

  &.disabled {
    background: ${(props) => props.theme.colors.yellow_300};
  }

  &.translucent {
    background: ${(props) => opacityColor(props.theme.colors.yellow_500, 0.08)};
    color: ${(props) => props.theme.colors.yellow_500};

    &:hover {
      background: ${(props) => opacityColor(props.theme.colors.yellow_500, 0.16)};
    }

    &.disabled {
      color: ${(props) => props.theme.colors.yellow_300};
    }
  }

  &.stroke {
    border-color: ${(props) => props.theme.colors.yellow_500};
    color: ${(props) => props.theme.colors.yellow_500};

    &.disabled {
      border-color: ${(props) => props.theme.colors.yellow_300};
      color: ${(props) => props.theme.colors.yellow_300};
    }
  }
`;
const GreenButton$1 = styled(StyledButton$1) `
  background: ${(props) => props.theme.colors.green_500};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.green_600};
  }

  &.disabled {
    background: ${(props) => props.theme.colors.green_300};
  }

  &.translucent {
    background: ${(props) => opacityColor(props.theme.colors.green_500, 0.08)};
    color: ${(props) => props.theme.colors.green_500};

    &:hover {
      background: ${(props) => opacityColor(props.theme.colors.green_500, 0.16)};
    }

    &.disabled {
      color: ${(props) => props.theme.colors.green_300};
    }
  }

  &.stroke {
    border-color: ${(props) => props.theme.colors.green_500};
    color: ${(props) => props.theme.colors.green_500};

    &.disabled {
      border-color: ${(props) => props.theme.colors.green_300};
      color: ${(props) => props.theme.colors.green_300};
    }
  }
`;
const PurpleButton$1 = styled(StyledButton$1) `
  background: ${(props) => props.theme.colors.purple_500};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.purple_600};
  }

  &.disabled {
    background: ${(props) => props.theme.colors.purple_300};
  }

  &.translucent {
    background: ${(props) => opacityColor(props.theme.colors.purple_500, 0.08)};
    color: ${(props) => props.theme.colors.purple_500};

    &:hover {
      background: ${(props) => opacityColor(props.theme.colors.purple_500, 0.16)};
    }

    &.disabled {
      color: ${(props) => props.theme.colors.purple_300};
    }
  }

  &.stroke {
    border-color: ${(props) => props.theme.colors.purple_500};
    color: ${(props) => props.theme.colors.purple_500};

    &.disabled {
      border-color: ${(props) => props.theme.colors.purple_300};
      color: ${(props) => props.theme.colors.purple_300};
    }
  }
`;
const MagentaButton$1 = styled(StyledButton$1) `
  background: ${(props) => props.theme.colors.magenta_500};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.magenta_600};
  }

  &.disabled {
    background: ${(props) => props.theme.colors.magenta_300};
  }

  &.translucent {
    background: ${(props) => opacityColor(props.theme.colors.magenta_500, 0.08)};
    color: ${(props) => props.theme.colors.magenta_500};

    &:hover {
      background: ${(props) => opacityColor(props.theme.colors.magenta_500, 0.16)};
    }

    &.disabled {
      color: ${(props) => props.theme.colors.magenta_300};
    }
  }

  &.stroke {
    border-color: ${(props) => props.theme.colors.magenta_500};
    color: ${(props) => props.theme.colors.magenta_500};

    &.disabled {
      border-color: ${(props) => props.theme.colors.magenta_300};
      color: ${(props) => props.theme.colors.magenta_300};
    }
  }
`;
const BlueButton$1 = styled(StyledButton$1) `
  background: ${(props) => props.theme.colors.cyan_500};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.cyan_600};
  }

  &.disabled {
    background: ${(props) => props.theme.colors.cyan_300};
  }

  &.translucent {
    background: ${(props) => opacityColor(props.theme.colors.cyan_500, 0.08)};
    color: ${(props) => props.theme.colors.cyan_500};

    &:hover {
      background: ${(props) => opacityColor(props.theme.colors.cyan_500, 0.16)};
    }

    &.disabled {
      color: ${(props) => props.theme.colors.cyan_300};
    }
  }

  &.stroke {
    border-color: ${(props) => props.theme.colors.cyan_500};
    color: ${(props) => props.theme.colors.cyan_500};

    &.disabled {
      border-color: ${(props) => props.theme.colors.cyan_300};
      color: ${(props) => props.theme.colors.cyan_300};
    }
  }
`;
const Styled$1 = {
    StyledButton: StyledButton$1,
    PrimaryButton: PrimaryButton$1,
    DangerButton: DangerButton$1,
    OrangeButton: OrangeButton$1,
    YellowButton: YellowButton$1,
    GreenButton: GreenButton$1,
    PurpleButton: PurpleButton$1,
    MagentaButton: MagentaButton$1,
    BlueButton: BlueButton$1,
    LoadingIconWrap: LoadingIconWrap$1,
    TextWrap: TextWrap$1,
};

const { StyledButton, LoadingIconWrap, TextWrap, PrimaryButton, DangerButton, OrangeButton, YellowButton, GreenButton, PurpleButton, MagentaButton, BlueButton, } = Styled$1;
const resolveButton = (props, type) => {
    switch (type) {
        case ButtonTypeEnum.primary: {
            return jsx(PrimaryButton, Object.assign({}, props), void 0);
        }
        case ButtonTypeEnum.danger: {
            return jsx(DangerButton, Object.assign({}, props), void 0);
        }
        case ButtonTypeEnum.orange: {
            return jsx(OrangeButton, Object.assign({}, props), void 0);
        }
        case ButtonTypeEnum.yellow: {
            return jsx(YellowButton, Object.assign({}, props), void 0);
        }
        case ButtonTypeEnum.green: {
            return jsx(GreenButton, Object.assign({}, props), void 0);
        }
        case ButtonTypeEnum.purple: {
            return jsx(PurpleButton, Object.assign({}, props), void 0);
        }
        case ButtonTypeEnum.magenta: {
            return jsx(MagentaButton, Object.assign({}, props), void 0);
        }
        case ButtonTypeEnum.blue: {
            return jsx(BlueButton, Object.assign({}, props), void 0);
        }
        case ButtonTypeEnum.transparent: {
            return jsx(BlueButton, Object.assign({}, props), void 0);
        }
        default:
            return jsx(StyledButton, Object.assign({}, props), void 0);
    }
};
const Button = (_a) => {
    var { disabled, style = ButtonStyle.default, type, icon, size = ButtonSizeEnum.default, loading, onClick, clickEffect = true, children } = _a, props = __rest(_a, ["disabled", "style", "type", "icon", "size", "loading", "onClick", "clickEffect", "children"]);
    const onClickEffect = useCallback((event) => {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button === null || button === void 0 ? void 0 : button.clientWidth, button === null || button === void 0 ? void 0 : button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("wave");
        const wave = button.querySelector(".wave");
        if (wave) {
            wave.remove();
        }
        button.appendChild(circle);
    }, []);
    const onClickEvent = useCallback((e) => {
        if (!loading) {
            if (clickEffect)
                onClickEffect(e);
            if (onClick)
                onClick(e);
        }
    }, [clickEffect, onClickEffect, onClick, loading]);
    const className = useMemo(() => {
        const className = [];
        if (disabled)
            className.push('disabled');
        if (style && type)
            className.push(style);
        if (size)
            className.push(size);
        if (loading)
            className.push('loading');
        return className.join(' ');
    }, [disabled, loading, size, style, type]);
    const content = useMemo(() => {
        return (jsxs(Fragment, { children: [icon, jsx(TextWrap, { children: children }, void 0), loading && jsx(LoadingIconWrap, { children: jsx(LoadingIcon, {}, void 0) }, void 0)] }, void 0));
    }, [icon, children, loading]);
    const buttonProps = Object.assign(Object.assign({}, props), { className, children: content, onClick: onClickEvent });
    return (jsx(ThemeProvider, Object.assign({ theme: theme }, { children: resolveButton(buttonProps, type) }), void 0));
};

const StyledInputContainer$1 = styled.div `
  display: flex;
  flex-direction: column;
  
  & * {
    box-sizing: border-box;
  }
`;
const StyledInputLabel$1 = styled.span `
  margin-top: 4px;
  font-weight: 600;
  font-size: 13px;
  line-height: 140%;
  color: #6A7B9B;
`;
const StyledInputEditablePlaceholder$1 = styled.span `
  color: #6A7B9B;
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
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
`;
const OptionalInput$1 = styled(Button) `
  position: absolute;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
`;
const StyledInputWrap$1 = styled.div `
  overflow: hidden;
  position: relative;
  height: 56px;
  width: 100%;
  cursor: text;
  max-width: ${(props) => props.width
    ? typeof props.width === "number" ? `${props.width}px` : props.width
    : '306px'};
  border-radius: 8px;
  background: #f1f3f6;
  border: 2px solid transparent;
  display: flex;

  &:hover {
    border: 2px solid #2F80ED;
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

  &.small {
    height: 40px;

    & .ant-input {
      padding: 11px 14px;

      &::placeholder {
        color: #6A7B9B;
      }
    }
  }

  &.focus {
    border-color: #2F80ED;

    & .ant-input::placeholder {
      color: #c1cbd8;
    }
  }

  &.placeholder_top {
    & ${StyledInputEditablePlaceholder$1} {
      font-size: 13px;
      color: #2F80ED;
      transform: translateY(-10px);
    }
  }

  &.icon {

    & .ant-input-affix-wrapper {
      width: 100%;
    }

    & ${StyledInputEditablePlaceholder$1} {
      left: 52px;
      width: calc(100% - 68px);
    }

    & .ant-input-prefix {
      left: 16px;
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      color: #2F80ED;
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
    border-color: #EB5757;

    & .ant-input-prefix,
    & ${StyledInputEditablePlaceholder$1},
    & + ${StyledInputLabel$1} {
      color: #EB5757;
    }
  }

  &.clear {
    & .ant-input {
      padding-right: 8px;
    }
  }

  &.disabled {
    background: #f1f3f6;
    border-color: transparent;

    & .ant-input-prefix,
    ${StyledInputEditablePlaceholder$1} {
      color: #c1cbd8;
    }
  }

  &.auto {
    width: 100%;
    max-width: 100%;
  }
`;
const Styled = {
    StyledInputContainer: StyledInputContainer$1,
    StyledInputLabel: StyledInputLabel$1,
    StyledInputWrap: StyledInputWrap$1,
    OptionalInput: OptionalInput$1,
    StyledInputEditablePlaceholder: StyledInputEditablePlaceholder$1,
};

const { StyledInputContainer, StyledInputWrap, StyledInputEditablePlaceholder, StyledInputLabel, OptionalInput, } = Styled;
const Input = ({ value = '', disabled, small, placeholder, editableHelp = 'Введите данные', label, icon, error, autoWidth, onChange, onBlur, onFocus, name, width, optional, optionalIcon, }) => {
    const [visiblePlaceholder, setVisiblePlaceholder] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    useEffect(() => setInputValue(value !== null && value !== void 0 ? value : undefined), [value]);
    const placeholderText = useMemo(() => (visiblePlaceholder ? editableHelp : placeholder), [editableHelp, placeholder, visiblePlaceholder]);
    const classNameWrap = useMemo(() => {
        const className = [];
        if (small)
            className.push('small');
        if (autoWidth)
            className.push('auto');
        if (icon)
            className.push('icon');
        if (visiblePlaceholder)
            className.push('focus');
        if (visiblePlaceholder || !!inputValue)
            className.push('placeholder_top');
        if (error)
            className.push('error');
        if (disabled)
            className.push('disabled');
        if (optional)
            className.push('optional');
        return className.join(' ');
    }, [autoWidth, disabled, error, icon, inputValue, optional, small, visiblePlaceholder]);
    const optionalButton = useMemo(() => {
        const icon = optionalIcon ? optionalIcon : jsx(StarIcon, {}, void 0);
        const iconColor = error ? theme.colors.red_500 : theme.colors.blue_500;
        return (jsx(OptionalInput, { p: 0, iconMargin: 0, icon: icon, type: 'transparent', iconColor: iconColor, onClick: optional }, void 0));
    }, [error, optional, optionalIcon]);
    const onFocusInput = useCallback(() => {
        setVisiblePlaceholder(true);
        if (onFocus)
            onFocus();
    }, [onFocus]);
    const onBlurInput = useCallback(() => {
        setVisiblePlaceholder(false);
        if (onBlur)
            onBlur();
    }, [onBlur]);
    const onChangeInput = useCallback((e) => {
        setInputValue(e.currentTarget.value);
        if (onChange)
            onChange(e.currentTarget.value);
    }, [onChange]);
    return (jsxs(StyledInputContainer, { children: [jsxs(StyledInputWrap, Object.assign({ className: classNameWrap, width: width }, { children: [!small && jsx(StyledInputEditablePlaceholder, { children: placeholder }, void 0), jsx(Input$1, { onFocus: onFocusInput, onBlur: onBlurInput, disabled: disabled, prefix: icon, value: inputValue, placeholder: placeholderText, onChange: onChangeInput, name: name }, void 0), optional && optionalButton] }), void 0), label && jsx(StyledInputLabel, { children: label }, void 0)] }, void 0));
};

export { Button, Input };
//# sourceMappingURL=index.esm.js.map
