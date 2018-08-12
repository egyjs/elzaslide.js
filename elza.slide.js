// SElector > item item item

        var current_img = 1;
        var i;
        (function($) {
            $.fn.elzaSlide = function(options) {

//                This is the easiest way to have
//                default options.
                var settings = $.extend({
                    // These are the defaults.
                    time: 1000,
                    prev: '<button type="button" class="elzaSlide-prev btn">Previous</button>',
                    next: '<button type="button" class="elzaSlide-next btn">Next</button>',
                    animateUrl: 'https://cdn.rawgit.com/daneden/animate.css/master/animate.min.css',
                    animateClassIn:'bounceInLeft',
                    animateClassOut:'bounceInRight',
                    auto:[false,2000],
                    itemsCss: {
                        'property': 'value',
                        'property': 'value'
                    },

                }, options);
                var imgs = this.find("div.item");
                imgs.slice(1).hide();


                // IFs
                if (settings.animateUrl != "" || settings.animateUrl != false){
                    $('head').append('<link rel="stylesheet" href="'+ settings.animateUrl +'" type="text/css" />');
                }
                if (settings.itemsCss != "" || settings.itemsCss != false){
                    imgs.css(settings.itemsCss);
                }
                if (settings.auto[0] == true){
                 setInterval(function () {
                     if (current_img == imgs.length) {
                         current_img = 1;
                     } else {
                         current_img = current_img + 1
                     }
                     show_img();
                 },settings.auto[1]);
                }



                
                $( this ).append( settings.prev );
                $( this ).prepend( settings.next );



                function show_img() {
                    for (i = 1; i < imgs.length + 1; i++) {
                        if (i == current_img) {
                            $(imgs[i - 1]).addClass("animated " + settings.animateClassIn).removeClass(settings.animateClassOut).show();
                        } else {
                            $(imgs[i - 1]).addClass("animated " + settings.animateClassOut).removeClass(settings.animateClassIn).hide();
                        }
                    }
                }

                $(".elzaSlide-prev").click(function() {
                    if (current_img == 1) {
                        current_img = imgs.length;
                    } else {
                        current_img = current_img - 1
                    }
                    show_img();

                });

                $(".elzaSlide-next").click(function() {
                    if (current_img == imgs.length) {
                        current_img = 1;
                    } else {
                        current_img = current_img + 1
                    }
                    show_img();
                });

            };
        }(jQuery));
