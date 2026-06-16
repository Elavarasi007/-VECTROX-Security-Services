document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------------------
     Smooth scroll for anchor links
  --------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------------------------------------------
     Fade-in on scroll (AOS-like)
  --------------------------------------------- */
  const animatedEls = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedEls.forEach(function (el) {
    observer.observe(el);
  });

  /* ---------------------------------------------
     Back to top button
  --------------------------------------------- */
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------------------------------------
     Message character counter
  --------------------------------------------- */
  const messageBox = document.getElementById('messageBox');
  const charCount = document.getElementById('charCount');

  if (messageBox && charCount) {
    messageBox.addEventListener('input', function () {
      charCount.textContent = messageBox.value.length;
    });
  }

  /* ---------------------------------------------
     Quote form submission (demo)
  --------------------------------------------- */
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your request. Our team will get back to you shortly.');
      quoteForm.reset();
      if (charCount) charCount.textContent = '0';
    });
  }

  /* ---------------------------------------------
     Mega menu (Services) toggle
  --------------------------------------------- */
  const megaMenu = document.querySelector('.mega-menu');
  const megaTrigger = document.querySelector('.mega-trigger > a');
  const megaClose = document.querySelector('.mega-close');

  if (megaTrigger && megaMenu) {
    megaTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      megaMenu.classList.add('show');
      //document.body.style.overflow = 'hidden';
    });
  }

  if (megaClose && megaMenu) {
    megaClose.addEventListener('click', function () {
      megaMenu.classList.remove('show');
      document.body.style.overflow = '';
    });
  }

  // Close mega menu with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && megaMenu && megaMenu.classList.contains('show')) {
      megaMenu.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  /* ---------------------------------------------
     Mobile offcanvas submenu toggles
  --------------------------------------------- */
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      this.classList.toggle('open');
      if (submenu) {
        submenu.classList.toggle('show');
      }
    });
  });

});





/* =========================================
   STICKY HEADER
========================================= */


window.addEventListener('scroll', function () {

    const header = document.getElementById('headerWrapper');

    if (!header) return;

    if (window.scrollY > 10) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

});






/* =========================================
FAQ
========================================= */


document.querySelectorAll('.faq-question').forEach(function(question){

    question.addEventListener('click', function(){

        const item = this.parentElement;

        item.classList.toggle('active');

    });

});



document.addEventListener('DOMContentLoaded', function () {

    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {

        button.addEventListener('click', function () {

            const answer = this.nextElementSibling;

            document.querySelectorAll('.faq-answer').forEach(item => {

                if(item !== answer){
                    item.style.maxHeight = null;
                    item.parentElement.classList.remove('active');
                }

            });

            if(answer.style.maxHeight){
                answer.style.maxHeight = null;
                this.parentElement.classList.remove('active');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                this.parentElement.classList.add('active');
            }

        });

    });

});