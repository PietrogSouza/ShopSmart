const input01 = document.getElementById('valor01')
const input02 = document.getElementById('valor02')

const resultado = document.getElementById('resultado')

function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    

    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display = 'flex';

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, informe valores numéricos válidos nos dois campos</p>
        `

    } else{

        total = v1 * v2

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Total da Compra<h2>
            <ul>
                <li>Você está adquirindo ${v2} unidade(s) com valor unitário de R$ ${v1.toFixed(2)}.</li>
                <li>Valor total da compra: R$ ${total.toFixed(2)}</li>
            </ul>
        `;
    };

};


function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display = 'flex';

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, informe valores numéricos válidos nos dois campos</p>
        `
    } else{

        resultado_lucro = v1 - v2

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Total da Compra<h2>
            <ul>
                <li>Preço de venda: R$ ${v1.toFixed(2)} | Custo: R$ ${v2.toFixed(2)}.</li>
                <li>Resultado financeiro: R$ ${resultado_lucro.toFixed(2)}</li>
            </ul>
        `;
    };
};


function limpar(){
    resultado.style.display = 'none'

    input01.value = '';
    
    input02.value = '';

    input01.focus();
}