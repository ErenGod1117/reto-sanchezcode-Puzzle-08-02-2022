//variables
let letters = document.getElementById('letters')
let lettersValue = letters.innerHTML
let numbers = document.getElementById('numbers')
let numbersValue = numbers.innerHTML
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const button7 = document.getElementById('button7')
const button8 = document.getElementById('button8')
const button9 = document.getElementById('button9')
const button0 = document.getElementById('button0')
const buttonRsecet = document.getElementById('buttonRsecet')
const buttonEnviar = document.getElementById('buttonEnviar')
//funciones
const btnA = () =>{
    if(lettersValue == ''){
        letters.innerHTML = "A"
        lettersValue = letters.innerHTML
    }else if(lettersValue == "ABCDEFGHIJ"){
        numbers.innerHTML = "1"
        numbersValue = numbers.innerHTML
    }else{
        alert('primero tienes que colocar toda la cadena de texto desde la A hasta la J y despues se podra comenzar la cadena numerica')
    }
}

const btnB = () =>{
    if(lettersValue == 'A'){
        letters.innerHTML = "AB"
        lettersValue = letters.innerHTML
    }else if(numbersValue == '1'){
        numbers.innerHTML = "12"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la A antes que la B o primero tienes que digitar el 1 antes que el 2")
    } 
    }

const btnC = () =>{
    if(lettersValue == 'AB'){
        letters.innerHTML = "ABC"
        lettersValue = letters.innerHTML
    }else if(numbersValue == "12"){
        numbers.innerHTML = "123"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la B antes que la C o pirmero tienes que digitar 2 antes que el 3")
    }
}
const btnD = () =>{
    if(lettersValue == 'ABC'){
        letters.innerHTML = "ABCD"
        lettersValue = letters.innerHTML
    }else if(numbersValue == '123'){
        numbers.innerHTML = "1234"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la C antes que la D o primero tienes que digitar 3 antes que 4")
    }
}
const btnE = () =>{
    if(lettersValue == 'ABCD'){
        letters.innerHTML = "ABCDE"
        lettersValue = letters.innerHTML
    }else if(numbersValue == '1234'){
        numbers.innerHTML = "12345"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la D antes que la E o primero tienes que digitar 4 antes que 5")
    }
}
const btnF = () =>{
    if(lettersValue == 'ABCDE'){
        letters.innerHTML = "ABCDEF"
        lettersValue = letters.innerHTML
    }else if(numbersValue == '12345'){
        numbers.innerHTML = "123456"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la E antes que la F o primero tienes que digitar 5 antes que 6")
    }
    }

const btnG = () =>{
    if(lettersValue == 'ABCDEF'){
        letters.innerHTML = "ABCDEFG"
        lettersValue = letters.innerHTML
    }else if(numbersValue == '123456'){
        numbers.innerHTML = "1234567"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la F antes que la G o primero tienes que digitar 6 antes que 7")
    }
    }

const btnH = () =>{
    if(lettersValue == 'ABCDEFG'){
        letters.innerHTML = "ABCDEFGH"
        lettersValue = letters.innerHTML
    }else if(numbersValue == '1234567'){
        numbers.innerHTML = "12345678"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la G antes que la H o primero tienes que digitar 7 antes que 8")
    }
}
const btnI = () =>{
    if(lettersValue == 'ABCDEFGH'){
        letters.innerHTML = "ABCDEFGHI"
        lettersValue = letters.innerHTML
    }else if(numbersValue == '12345678'){
        numbers.innerHTML = "123456789"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la H antes que la I o primero tienes que digitar 8 antes que 9")
    }
}
const btnJ = () =>{
    if(lettersValue == 'ABCDEFGHI'){
        letters.innerHTML = "ABCDEFGHIJ"
        lettersValue = letters.innerHTML
    }else if(numbersValue == '123456789'){
        numbers.innerHTML = "1234567890"
        numbersValue = numbers.innerHTML
    }else{
        alert("primero tienes que digitar la I antes que la J o primero tienes que digitar 9 antes que 0")
    }
}
//eventos
button1.onclick = function(){
    btnA()
}
button2.onclick = function(){
    btnB()
}
button3.onclick = function(){
    btnC()
}
button4.onclick = function(){
    btnD()
}
button5.onclick = function(){
    btnE()
}
button6.onclick = function(){
    btnF()
}
button7.onclick = function(){
    btnG()
}
button8.onclick = function(){
    btnH()
}
button9.onclick = function(){
    btnI()
}
button0.onclick = function(){
    btnJ()
}

