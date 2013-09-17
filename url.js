var child_process = require('child_process');
var prompt = require('prompt');
var i = 0;
var url_change = [
    ["/product/q-new","/jewel/new-arrival"],
    ["/product/q-ring","/jewel/ring"],
    ["/product/q-necklace","/jewel/necklace"],
    ["/product/q-earring","/jewel/earring"],
    ["/product/q-bracelet","/jewel/bracelet"],
    ["/product/q-brooch","/jewel/brooch"],
    ["/product/q-diaonly","/jewel/settings"],
    ["/product/q-keyword","/jewel/query"],
    ["/product/queryDiamond","/jewel/diamonds"],
    ["/product/diamondGoods","/jewel/diamond-settings"],
    ["/theme/view/GJ","/theme/etoile"],
    ["/theme/view/YD","/theme/premiere-dame"],
    ["/theme/view/WD","/theme/plie"],
    ["/theme/view/SG","/theme/ring-of-desire"],
    ["/theme/view/LOVE","/theme/love"],
    ["/special/sonata/sonata","/special/sonata"],
    ["/baike/index","/education"],
    ["/baike/category/?categoryId=","/education/category/"],
    ["/baike/article","/education/article"],
    ["/Brandstory/story.jsp","/brand/"],
];

function main(){
    if(!url_change[i]){
        console.log("complete !");
        return false;
    }
    child_process.exec('grep -r '+url_change[i][0]+' ./webapp/.', function(err, stdout, stderr) {
        if(stdout == ''){
            console.log(i+": empty");
            i++;
            main();
            return ;
        }else{
            console.log("-----------the change url-------------\r\n");
            console.log("change: "+url_change[i][0]+" to: "+url_change[i][1]+" \r\n");
            console.log("-----------find below-------------\r\n");
            console.log(stdout);
        }
        prompt.start();
        var info = {
            name: 'yesno',
            message: 'change the url? (y/n)',
            validator: /y[es]*|n[o]?/,
            warning: 'Must respond yes or no',
            default: 'no'
        }
        prompt.get(info,function(err, results){
            if(results.yesno == 'no' || results.yesno == 'n'){
                console.log('no');
                i++;
                main();
            }else{
                console.log('yes');
                var cm = 'sed -i "s/'+url_change[i][0].replace(/\//g,"\\/")+'/'+url_change[i][1].replace(/\//g,"\\/")+'/g" `grep '+url_change[i][0]+' -rl ./webapp`';
                console.log(cm);
                child_process.exec(cm, function(err, stdout, stderr) {
                    console.log(i+": finish!");
                    i++;
                    main();
                });
            }
            console.log("-------------------------------------------------\r\n");
        });
    });
}

main();

