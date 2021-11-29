import React, { FC, useCallback, useMemo } from "react";
import { LoadingIcon } from "ui-its-icons";
import { ThemeProvider } from "styled-components";

import { ButtonSizeEnum, ButtonStyle, ButtonType, ButtonTypeEnum, IButtonProps } from "./model/Button.model";
import { Styled } from "./style/Button.styled";
import theme from "styles/theme/theme";

const {
  StyledButton,
  LoadingIconWrap,
  TextWrap,
  PrimaryButton,
  DangerButton,
  OrangeButton,
  YellowButton,
  GreenButton,
  PurpleButton,
  MagentaButton,
  BlueButton,
  TransparentButton
} = Styled

const resolveButton = (props: IButtonProps, type?: ButtonType) => {
  switch (type) {
    case ButtonTypeEnum.primary: {
      return <PrimaryButton {...props}/>
    }
    case ButtonTypeEnum.danger: {
      return <DangerButton {...props}/>
    }
    case ButtonTypeEnum.orange: {
      return <OrangeButton {...props}/>
    }
    case ButtonTypeEnum.yellow: {
      return <YellowButton {...props}/>
    }
    case ButtonTypeEnum.green: {
      return <GreenButton {...props}/>
    }
    case ButtonTypeEnum.purple: {
      return <PurpleButton {...props}/>
    }
    case ButtonTypeEnum.magenta: {
      return <MagentaButton {...props}/>
    }
    case ButtonTypeEnum.blue: {
      return <BlueButton {...props}/>
    }
    case ButtonTypeEnum.transparent: {
      return <TransparentButton {...props}/>
    }
    default:
      return <StyledButton {...props}/>
  }
}

const Button: FC<IButtonProps> = (
  {
    disabled,
    style = ButtonStyle.default,
    type,
    icon,
    size = ButtonSizeEnum.default,
    loading,
    onClick,
    clickEffect = true,
    children,
    ...props
  }) => {
  const onClickEffect = useCallback((event: MouseEvent) => {
    const button = event.currentTarget as HTMLElement;

    const circle = document.createElement("span");
    const diameter = Math.max(button?.clientWidth, button?.clientHeight);
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

  const onClickEvent = useCallback((e: MouseEvent) => {
    if (!loading) {
      if (clickEffect) onClickEffect(e);
      if (onClick) onClick(e);
    }
  }, [clickEffect, onClickEffect, onClick, loading]);

  const className = useMemo(() => {
    const className: Array<string> = [];

    if (disabled) className.push('disabled');

    if (style && type) className.push(style);

    if (size) className.push(size);

    if (loading) className.push('loading');

    return className.join(' ')
  }, [disabled, loading, size, style, type]);

  const content = useMemo(() => {
    return (
      <>
        {icon}
        <TextWrap>{children}</TextWrap>
        {loading && <LoadingIconWrap><LoadingIcon/></LoadingIconWrap>}
      </>
    )
  }, [icon, children, loading]);

  const buttonProps = {
    className,
    children: content,
    onClick: onClickEvent,
    ...props,
  }

  return (
    <ThemeProvider theme={theme}>
      {resolveButton(buttonProps, type)}
    </ThemeProvider>
  )

}

export default Button;