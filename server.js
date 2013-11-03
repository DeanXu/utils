var connect = require('connect');
var program = require('commander');

program
    .option('-d, --dir', '指定路径地址')
    .parse(process.argv);

var cn;
if(program.dir){
    cn = connect.static(__dirname+"/"+program.args[0]);
    console.log("dir:"+__dirname+"/"+program.args[0]);
}else{
    cn = connect.static(__dirname)
    console.log("dir:"+__dirname);
}

connect.createServer(cn).listen(8000);
