import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

const emToPx = (em) => em * 16;

export const breakpoints = [36, 48, 62, 75, 90, 120, 150].map(emToPx);
export const containerWidth = [36, 46, 54].map(emToPx);

const font = '"PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

const beige = '#f3eee8';
const gray = '#d1ccc7';

export default merge(constants, {
  colors: {
    beige,
    gray,
    background: beige,
    bg: beige,
  },
  breakpoints,
  containerWidth,
  font,
});
