var Converter = require("csvtojson").Converter;
var converter = new Converter({headers: ["Fact"]});

var Facts = null

//end_parsed will be emitted once parsing finished

converter.on("end_parsed", function (jsonArray) {
   Facts = jsonArray; //here is your result jsonarray
});

//read from file
require("fs").createReadStream("./Facts.csv").pipe(converter);

module.exports.getFacts = function() {
  var index = Math.floor (Math.random() * Facts.length)
  return Facts[index].Fact;
}