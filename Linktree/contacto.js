(function(){
    emailjs.init("5ne2DQO6FifHls6qd");
  })();

  document.getElementById("contact-form").addEventListener("submit", function(event) {
event.preventDefault();
var form = this;
emailjs.sendForm("service_n12t7dc", "template_iojw3u5", form)
  .then(function() {
    Swal.fire({
      title: '<span style="color: #ff99cc;">¡Correo enviado con éxito!</span>',
      html: '<p style="color: #fuchsia;">Tu mensaje ha sido enviado correctamente.</p>' +
            '<p style="color: #000;">Gracias por contactarnos.</p>',
      background: '#fff',
      icon: 'success'
    });
    form.reset();
  }, function(error) {
    Swal.fire({
      title: '<span style="color: #ff99cc;">¡Error!</span>',
      html: '<p style="color: #fuchsia;">No se pudo enviar el correo. Inténtalo de nuevo.</p>',
      background: '#fff',
      icon: 'error'
    });
  });
});