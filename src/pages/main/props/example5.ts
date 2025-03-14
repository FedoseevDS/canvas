import { Render } from 'types';

export const configExample5: Render = ({ ctx, width }) => {
  let x = 0;
  let y: number;

  let timer: ReturnType<typeof setTimeout>;

  const drawSin = () => {
    if (width) {
      ctx.beginPath();
      y = Math.sin(x);
      if (x >= width) {
        x = 0;
      } else {
        x = x + 0.3;
      }
      ctx.fillRect(8 * x, 400 + 20 * y, 2, 2);
      ctx.stroke();
      timer = setTimeout(drawSin, 50);
    }
  };

  drawSin();

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
  };
};
