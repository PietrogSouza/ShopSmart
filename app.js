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
                <li><span>Valor total da compra: R$ ${total.toFixed(2)}</span></li>
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
        <h2>Lucro Obtido<h2>
            <ul>
                <li>Preço de venda: R$ ${v1.toFixed(2)} | Custo: R$ ${v2.toFixed(2)}.</li>
                <li><span>Resultado financeiro: R$ ${resultado_lucro.toFixed(2)}</span></li>
            </ul>
        `;
    };
};


function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display = 'flex';

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, informe valores numéricos válidos nos dois campos</p>
        `
    } else{
        
        resultado_desconto = (v2 / 100) * v1

        valor_com_desconto = v1 - resultado_desconto

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Desconto Aplicado<h2>
            <ul>
                <li>Foi aplicado um desconto de ${v2}% sobre o valor de R$ ${v1.toFixed(2)}.</li>
                <li><span>Valor final com desconto R$ ${valor_com_desconto.toFixed(2)}</span></li>
            </ul>
        
        `;
    };
};


function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, informe valores numéricos válidos nos dois campos</p>
        `
    } else{

        resultado_acrescimo = (v2 / 100) * v1

        valor_com_acrescimo = v1 + resultado_acrescimo

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Acréscimo Aplicado<h2>
            <ul>
                <li>Foi aplicado um acréscimo de ${v2}% sobre o valor de R$ ${v1.toFixed(2)}.</li>
                <li><span>Valor final com juros: R$ ${valor_com_acrescimo.toFixed(2)}</span></li>
            </ul>
        
        `;
    };
};


function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML =  `
        <h2>Erro na validação<h2>

        <p>Por favor, informe valores numéricos válidos nos dois campos</p>
        `
    } else{
        resultado_comissao = v2 / 100

        valor_com_comissao = v1 * resultado_comissao

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Comissão Calculada<h2>
            <ul>
                <li>Comissão de ${v2}% sobre uma venda de R$ ${v1.toFixed(2)}.</li>
                <li><span>Valor final da comissão R$ ${valor_com_comissao.toFixed(2)}</span></li>
            </ul>
        
        
        `;
    };

};


function limpar(){
    resultado.style.display = 'none';

    input01.value = '';
    
    input02.value = '';

    input01.focus();
};