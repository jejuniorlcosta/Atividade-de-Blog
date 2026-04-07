document.addEventListener("DOMContentLoaded", function () {
    const botoesFiltro = document.querySelectorAll(".filtro");
    const cards = document.querySelectorAll(".card-curiosidade");
    const botoesCuriosidade = document.querySelectorAll(".btn-curiosidade");

    botoesFiltro.forEach((botao) => {
        botao.addEventListener("click", function () {
            const filtro = this.getAttribute("data-filtro");

            botoesFiltro.forEach((item) => {
                item.classList.remove("ativo");
            });

            this.classList.add("ativo");

            cards.forEach((card) => {
                const categoria = card.getAttribute("data-categoria");

                if (filtro === "todos" || categoria === filtro) {
                    card.classList.remove("oculto");
                } else {
                    card.classList.add("oculto");
                }
            });
        });
    });

    botoesCuriosidade.forEach((botao) => {
        botao.addEventListener("click", function () {
            const card = this.parentElement;
            card.classList.toggle("aberto");

            if (card.classList.contains("aberto")) {
                this.textContent = "Esconder curiosidade";
            } else {
                this.textContent = "Ver curiosidade";
            }
        });
    });
});