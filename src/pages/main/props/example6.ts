import { Render } from 'types';

export const configExample6: Render = ({ ctx }) => {
  const R = 180;
  const r = 140;
  const d = 50;
  let teta = 0;
  let timer: ReturnType<typeof setTimeout>;

  const spirograph = () => {
    const x = (R - r) * Math.cos(teta) + d * Math.cos(((R - r) * teta) / r);
    const y = (R - r) * Math.sin(teta) - d * Math.sin(((R - r) * teta) / r);
    teta = teta + 0.2;
    ctx.beginPath();
    ctx.fillRect(500 + x, 400 + y, 4, 4);
    timer = setTimeout(spirograph, 50);
  };

  spirograph();

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
  };
};
