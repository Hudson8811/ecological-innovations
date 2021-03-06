$(document).ready(function () {

    $('[data-fancybox]').fancybox({
        backFocus : false,
      });
    // Инициализация слайдера баннера!
    $('.banner-slider').slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
    });
    // Инициализация слайдера баннера!

    // Бг баннера!
    function bannerVideoPositionSet(itemSetPosition){
        const btnOffset = $('.banner-tools-btns-next--js').offset().left
        $(itemSetPosition).css({
            width: `calc(100vw - ${btnOffset}px)`,
        })
    }

    if($('body').hasClass('index-page')){
        bannerVideoPositionSet('.banner-video')
        $(window).resize(function(){
            bannerVideoPositionSet('.banner-video')
        })
    }


    // Бг баннера!

    // Тулзы баннера!
    $('.banner-tools-btns-next--js').click(function(e){
        e.preventDefault()
        $('.banner-slider').slick("slickNext")
    })

    $('.banner-tools-btns-prev--js').click(function(e){
        e.preventDefault()
        $('.banner-slider').slick("slickPrev")
    })

    $('.banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.banner-tools-pags-count--js').text(`0${nextSlide+1}`)
      });
    // Тулзы баннера!

    // Бг about_us!
    function aboutBgPositionSet(){
        const btnOffset = $('.banner-tools-btns-next--js').offset().left
        $('.about_us-bg').css({
            width: `${btnOffset}px`,
        })
    }

    if($('body').hasClass('index-page')){
        aboutBgPositionSet()
        $(window).resize(function(){
            aboutBgPositionSet()
        })
    }


    function aboutLinePositionSet(aboutLinePositionItem){
        const btnOffset = $('.banner-tools-btns-next--js').offset().left
        $(aboutLinePositionItem).css({
            width: `calc(${btnOffset}px - 152px)`,
        })
    }

    if($('body').hasClass('index-page')){
        aboutLinePositionSet('.about_us-line2')
        aboutLinePositionSet('.about_us-line3')
        $(window).resize(function(){
            aboutLinePositionSet('.about_us-line2')
            aboutLinePositionSet('.about_us-line3')
        })
    }

    // Бг about_us!

    // Каталог отзывов!
    $('.reviews-slider').slick({
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        dots: true,
        responsive: [
            {
              breakpoint: 1110,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },

            {
                breakpoint: 690,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    });
    // Каталог отзывов!

     // Новости!
     $('.news').slick({
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
        responsive: [
            {
              breakpoint: 1110,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
              }
            },

            {
                breakpoint: 690,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                }
              },
          ]
    });
    // Новости!

    // Sidebar!
    $('.sidebar-link').click(function(e){
        e.preventDefault()
        const $this = $(this)
        if(!$this.hasClass('sidebar-link--active')){
            $('.sidebar-link').removeClass('sidebar-link--active')
            $('.category').slideUp()
            $this.addClass('sidebar-link--active')
            $this.siblings('.category').slideDown()
        } else{
            $this.removeClass('sidebar-link--active')
            $this.siblings('.category').slideUp()
        }
    })

    $('.category-link').click(function(e){
        if((!$(this).attr('href').length>0) || $(this).attr('href')=="#"){
            e.preventDefault()
            const $this = $(this)
            if(!$this.hasClass('category-link--active')){
                $('.category-link').removeClass('category-link--active')
                $('.sub_category').slideUp()
                $this.addClass('category-link--active')
                $this.siblings('.sub_category').slideDown()
            } else{
                $this.removeClass('category-link--active')
                $this.siblings('.sub_category').slideUp()
            }
        }

    })
    // Sidebar!

    // Слайдер отчетов!
    $('.reports-slider').slick({
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        dots: false,
        responsive: [
            {
              breakpoint: 690,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
          ]
    });
    // Слайдер отчетов!

        // Тулзы слайдера отчетов!
        $('.reports .reports-arrow-next').click(function(e){
            e.preventDefault()
            $('.reports-slider').slick("slickNext")
        })

        $('.reports .reports-arrow-prev').click(function(e){
            e.preventDefault()
            $('.reports-slider').slick("slickPrev")
        })

        function reportsSliderControls(){
            if ($(window).width() < 691){
                const lengthReportsSlides =$('.reports .reports-item').length / 2
                $('.reports .reports-pag-count_all').text(lengthReportsSlides)
                $('.reports-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    let reportsSlidePosition =  Math.ceil((nextSlide + 1) / 2)
                $('.reports  .reports-pag-count').text(reportsSlidePosition)
              });
            } else{
                const lengthReportsSlides =$('.reports .reports-item').length / 4
                $('.reports .reports-pag-count_all').text(lengthReportsSlides)
                $('.reports-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    let reportsSlidePosition =  Math.ceil((nextSlide + 3) / 4)
                $('.reports  .reports-pag-count').text(reportsSlidePosition)
              });
            }
        }

        reportsSliderControls()

        $(window).resize(function(){
            reportsSliderControls()
        })

        // Тулзы слайдера отчетов!

        // Видео!
        $(document).on('click', '.reports-play', function(e){
            e.preventDefault()
            const $this = $(this)
            let src = $this.parent('.reports-placeholder').siblings('.reports-video').attr('src')
            $this.parent('.reports-placeholder').addClass('reports-placeholder--hidden')
            $this.parent('.reports-placeholder').siblings('.reports-video').attr('src', `${src}?autoplay=1`)

        })
        // Видео!

        // Форма!
        $('.form-input').focus(function(){
            $(this).parent('.form-label').addClass('form-label--active')
        })

        $('.form-input').blur(function(){
            if($(this).val() == ""){
                $(this).parent('.form-label').removeClass('form-label--active')
            }
        })
        // Форма!

        // Scope слайдер!
        $('.scope-slider').slick({
            infinite: false,
            autoplay: false,
            rows:2,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows:false,
            dots: false,
        });

        $('.scope .reports-arrow-next').click(function(e){
            e.preventDefault()
            $('.scope-slider').slick("slickNext")
        })

        $('.scope .reports-arrow-prev').click(function(e){
            e.preventDefault()
            $('.scope-slider').slick("slickPrev")
        })

        const lengthScopeSlides =$('.scope .scope-item').length / 4
        $('.scope .reports-pag-count_all').text(lengthScopeSlides)
        $('.scope-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let scopeSlidePosition =  Math.ceil((nextSlide + 2) / 2)
            $('.scope .reports-pag-count').text(scopeSlidePosition)
        });

        function scopeSliderControl(){
            if($(window).width() < 691){
                $('.scope-slider').slick('unslick')

                $('.scope-item:nth-child(n + 5)').addClass('scope-item--active')
            } else{
                $('.scope-slider').slick('init')
            }
        }

        scopeSliderControl()

        $(window).resize(function(){
            scopeSliderControl()
        })
        // Scope слайдер!

        // Табы!
        $('.tabs-title').click(function(e){
            const $this = $(this)
            const tabId = $this.data('id')
            e.preventDefault()
            $('.tabs-title').removeClass('tabs-title--active')
            $this.addClass('tabs-title--active')
            $('.tabs-content-block').removeClass('tabs-content-block--active')
            $(`.tabs-content-block[data-id="${tabId}"]`).addClass('tabs-content-block--active')
        })
        // Табы!

        // Селект!
        $('.form-input-select').click(function(){
           $(this).parent('.form-label').addClass('form-label-select--active form-label--active')
        })

        $('.form-input-select-content-item').click(function(){
            const $this = $(this)
            const selectValue = $this.text()
            $this.parent('.form-input-select-content').siblings('.form-input-select').text(selectValue)
            $this.parents('.form-label').removeClass('form-label-select--active')
        })
        // Селект!

        // Вопросы!
        $(document).on('click', '.qua-title-block', function(){
            const $this = $(this)
            if(!$this.parent('.qua-block').hasClass('qua-block--active')){
                $('.qua-block').removeClass('qua-block--active')
                $('.qua-content-block').slideUp()
                $this.parent('.qua-block').addClass('qua-block--active')
                $this.siblings('.qua-content-block').slideDown()
            } else{
                $this.parent('.qua-block').removeClass('qua-block--active')
                $this.siblings('.qua-content-block').slideUp()
            }
        })
        // Вопросы!

        // Галерея!
        $('[data-fancybox="gallery"]').fancybox();
        // Галерея!

        // Слайдер ответственность!
        $('.resp-slider').slick({
            prevArrow: '<div class="resp-arrow prev"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.236151 6.53947L7.68805 -3.36055e-07L9 1.15132L2.33528 7L9 12.8487L7.68805 14L0.236151 7.46053C-0.0787175 7.16118 -0.0787175 6.81579 0.236151 6.53947Z" fill="white"/></svg></div>',
            nextArrow: '<div class="resp-arrow next"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.76385 6.53947L1.31195 -3.36055e-07L-3.9204e-07 1.15132L6.66472 7L-9.03349e-07 12.8487L1.31195 14L8.76385 7.46053C9.07872 7.16118 9.07872 6.81579 8.76385 6.53947Z" fill="white"/></svg></div>',
        })
        // Слайдер ответственность!

        // Поиск!
        $('.header-search-icon').click(function(){
            const $search = $('.header-search-input')
            if(!$search.hasClass('header-search-input--active')){
                $search.addClass('header-search-input--active')
                $search.focus()
            } else{
                $search.removeClass('header-search-input--active')
            }
        })
        // Поиск!

        // Меню!
        $('.header-menu-link[data-id]').click(function(e){
            const $this = $(this)
            e.preventDefault()
            if(!$this.hasClass('header-menu-link--active')){
                const headerId = $this.data('id')
                $('.header-menu-link').removeClass('header-menu-link--active')
                $this.addClass('header-menu-link--active')
                $('.big_menu').addClass('big_menu--active')
                $('.big_menu-wrap').removeClass('big_menu-wrap--active')
                $(`.big_menu-wrap[data-id="${headerId}"]`).addClass('big_menu-wrap--active')
                $('.burger').addClass('burger--active-bigMenu')
            } else{
                $this.removeClass('header-menu-link--active')
                $('.big_menu').removeClass('big_menu--active')
            }
        })

        $(document).on('click', '.big_menu-link', function(e){
            e.preventDefault()
            const filterId = $(this).data('filter')
            $('.big_menu-link').removeClass('big_menu-link--active')
            $(this).addClass('big_menu-link--active')
            $('.big_menu-content').removeClass('big_menu-content--active')
            $(`.big_menu-content[data-filter="${filterId}"]`).addClass('big_menu-content--active')
        })

        $('.burger').click(function(e){
            e.preventDefault()
            if(!$(this).hasClass('burger--active') && !$(this).hasClass('burger--active-bigMenu')){
                $(this).addClass('burger--active')
                $('.header-col-menu').addClass('header-col-menu--active')
                $('.header-menu-link').removeClass('header-menu-link--active')
            } else if ($(this).hasClass('burger--active') && !$(this).hasClass('burger--active-bigMenu')){
                $(this).removeClass('burger--active')
                $('.header-col-menu').removeClass('header-col-menu--active')
                $('.header-menu-link').removeClass('header-menu-link--active')
            }

            if($(this).hasClass('burger--active-bigMenu')){
                $(this).removeClass('burger--active-bigMenu')
                $('.big_menu').removeClass('big_menu--active')
                $('.header-menu-link').removeClass('header-menu-link--active')
            }

        })
        // Меню!

        // Мобильные отзывы!

        $('.reviews-horizon:not(.reviews-horizon--w33) .reviews-horizon-block').slick({
            infinite: false,
            autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows:false,
            dots:false,
            responsive: [

                {
                    breakpoint: 690,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  },
              ]

        })

        $('.reviews-horizon--w33 .reviews-horizon-block').slick({
            infinite: false,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:false,
            dots:false,
            responsive: [

                {
                    breakpoint: 690,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  },
              ]

        })



                // Тулзы слайдера отчетов!
                $('.reviews-horizon .reports-arrow-next').click(function(e){
                    e.preventDefault()
                    $('.reviews-horizon-block').slick("slickNext")
                })

                $('.reviews-horizon .reports-arrow-prev').click(function(e){
                    e.preventDefault()
                    $('.reviews-horizon-block').slick("slickPrev")
                })

                const lengthReviewsSlides =$('.reviews-slider-item').length
                $('.reviews-horizon  .reports-pag-count_all').text(lengthReviewsSlides)
                $('.reviews-horizon ').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    let reviewsSlidePosition =  Math.ceil((nextSlide + 1))
                    $('.reviews-horizon .reports-pag-count').text(reviewsSlidePosition)
                });
                // Тулзы слайдера отчетов!
        // Мобильные отзывы!

// Типы!


        const lengthTypesSlides = $('.types_disinf-item').length
        $('.types_disinf .reports-pag-count_all').text(lengthTypesSlides)
        $('.types_disinf').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let typesSlidePosition =  Math.ceil((nextSlide + 1))
            $('.types_disinf  .reports-pag-count').text(typesSlidePosition)
        });

        $('.types_disinf .reports-arrow-next').click(function(e){
            e.preventDefault()
            $('.types_disinf-block').slick("slickNext")
        })

        $('.types_disinf .reports-arrow-prev').click(function(e){
            e.preventDefault()
            $('.types_disinf-block').slick("slickPrev")
        })

        function typesSliding(){
            if($(window).width() < 811){
                $('.types_disinf-block').slick({
                    infinite: false,
                    autoplay: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    dots:false
                })
            } else{
                $('.types_disinf-block').slick('unslick')
            }
        }

        typesSliding()

        $(window).resize(function(){
            typesSliding()
        })
// Типы!




const lengthDevSlides =$('.develop-catalog').length
$('.develop .reports-pag-count_all').text(lengthDevSlides)
$('.develop-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let devSlidePosition =  Math.ceil((nextSlide + 1))
    $('.develop .reports-pag-count').text(devSlidePosition)
});

$('.develop .reports-arrow-next').click(function(e){
    e.preventDefault()
    $('.develop-slider').slick("slickNext")
})

$('.develop .reports-arrow-prev').click(function(e){
    e.preventDefault()
    $('.develop-slider').slick("slickPrev")
})

function devSliding(){
    if($(window).width() < 691){
        $('.develop-slider').slick({
            infinite: false,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots:false
        })
    } else{
        $('.develop-slider').slick('unslick')
    }
}

devSliding()

$(window).resize(function(){
    devSliding()
})

// Приоритеты!


    function prioritiesSliding(){
        if($(window).width() < 811 && $(window).width() > 580 ){
            $('.priorities-catalog').slick({
                infinite: false,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots: true,

            });
        } else{
            $('.priorities-catalog').slick('unslick')
        }
    }

    prioritiesSliding()

    $(window).resize(function(){
        prioritiesSliding()
    })
// Приоритеты!


});

