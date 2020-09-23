const getStdin = require('get-stdin');
module.exports = async function (func) {
    try {
    var input = JSON.parse(await getStdin()); 
    var output = await func(input); 
    if (output==undefined) return;  
    console.log(JSON.stringify(output));
    }catch(e) {
        console.error("[json2json] error happens:")
        console.error(e);
        process.exit(1);
    }
}
