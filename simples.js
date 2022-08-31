var linha_index = 0;
var colunaIndex = 0;

function adicionarAluno2(){
    let dado = document.getElementById('linhas').innerHTML
    document.getElementById('linhas').innerHTML = dado + `<tr id='linha${linha_index}'></tr>`
    document.getElementById(`linha${linha_index}`).innerHTML = '<tr><td><input type="text"></td><td><input type="number" min="1" max="10" id="nota13"></input></td><td><input type="number" min="1" max="10" id="nota14"></input></td><td><input type="number" min="1" max="10" id="nota15"></input></td><td><input type="number" min="1" max="10" id="nota16"></input></td><td><output id="media4"></output></td> <td><output id="situacao4"></output></td></tr>'
    linha_index += 1
}

function criarNota(){
    let dado = document.getElementById('colunas').innerHTML
    document.getElementById('colunas').innerHTML = dado + `<th id='coluna${colunaIndex}'></th>`
    document.getElementById(`coluna${colunaIndex}`).innerHTML = '<tr><th id="coluna" >Nota</th></tr> <tbody id="linhas"><tr><th>TESTE</th></tr></tbody> '
    colunaIndex += 1  
}




function calculaMedia(){
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    let nota5 = Number(document.getElementById("nota5").value);
    let nota6 = Number(document.getElementById("nota6").value);
    let nota7 = Number(document.getElementById("nota7").value);
    let nota8 = Number(document.getElementById("nota8").value);

    let nota9 = Number(document.getElementById("nota9").value);
    let nota10 = Number(document.getElementById("nota10").value);
    let nota11 = Number(document.getElementById("nota11").value);
    let nota12 = Number(document.getElementById("nota12").value);

    let nota13 = Number(document.getElementById("nota13").value);
    let nota14 = Number(document.getElementById("nota14").value);
    let nota15 = Number(document.getElementById("nota15").value);
    let nota16 = Number(document.getElementById("nota16").value);

  


    let status = '';
    media = (nota1 + nota2 + nota3 + nota4)/4;
    media2 = (nota5 + nota6 + nota7 + nota8)/4;
    media3 = (nota9 + nota10 + nota11 + nota12)/4;
    media4 =(nota13 + nota14 + nota15 + nota16)/4;

    let total = (media + media2 + media3 + media4)/4;
    console.log(total)
    document.getElementById("totalMedia").innerText = total;

    document.getElementById("media1").innerText = media
    if (media > 5) {
        status = "passou";
        document.getElementById("situacao1").innerText = status;
    }if (media == 5) {
        status = "recuperação";
        document.getElementById("situacao1").innerText = status;
    }if (media < 5) {
        status = "reprovado";
        document.getElementById("situacao1").innerText = status;
    }


    document.getElementById("media2").innerText = media2
    if (media2 > 5) {
        status = "passou";
        document.getElementById("situacao2").innerText = status;
    }if (media2 == 5) {
        status = "recuperação";
        document.getElementById("situacao2").innerText = status;
    }if (media2 < 5) {
        status = "reprovado";
        document.getElementById("situacao2").innerText = status;
    }


    document.getElementById("media3").innerText = media3
    if (media3 > 5) {
        status = "passou";
        document.getElementById("situacao3").innerText = status;
    }if (media3 == 5) {
        status = "recuperação";
        document.getElementById("situacao3").innerText = status;
    }if (media3 < 5) {
        status = "reprovado";
        document.getElementById("situacao3").innerText = status;
    }


    document.getElementById("media4").innerText = media4
    if (media4 > 5) {
        status = "passou";
        document.getElementById("situacao4").innerText = status;
    }if (media4 == 5) {
        status = "recuperação";
        document.getElementById("situacao4").innerText = status;
    }if (media4 < 5) {
        status = "reprovado";
        document.getElementById("situacao4").innerText = status;
    }

}
