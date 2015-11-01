/**
 * Created by SQB on 2015/11/1.
 */
var items = [1,2];
var newItems = items.concat(3);
//items.concat([3,4],[5,6,7],8)
console.log(newItems);//[1,2,3]

var people = [
    {
        name:'Shane'
    },{
        name:'Sally'
    }
];

var people2 = [
    {
        name:'Simon'
    },{
        name:'Ben'
    }
];

people.concat(people2)
    .forEach(function(person){
    console.log(person.name);
});

/*
people2.forEach(function(person){
    console.log(person.name);
});*/
