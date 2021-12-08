/**
 * The follow JS code is written be me, Chris Huang, for the CS50 Final Project
 */

// Code for first graph
 var ctx = document.getElementById('graph1').getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['1950', '1955', '1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015'],
         datasets: [{
             label: '',
             data: [212.747,	193.18,	181.905,	156.308,	138.133,	124.005,	108.896,	96.1456,	90.7664,	81.8977,	70.0031,	56.9696,	46.3916,	39.859],
             backgroundColor: 'rgba(255, 99, 132, 0.2)',
             borderColor: 'rgba(255, 99, 132, 1)',
             borderWidth: 1,
             fill: true
         }]
     },
     options: {
        plugins: {
          title: {
            display: true,
            text: 'Global Child Mortality (per 1000) Over Last 65 Years'
          }
      },
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });

// Code for second graph
var ctx2 = document.getElementById('graph2').getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1950', '1955', '1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015'],
        datasets: [{
            label: 'High Income Countries',
            data: [72.8025,	55.5295,	45.5442,	37.2888,	29.8715,	24.0782,	18.9969,	15.1919,	12.1408,	9.57258,	8.09397,	7.0467,	6.06085,	5.4348],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: true
        },
        {
           label: 'Upper-Middle Income Countries',
           data: [186.517,	165.418,	145.417,	128.216,	109.578,	92.0429,	75.993,	60.6958,	48.2113,	38.198,	31.1705,	25.1301,	21.0411,	19.0645],
           backgroundColor: 'rgba(75, 192, 192, 0.2)',
           borderColor: 'rgba(75, 192, 192, 1)',
           borderWidth: 1,
           fill: true

        },
        {
          label: 'Middle Income Countries',
          data: [233.348, 213.00, 199.63, 167.27, 145.355, 128.11, 109.93, 94.883, 88.022, 78.53, 66.684, 53.904, 43.253, 36.758],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: true

       },
        {
           label: 'Lower-Middle Income COuntries',
           data: [240.428,	218.139,	200.461,	186.729,	166.032,	144.966,	128.077,	114.528,	101.352,	85.9727,	70.841,	58.0367,	49.1865],
           backgroundColor: 'rgba(255, 159, 64, 0.2)',
           borderColor: 'rgba(255, 159, 64, 1)',
           borderWidth: 1,
           fill: true

        },         
        {
         label: 'Low Income Countries',
         data: [320.089,	292.986,	274.4,	252.328,	233.471,	218.358,	202.411,	186.605,	177.951,	155.527,	129.076,	103.562,	83.8841,	70.92],
         backgroundColor: 'rgba(255, 206, 86, 0.2)',
         borderColor: 'rgba(255, 206, 86, 1)',
         borderWidth: 1,
         fill: true

       }
       ]
    },
    options: {
       plugins: {
         title: {
           display: true,
           text: 'Child Mortality Separated by Economic Prosperity Over Last 65 Years'
         }
     },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


 // Code for third graph
 var ctx3 = document.getElementById('graph3').getContext('2d');
 var myChart = new Chart(ctx3, {
     type: 'line',
     data: {
         labels: ['1950', '1955', '1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015'],
         datasets: [{
             label: 'Africa',
             data: [310.751,	282.897,	258.513,	238.623,	220.22,	199.587,	182.029,	169.669,	165.936,	151.25,	129.729,	104.749,	84.4073,	71.0742],
             backgroundColor: 'rgba(255, 99, 132, 0.2)',
             borderColor: 'rgba(255, 99, 132, 1)',
             borderWidth: 1,
             fill: true

         },
         {
            label: 'Asia',
            data: [234.32,	216.932,	204.797,	167.399,	143.779,	127.364,	108.902,	92.8225,	84.2795,	73.0672,	59.9661,	47.2683,	36.718,	30.7364],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: true

         },
         {
            label: 'Latin America',
            data: [186.517,	165.418,	145.417,	128.216,	109.578,	92.0429,	75.993,	60.6958,	48.2113,	38.198,	31.1705,	25.1301,	21.0411,	19.0645],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true

         },
         {
            label: 'Oceania',
            data: [93.737,	79.11,	68.7158,	60.4795,	53.1793,	48.7595,	42.7921,	38.1757,	34.5462,	34.124,	33.082,	29.4824,	25.8335,	22.5088],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            fill: true

         },         
         {
          label: 'Europe',
          data: [93.3788,	62.0506,	43.6336,	34.6428,	29.0033,	25.653,	21.7905,	18.7078,	15.1707,	12.4158,	10.0105,	7.77481,	6.32305,	5.01612],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          fill: true

        },
         {
            label: 'North America',
            data: [36.0995,	32.0245,	29.1989,	25.8003,	20.7844,	16.5386,	13.4319,	12.0206,	10.1888,	8.67602,	8.09407,	7.76211,	6.82742,	6.68708],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: true

         }
        ]
     },
     options: {
        plugins: {
          title: {
            display: true,
            text: 'Child Mortality Separated by Region Over Last 65 Years'
          }
      },
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
 
 // Code for fourth graph
 
 
 var ctx4 = document.getElementById('graph4').getContext('2d');
 var myChart = new Chart(ctx4, {
     type: 'doughnut',
     data: {
         labels: ['Deaths - Malaria - Sex: Both - Age: Under 5 (Number)',
         'Deaths - HIV/AIDS - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Neonatal preterm birth complications - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Whooping cough - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Lower respiratory infections - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Congenital birth defects - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Measles - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Neonatal sepsis and other neonatal infections - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Neonatal encephalopathy due to birth asphyxia and trauma - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Drowning - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Tuberculosis - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Diarrheal diseases - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Neoplasms - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Meningitis - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Nutritional deficiencies - Sex: Both - Age: Under 5 (Number)',
         'Deaths - Other neonatal disorders - Sex: Both - Age: Under 5 (Number)'],
         datasets: [{
             label: '',
             data: [354294.4909658066, 77485.0360147875,
              649439.4457377016, 86091.26752077375, 808919.8948349953,
              501764.2118766828, 83438.52599369135, 203013.16437456387,
              533250.3409148593, 59835.273431424335, 57369.93372600032,
              533767.740617231, 49916.11907457195, 153058.23632712482,
              145073.07441097606, 349002.1134936189],
             backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
             borderColor: 'rgba(7, 7, 7, 1)',
             borderWidth: 1,
             fill: true
         }]
     },
     options: {
        plugins: {
          legend: {
            display: false,
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        },
          title: {
            display: true,
            text: 'Mouse over to see the number of child deaths for each cause in 2017'
          }
      },
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
 




/**
 * 
 * ALL THE JAVASCRIPT FROM HERE DOWN IS FROM THE BOOTSTRAP TEMPLATE - NOT MINE
 * 
 */


/**
* Template Name: Moderna - v4.8.0
* Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-carousel', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-wrap',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()