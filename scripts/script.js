document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Configuração do botão de WhatsApp
    document.querySelectorAll(".botao-whatsapp").forEach(botao => {
        botao.addEventListener("click", function () {
            const numero = "5588999999999";
            const mensagem = encodeURIComponent("Olá, estou interessado no carrinho elétrico!");
            window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
        });
    });

    // Configuração do menu hambúrguer
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Carrossel de produtos
    const carrossel = document.querySelector(".produtos-carrossel");
    let isDown = false;
    let startX;
    let scrollLeft;

    carrossel.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    carrossel.addEventListener("mouseleave", () => {
        isDown = false;
    });

    carrossel.addEventListener("mouseup", () => {
        isDown = false;
    });

    carrossel.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 2;
        carrossel.scrollLeft = scrollLeft - walk;
    });

    // Modal de produto
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close-modal");
    const produtos = document.querySelectorAll(".produto");
    const modalImage = document.querySelector(".modal img");
    const modalTitle = document.querySelector(".modal h3");
    const modalPrice = document.querySelector(".modal p");

    produtos.forEach(produto => {
        produto.addEventListener("click", () => {
            const imgSrc = produto.querySelector("img").src;
            const title = produto.querySelector("h3").textContent;
            const price = produto.querySelector("p").textContent;

            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalPrice.textContent = price;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.animation = "fadeOut 0.3s";
        setTimeout(() => {
            modal.style.display = "none";
            modal.style.animation = "fadeIn 0.3s";
        }, 300);
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.animation = "fadeOut 0.3s";
            setTimeout(() => {
                modal.style.display = "none";
                modal.style.animation = "fadeIn 0.3s";
            }, 300);
        }
    });
});
