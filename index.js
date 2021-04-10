function contar() {
    let inicio = document.getElementById('txtin')
    let res = document.getElementById('res')

    //verificar se todos os campos foram preenchidos
    if (inicio.value.length == 0) {
        window.alert ('[ERRO] Faltam dados')
    } else {
        res.innerHTML = `Resultado: <br> <br> `
        let ini = Number(inicio.value)

        for (let i = 0; i<11; i++) {
            let resultado = ini*i

            res.innerHTML += `${ini} X ${i} = ${resultado} <br>`
            
        }
        //transformar o número do input para o tipo number

    }
}