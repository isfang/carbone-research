 const fs = require('fs');
 const carbone = require('carbone');

  // Data to inject
  var data = {
    "key1":111,
    "key2":111,
    "key3":111,
    "key4":111
  };

  var options = {
    convertTo   : 'docx',
    hardRefresh : true
  };

  // Generate a report using the sample template provided by carbone module
  // This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
  // Of course, you can create your own templates!
  carbone.render('./chart.docx', data, options, function(err, result){
    if (err) {
      return console.log(err);
    }
    // write the result
    fs.writeFileSync('result.docx', result);
    process.exit(); // to kill automatically LibreOffice workers
  });