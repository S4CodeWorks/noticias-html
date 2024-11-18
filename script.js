// Quando a página for completamente carregada, ativamos a animação nas notícias
window.addEventListener('load', function() {
    const newsItems = document.querySelectorAll('.news-item');
    
    // Adiciona uma animação de entrada nos itens de notícias
    newsItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 200); // Adiciona o delay progressivo para cada item
    });
});
