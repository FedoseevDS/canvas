import { Render } from 'types';

export const configExample3: Render = ({ canvas, ctx, height, width }) => {
  const pi = Math.PI;

  if (canvas && ctx && width && height) {
    canvas.onmousemove = (event: MouseEvent) => {
      const x = event.offsetX;
      const y = event.offsetY;
      const radius = Math.pow(Math.pow(x - 450, 2) + Math.pow(y - 350, 2), 0.5);

      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'green';
      ctx.fillStyle = 'pink';
      ctx.arc(450, 350, radius, 0, 2 * pi, false);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    };
  }
};
