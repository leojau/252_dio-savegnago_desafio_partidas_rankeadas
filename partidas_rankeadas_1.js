let evit = document.getElementById("txtvit");
let eder = document.getElementById("txtder");
let eres = document.getElementById("res");
let saldo;
function rank()
{
    let vvit = evit.value;
    let vder = eder.value;
    let nivel;
    saldo = vvit - vder;
    eres.innerHTML = saldo;
    if(saldo<10)
    {
        nivel = "Ferro";
    }
    else if(saldo<=20)
    {
        nivel = "Bronze";
    }
    else if(saldo<=50)
    {
        nivel = "Prata";
    }
    else if(saldo<=80)
    {
        nivel = "Ouro";
    }
    else if(saldo<=90)
    {
        nivel = "Diamante";
    }
    else if(saldo<=100)
    {
        nivel = "Lendário";
    }
    else
    {
        nivel = "Imortal";
    }
    eres.innerHTML = "O Herói tem de saldo de " + saldo + " está no nível de " + nivel
}