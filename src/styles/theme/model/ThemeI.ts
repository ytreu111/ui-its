import * as CSS from 'csstype';

export interface ThemeI {
  fontSettings: {
    large: CSS.Property.FontSize;
    default: CSS.Property.FontSize;
    small: CSS.Property.FontSize;
    extraSmall: CSS.Property.FontSize;
  },
  padding: {
    default: CSS.Property.Padding,
    small: CSS.Property.Padding,
  },
  colors: {
    gray_1000: CSS.Property.Color;
    gray_800: CSS.Property.Color;
    gray_600: CSS.Property.Color;
    gray_200: CSS.Property.Color;
    white: CSS.Property.Color;
    red_600: CSS.Property.Color;
    red_500: CSS.Property.Color;
    red_300: CSS.Property.Color;
    red_opacity: CSS.Property.Color;
    orange_600: CSS.Property.Color;
    orange_500: CSS.Property.Color;
    orange_300: CSS.Property.Color;
    orange_opacity: CSS.Property.Color;
    yellow_600: CSS.Property.Color;
    yellow_500: CSS.Property.Color;
    yellow_300: CSS.Property.Color;
    yellow_opacity: CSS.Property.Color;
    verdant_600: CSS.Property.Color;
    verdant_500: CSS.Property.Color;
    verdant_300: CSS.Property.Color;
    verdant_opacity: CSS.Property.Color;
    green_600: CSS.Property.Color;
    green_500: CSS.Property.Color;
    green_300: CSS.Property.Color;
    green_opacity: CSS.Property.Color;
    eco_600: CSS.Property.Color;
    eco_500: CSS.Property.Color;
    eco_300: CSS.Property.Color;
    eco_opacity: CSS.Property.Color;
    blue_600: CSS.Property.Color;
    blue_500: CSS.Property.Color;
    blue_300: CSS.Property.Color;
    blue_opacity: CSS.Property.Color;
    cyan_600: CSS.Property.Color;
    cyan_500: CSS.Property.Color;
    cyan_300: CSS.Property.Color;
    cyan_opacity: CSS.Property.Color;
    azure_600: CSS.Property.Color;
    azure_500: CSS.Property.Color;
    azure_300: CSS.Property.Color;
    azure_opacity: CSS.Property.Color;
    purple_600: CSS.Property.Color;
    purple_500: CSS.Property.Color;
    purple_300: CSS.Property.Color;
    purple_opacity: CSS.Property.Color;
    violet_600: CSS.Property.Color;
    violet_500: CSS.Property.Color;
    violet_300: CSS.Property.Color;
    violet_opacity: CSS.Property.Color;
    magenta_600: CSS.Property.Color;
    magenta_500: CSS.Property.Color;
    magenta_300: CSS.Property.Color;
    magenta_opacity: CSS.Property.Color;
  },
  decoration: {
    largeBorderRadiusOnlyTop: CSS.Property.BorderRadius;
    defaultBorderRadiusOnlyTop: CSS.Property.BorderRadius;
    smallBorderRadiusOnlyTop: CSS.Property.BorderRadius;
    largeBorderRadiusOnlyBottom: CSS.Property.BorderRadius;
    defaultBorderRadiusOnlyBottom: CSS.Property.BorderRadius;
    smallBorderRadiusOnlyBottom: CSS.Property.BorderRadius;
    largeBorderRadius: CSS.Property.BorderRadius;
    defaultBorderRadius: CSS.Property.BorderRadius;
    smallBorderRadius: CSS.Property.BorderRadius;
    defaultBackgroundFilter: CSS.Property.BackdropFilter;
    smallBackgroundFilter: CSS.Property.BackdropFilter;
    defaultBoxShadow: CSS.Property.BoxShadow;
    greenBoxShadow: CSS.Property.BoxShadow;
    orangeBoxShadow: CSS.Property.BoxShadow;
    redBoxShadow: CSS.Property.BoxShadow;
    primaryBoxShadow: CSS.Property.BoxShadow;
  }
}