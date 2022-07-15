function validarCPF(event, form) {
    event.preventDefault();
    const inputCpf = form.cpf;
    if (inputCpf) {
        const cpf = inputCpf.value;
        if (cpf.length === 11) {
            const URL = `https://verificador-cpf.netlify.app/validar-cpf/${cpf}`;
            axios.request(URL)
                .then(resposta => mostrarResposta(resposta.data))
                .catch(erro => console.error(erro))
        }

    }
}

function mostrarResposta(data) {
    const respostaDiv = document.querySelector('.resposta')
    const mensagem = `
    CPF: ${data.cpf}<br>
    Status: ${data.status}<br>
    Unidade Federativa: ${data.unidadeFederativa}
    `
    respostaDiv.innerHTML = `<h2>Resposta:</h2><br>${mensagem}`;
    console.log(data)
}