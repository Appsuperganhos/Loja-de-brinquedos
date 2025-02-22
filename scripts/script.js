document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado!");

  // Configuração do menu hambúrguer (menu principal)
  const menuToggle = document.querySelector(".menu-toggle");
  const menuMain = document.querySelector(".menu-main");

  menuToggle.addEventListener("click", function () {
    menuMain.classList.toggle("active");
  });

  // Toggle do submenu "Produtos"
  const produtosLink = document.querySelector(".menu-item-produtos > a");
  const submenu = document.querySelector(".submenu");

  produtosLink.addEventListener("click", function (e) {
    e.preventDefault();
    submenu.classList.toggle("active");
  });

  // Banner com deslize infinito (conforme o código original)
  const bannerContainer = document.querySelector(".banner-images");
// Selecione os links (que envolvem as imagens) em vez das imagens diretamente:
let bannerLinks = document.querySelectorAll("#banner .banner-images a");
let currentIndex = 0;
const totalLinks = bannerLinks.length;

// Clone o primeiro link (incluindo a imagem dentro dele)
const firstLinkClone = bannerLinks[0].cloneNode(true);
bannerContainer.appendChild(firstLinkClone);

function slideBanner() {
  currentIndex++;
  bannerContainer.style.transition = "transform 1s ease-in-out";
  bannerContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  if (currentIndex === totalLinks) {
    setTimeout(() => {
      bannerContainer.style.transition = "none";
      bannerContainer.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 1000);
  }
}

  setInterval(slideBanner, 4000);

  // Configuração do modal principal para detalhes dos produtos
  document.querySelectorAll(".btn-detalhes").forEach(button => {
    button.addEventListener("click", function (e) {
      const produto = e.target.closest(".produto");
      const title = produto.querySelector("h3").innerText;
      const description = produto.getAttribute("data-description") || "Descrição não disponível.";
      const payment = produto.getAttribute("data-payment") || "Formas de pagamento não informadas.";
      const whatsappMsg = produto.getAttribute("data-whatsapp") || `Olá, quero comprar o ${title}!`;
      const mainImage = produto.querySelector("img").getAttribute("src");

      // Obtém imagens extras para o carrossel, se houver
      let images = [];
      const dataImages = produto.getAttribute("data-images");
      if (dataImages) {
        images = dataImages.split(",");
      } else {
        images.push(mainImage);
      }

      const modal = document.getElementById("product-modal");
      modal.querySelector(".modal-title").innerText = title;
      modal.querySelector(".modal-payment").innerText = payment;
      // Armazena a descrição no modal para uso no sub modal
      modal.setAttribute("data-description", description);
      modal.querySelector(".modal-whatsapp").setAttribute("href", `https://wa.me/5581994605476?text=${encodeURIComponent(whatsappMsg)}`);

      const carouselWrapper = modal.querySelector(".modal-carousel-wrapper");
      carouselWrapper.innerHTML = "";
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        carouselWrapper.appendChild(img);
      });
      modal.setAttribute("data-current-index", "0");
      carouselWrapper.style.transform = `translateX(0)`;

      modal.style.display = "block";
    });
  });

  // Fechar modal principal
  document.querySelector(".modal-close").addEventListener("click", function () {
    document.getElementById("product-modal").style.display = "none";
  });

  window.addEventListener("click", function (event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Navegação do carrossel no modal principal
  document.querySelector(".carousel-prev").addEventListener("click", function () {
    const modal = document.getElementById("product-modal");
    const carouselWrapper = modal.querySelector(".modal-carousel-wrapper");
    const images = carouselWrapper.querySelectorAll("img");
    let currentIndex = parseInt(modal.getAttribute("data-current-index"));
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    modal.setAttribute("data-current-index", currentIndex.toString());
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  document.querySelector(".carousel-next").addEventListener("click", function () {
    const modal = document.getElementById("product-modal");
    const carouselWrapper = modal.querySelector(".modal-carousel-wrapper");
    const images = carouselWrapper.querySelectorAll("img");
    let currentIndex = parseInt(modal.getAttribute("data-current-index"));
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    modal.setAttribute("data-current-index", currentIndex.toString());
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  // Configuração do botão "Ver Descrição" no modal principal
  document.querySelector(".btn-ver-descricao").addEventListener("click", function () {
    const modal = document.getElementById("product-modal");
    const description = modal.getAttribute("data-description") || "Descrição não disponível.";
    // Converte quebras de linha (\n) em <br> para formatação
    const formattedDescription = description.replace(/\n/g, '<br>');
    const subModal = document.getElementById("description-modal");
    subModal.querySelector(".sub-modal-description").innerHTML = formattedDescription;
    subModal.style.display = "block";
  });

  // Fechar sub modal (descrição)
  document.querySelector(".sub-modal-close").addEventListener("click", function () {
    document.getElementById("description-modal").style.display = "none";
  });

  window.addEventListener("click", function (event) {
    const subModal = document.getElementById("description-modal");
    if (event.target === subModal) {
      subModal.style.display = "none";
    }
  });
});
