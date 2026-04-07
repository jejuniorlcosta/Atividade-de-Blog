document.addEventListener("DOMContentLoaded", function () {
    const botoesFiltro = document.querySelectorAll(".filtro");
    const cardsPokemon = document.querySelectorAll(".card-pokemon");

    botoesFiltro.forEach((botao) => {
        botao.addEventListener("click", function () {
            const filtro = this.getAttribute("data-filtro");

            botoesFiltro.forEach((item) => {
                item.classList.remove("ativo");
            });

            this.classList.add("ativo");

            cardsPokemon.forEach((card) => {
                const tipos = card.getAttribute("data-tipo");

                if (filtro === "todos" || tipos.includes(filtro)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});