/**
 * Created by SQB on 2015/11/1.
 */
var family = ['Shane','Sally','Isaac'];

var kittieExists = family.indexOf('Kittie')>-1;

if(!kittieExists){
    family.push('ittie');
}

//console.log(family);

var whitelist = ['.css','.js'];

var events = [
    {file:'css/core.css'},
    {file:'js/app.js'},
    {file:'index.html'}
];

var filtered = events.filter(event=>{
        var ext = require('path').extname(event.file);
        return whitelist.indexOf(ext)>-1;
    });

console.log(filtered);