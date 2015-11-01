/**
 * Created by SQB on 2015/11/1.
 */
var names = ['Shane','Alan','Osbourne'];

console.log(names[0]+' '+names[1]+' '+names[2]);
console.log(names.join('.'));

//node join.js help
var help = [
    'Usage',
    '   foo-appp <input>'
];
if(process.argv[2] === 'help'){
    console.log(help.join('\n'));
}

var name = 'shane osbourne';
var upper =  name.split(' ')
    .map(x=>x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

console.log(upper);