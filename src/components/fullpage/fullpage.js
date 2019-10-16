import $ from "jquery";
window.$ = window.jQuery = require('jquery');

import fullpage from 'fullpage.js/dist/fullpage.extensions.min';


const screenHeight = $(window).height();
const screenWidth = $(window).width();
if (screenHeight > 600 && screenWidth > 991) {

  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    menu: '#menu',
    anchors: ['home-page', 'exlusive-page', 'uniqueness-page', 'responsiveness-page', 'packaging-page', 'delivery-page', 'contacts-page'],
    fixedElements: '.main-header',
    fitToSection: true,
    verticalCentered: true,
    afterLoad: function(anchorLink, index) {
      $('[href^="#"]').click(function(){
        const link = '#' + $(this).attr('href');
        // const link = '#' + $(this).attr('data-id');

        $('html, body').animate({scrollTop:coordinates}, 1000);
        return false;
      });
    }
  });

  $(window).resize(function() {
    fullpage_api.reBuild();
  });

}
