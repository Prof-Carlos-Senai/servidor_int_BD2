let resposta = document.getElementById('resposta')
let btn_cadastro = document.getElementById('btn_cadastro')

btn_cadastro.addEventListener('click', (e)=>{
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let valores = {
        nome: nome,
        email: email,
        senha: senha
    }

    fetch(`http://localhost:3000/usuario2`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        resposta.innerHTML = ''
        resposta.innerHTML += dados.message
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados',err)
    })
})