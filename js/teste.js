const items = [
    {
        id: 0,
        nome: "camiseta",
        img: "",
        quantidade: 23
    },
    {
        id: 1,
        nome: "calça",
        img: "menu-image.png",
        quantidade: 56
    },
    {
        id: 2,
        nome: "blusa",
        img: "img.png",
        quantidade: 30
    }
];

const inicializarLoja = () => {
    var produtos = document.getElementById('produtos');
    items.map((val) => {
        produtos.innerHTML += `
        <div class="produto">
            <img src="${val.img}" />
            <p>${val.nome}</p>
        </div>
        `;
    });
};

inicializarLoja();
