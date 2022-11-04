let section = $('li');

function toggleAccordion() {
  section.removeClass('menu-active');
  $(this).addClass('menu-active');
}

section.on('click', toggleAccordion);