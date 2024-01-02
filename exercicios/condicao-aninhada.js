var idade = 69
var status = ""

if (idade < 18) {
    status = "Menor de idade"
}
else if(idade >=18 && idade < 65) {
    status = "Adulto"
}
else{
    status = "Idoso"
}

console.log(status)
