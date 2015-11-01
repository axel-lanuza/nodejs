/**
 * Created by SQB on 2015/11/1.
 */
function getStockSymbols(stocks){
    return stocks.map(function(stock){
        return stock.symbol;
    });
  /*  var symbols = [];
    stocks.forEach(function(stock){
        symbols.push(stock.symbol);
    });
    return symbols;*/
}

/*Array.prototype.map  =function(projection){
    var results = [];
    this.forEach(function(){
       results.push(projection(item));
    });
    return results;
}*/

var symbols = getStockSymbols([
    {symbol:"XFX",price:240.22,volume:23432},
    {symbol:"TNZ",price:332.19,volume:234},
    {symbol:"JXJ",price:120.22,volume:5323}
]);

console.log(JSON.stringify(symbols));