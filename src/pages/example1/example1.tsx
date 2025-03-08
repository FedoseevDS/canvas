/**
 * Пример 1: добавил задний фон, ввиде диаграммы с координатами, 1 прямоугольник с плошной
 * заливкой, 4 прямоугольника, без заливки с разными цветами границ и типами соединений.
 * 1 прямоугольник с добавлением фотографии
 */

import Canvas from 'components/canvas';

const config = (ctx: CanvasRenderingContext2D) => {
  const img = new Image();
  img.src = 'https://u.9111s.ru/uploads/202412/10/646e9a79be0f5c1bd1cd886778a360dd.jpg';
  ctx.drawImage(img, 350, 400, 200, 200);

  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, 100, 100);

  ctx.globalAlpha = 0.2;
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'red';
  ctx.strokeRect(50, 50, 100, 100);

  ctx.strokeStyle = 'orange';
  ctx.lineJoin = 'round';
  ctx.strokeRect(200, 50, 100, 100);

  ctx.strokeStyle = 'green';
  ctx.lineJoin = 'bevel';
  ctx.strokeRect(350, 50, 100, 100);

  ctx.strokeStyle = 'green';
  ctx.lineJoin = 'miter';
  ctx.strokeRect(500, 50, 100, 100);
};

const Example1 = () => <Canvas onDraw={config} />;

export default Example1;
