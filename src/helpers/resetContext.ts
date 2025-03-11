export const resetContext = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = 'black'; // Цвет заливки
  ctx.strokeStyle = 'black'; // Цвет обводки
  ctx.lineWidth = 1; // Толщина линии
  ctx.globalAlpha = 1; // Прозрачность
  ctx.lineCap = 'butt'; // Стиль окончания линий
  ctx.lineJoin = 'miter'; // Стиль соединения линий
  ctx.miterLimit = 10; // Лимит соединения линий
  ctx.font = '10px sans-serif'; // Шрифт
  ctx.textAlign = 'start'; // Выравнивание текста
  ctx.textBaseline = 'alphabetic'; // Базовая линия текста
  ctx.direction = 'inherit'; // Направление текста
  ctx.shadowBlur = 0; // Размытие тени
  ctx.shadowColor = 'rgba(0, 0, 0, 0)'; // Цвет тени
  ctx.shadowOffsetX = 0; // Смещение тени по X
  ctx.shadowOffsetY = 0; // Смещение тени по Y
  ctx.filter = 'none'; // Фильтры
  ctx.globalCompositeOperation = 'source-over'; // Режим композиции
};
