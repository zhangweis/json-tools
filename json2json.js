const getStdin = require('get-stdin');
module.exports = async function (func) {
    var input = JSON.parse(await getStdin()); 
    var output = await func(input); 
    if (output==undefined) return;  
    console.log(JSON.stringify(output));
}
