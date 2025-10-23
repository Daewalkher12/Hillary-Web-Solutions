// Simple JS: mobile toggle + contact form simulation
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', function(){ nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; });

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      status.textContent = 'Sending...';
      var data = new FormData(form);
      // Simulate sending
      setTimeout(function(){
        status.textContent = 'Thanks! We received your message. We will contact you within 24 hours.';
        form.reset();
      }, 1000);
    });
  }
});
