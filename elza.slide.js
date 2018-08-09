        var current_img = 1;
        var i;
        (function($) {
            $.fn.elzaSlide = function(options) {

//                This is the easiest way to have
//                default options.
                var settings = $.extend({
                    // These are the defaults.
                    in: "slow",
                    prev: '<button type="button" class="prev-elzaSlide" class="btn">Previous</button>',
                    next: '<button type="button" class="next-elzaSlide" class="btn">Next</button>',
                }, options);

                var imgs = this.find("div.item");
                imgs.slice(1).hide();
                console.log(imgs.length);
                console.log( $(imgs).data("img"));
                

                
                $( this ).append( settings.prev );
                $( this ).prepend( settings.next );



                function show_img() {
                    for (i = 1; i < imgs.length + 1; i++) {
                        if (i == current_img) {
                            $(imgs[i - 1]).fadeIn(settings.in);
                        } else {
                            $(imgs[i - 1]).hide()
                        }
                    }
                }

                $(".prev-elzaSlide").click(function() {
                    if (current_img == 1) {
                        current_img = imgs.length;
                    } else {
                        current_img = current_img - 1
                    }
                    show_img();

                });

                $(".next-elzaSlide").click(function() {
                    if (current_img == imgs.length) {
                        current_img = 1;
                    } else {
                        current_img = current_img + 1
                    }
                    show_img();
                });

            };
        }(jQuery));