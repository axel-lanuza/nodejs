/**
 * Created by SQB on 2015/11/1.
 */
function getStockSymbols(stocks){
    var symbols = [];
        //counter,
        //stock;
    stocks.forEach(function(stock){
        symbols.push(stock.symbol);
    });

    return symbols;
    /*for(counter = 0;counter < stocks.length;counter++){
        stock = stocks[counter];
        symbols.push(stock.symbol);
    }*/
}

var symbols = getStockSymbols([
    {symbol:"XFX",price:240.22,volume:23432},
    {symbol:"TNZ",price:332.19,volume:234},
    {symbol:"JXJ",price:120.22,volume:5323}
]);

console.log(JSON.stringify(symbols));