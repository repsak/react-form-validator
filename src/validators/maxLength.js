export default maxLength

/**
 * Валидация на максимальную длину
 *
 * @param length
 * @returns {validateMaxLength}
 */
function maxLength(length) {
  return function validateMaxLength(val) {
    if (val.toString().length > length) {
      return `Длина строки не должна превышать ${length} символов, текущая длина ${val.toString().length}`
    }
  }
}
