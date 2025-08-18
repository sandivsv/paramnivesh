// --------------------------
//       Main js file
// --------------------------

; (function ($) {
  ; ('use strict')
  // Preloader
  jQuery(window).on('load', function () {
    $('.preloader').delay(1600).fadeOut('slow')
  })

  $('.sidebar-button').on('click', function () {
    $(this).toggleClass('active')
  })

  document
    .querySelector('.sidebar-button')
    .addEventListener('click', () =>
      document.querySelector('.main-menu').classList.toggle('show-menu')
    )

  $('.menu-close-btn').on('click', function () {
    $('.main-menu').removeClass('show-menu')
  })

  // sidebar
  $('.right-sidebar-button').on('click', function () {
    $('.right-sidebar-menu').addClass('show-right-menu')
  })
  $('.right-sidebar-close-btn').on('click', function () {
    $('.right-sidebar-menu').removeClass('show-right-menu')
  })

  // Video Popup

  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "close"
    ],
    loop: false,
    protect: true
  });
  $('.video-player').fancybox({
    buttons: [
      "close"
    ],
    loop: false,
    protect: true
  });

  //  counter
  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });

  // niceSelect
  $(document).ready(function () {
    $('select').length > 0 && $('select').niceSelect();
  });

  // sticky header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header.header-area')
    header.classList.toggle('sticky', window.scrollY > 200)
  })

  // scroll up button
  document.addEventListener('DOMContentLoaded', function (event) {
    let offset = 50
    let circleContainer = document.querySelector('.circle-container')
    let circlePath = document.querySelector('.circle-container path')
    let pathLength = circlePath.getTotalLength()
    circlePath.style.transition = circlePath.style.WebkitTransition = 'none'
    circlePath.style.strokeDasharray = pathLength
    circlePath.style.strokeDashoffset = pathLength
    circlePath.getBoundingClientRect()
    circlePath.style.transition = circlePath.style.WebkitTransition =
      'stroke-dashoffset 10ms linear'

    let updateLoader = () => {
      let scrollTop = window.scrollY
      let docHeight = document.body.offsetHeight
      let winHeight = window.innerHeight
      let height = docHeight - winHeight
      let progress = pathLength - (scrollTop * pathLength) / height
      circlePath.style.strokeDashoffset = progress

      if (scrollTop > offset) {
        circleContainer.classList.add('active')
      } else {
        circleContainer.classList.remove('active')
      }
    }
    circleContainer.onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.onscroll = () => {
      updateLoader()
    }
    updateLoader()
  })

  // ====================
  // Progress Bar
  // ====================
  var skillPers = document.querySelectorAll('.experience-bar-per')

  skillPers.forEach(function (skillPer) {
    var per = parseFloat(skillPer.getAttribute('data-per'))
    skillPer.style.width = per + '%'

    var animatedValue = 0
    var startTime = null

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      var progress = timestamp - startTime
      var stepPercentage = progress / 1000 // Dividing by duration in milliseconds (1000ms = 1s)

      if (stepPercentage < 1) {
        animatedValue = per * stepPercentage
        skillPer.setAttribute('data-per', Math.floor(animatedValue) + '%')
        requestAnimationFrame(animate)
      } else {
        animatedValue = per
        skillPer.setAttribute('data-per', Math.floor(animatedValue) + '%')
      }
    }
    requestAnimationFrame(animate)
  })

  // ---------------
  // All Buttons
  let arr1 = gsap.utils.toArray('#btn_wrapper')
  let arr2 = gsap.utils.toArray('.btn_wrapper')
  const all_buttons = arr1.concat(arr2)

  gsap.registerPlugin(ScrollTrigger);

  all_buttons.forEach(btn => {
    if (!btn.classList.contains('banner-btn')) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: 'top center+=150',
          markers: false
        },
        opacity: 0,
        y: -70,
        ease: 'bounce',
        duration: 1.5
      })
    }
  })
  // home3 service
  jQuery('.service-section-three .services-hover').on(
    'click',
    function () {
      $(this).toggleClass('active')
      $(this).find('.service-bottom-wrap').slideToggle()
    }
  )

  jQuery('.service-section-three  .services-hover').on(
    'mouseleave',
    function () {
      jQuery(this).find('.service-bottom-wrap').slideUp()
      jQuery(this).siblings().removeClass('active')
    }
  )
  jQuery('.service-section-three .services-hover').on(
    'click',
    function () {
      $(this).toggleClass('active')
      $(this).find('.service-img-wrap').slideToggle()
    }
  )

  jQuery('.service-section-three  .services-hover').on(
    'mouseleave',
    function () {
      jQuery(this).find('.service-img-wrap').slideUp()
      jQuery(this).siblings().removeClass('active')
    }
  )

  // home1 service image
  const serviceImgItem2 = document.querySelectorAll(
    '.services-wrap .single-services'
  )

  function __followImageCursor2(event, serviceImgItem2) {
    const contentBox = serviceImgItem2.getBoundingClientRect()
    const dx = event.clientX - contentBox.x
    const dy = event.clientY - contentBox.y
    serviceImgItem2.children[2].style.transform = `translate(${dx}px, ${dy}px)`
  }

  serviceImgItem2.forEach((item, i) => {
    item.addEventListener('mousemove', event => {
      setInterval(__followImageCursor2(event, item), 100)
    })
  })

  //home1-banner-slider
  new Swiper('.banner-img-slider', {
    slidesPerView: 1,
    speed: 2500,
    spaceBetween: 25,
    effect: 'fade', // Use the fade effect
    fadeEffect: {
      crossFade: true // Enable cross-fade transition
    },
    autoplay: {
      delay: 3000, // Autoplay duration in milliseconds
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.home1-banner-next',
      prevEl: '.home1-banner-prev'
    }
  })

  // home1 testimonial Slider start
  new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    // loop: true,
    effect: 'fade', // Use the fade effect
    fadeEffect: {
      crossFade: true // Enable cross-fade transition
    },
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination1',
      clickable: true
    },
    navigation: {
      nextEl: '.testimonial-slider-next',
      prevEl: '.testimonial-slider-prev'
    }
  })
  // home1 testimonial Slider start
  // new Swiper('.testimonial-slider', {
  //   slidesPerView: 1,
  //   speed: 1500,
  //   spaceBetween: 25,
  //   // loop: true,
  //   effect: 'fade', // Use the fade effect
  //   fadeEffect: {
  //     crossFade: true // Enable cross-fade transition
  //   },
  //   autoplay: {
  //     delay: 2500, // Autoplay duration in milliseconds
  //     disableOnInteraction: false
  //   }
  // })
  // Home1 Team Slider
  new Swiper('.team-slider', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      386: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 4
      }
    }
  })

  // home3 testimonial
  new Swiper('.testimonial-slider-three', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination1',
      clickable: true
    },
    navigation: {
      nextEl: '.testimonial-slider-next',
      prevEl: '.testimonial-slider-prev'
    },

    breakpoints: {
      280: {
        slidesPerView: 1
      },
      386: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1400: {
        slidesPerView: 3
      }
    }
  })

  // logo area marquee start
  if ($('.marquee_text').length > 0) {
    $('.marquee_text').marquee({
      direction: 'left',
      duration: 20000,
      gap: 50,
      delayBeforeStart: 0,
      duplicated: true,
      startVisible: true
    })
  }
  if ($('.marquee_text-two').length > 0) {
    $('.marquee_text-two').marquee({
      direction: 'right',
      duration: 20000,
      gap: 50,
      delayBeforeStart: 0,
      duplicated: true,
      startVisible: true
    })
  }

  // logo area marquee end
  // smooth scroll start
  function scrollTo() {
    $(window).scrollTo({ top: 0, behavior: 'smooth' })
  }
  // smooth scroll end

  // right sidebar start
  $('.right-sidebar-button').on('click', function () {
    $('.right-sidebar-menu').addClass('show-right-menu')
  })
  $('.right-sidebar-close-btn').on('click', function () {
    $('.right-sidebar-menu').removeClass('show-right-menu')
  })

  jQuery('.dropdown-icon').on('click', function () {
    jQuery(this).toggleClass('active').next('ul').slideToggle()
    jQuery(this).parent().siblings().children('ul').slideUp()
    jQuery(this).parent().siblings().children('.active').removeClass('active')
  })
  //  right sidebar end

  //Scroll Down Button
  const scrollBtn = document.querySelector('#scroll-btn')
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector('#scroll-section').scrollIntoView({
        behavior: 'smooth'
      })
    })
  }

  // home2 service style
  $('.service-list .single-service').on('mouseenter', function (e) {
    // // Get the index of the hovered content list item
    var index = $(this).index()
    // Remove the 'active' class from all image list items
    $('.service-img-group li').removeClass('active')
    // Add the 'active' class to the corresponding image list item
    $('.service-img-group li:eq(' + index + ')').addClass('active')
  })

  // home2 solution section
  $('.services-list .single-service').on('mouseenter', function (e) {
    // // Get the index of the hovered content list item
    var index = $(this).index()
    // Remove the 'active' class from all image list items
    $('.service-img-group li').removeClass('active')
    // Add the 'active' class to the corresponding image list item
    $('.service-img-group li:eq(' + index + ')').addClass('active')
  })
})(jQuery)
