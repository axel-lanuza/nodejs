/**
 * Created by SQB on 2015/11/1.
 */
var items = [1,2,3,4,5];
var copy = items.slice(0,1);

copy[0] = 100;

console.log(items);
console.log(copy);

var person = {
    name:'shane-osbourne'
};
var filters = {
    'deslugify':x  => x.replace('-',' '),
    'uppercase':x => x.toUpperCase()
};

var input = 'name|deslugify|uppercase';

var sections = input.split('|').map(x=>x.trim());
var ref = person[sections[0]];
var output = sections.slice(1).reduce((prev,next)=>{
        if(filters[next]){
            return filters[next].call(null,prev);
        }
        return prev;
    },ref);
console.log(output);