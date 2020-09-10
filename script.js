function newPage(dados,janela) {
    janela.document.body.innerHTML += `
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="/Viwer/viwer.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="Viewer/jquery.splitter-0.14.0.js"></script>
    <script src="Viewer/viewer.js"></script>
    <script defer src="script.js"></script>
    `
    newHeader(dados,janela);
    newTable(dados,janela);
    newFooter(janela);
}

function newHeader(dados,janela){
    janela.document.body.innerHTML += `
    <header>
        <div id="Brasao">
            <img src="${dados['brasao'] || ''}">
            <p>${dados['entidade'] || 'null'}<br>Secretaria da Educação</p>
        </div>
        <p id="Modensino">
            CONTROLE DE ATENDIMENTO DAS REFEIÇÕES - ENSINO FUNDAMENTAL, ENSINO MÉDIO E EJA
        </p>
        <table id="Info">
            <tr>
                <td>Unidade Escolar:</td>
                <td class="yellow">${dados['unidade'] || 'null'}</td>
            </tr>
            <tr>
                <td>Nome Usual:</td>
                <td class="yellow">${dados['nomeusual'] || 'null'}</td>
            </tr>
            <tr>
                <td>Responsavel(nome do Diretor):</td>
                <td class="yellow">${dados['diretor'] || 'null'}</td>
            </tr>
        </table>
    </header>
    `;
}

function newTable({tabela}, janela) {
    let table = buildTable(tabela);
    table.classList.add('content-block');
    janela.document.body.appendChild(table);
}
function newFooter(janela) {
    janela.document.body.innerHTML += `
        <footer>
            <div>
                <p>Assinatura do diretor:________________________</p>
                <p>(CARIMBO)</p>
            </div>
            <div>
                <p>Assinatura Supervisão (Empresa S.H.A):_________________________</p>
                <p>(CARIMBO)</p>
            </div>
        </footer>
    `;
}