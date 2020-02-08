export default isRequired

/**
 * Проверка на пустоту
 *
 * @param val
 * @returns {string}
 */
function isRequired(val) {
  if (!val) {
    return 'Поле обязательно для заполнения'
  }
}
