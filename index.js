    document.querySelectorAll('.btn-cambiar').forEach(btn => {
        btn.addEventListener('click', function() {
        const card = this.closest('.card');
        card.classList.toggle('bg-success');
        card.classList.toggle('text-white');
        });
    });