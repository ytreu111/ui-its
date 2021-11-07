import * as CSS from 'csstype';
declare type SizeType = 'large' | 'default' | 'small' | 'extraSmall';
declare type TitleType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
declare const _default: {
    color: {
        opacityColor: (color: CSS.Property.Color, val: number) => string;
    };
    text: {
        defaultTextStyle: (props: any, size?: SizeType) => string;
        defaultTitleStyle: (props: any, title: TitleType) => string;
    };
};
export default _default;
