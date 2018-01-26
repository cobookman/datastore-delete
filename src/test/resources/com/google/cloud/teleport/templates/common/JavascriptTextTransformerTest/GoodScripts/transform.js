/**
 * A good transform function.
 * @param {string} inJson
 * @return {string} outJson
 */
function transform(inJson) {
  var obj = JSON.parse(inJson);
  obj.someProp = "someValue";
  return JSON.stringify(obj);
}