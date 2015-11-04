/**
 * Created by SQB on 2015/10/29.
 */
var a = {name:'suchingfool'};
var b = a;
console.log(a);
console.log(b);

b.name = 'suchingfool2';
console.log(a);
console.log(b);

var b = {name:'suchingfool3'};
console.log(a);
console.log(b);
