const prompt = require('prompt-sync')();

var name = prompt('Olá humano, tudo bem com você? Para inciar, me diga qual seu nome?');
console.log(`Olá ${name}, vamos jogar JoKenPo?`);


let humano = prompt('Escolha pedra, tesoura ou papel: ');
    if(humano == 'pedra'){
        console.log(`Você escolheu ${humano}.`);
    } else if(humano == 'tesoura'){
        console.log(`Você escolheu ${humano}.`);
    } else if(humano == 'papel'){
        console.log(`Você escolheu ${humano}.`);
    } else {
        console.log(`Você não escolheu uma opção válida. Escolha novamente.`);
    };

let jkp = Math.floor(Math.random() * 4 + 1);// <var> = num inteiro(num aleatorio()) de 1 a 3

if (jkp == 1){
    jkp = 'pedra';
    console.log(`O computador escolheu ${jkp}.`);
} else if (jkp == 2){
    jkp = 'tesoura';
    console.log(`O computador escolheu ${jkp}.`);
} else if (jkp == 3) {
    jkp = 'papel';
    console.log(`O computador escolheu ${jkp}.`);
} else {
    console.log('O computador desistiu, você venceu.')
};
