// Array com os nomes dos amigos que participarão do amigo secreto
let amigos = [];

// Função para adicionar os nomes dos amigos
function adicionarAmigo() {
    const campoAmigo = document.getElementById('amigo');
    const nomeAmigo = campoAmigo.value.trim();

    // Se certificar que o campo não esteja vazio
    if (nomeAmigo === "") { 
        alert("Por favor, insira um nome.");
        return;
    }

    // Validar se o nome não está ou não duplicado
    if (amigos.includes(nomeAmigo)) {
        alert(`${nomeAmigo} já está participando da lista do amigo secreto! Adicione outro(a) amigo(a).`);
        return;
    }

    // Adicionar o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpar campoo
    campoAmigo.value = "";

    //Atualizar a lista de amigos
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função para sortear os amigos
function sortearAmigo(){
    if (amigos.length === 0) { // Verificar se o array amigos está vazio
        alert("Não há amigos disponíveis para o sorteio!");
        return;
    }

    const indiceAleatorio = Math.floor (Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `${amigoSorteado} foi a pesssoa sorteada`;
}