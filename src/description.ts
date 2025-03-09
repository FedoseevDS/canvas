/**
 * Прямоугольник
 *
 * fillStyle = string - цвет заливки прямоугольника
 * fillRect(x, y, w, h) - прямоугольник
 * strokeStyle = string - цвет границы прямоугольника
 * strokeRect(x, y, w, h) - границы прямоугольника
 * lineWidth = number - толщина линий
 * setLineDash([...number]) - устанавливает расстояния между линиями
 * lineJoin = string - отвечает за тип соединения линий в фигуре ('miter', 'round', 'bevel')
 * globalAlpha = number - прозрачность от 0 до 1
 *
 * Фоновое изображение
 *
 * createPattern(img, 'repeat' || 'repeat-x' || 'repeat-y' || 'no-repeat') - добавляет изображение
 * drawImage(img, x, y, w, h) - добавляет изображение
 *
 * Линии
 *
 * moveTo(x, y) - первоначальная точка
 * lineTo(x, y) - следующая точка
 * stroke() - закрашивает линию
 * lineWidth = number - ширина линии
 * beginPath() - начать новый путь (рекомендуется ставить перед каждым новым путем)
 * lineCap = 'round' (круглые края) || 'square' (квадратные края) || 'butt' (по умолчанию)
 * fill() - залить фигуру
 * fillStyle = 'string' - цвет заливки
 * closePath() - закрывает последнюю линию в фигуре (писать последнее соединение не обязательно)
 */
