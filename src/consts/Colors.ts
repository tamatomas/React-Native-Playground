import {rgbToRgba} from '../utils';

type Color = {
  hex: string;
  rgb?: string;
  rgba?: (opacity: number) => string | undefined;
};

type ColorsType = {
  [index: string]: Color;
};

export const Colors: ColorsType = {
  BCKG: {
    hex: '#E6E8F7',
    rgb: 'rgb(230, 232, 247)',
    rgba: opacity => rgbToRgba(Colors.BCKG.rgb, opacity),
  },
  PRIMARY: {
    hex: '#BA3651',
    rgb: 'rgb(186, 54, 81)',
    rgba: opacity => rgbToRgba(Colors.PRIMARY.rgb, opacity),
  },
  SECONDARY: {
    hex: '#5A72DA',
    rgb: 'rgb(90, 114, 218)',
    rgba: opacity => rgbToRgba(Colors.SECONDARY.rgb, opacity),
  },
  GREEN_1: {
    hex: '#099175',
    rgb: 'rgb(9, 145, 117)',
    rgba: opacity => rgbToRgba(Colors.GREEN_1.rgb, opacity),
  },
  WHITE: {
    hex: '#fff',
    rgb: 'rgb(255, 255, 255)',
    rgba: opacity => rgbToRgba(Colors.BCKG.rgb, opacity),
  },
};
