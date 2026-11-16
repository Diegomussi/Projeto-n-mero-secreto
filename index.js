function gerarNumeroSecreto(){
   const numero = Math.floor(Math.random() * 10) + 1;
   return numero
}

function verificarPalpite(palpite, secreto){
        if (palpite === secreto){
            return "Acertou o número secreto"
        } else if(palpite > secreto){
            return "O número secreto é menor"
        }else if(palpite < secreto){
            return "O número secreto é maior"
        } else{
            return "Digite um número"
        }
}

let secreto = gerarNumeroSecreto();
let tentativas = 0;

function chutar(){
    const resposta = document.getElementById("palpite").value;
    const palpite = Number(resposta);
    tentativas ++;
        const ver = (verificarPalpite(palpite, secreto));
        document.getElementById("mensagem").innerHTML = ver;
        if (secreto === palpite){
            document.getElementById("tentativas").innerHTML = `Você acertou em ${tentativas} tentativas`;
        }
}

function reiniciar(){
    secreto = gerarNumeroSecreto();
    tentativas = 0;
    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("tentativas").innerHTML = "";
    document.getElementById("palpite").value = "";
    tentativas ++;
}




