class toSeded {

    constructor() {

        this.initialize();

    }

    

    initialize() {

        this.menuDesktop();
        this.menuMobile();
        this.animarMenu();
        this.animarScroll();
        this.animeText();

        document.querySelector('.cabecalho .hamburgue').addEventListener('click', function() {

            document.querySelector('.menuMobile').classList.toggle('active');

        });

    };


    // method menu desktop
    menuDesktop() {

        let past = 0;

        document.querySelectorAll('.cabecalho .menu a').forEach( (value, index)=> {

            value.addEventListener('click', function() {

                let nextPast, nextGift;

                nextGift = document.querySelectorAll('.cabecalho .menu a')[index]; // presente
                nextPast = document.querySelectorAll('.cabecalho .menu a')[past];  // passado



                nextPast.classList.remove('item');
                nextGift.classList.add('item');
                
                past = index;

            });

        });

    };


    // mentod menu mobile
    menuMobile() {

        let past = 0;

        document.querySelectorAll('.menuMobile a').forEach( (value, index)=> {

            value.addEventListener('click', function() {

                let nextPast, nextGift;

                nextGift = document.querySelectorAll('.menuMobile a')[index]; // presente
                nextPast = document.querySelectorAll('.menuMobile a')[past];  // passado



                nextPast.classList.remove('item');
                nextGift.classList.add('item');
                
                past = index;

            });

        });

    };

    // animar nav menu ao clicar
    animarMenu() {

        $('nav a').click(function(e) {
            e.preventDefault();

            var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

           $('html, body').animate({
                scrollTop: targetOffset
           }, 400);

        });

    };

    // animar os elementos a cada altura do scrool
    animarScroll() {

        function debounce(func, timeout = 300){
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => { func.apply(this, args); }, timeout);
            };
        }

        function saveInput(){
            console.log('Saving data');
        }

        const processChange = debounce(() => saveInput());


        let anime = document.querySelectorAll('.anime');

        function animarScroll() {

            let windowTop = window.pageYOffset  + 400;

            anime.forEach( function(element) {

                if( windowTop > element.offsetTop ) {
                    element.classList.add('animarStart');
                }else {
                    element.classList.remove('animarStart');
                }

            });
        };

        animarScroll();

        if(anime.length) {
            window.addEventListener('scroll', debounce(function() {
                animarScroll();
                console.log('ops')
            }, 200));
        };
       

    };


    // animar os texto, para digitar sozinho
    animeText() {

        
    };

};





