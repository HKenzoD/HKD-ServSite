// alert ("Seja bem vindo!")

/*var altura = prompt("Digite a altura:")
var base = prompt("Digite a base:")
var area = 0

parseInt(altura)
parseInt(base)

function calculaArea(x, y) {
    z = x * y
    return z
}

calculaArea(altura, base)
area = z
alert(area)*/


const form = document.getElementById('form_dados');
const nomeInteressado = document.getElementById('nome_interessado');
    let formValido = false;

function validaNome(nomeCompleto) {
//    const nomeComoArray = nomeCompleto.split(' ');
    const nomeComoArray = nomeCompleto.trim().split(/\s+/);
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

//  const nomeInteressado = document.getElementById('nome_interessado'); **subiu para constante global**
    const emailInteressado = document.getElementById('email_interessado');
    const telInteressado = document.getElementById('tel_interessado');
    const mensagemInteressado = document.getElementById('MensagemInt');
//    const mensagemSucesso = `Nome: ${nomeInteressado.value} E-mail: ${emailInteressado.value} Tel: ${telInteressado.value} Mensagem: ${mensagemInteressado.value}`; **mudei a mensagem**
    const mensagemSucesso = `Mensagem enviada com sucesso! Obrigado ${nomeInteressado.value} !`

    formValido = validaNome(nomeInteressado.value);
    if (formValido) {
//      alert(mensagemSucesso) **mudei a mensagem e colocamos na página, e não como alerta**
//      document.querySelector(`.success_message`).innerHTML = mensagemSucesso - **transformamos em constante para mudar estilo etc**
        const containerMensagemSucesso = document.querySelector(`.success_message`);
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeInteressado.value = '';
        emailInteressado.value = '';
        telInteressado.value = '';
        mensagemInteressado.value = '';
    } 
    else {
//      alert("Digite pelo menos 1 nome e 1 sobrenome"); **deixou de ser alerta pop-up para uma mensagem na página**
        nomeInteressado.style.border = '1px solid red';
        document.querySelector(`.error_message`).style.display = 'block';
    }
})

nomeInteressado.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNome(nomeInteressado.value);

    if (!formValido) {
        nomeInteressado.classList.add('error');
//      nomeInteressado.style.border = '1px solid red';
        document.querySelector(`.error_message`).style.display = 'block';
    } else {
        nomeInteressado.classList.remove('error');
//      nomeInteressado.style = '';
        document.querySelector(`.error_message`).style.display = 'none';
    }
});



//console.log(form);