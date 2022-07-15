const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const validarCPF = require('../lib/verificador_cpf')

app.get("/validar-cpf/:cpf", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let cpf = req.params.cpf
    let status = validarCPF.verificarCPF(cpf)
    let unidadeFederativa = status ? validarCPF.buscarUnidadeFederativa(cpf) : "-"

    res.json({
        cpf: cpf,
        status: status,
        unidadeFederativa: unidadeFederativa
    })
})

app.listen(port, () => {
    console.log('Servidor escutando na porta ' + port)
})
