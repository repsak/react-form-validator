export default minLength

/**
 * Валидаия на минимальную длину
 *
 * @param length
 * @returns {validateMinLength}
 */
function minLength(length) {
  return function validateMinLength(val) {
    if (val.toString().length < length) {
      return `Длина строки должна быть более ${length} символов, текущая длина ${val.toString().length}`
    }
  }
}
