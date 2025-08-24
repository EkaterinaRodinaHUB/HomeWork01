//Задание 6.6.5
//Есть объект obj. В одном из ключей объекта — массив. 
// Добавьте в новый массив arrValues значения всех ключей объекта. 
// Если значение — массив, добавьте каждый элемент в массив arrValues.
// Выведите получившийся массив в консоль.
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues = []; 
for (let element of Object.values(obj)){
    if(Array.isArray(element)){
        for(let i of element){
            arrValues.push(i)
        }
    }
    else{
        arrValues.push(element)
    }
};
console.log(arrValues);