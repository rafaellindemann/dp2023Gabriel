var fila = []
let proximoID = 1



function cadastrar(){
    var subway = {
        id: "",
        pao: "",
        tamanho: "",
        recheio: "",
        adicionais: [],
        saladas: [],
        molhos: []
    }
    subway.id = proximoID
    proximoID++
    subway.pao = document.getElementById("inpPao").value
    subway.tamanho = document.getElementById("inpTamanho").value
    subway.recheio = document.getElementById("inpRecheio").value

    if(document.getElementById('chkCreamcheese').checked) subway.adicionais.push('Creamcheese')
    if(document.getElementById('chkBacon').checked) subway.adicionais.push('Bacon')
    if(document.getElementById('chkPresunto').checked) subway.adicionais.push('Presunto')
    
    if(document.getElementById('chkAlface').checked) subway.saladas.push(' Alface')
    if(document.getElementById('chkTomate').checked) subway.saladas.push(' Tomate')
    if(document.getElementById('chkPimentao').checked) subway.saladas.push(' Pimentão')
    if(document.getElementById('chkCebola').checked) subway.saladas.push(' Cebola')
    
    if(document.getElementById('chkMaionese').checked) subway.molhos.push(' Maionese')
    if(document.getElementById('chkMaioneseTemperada').checked) subway.molhos.push(' Maionese Temperada')
    if(document.getElementById('chkChipotle').checked) subway.molhos.push(' Chipotle')
    if(document.getElementById('chkMostarda').checked) subway.molhos.push(' Mostarda')
    

    fila.push(subway)

    limparInputs()
    mostrar()
}

function mostrar(){
    document.getElementById("divSanduiches").innerHTML = ''

    for(var i=0; i<fila.length; i++){
        document.getElementById("divSanduiches").innerHTML += "Sanduíche: " + fila[i].id +
        "<br>Pão: " + fila[i].pao + 
        "<BR>Tamanho: " + fila[i].tamanho +
        "<BR>Recheio: " + fila[i].recheio +
        "<BR>Adicionais: " + fila[i].adicionais +
        "<BR>Saladas: " + fila[i].saladas + 
        "<BR>Molhos: " + fila[i].molhos + '<HR>'

    }

}

function limparInputs(){
    document.getElementById("inpPao").value = ''
    document.getElementById("inpTamanho").value = ''
    document.getElementById("inpRecheio").value = ''

    document.getElementById('chkCreamcheese').checked = false
    document.getElementById('chkBacon').checked = false
    document.getElementById('chkPresunto').checked = false
    
    // document.getElementById("inpSaladas").value = ''
    document.getElementById('chkAlface').checked = false
    document.getElementById('chkTomate').checked = false
    document.getElementById('chkPimentao').checked = false
    document.getElementById('chkCebola').checked = false
    
    // document.getElementById("inpMolhos").value = ''
    document.getElementById('chkMaionese').checked = false
    document.getElementById('chkMaioneseTemperada').checked = false
    document.getElementById('chkChipotle').checked = false
    document.getElementById('chkMostarda').checked = false
    
    document.getElementById("inpPao").focus()

}

function pesquisar(){
    document.getElementById('divPesquisar').style.display = 'block'
}

function testar(){
    const select = document.querySelector('#cars');
    // select.options[select.options.length] = new Option('Fusca', 'fusca');
    // select.options.push(new Option('Fusca', 'fusca'))
    for(let i=0; i<fila.length; i++){
        select.options[select.options.length] = new Option(fila[i].id, fila[i].id);

    }
}

