function main() {
    let exibirTarefas = document.querySelector(".cadastrar-tarefa");
    let botao = document.querySelector("#btn");

    botao.addEventListener("click", function () {
        exibirTarefas.innerHTML += `Oi`;
    });
}

main();