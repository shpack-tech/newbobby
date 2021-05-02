document.addEventListener('DOMContentLoaded', function(){

    // sb slider
    const sb_slider = new Swiper('.sb_slider_wrap', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween:0,
        // If we need pagination
        pagination: {
          el: '.sb_dots',
          clickable: true
        }
    });
    // tb slider
    const tb_slider = new Swiper('.tb_slider_wrap', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween:0,
        // If we need pagination
        pagination: {
          el: '.tb_dots',
          clickable: true
        }
    });
    // thb slider
    const thb_slider = new Swiper('.thb_slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween:0,
        // If we need pagination
        navigation: {
            nextEl: '.thb_nav_fow',
            prevEl: '.thb_nav_prev',
          },
        pagination: {
          el: '.thb_dots',
          clickable: true
        }
    });
    const elb_slider = new Swiper('.elb_slider', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        spaceBetween:0,
        // If we need pagination
 
        pagination: {
          el: '.elb_pagination',
          clickable: true
        }
    });
    // eb video ))
    const idea_vid = document.querySelector('.vid');

    function player(){
        if (this.querySelector('video').paused){
            this.querySelector('video').play();
            let btn = this.querySelector('.video_play');
            btn.classList.add('hidden');          
        } else{

            this.querySelector('video').pause();
            let btn = this.querySelector('.video_play');
            btn.classList.remove('hidden');
        }

    }
    idea_vid.addEventListener('click', player);



    document.querySelectorAll('.thb_video').forEach(el=>{
        el.addEventListener('click', player);
    })
    // features

    var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.2;  
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) { 
            e.preventDefault(); 
            var w = window.pageYOffset,  
                hash = this.href.replace(/[^#]*(.*)/, '$1');  
            t = document.querySelector(hash).getBoundingClientRect().top,  
                start = null;
            requestAnimationFrame(step);  
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash  
                }
            }
        }, false);
    }

    // burger
    const  burger = document.querySelector('.burger'),
        openened = document.querySelector('.opened'),
        cross = document.querySelector('.close');
    burger.addEventListener('click', function(){
        openened.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    cross.addEventListener('click', function(){
        openened.style.display = 'none';
        document.body.style.overflow = 'auto';

    });

    // buy block 

    const slide_counter_block = document.querySelector('.elb_pag_count'),
        pagination = document.querySelector('.elb_pagination'),
        pag_el = document.querySelectorAll('.elb_pagination .swiper-pagination-bullet'),
        slide_el = document.querySelectorAll('.elb_slide img'),
        elb_row = document.querySelector('.elb_slider_row ');
        // active_side = document.querySelectorAll('.showed');
    let slide_counter = document.querySelectorAll('.elb_pagination .swiper-pagination-bullet').length - 3,
        number = 0;
    

   function setPag(){
    for(let i = 0; i < pag_el.length; i++){
        pag_el[i].style.backgroundImage = `url(${slide_el[i].src})`;
        pag_el[i].classList.add('hidden');
    }

    pag_el[0].classList.add('showed');
    pag_el[1].classList.add('showed');
    pag_el[2].classList.add('showed');
    pag_el[0].classList.remove('hidden');
    pag_el[1].classList.remove('hidden');
    pag_el[2].classList.remove('hidden');
    slide_counter_block.innerText = `+ ${slide_counter}`;
    console.log('set');
    
   }
   setPag();

    pagination.addEventListener('click', pagChangeDown);
    pagination.addEventListener('click', pagChangeUp);
    function pagChangeDown(e){
        let active_slide = document.querySelectorAll('.showed'),
            inactive_slide = pagination.querySelectorAll('.hidden');

        if (e.target === active_slide[2] && inactive_slide[number]){
            active_slide[0].classList.remove('showed');
            active_slide[0].classList.add('hidden');
            inactive_slide[number].classList.add('showed');
            inactive_slide[number].classList.remove('hidden');
            number++;
            slide_counter--;
            
            if(slide_counter === 0){
                slide_counter_block.innerText = `:)`;  
            } else {
                slide_counter_block.innerText = `+ ${slide_counter}`;
            }

        }    
    }
    function pagChangeUp(e) {
        let active_slide = document.querySelectorAll('.showed'),
            inactive_slide = pagination.querySelectorAll('.hidden');
        
            if (e.target === active_slide[0] && inactive_slide[number-1]){
               active_slide[2].classList.remove('showed');
               active_slide[2].classList.add('hidden'); 
               pag_el[getIndex(active_slide[0]) - 1].classList.add('showed');
               pag_el[getIndex(active_slide[0]) - 1].classList.remove('hidden');
                number--;
                slide_counter++;
                slide_counter_block.innerText = `+ ${slide_counter}`;
            }    
    }

    elb_row.addEventListener('transitionend', function(){
        let active_slide = document.querySelectorAll('.showed');

        if (active_slide[0].classList.contains('swiper-pagination-bullet-active')){
            active_slide[0].click();
        } else if (active_slide[2].classList.contains('swiper-pagination-bullet-active')){
            active_slide[2].click();

        }
    });
    // let target = document.querySelector('.elb_pagination .swiper-pagination-bullet');
 
    // // создаем экземпляр наблюдателя
    // let observer = new MutationObserver(function(mutations) {
    //     mutations.forEach(function(mutation) {
    //         console.log(mutation.type);
    //     });    
    // });
     
    // // настраиваем наблюдатель
    // let config = { attributes: true, childList: true, characterData: true }
     
    // // передаем элемент и настройки в наблюдатель
    // observer.observe(target, config);
    const pars = document.querySelector('.parameters');
    function parOp(){
        pars.classList.add('parameters_active');
        document.querySelector('.arrow_elb img').style.transform = 'rotate(180deg)';
    }
    function parCl(){
        pars.classList.remove('parameters_active');
        document.querySelector('.arrow_elb img').style.transform = 'rotate(0deg)';
    }
    document.querySelector('.par').addEventListener('mouseenter', parOp);
    document.querySelector('.par').addEventListener('mouseleave', parCl);

    function colorer(e){
        let target = e.target;
        let bub = document.querySelectorAll('.bubble');
        if (target && target.classList.contains('bubble')){
            bub.forEach(el=>{
                el.classList.remove('active_bubble');
            });
            target.classList.add('active_bubble');
            for(let i = 0; i < slide_el.length; i++){
                slide_el[i].src = `img/small/${target.id}/slide${i+1}.jpg`;
            }
            number = 0;
            document.querySelector('.col').innerText = `Цвет: ${target.id}`
            slide_counter = document.querySelectorAll('.elb_pagination .swiper-pagination-bullet').length - 3;
            setPag();
            pag_el[0].click();
        }
        
    }

    document.querySelector('.elb_colors').addEventListener('click', colorer)

    const price = document.querySelector('.price')
    function resizer(e){
        let target = e.target;
        let a = document.querySelectorAll('.ch_size');
        a.forEach(e=>{
            e.classList.remove('act_var');
        })
        if (target && target.classList.contains('ch_size')){
            if (target.classList.contains('small')){
                price.innerText = '8 066 ₽';
                pars.innerHTML = '<p>Объем- 11,5 л</p>'+
             '<p>Размеры - 380 × 265 × 140 мм</p>'+
             '<p>Вес - 770 г</p>'
            } else if (target.classList.contains('regular')){
                price.innerText = '9 490 ₽';
                pars.innerHTML = '<p>Объем- 18 л</p>'+
             '<p>Размеры - 450 × 295 × 165 мм</p>'+
             '<p>Вес - 1 кг</p>'
            } else if (target.classList.contains('xl')){
                price.innerText = '9 990 ₽';
                pars.innerHTML = '<p>Объем- 21,5 л</p>'+
             '<p>Размеры - 490 × 325 × 165 мм</p>'+
             '<p>Вес - 1,1 кг</p>'
            }
        } 
        target.classList.add('act_var');
    }
    document.querySelector('.choose_size').addEventListener('click', resizer)
    function getIndex(node) {
        var children = node.parentNode.childNodes;
        var num = 0;
        for (var i=0; i<children.length; i++) {
             if (children[i]==node) return num;
             if (children[i].nodeType==1) num++;
        }
        return -1;
    }
});




