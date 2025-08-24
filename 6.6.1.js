//Задание 6.6.1
//Напишите проверку, которая позволит определить, является слово палиндромом или нет.
let a = 0;
let text = 'Довод';
let someText = text.toUpperCase().replaceAll(' ', '');
for(i=0; i<=someText.length / 2; i+=1) {
    if(someText[i] != someText[someText.length-1-i]){
        console.log('Слово \'',someText,'\'не является палиндромом');
        a+=1;
        break;
    }
};
if(a == 0) {
    console.log('Слово \'',someText,'\' является палиндромом');
};
