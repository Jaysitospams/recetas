document.addEventListener('DOMContentLoaded', function() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    const filterLinks = document.querySelectorAll('header nav ul li a[data-filter]');
    const searchInput = document.querySelector('.search-bar input');
    const modal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal .close');

    // Filtrado de recetas
    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = this.getAttribute('data-filter');
            recipeCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Búsqueda de recetas
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        recipeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

    // Mostrar detalles de la receta
    recipeCards.forEach(card => {
        const button = card.querySelector('button');
        button.addEventListener('click', function() {
            const title = card.querySelector('h3').textContent;
            const imageSrc = card.querySelector('img').src;
            const details = card.querySelector('.recipe-details').innerHTML;

            modalTitle.textContent = title;
            modalImage.src = imageSrc;
            modalDetails.innerHTML = details;
            modal.style.display = 'block';
        });
    });

    // Cerrar modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
