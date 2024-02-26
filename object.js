// Напишите функцию filter(), фильтрующую массив объектов по значению свойства.
// Массив, название свойства и нужное значение должны передаваться в качестве
// аргументов. Пример использования:

let object = [
    {name:"Василий", surname:"Васильев"},
    {name:"Иван", surname:"Иванов"},
    {name:"Пётр", surname:"Петров"}
]
function filter(object, property, meaning) {
    for (el = 0; el < object.length; el++){
        if (object[el][property] === meaning) return object[el];
    }
}

console.log(filter(object, "name", "Пётр"))