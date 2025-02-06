        function showModal(imageElement, text) {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const modalText = document.getElementById('modalText');

            // Buscar la base de la imagen y texto 
            modalImage.src = imageElement.src;
            modalText.textContent = text;

            // Mostrar el Modal 
            modal.style.display = 'flex';
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
        }

        // Cierra el Modal haciendo clic en la imagen
        window.onclick = function(event) {
            const modal = document.getElementById('imageModal');
            if (event.target === modal) {
                closeModal();
            }
        };

        /*
        Galería de imágenes:

        Las imágenes están dispuestas en una galería usando flexbox.
        Cada imagen tiene un evento onclick que llama a la función showModal con el elemento de la imagen y un texto como parámetros.
        Modal:

        El modal es un contenedor invisible inicialmente (display: none) que se muestra al hacer clic en una imagen.
        Contiene la imagen ampliada y un párrafo con texto falso.
        Interactividad:

        La función showModal establece la fuente de la imagen y el texto en el modal, luego lo hace visible.
        La función closeModal oculta el modal.
        Al hacer clic fuera del modal (en el fondo), también se cierra.


        --> Resultado:
        Al hacer clic en una imagen, se muestra en un modal junto con un texto falso descriptivo. 
        Puedes personalizar las imágenes y textos según lo que necesites.
*/


       