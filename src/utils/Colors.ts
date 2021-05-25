export const rgbToRgba = (rgb?: string, opacity: number = 1) => {
  if (rgb) return rgb.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
  else return undefined;
};
