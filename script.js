document.addEventListener("DOMContentLoaded", function() {
    const detailLinks = document.querySelectorAll('.item a');
    detailLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Menghentikan navigasi
            alert(`
WhatsApp: 085182012498
Instagram : @blueskyzii
Discord     : @blueskyzii
`);
        });
    });
});