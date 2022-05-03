// $(document).ready(function () {

//   $.each($('.gallery-form__period'), function (index, val) {
//     if ($(this).find('input').prop('checked') == true) {
//       $(this).addClass('active');
//     }
//   });
//   $(document).on('click', '.gallery-form__period', function (event) {
//     if ($(this).hasClass('active')) {
//       $(this).find('input').prop('checked', false);
//     } else {
//       $(this).find('input').prop('checked', true);
//     }
//     $(this).toggleClass('active');

//     return false;
//   });
// });



window.addEventListener('DOMContentLoaded', function () {


  document.querySelectorAll('.gallery-form__period').forEach(function (gallery) {
    gallery.addEventListener('click', function () {
      gallery.classList.toggle('active')
      console.log(gallery);
    })
  })

  /*CATALOG - ACCORDION*/
  document.querySelectorAll('.catalog__accordion-btn').forEach(function (catalogLink) {
    catalogLink.addEventListener('click', function (authors) {
      const author = authors.currentTarget.dataset.author

      document.querySelectorAll('.catalog__bottom-left').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__bottom-author-active')
      })
      document.querySelector(`[data-authorimg="${author}"]`).classList.add('catalog__bottom-author-active')
    })
  })
  document.querySelectorAll('.catalog__accordion-btn').forEach(function (catalogsLink) {
    catalogsLink.addEventListener('click', function (authors) {
      const author = authors.currentTarget.dataset.author

      document.querySelectorAll('.catalog__accordion-btn').forEach(function (changeLink) {
        changeLink.classList.remove('catalog__accordion-btn-active')
      })

      document.querySelector(`[data-author="${author}"]`).classList.add('catalog__accordion-btn-active')
    })
  })

  /*HEADER - ART, HEADER - BURGER, FORM */
  document.querySelectorAll('.header-bottom__btn').forEach(function (artList) {
    artList.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).classList.toggle('header-art__is-open');
      document.querySelector(`[data-path="${path}"]`).classList.toggle('button-back')
    })
  })
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active');
    document.querySelector('#burger').classList.toggle('hello')
  })
  document.querySelector('#search-btn').addEventListener('click', function () {
    document.querySelector('#search-form').classList.toggle('search-block__active');
    document.querySelector('#search-btn').classList.toggle('search-desktop__active');
  })

  /*TOOLTIP*/
  document.querySelectorAll('.projects__tooltip-link').forEach(function (toolTip) {
    toolTip.addEventListener('click', function (tooltip) {
      const toollink = tooltip.currentTarget.dataset.toollink
      document.querySelector(`[data-tooltext="${toollink}"]`).classList.toggle('tooltip-text-active');
      document.querySelector(`[data-toollink="${toollink}"]`).classList.toggle('tooltip-active');
    })
    toolTip.addEventListener('mouseenter', function (firstFunc) {
      const toollink = firstFunc.currentTarget.dataset.toollink
      document.querySelector(`[data-tooltext="${toollink}"]`).classList.add('tooltip-text-active');
      document.querySelector(`[data-toollink="${toollink}"]`).classList.add('tooltip-active');
    })
    toolTip.addEventListener('mouseleave', function (secondFunc) {
      const toollink = secondFunc.currentTarget.dataset.toollink
      document.querySelector(`[data-tooltext="${toollink}"]`).classList.remove('tooltip-text-active');
      document.querySelector(`[data-toollink="${toollink}"]`).classList.remove('tooltip-active');
    })

    toolTip.addEventListener('focus', function (thirdFunc) {
      const toollink = thirdFunc.currentTarget.dataset.toollink
      document.querySelector(`[data-tooltext="${toollink}"]`).classList.add('tooltip-text-active');
      document.querySelector(`[data-toollink="${toollink}"]`).classList.add('tooltip-active');
    })

    toolTip.addEventListener('blur', function (fourthFunc) {
      const toollink = fourthFunc.currentTarget.dataset.toollink
      document.querySelector(`[data-tooltext="${toollink}"]`).classList.remove('tooltip-text-active');
      document.querySelector(`[data-toollink="${toollink}"]`).classList.remove('tooltip-active');
    })
  })

  /* MODAL */
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal2"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal2').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close2"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal2').style.marginLeft = '0px';
  });

  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal3"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal3').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close3"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal3').style.marginLeft = '0px';
  });

  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal4"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal4').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close4"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal4').style.marginLeft = '0px';
  });

  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal5"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal5').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close5"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal5').style.marginLeft = '0px';
  });

  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal6"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal6').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close6"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal6').style.marginLeft = '0px';
  });
  /*ОТПРАВКА ФОРМЫ*/
  const form = document.getElementById('contacts-form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    })
    if (response.ok) {
      let result = await response.json();
      alert(result, message);
      form.reset();
    } else {
      alert("Ошибка");
    }
  }
});
