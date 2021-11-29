import styled, { keyframes } from "styled-components/macro";

import { IButtonProps } from "../model/Button.model";
import { styleMixins } from "styles";
import * as CSS from "csstype";

const {addPaddingsProps, addMarginsProps} = styleMixins.offset;

const {defaultTitleStyle} = styleMixins.text;

const {opacityColor} = styleMixins.color;

const parseIconSize = (props: any) => {
  console.log(props)
  const iconSize = props.iconSize;
  let width: CSS.Property.Width = '20px';
  let height: CSS.Property.Height = '20px';

  if (iconSize) {
    if (typeof iconSize === 'object') {
      width = iconSize.width;
      height = iconSize.height;
    } else {
      width = height = `${iconSize}px`;
    }
  }

  return `
    width: ${width};
    height: ${height};
  `
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const wave = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

const LoadingIconWrap = styled.div`
  position: absolute;
`

const TextWrap = styled.div``

const StyledButton = styled.button<IButtonProps>`
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

    & ${TextWrap} {
      color: transparent;
    }

    & ${LoadingIconWrap} {
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

const TransparentButton = styled(StyledButton)`
 background: transparent;
`

const PrimaryButton = styled(StyledButton)`
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
`

const DangerButton = styled(StyledButton)`
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
`

const OrangeButton = styled(StyledButton)`
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
`

const YellowButton = styled(StyledButton)`
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
`

const GreenButton = styled(StyledButton)`
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
`

const PurpleButton = styled(StyledButton)`
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
`

const MagentaButton = styled(StyledButton)`
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
`

const BlueButton = styled(StyledButton)`
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
`

export const Styled = {
  StyledButton,
  PrimaryButton,
  DangerButton,
  OrangeButton,
  YellowButton,
  GreenButton,
  PurpleButton,
  MagentaButton,
  BlueButton,
  LoadingIconWrap,
  TextWrap,
  TransparentButton,
}