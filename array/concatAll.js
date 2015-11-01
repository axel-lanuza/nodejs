/**
 * Created by SQB on 2015/11/1.
 */
var exchanges = [
    [
        {symbol:"XFX",price:240.22,volume:23432},
        {symbol:"TNZ",price:332.19,volume:234}
    ],[
        {symbol:"JXJ",price:120.22,volume:5323},
        {symbol:"NYN",price:88.47,volume:98275}
    ]
];

Array.prototype.concatAll = function(){
    this.forEach(function(subArray){
        subArray.forEach(function(item){

        });
    })
};
exchanges.forEach(function(exchange){
    exchange.forEach(function(stock){
        console.log(JSON.stringify(stock));
    })
});