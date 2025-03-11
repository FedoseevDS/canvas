/**
 * Пример 2: эмитация кисточки
 */

import { Render } from 'types';

export const configExample2: Render = ({ ctx, event }) => {
  // console.log('ctx', ctx);
  // console.log('onMouseMove', onMouseMove);

  if (event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    console.log('x', x);
    console.log('y', y);

    ctx.fillRect(x, y, 10, 10);
  }
};
