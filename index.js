
/**
 * prevent default on the given `e`.
 * 
 * examples:
 * 
 *      anchor.onclick = prevent;
 *      anchor.onclick = function(e){
 *        if (something) return prevent(e);
 *      };
 * 
 * @param {Event} e
 */

module.exports = function(e){
  e = e || window.event
  e.isDefaultPrevented = true
  return e.preventDefault
    ? e.preventDefault()
    : e.returnValue = false;
};
