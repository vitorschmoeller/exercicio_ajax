document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('avatar-perfil');
    const nome = document.getElementById('nome');
    const username = document.querySelector('#username');
    const repositorios = document.getElementById('repositorios');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const id = document.getElementById('id');
    const data = document.querySelector('#data');
    //lugar onde quero extrair dados desejados
    const endpoint = `https://api.github.com/users/vitorschmoeller` 
    //Na api fetch passamos entre os parentes o endereço dos dados
    //dps utilizamos o metodo .then para requisitar uma resposta(com callback)
    fetch(endpoint)
    .then(function(resp) {
        //para fazer a recuperação do conteudo .json()
        return resp.json()
        //quando fazemos um return dentro da função .then() da pra recuperar em outro codigo then
    })
    .then(function(json){
        console.log(json);
        nome.innerText = `Vitor Schmoeller`;
        username.innerHTML = `@${json.login}`;
        repositorios.innerHTML = `<h4>Repositórios</h4> ${json.public_repos}`;
        seguidores.innerHTML += json.followers;
        seguindo.innerHTML += json.following;
        id.innerHTML += json.id;
        data.innerHTML += json.created_at
        //Trocando foto do perfil pela url
        avatar.src = json.avatar_url;
    })
})