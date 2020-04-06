import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TweenLite, TimelineMax, TweenMax, TimelineLite} from 'gsap';
import Swiper from 'swiper';

// import * as ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
// import 'script-loader!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {

    var swiper = new Swiper('.activities-swiper', {
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
      autoplay: {
        delay: 3000,
      },
      // loop: true
    });


    var youCanSwiper = new Swiper('.split-view__image-side > .swiper-container', {
      grabCursor: true,
      autoplay: {
        delay: 4000
      },
      // effect: 'fade',
    })


    var ourPlaysSwiper = new Swiper( '.our-plays__swiper', {
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        769: {
          slidesPerView: 3
        }
      },
      autoplay: {
        delay: 8000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 32,
      centeredSlides: true,
      navigation: {
        nextEl: '.our-plays__swiper .swiper-button-next',
        prevEl: '.our-plays__swiper .swiper-button-prev'
      }
    });

    var childrenPlaySwiper = new Swiper('.children-plays__swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows : true,
      // },
      pagination: {
        el: '.children-plays__swiper .swiper-pagination',
      },
    });
  }


  // ctrl = new ScrollMagic.Controller();

  ngAfterViewInit(): void {
    //анимации
    // new ScrollMagic.Scene({
    //   triggerElement: '.slogan-part__body',
    //   triggerHook: 0
    // })
    //   .setTween(TweenLite.from(document.querySelector('.slogan-part__body'), 1, {y: 50, opacity: 0}))
    //   .addTo(this.ctrl);


    TweenLite.from(document.querySelector('.intro__image'), 3, {opacity: 0, scale: 0.9, delay: 1.0});
    console.log('scrollmagic');

  }

}

