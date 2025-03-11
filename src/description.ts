/**
 * Прямоугольник
 *
 * ctx.fillStyle = string - цвет заливки прямоугольника
 * ctx.fillRect(x, y, w, h) - прямоугольник
 * ctx.strokeStyle = string - цвет границы прямоугольника
 * ctx.strokeRect(x, y, w, h) - границы прямоугольника
 * ctx.lineWidth = number - толщина линий
 * ctx.setLineDash([...number]) - устанавливает расстояния между линиями
 * ctx.lineJoin = string - отвечает за тип соединения линий в фигуре ('miter', 'round', 'bevel')
 * ctx.globalAlpha = number - прозрачность от 0 до 1
 *
 * Фоновое изображение
 *
 * ctx.createPattern(img, 'repeat' || 'repeat-x' || 'repeat-y' || 'no-repeat') - добавляет изображение
 * ctx.drawImage(img, x, y, w, h) - добавляет изображение
 *
 * Линии
 *
 * ctx.moveTo(x, y) - первоначальная точка
 * ctx.lineTo(x, y) - следующая точка
 * ctx.stroke() - закрашивает линию
 * ctx.lineWidth = number - ширина линии
 * ctx.beginPath() - начать новый путь (рекомендуется ставить перед каждым новым путем)
 * ctx.lineCap = 'round' (круглые края) || 'square' (квадратные края) || 'butt' (по умолчанию)
 * ctx.fill() - залить фигуру
 * ctx.fillStyle = 'string' - цвет заливки
 * ctx.closePath() - закрывает последнюю линию в фигуре (писать последнее соединение не обязательно)
 *
 * Кисточка
 *
 * canvas.onmousemove = () => {}
 */
