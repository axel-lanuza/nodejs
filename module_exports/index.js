/**
 * Created by SQB on 2015/10/25.
 */
var klass = require('./klass');

klass.add('Scott',['白富美','高富帅']);

exports.add = function(klasses){
    klasses.forEach(function(item,index){
        var _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        klass.add(teacherName,students);
    });
}