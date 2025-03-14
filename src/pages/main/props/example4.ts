import { Render } from 'types';

export const configExample4: Render = ({ canvas, ctx, height, width }) => {
  let x = 500;
  let y = 400;

  let myX: number;
  let myY: number;

  let stepCount = 0; // количество шагов в одном направлении
  let direction: number; // направление движения
  let timer: ReturnType<typeof setTimeout>; // обновление направления

  const drawDot = () => {
    if (width && height) {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();

      if (stepCount === 0) {
        stepCount = Math.floor(15 * Math.random());
        direction = Math.floor(8 * Math.random());
      } else {
        stepCount--;
      }

      switch (direction) {
        case 0:
          // вверз
          y = y - 1;
          break;
        case 1:
          // вправо
          x = x + 1;
          break;
        case 2:
          // вниз
          y = y + 1;
          break;
        case 3:
          // влево
          x = x - 1;
          break;
        case 4:
          // вправо вверх
          x = x + 1;
          y = y - 1;
          break;
        case 5:
          // вправо вниз
          x = x + 1;
          y = y + 1;
          break;
        case 6:
          // влево вниз
          x = x - 1;
          y = y + 1;
          break;
        case 7:
          // влево вверх
          x = x - 1;
          y = y - 1;
          break;
      }
      if (x < 0 || x > width || y < 0 || y > height) {
        stepCount = 0;
      }
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(myX, myY);
      ctx.stroke();
      ctx.fillRect(x - 3, y - 3, 10, 10);
    }

    timer = setTimeout(() => {
      drawDot();
    }, 100);
  };

  if (canvas) {
    canvas.onmousemove = (event: MouseEvent) => {
      myX = event.offsetX;
      myY = event.offsetY;
    };
  }

  drawDot();

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    if (canvas) {
      canvas.onmousemove = null;
    }
  };
};
