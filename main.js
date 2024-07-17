// Função principal para obter projetos do GitHub
function getProjects(){
    // URL da API do GitHub para obter os repositórios do usuário "Nomedigo"
    const urlGitHub = 'https://api.github.com/users/Nomedigo/repos'
    // Elemento de carregamento, que será mostrado enquanto os dados são buscados
    var loadingElement = document.getElementById('loading')

    // Faz uma requisição GET para a URL da API do GitHub
    fetch(urlGitHub,{
        method: 'GET',
    })
        .then((response) => response.json()) // Converte a resposta em JSON
        .then((response) => {
            console.log(response) // Exibe a resposta no console para depuração
            showProjects(response) // Chama a função para mostrar os projetos
            loadingElement.style.display = 'none' // Esconde o elemento de carregamento
        })
        .catch((e) => {
            console.log(`Error -> ${e}`) // Exibe erros no console, se houver
        })
}

// Função para exibir os projetos na página
function showProjects(data){
    // Elemento onde os projetos serão listados
    var listElement = document.getElementById('my-projects-list')
    // Loop através de cada projeto retornado pela API
    for(let i = 0; i < data.length; i++)
    {
        // Cria um novo div para cada projeto
        let div = document.createElement("div")
        // Cria um novo link (a) para cada projeto
        let a = document.createElement("a")
        a.href = data[i]['clone_url'] // Define o link para o URL do projeto
        a.target = '_blank' // Abre o link em uma nova aba
        a.title = data[i]['description'] // Define a descrição como título do link
        // Cria um texto de link com o nome do projeto
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText); // Adiciona o texto ao link
        div.appendChild(a) // Adiciona o link ao div
        listElement.appendChild(div) // Adiciona o div à lista de projetos
    }
}
// Chama a função getProjects para iniciar o processo
getProjects()