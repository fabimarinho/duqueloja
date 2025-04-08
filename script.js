document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentSlide = 0;

    // Configuração inicial
    function initializeSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
    }

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
    }

    // Botão anterior
    prevBtn.addEventListener('click', () => {
        let newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    });

    // Botão próximo
    nextBtn.addEventListener('click', () => {
        let newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    });

    // Inicializar o carrossel
    initializeSlides();

    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', function(e) {
        if (!searchContainer.classList.contains('active')) {
            e.preventDefault();
            searchContainer.classList.add('active');
            searchInput.focus();
        } else if (searchInput.value.trim() === '') {
            e.preventDefault();
            searchContainer.classList.remove('active');
        }
    });

    // Fechar a busca quando clicar fora
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });

    // Prevenir que o clique no container feche a busca
    searchContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Adicionar funcionalidade de clique para o dropdown
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne a navegação
            
            // Fecha todos os outros dropdowns
            navItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherDropdown = otherItem.querySelector('.dropdown-menu');
                    if (otherDropdown) {
                        otherDropdown.style.opacity = '0';
                        otherDropdown.style.visibility = 'hidden';
                        otherDropdown.style.transform = 'translateY(10px)';
                    }
                }
            });
            
            // Toggle do dropdown atual
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateY(0)';
            } else {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            }
        });
    });

    // Fechar dropdown quando clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item')) {
            navItems.forEach(item => {
                item.classList.remove('active');
                const dropdown = item.querySelector('.dropdown-menu');
                if (dropdown) {
                    dropdown.style.opacity = '0';
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.transform = 'translateY(10px)';
                }
            });
        }
    });

    // Adicionar funcionalidade de preview de imagem
    const dropdownItems = document.querySelectorAll('.pistolas-menu .dropdown-item');
    const previewImage = document.querySelector('.pistolas-menu .preview-image img');
    const previewText = document.querySelector('.pistolas-menu .preview-text');

    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const imageUrl = this.getAttribute('data-image');
            const itemText = this.querySelector('span').textContent;
            const aimedIcon = document.querySelector('.aimed-icon');
            
            if (imageUrl) {
                previewImage.src = imageUrl;
                previewImage.style.display = 'block';
                aimedIcon.style.display = 'none';
                previewText.textContent = itemText;
            }
        });

        item.addEventListener('mouseleave', function() {
            previewImage.style.display = 'none';
            document.querySelector('.aimed-icon').style.display = 'block';
            previewText.textContent = 'Passe o mouse sobre uma categoria';
        });
    });

    // Função para gerenciar o dropdown de login
    const userIcon = document.querySelector('.user-icon');
    const loginMenu = document.querySelector('.login-menu');
    
    // Mostrar/ocultar o menu de login ao clicar no ícone
    userIcon.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        loginMenu.style.opacity = loginMenu.style.opacity === '1' ? '0' : '1';
        loginMenu.style.visibility = loginMenu.style.visibility === 'visible' ? 'hidden' : 'visible';
        loginMenu.style.transform = loginMenu.style.transform === 'translateY(0)' ? 'translateY(10px)' : 'translateY(0)';
    });

    // Fechar o menu quando clicar fora dele
    document.addEventListener('click', function(e) {
        if (!userIcon.contains(e.target) && !loginMenu.contains(e.target)) {
            loginMenu.style.opacity = '0';
            loginMenu.style.visibility = 'hidden';
            loginMenu.style.transform = 'translateY(10px)';
        }
    });

    // Gerencia o clique no item "Todos os Produtos"
    const todosOsProdutosLink = document.querySelector('.dropdown-menu .main-item');
    
    todosOsProdutosLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'todos-produtos.html';
    });

    // Gerencia o clique no item "Mais Vendidos"
    const maisVendidosLink = document.querySelectorAll('.dropdown-menu .main-item')[1];
    
    maisVendidosLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'mais-vendidos.html';
    });

    // Fecha o dropdown menu após o clique
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', function(e) {
            if (e.target.classList.contains('dropdown-item')) {
                this.style.opacity = '0';
                this.style.visibility = 'hidden';
            }
        });
    });
});