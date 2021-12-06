import styled from 'styled-components';

const GroupWrap = styled.div<{gap?: number}>`
  display: flex;

  & .group__button {
    flex-grow: 1;

    &:not(:last-of-type) {
      margin-right: ${(props) => `${props.gap}px`};
    }
  }

  & .group__button--active {
    flex-grow: 2;
  }
`

export const Styled = {
  GroupWrap,
}