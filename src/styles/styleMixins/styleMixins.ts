import * as d3 from 'd3';
import * as CSS from 'csstype';
import { ThemedStyledProps } from 'styled-components';
import { ThemeI } from "styles/theme/model/ThemeI";

type SizeType = 'large' | 'default' | 'small' | 'extraSmall';

type TitleType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const defaultTextStyle = (props: ThemedStyledProps<any, ThemeI>, size: SizeType = 'default') => `
  font-weight: 600;
  font-size: ${props.theme.fontSettings[size]};
  line-height: 140%;
`;

const defaultTitleStyle = (props: ThemedStyledProps<any, ThemeI>, title: TitleType) => {
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

const opacityColor = (color: CSS.Property.Color, val: number) => `
    ${d3.rgb(color).copy({opacity: val})}
`;

const addMarginsProps = (props: ThemedStyledProps<any, ThemeI>) => `
    margin: ${props.m ?? ''};
    margin-top: ${props.mt ?? ''};
    margin-bottom: ${props.mb ?? ''};
    margin-left: ${props.ml ?? ''};
    margin-right: ${props.mr ?? ''};
`;

const addPaddingsProps = (props: ThemedStyledProps<any, ThemeI>) => `
    padding: ${props.p ?? ''};
    padding-top: ${props.pt ?? ''};
    padding-bottom: ${props.pb ?? ''};
    padding-left: ${props.pl ?? ''};
    padding-right: ${props.pr ?? ''};
`;

const hideScrollbar = () => `
  &::-webkit-scrollbar {
    display: none;
  }
`;

const scrollbarThin = (props: ThemedStyledProps<any, ThemeI>) => `
  * {
      ::-webkit-scrollbar {
      width: 9px;
      height: 9px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
      background: ${props.theme.colors.white};
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
      background: ${props.theme.colors.gray_600};
      border-radius: ${props.theme.decoration.defaultBorderRadius};
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
      background: ${props.theme.colors.gray_800};
      }
    }
`;

const getDefaultBeatifiedScrollbar = (props: ThemedStyledProps<any, ThemeI>) => `
    ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border: none;
    width: 10px;
    border-radius: ${props.theme.decoration.defaultBorderRadius};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props.theme.colors.gray_600};
    border-radius: ${props.theme.decoration.defaultBorderRadius};
  }
`;

export default {
  offset: {
    addMarginsProps,
    addPaddingsProps,
  },
  color: {
    opacityColor,
  },
  text: {
    defaultTextStyle,
    defaultTitleStyle,
  },
  other: {
    hideScrollbar,
    scrollbarThin,
    getDefaultBeatifiedScrollbar,
  }
};