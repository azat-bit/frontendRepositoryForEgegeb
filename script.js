document.addEventListener('DOMContentLoaded', function() {
    // Tüm accordion-header elementlerini seç
    const headers = document.querySelectorAll('.accordion-header');

    // İlk öğeyi aç
    headers[0].parentElement.classList.add('active');

    // Her header'a tıklanabilirlik ekle
    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Tüm öğeleri kapat
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // Tıklanan öğeyi aç
            this.parentElement.classList.add('active');
        });
    });
});
