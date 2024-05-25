/*document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje, nos pondremos en contacto contigo pronto.');
});*/


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the form values
    

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    // Regular expression for validating letters and spaces
    const lettersPattern = /^[A-Za-z\s]+$/;

    // Validate the form values
    if (name === '' || !lettersPattern.test(name)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        return;
    }
    //fijarse esto si valida
    if (surname === '' || !lettersPattern.test(surname)) {
        alert('Por favor, ingresa un apellido válido (solo letras y espacios).');
        return;
    }
        
    
   /* if (email === '') {
        alert('Por favor, ingresa tu email.');
        return;
    }*/
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }
    
    if (message === '' || !lettersPattern.test(message)) {
        alert('Por favor, ingresa un mensaje.');
        return;
    }
  



    // If all validations pass
    alert('Gracias por tu mensaje, pronto nos pondremos  en contacto contigo.');
    
    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});


