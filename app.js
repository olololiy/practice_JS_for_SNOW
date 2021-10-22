function checkPass(){

}

function allLetters(){

}

function checkLetters(){

}

function allNum(param){
    return((Number(param) === NaN) ? false : true)
}

function checkNum(param){
    (param === 0) ? alert("Lalaley") : // да и все равно не выводит нужное wrong https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D0%BD%D1%83%D0%BB%D1%8F#:~:text=%D0%9D%D0%BE%D0%BB%D1%8C%20%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%81%D1%8F%20%D0%BD%D0%B5%20%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE%20%D0%BD%D0%B0,%D1%87%D1%91%D1%82%D0%BD%D1%8B%D0%BC%C2%BB%20%D1%87%D0%B8%D1%81%D0%BB%D0%BE%D0%BC%20%D0%B8%D0%B7%20%D0%B2%D1%81%D0%B5%D1%85%20%D1%87%D0%B8%D1%81%D0%B5%D0%BB.
    ((param % 2) === 0) ?  alert("Hop") :
    alert("hey")
}

function checkParam(param){
    (param.length === 0) ? alert("введите значение") : 
    (allNum(param) === true) ? checkNum(param) :
    (allLetters(param) === true) ? checkLetters(param) :
    checkPass(param);
}

function someFunc(){
//     function isOdd(num) { return num % 2;}
// console.log("1 is " + isOdd(1));
// console.log("2 is " + isOdd(2));
// console.log("3 is " + isOdd(3));
// console.log("4 is " + isOdd(4));
    var quantity = document.getElementById("quantity").value;
    checkParam(quantity)
    //значение отправляем в другую функцию из 
     alert(typeof(quantity))

    // let a = quantity.length;
    // alert(a)
    // var price = quantity * 9000;
    // alert(price);//проверить 3 условия в поле р вывести троля, если подходит под критерии пароля компании. 
}