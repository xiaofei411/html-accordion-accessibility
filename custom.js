// $(document).ready(function() {
//     $(".accordion-item > a").on("click", function() {
//         if ($(this).hasClass("active")) {
//             $(this).removeClass("active");
//             $(this).siblings(".content").slideUp(200);
//             $(".accordion-item > a i").removeClass("fa-minus").addClass("fa-plus");
//         } else {
//             $(".accordion-item > a i").removeClass("fa-minus").addClass("fa-plus");
//             $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
//             $(".accordion-item > a").removeClass("active");
//             $(this).addClass("active");
//             $(".content").slideUp(200);
//             $(this).siblings(".content").slideDown(200);
//         }
//     });
// });

var accordionButtons = $('.accordion-controls .accordion-item a');

function accordionToggle() {
    $('.accordion-controls .accordion-item a').on('click', function(e) {
      $control = $(this);
  
      accordionContent = $control.attr('aria-controls');
      accordionID = $control.attr('id');
      console.log('accordionID', accordionID);
      checkOthers($control[0]);
  
      isAriaExp = $control.attr('aria-expanded');
      newAriaExp = (isAriaExp == "false") ? "true" : "false";
      $control.attr('aria-expanded', newAriaExp);
  
      isAriaHid = $('#' + accordionContent).attr('aria-hidden');
      if (isAriaHid == "true") {
        $('#' + accordionContent).attr('aria-hidden', "false");
        $('#' + accordionContent).css('display', 'block');
        $('#' + accordionID).addClass('active');
        $('#' + accordionID + ' i').removeClass("fa-plus").addClass("fa-minus");
      } else {
        $('#' + accordionContent).attr('aria-hidden', "true");
        $('#' + accordionContent).css('display', 'none');
        $('#' + accordionID).removeClass('active');
        $('#' + accordionID + ' i').addClass("fa-plus").removeClass("fa-minus");
      }
    });
  };

  function checkOthers(elem) {
    for (var i=0; i<accordionButtons.length; i++) {
      if (accordionButtons[i] != elem) {
        if (($(accordionButtons[i]).attr('aria-expanded')) == 'true') {
          $(accordionButtons[i]).attr('aria-expanded', 'false');
          $(accordionButtons[i]).removeClass('active');
          $(accordionButtons[i]).find('i').removeClass("fa-minus").addClass("fa-plus");
          content = $(accordionButtons[i]).attr('aria-controls');
          $('#' + content).attr('aria-hidden', 'true');
          $('#' + content).css('display', 'none');
        }
      }
    }
  };

  accordionToggle();