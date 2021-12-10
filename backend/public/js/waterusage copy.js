
var waterusageJan = [468120];
var waterusageFeb = [413310];
var waterusageMarch = [436670];
var waterusageApril = [467240];
var waterusageMay = [467630];
var waterusageJune = [447520];
var waterusageJuly = [464150];
var waterusageAug = [483060];
var waterusageSep = [492190];
var waterusageOct = [433090];
var waterusageNov = [16580,16860,15590,15960,13800,16810,18070,14470,15050,13870,15180,13840,12940,19610,13930,18590,16720,14740,12920,13150,12750, 15150, 13700, 15200, 12910,];
var waterusageDec = [0];



var waterusageJanTotal = waterusageJan.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageFebTotal = waterusageFeb.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageMarchTotal = waterusageMarch.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageAprilTotal = waterusageApril.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageMayTotal = waterusageMay.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageJuneTotal = waterusageJune.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageJulyTotal = waterusageJuly.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageAugTotal = waterusageAug.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageSepTotal = waterusageSep.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageOctTotal = waterusageOct.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageNovTotal = waterusageNov.reduce(function(a, b){
    return a + b;
}, 0);
var waterusageDecTotal = waterusageDec.reduce(function(a, b){
    return a + b;
}, 0);

var waterusagetotals = waterusageJanTotal+waterusageFebTotal+waterusageMarchTotal+waterusageAprilTotal+waterusageMayTotal+waterusageJuneTotal+waterusageJulyTotal+waterusageAugTotal+waterusageSepTotal+waterusageOctTotal+waterusageNovTotal+waterusageDecTotal;




console.log("Nov Total: "+ waterusageNovTotal);

console.log("currentyear: "+ waterusagetotals);


function addWaterDay (){
    var inputdaytotal = document.getElementById("waterunitspd").value;
    var date = waterdate;
    
    var result = date.includes()
    
    var month = "";
};




module.exports =  waterusageJan;
module.exports =  waterusageFeb;
module.exports =  waterusageMarch;
module.exports =  waterusageApril;
module.exports =  waterusageMay;
module.exports =  waterusageJune;
module.exports =  waterusageJuly;
module.exports =  waterusageAug;
module.exports =  waterusageSep;
module.exports =  waterusageOct;
module.exports =  waterusageNov;
module.exports =  waterusageDec;
module.exports =  waterusageJanTotal;
module.exports =  waterusageFebTotal;
module.exports =  waterusageMarchTotal;
module.exports =  waterusageAprilTotal;
module.exports =  waterusageMayTotal;
module.exports =  waterusageJuneTotal;
module.exports =  waterusageJulyTotal;
module.exports =  waterusageAugTotal;
module.exports =  waterusageSepTotal;
module.exports =  waterusageOctTotal;
module.exports =  waterusageNovTotal;
module.exports =  waterusageDecTotal;
module.exports =  waterusagetotals;

