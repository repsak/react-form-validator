/**
 * Экспорт
 */
export default chain

/**
 * Формирование цепочки валидаторов с использованием генератора
 * На вход ожидаются чистые функции, возвращающие сообщение об ошибке если валидация не прошла
 * На выходе осуществляется проход по переданным функциям, поочередно. Если функия вернула значение (ошибку) - она
 * передается инициатору валидации.
 *
 * @param {[function]} fns
 * @returns {function(...[*]): boolean}
 */
function chain(...fns) {
  function* applyChain(...args) {
    for (let i = 0, l = fns.length; i < l; i++) {
      yield fns[i](...args)
    }
  }

  /**
   * Обертка для получения значения из инпута и запуска генератора
   */
  return (...args) => {
    const gen = applyChain(...args)
    return execute(gen)
  }
}

/**
 * Выполнение сформированной цепочки валидаторов в генераторе
 * Если что-то пришло от валидатора - возвращается инициатору, цикл завершается
 * Цикл работает до тех пор, пока не пройдет по всем валидаторам
 * Если от валидаторов ничего не пришло, возвращает false
 *
 * @param gen
 * @returns {boolean|String}
 */
function execute(gen) {
  const { value, done } = gen.next()

  if(value) {
    return value
  }

  if (!done) {
    return execute(gen)
  } else {
    return false
  }
}
