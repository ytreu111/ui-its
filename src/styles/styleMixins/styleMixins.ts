import * as d3 from 'd3';
import * as CSS from 'csstype';
import { ThemedStyledProps } from 'styled-components';

type SizeType = 'large' | 'default' | 'small' | 'extraSmall';

type TitleType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const defaultTextStyle = (props: ThemedStyledProps<any, any>, size: SizeType = 'default') => `
  font-weight: 600;
  font-size: ${props.theme.fontSettings[size]};
  line-height: 140%;
`;

const defaultTitleStyle = (props: ThemedStyledProps<any, any>, title: TitleType) => {
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
    ${d3.rgb(color).copy({ opacity: val })}
`;

export default {
  color: {
    opacityColor,
  },
  text: {
    defaultTextStyle,
    defaultTitleStyle,
  },
};