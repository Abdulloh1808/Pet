const logo = document.querySelector('.logo')
const footerLogo = document.querySelector('.footer__logo')
const windowBox = document.querySelector('.window__box')
const headerWindow = document.querySelector('.header__window')
const closeImg = document.querySelector('.close__img')
const windowButton = document.querySelector('.window__button')
const body = document.querySelector('body')


logo.addEventListener('click' , ()=>{
    windowBox.classList.add('active')
    headerWindow.classList.add('active')
})
footerLogo.addEventListener('click' , ()=>{
    windowBox.classList.add('active')
    headerWindow.classList.add('active')
})
closeImg.addEventListener('click', ()=>{
    windowBox.classList.remove('active')
    headerWindow.classList.remove('active')
})
windowButton.addEventListener('click', ()=>{
    location.reload()
 })

class Slider {
    constructor(el) {
        this.slider = document.querySelector(el.slider)
        this.sliderLine = document.querySelector(el.sliderLine)
        this.prev = document.querySelector(el.prev)
        this.next = document.querySelector(el.next)
        this.dir = el.direction === undefined ? "X" : el.direction.toUpperCase() == "Y" ? "Y" : "X"
        this.slides = this.sliderLine.children
        this.width = this.slider.clientWidth
        this.height = this.slider.clientHeight
        this.autoPlay = el.autoPlay
        this.autoPlayInterval = el.autoPlayInterval
        this.sliderLine.style = `position: relative;
                                 overflow: hidden;
                                 height: ${this.height}px;`

        this.moveSize = this.dir === `X` ? this.width : this.height

        this.active = 0
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            slide.style = `position: absolute;
                           width: ${this.width}px;
                           height: ${this.height}px;`

            if (this.active != i) {
                slide.style.transform = `translate${this.dir}(${this.moveSize}px)`
            }
            if (i === this.slides.length - 1) {
                slide.style.transform = `translate${this.dir}(${-this.moveSize}px)`
            }
        }
        this.prev.addEventListener('click', () => this.move(this.prev))
        this.next.addEventListener('click', () => this.move(this.next))

        if (this.autoPlay) {
            this.play = setInterval(() => {
                this.move(this.next)
            }, this.autoPlayInterval);
            this.slider.onmouseover = () => clearInterval(this.play)
            this.slider.onmouseout = () =>
                this.play = setInterval(() => {
                    this.move(this.next)
                }, this.autoPlayInterval);
        }
    }
    move(btn) {
        this.prev.disabled = true
        this.next.disabled = true
        setTimeout(() => {
            this.prev.disabled = false
            this.next.disabled = false
        }, 1200);
        let leftOrRight = btn === this.next ? -this.moveSize : this.moveSize
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            if (this.active != i) {
                slide.style.transform = `translate${this.dir}(${-leftOrRight}px)`
                slide.style.transition = `0s`
            }
            this.slides[this.active].style.transform = `translate${this.dir}(${leftOrRight}px)`
            this.slides[this.active].style.transition = `1s`
        }
        if (btn == this.next) {
            this.active++
            if (this.active == this.slides.length) {
                this.active = 0
            }
        }
        else if (btn == this.prev) {
            this.active--
            if (this.active < 0) {
                this.active = this.slides.length - 1
            }
        }
        this.slides[this.active].style.transform = `translate${this.dir}(0px)`
        this.slides[this.active].style.transition = `1s`
        this.slides[this.active].style.opacity = `1`
    }
}
new Slider({
    slider: '.slider',
    sliderLine: '.slider__line',
    prev: '.slider__prev',
    next: '.slider__next',
    direction: 'x',
    autoPlay: true,
    autoPlayInterval: 3000
})   

const title = document.querySelector('.intro__title')
let txt = title.innerHTML
title.innerHTML = ``
function typing(i = 0) {
    title.innerHTML += txt[i]
    i++
    if (i < txt.length) {
        setTimeout(() => {
            typing(i)
        }, 200);
    }
}
typing()

const navLike1 = document.querySelector('.nav__like1'),
navLike2 = document.querySelector('.nav__like2'),
header = document.querySelector('.header')
root = document.querySelector(':root')
navLike1.addEventListener('click', ()=>{
    root.style.setProperty('--yellow' , '#2D2D2D')
    root.style.setProperty('--black' , '#F5B939')
    header.style.background = '#2D2D2D'
    header.style.transition = '.5s'
    navLike1.classList.remove('active')
    navLike2.classList.add('active')
})
navLike2.addEventListener('click', ()=>{
    root.style.setProperty('--yellow' , '#F4CB38')
    root.style.setProperty('--black' , '#2D2D2D')
    header.style.background = 'linear-gradient(124.13deg, #F4CB38 10.97%, #F4A938 77.98%)'
    header.style.transition = '.5s'
    navLike2.classList.remove('active')
    navLike1.classList.add('active')
})
    
const categoryItem = document.querySelectorAll('.category__item'),
category = document.querySelector('.category')
window.addEventListener('scroll' , ()=>{
    let windowY = window.scrollY
    if (windowY > category.offsetTop / 2) {
        for (let i = 0; i < categoryItem.length; i++) {
            const item = categoryItem[i];
            item.style.transform = `translate(${0}%)`
        }
    }
})

const productItem = document.querySelectorAll('.product__item'),
product = document.querySelector('.product') 
window.addEventListener('scroll' , function scroll() {
        if (window.scrollY > product.offsetTop / 1.3) {
        for (let i = 0; i < productItem.length; i++) {
            const item = productItem[i];
            item.style.transform = `translateX(${0}%)`
        }
    }
})

const specialCol = document.querySelector(".special__col"),
specialItem1 = document.querySelector(".special__item1"),
specialItem2 = document.querySelector(".special__item2"),
specialItem3 = document.querySelector(".special__item3"),
specialItem4 = document.querySelector(".special__item4")

window.addEventListener("scroll", function () {
    if (window.scrollY > specialCol.offsetTop - specialCol.clientHeight * 2) {
        specialItem1.classList.add("active");
        specialItem2.classList.add("active");
        specialItem3.classList.add("active");
        specialItem4.classList.add("active");
    
    }
});

const doctorItem = document.querySelectorAll('.doctor__item'),
doctor = document.querySelector('.doctor') 
window.addEventListener('scroll' , function scroll() {
        if (window.scrollY > doctor.offsetTop / 1.1) {
        for (let i = 0; i < doctorItem.length; i++) {
            const item = doctorItem[i];
            item.style.transform = `translateX(${0}%)`
        }
    }
})

const newsCol = document.querySelectorAll('.news__col'),
news = document.querySelector('.news') 
window.addEventListener('scroll' , function scroll() {
        if (window.scrollY > news.offsetTop / 1.1) {
        for (let i = 0; i < newsCol.length; i++) {
            const item = newsCol[i];
            item.style.transform = `translateX(${0}%)`
        }
    }
})