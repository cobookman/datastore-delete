/**
 * This function splits a csv and turns it into a pre-defined JSON.
 * @param {string} line is a line from TexIO.
 * @return {JSON} a JSON created after parsing the line.
 */
function transform(line) {
  var values = line.split(',');

  var obj = new Object();
  obj.location = values[0];
  obj.name = values[1];
  obj.age = values[2];
  obj.color = values[3];
  obj.coffee = values[4];
  var jsonString = JSON.stringify(obj);

  return jsonString;
}