var fs = require('fs'),
    StatMode = require('stat-mode'),
    colors = require('colors');

fs.readdir('./',  function(err, files) {

    fs.writeFile('./dir.txt', files.join('\n') , function(err) {
        if(err) throw err;
    });
    console.log("Finished!".red);

});




/***************** WSTEP DO ZADANIA ***/
// fs.stat('./cat.jpg', function(err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

// fs.readFile('./text.txt', 'utf-8',  function(err, data) {
//     console.log('Dane przed zapisem:'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\nMolestiae dolores nobis ut alias', function(err) {
//         if (err) throw err;
//         console.log('Writed!'.blue);
//         fs.readFile('./text.txt', 'utf-8',  function(err, data) {
//             console.log('Dane po zapisie:'.blue);
//             console.log(data);
//         });
//     });
// });


