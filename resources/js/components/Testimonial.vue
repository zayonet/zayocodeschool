<template>
    <div class="container-fluid">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
        
        <div class="row" style="background:url(./images/testimonial/background.jpg) no-repeat 100% 50%; background-size: cover">
                <!--<div @mouseover="hoverOver" @mouseout="hoverOut">
                <button class="btn" @click='toggle = !toggle' :class="classes">IMMEDIATE</button>
            </div>!-->
            <div class="col-lg-6 col-md-7 p-5 align-self-center text-white">
                <!--<carousel-3d>
                    <slide :index="0">
                    Slide 1 Content
                    </slide>
                    <slide :index="1">
                    Slide 2 Content
                    </slide>
                    <slide :index="3">
                    Slide 2 Content
                    </slide>
                    <slide :index="4">
                    Slide 2 Content
                    </slide>
                </carousel-3d>--!-->

                <!-- carousel 2d
                <carousel :loop="loop" :margin="margin" :nav="false" :dots="dots" :autoplay="autoplay" :responsiveClass="responsiveClass" :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}">
                </carousel>!-->

                <h3>Thousands of Women are Happy Using Our Products</h3>
                <div class="mt-4">
                    <!-- item -->
                    <transition name="bounce">
                        <div v-show="show.first">
                            <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Kelly Roland</h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>
                    </transition>
                    <transition name="bounce">
                        <div v-show="show.second">
                              <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Poloma Pency</h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>                            
                    </transition>
                    <transition name="bounce">
                        <div v-show="show.therd">                         
                              <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Freddy Pams</h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>
                    </transition>
                    <transition name="bounce">
                        <div v-show="show.fouth">
                              <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Lena Teed</h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>
                    </transition>
                    <transition name="bounce">
                        <div v-show="show.fifth">
                              <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Afonso Quintas</h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>
                    </transition>
                    <!-- item -->  
                    <transition name="bounce">
                        <div v-show="show.sixth">
                              <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Nana Ngo</h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>
                    </transition>
                    <!-- item --> 
                    <transition name="bounce">
                        <div v-show="show.seventh">
                              <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Dorecta Anna </h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>
                    </transition>
                    <!-- item -->    
                    <transition name="bounce">
                        <div v-show="show.eighth">
                              <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Fernandes Fenix</h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>
                    </transition>
                    <!-- item -->  
                    <transition name="bounce">
                        <div v-show="show.ninth">
                              <blockquote class="blockquote text-center text-dark">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <footer class="blockquote-footer"> <h6 class="mt-4 mb-0 font-weight-normal">Hanna Mentor</h6><cite title="Source Title">Partner, Viena</cite></footer>
                            </blockquote>
                        </div>
                    </transition>
                    <!-- item -->                            
                </div>
            </div>
            <div class="col-lg-6 col-md-5 bground-logo-orange" style="padding: 20px; transition: all 0.2s; background:url(./images/testimonial/bg2.svg) no-repeat 100% 50%; background-size: cover">  
                <table>
                    <tr>
                        <td>
                            <div class="badge"><span class="text"  @click="showTestimonial1()" >’Hallo</span></div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a @click="showTestimonial2()" class="hovicon all effect-1 sub-b"><img :src="'./images/testimonial/avatar7.jpg'" class="img-fluid rounded-circle" style="width:250px;" /></a></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td></td>
                        <td></td>
                        <td><a  @click="showTestimonial3()" class="hovicon effect-1 sub-a"><img :src="'./images/testimonial/avatar10.jpg'" class="img-fluid rounded-circle" style="width:450px;" /></a></td>
                        <td></td>
                        <td></td>
                        <td><a @click='showTestimonial4()' class="hovicon effect-9 sub-a"><img :src="'./images/testimonial/avatar5.png'" class="img-fluid rounded-circle" style="width:50px;" /></a></td>
                    </tr>
                        <tr>
                        <td></td>
                        <td><a @click='showTestimonial5()' class="hovicon effect-7 sub-b"><img :src="'./images/testimonial/avatar6.jpg'" class="img-fluid rounded-circle" style="width:300px;" /></a></td>
                        <td></td>
                        <td>
                            <div class="badge b" style="background: url('./images/testimonial/avatar1.png') no-repeat center center; ">
                                <span class="text"  @click='showTestimonial6()'>’Lena</span>
                            </div>
                        
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>
                            <div class="badge a" style="background: url('./images/testimonial/avatar4.png') no-repeat center center;">
                                <span class="text"  @click='showTestimonial7()'>’Paul</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <a @click='showTestimonial8()' class="hovicon effect-8"><img :src="'./images/testimonial/avatar9.jpg'" class="img-fluid rounded-circle" style="width:100px;"  /></a>
                        </td>
                        <td></td>
                        <td></td>
                        <td><a @click='showTestimonial9()' class="hovicon effect-4 sub-b"><img :src="'./images/testimonial/avatar7.jpg'" class="img-fluid rounded-circle" style="width:450px;"  /></a></td>
                    </tr>
                </table>
            </div>
        </div>

 

        <!--Grid row-->
        <div class="row d-flex justify-content-center bg-white" >
            <!--Grid column vue-router, Weex, Vuex, Nuxt.js, Vuetify.js,-->
            <div class="col-md-9 py-4 mb-3">
            <h1 class="text-center">Nossas instalacoes</h1>
                <carousel-3d>
                    <slide :index="0" style="background: url('./images/office/1.jpg') no-repeat center center; background-size: cover;" class="d-flex justify-content-center align-items-center">
                        <a @click="imagesFirst()" class="btn"><i class="fas fa-eye"></i></a>
                    </slide>
                    <slide :index="1" style="background: url('./images/office/2.jpg') no-repeat center center; background-size: cover;" class="d-flex justify-content-center align-items-center">
                        <a @click="imagesSecond()" class="btn"><i class="fas fa-eye"></i></a>
                    </slide>
                    <slide :index="3" style="background: url('./images/office/3.jpg') no-repeat center center; background-size: cover;" class="d-flex justify-content-center align-items-center">
                         <a @click="imagesTherd()" class="btn"><i class="fas fa-eye"></i></a>
                    </slide>
                    <slide :index="4" style="background: url('./images/office/4.jpg') no-repeat center center; background-size: cover;" class="d-flex justify-content-center align-items-center">
                         <a @click="imagesFouth()" class="btn"><i class="fas fa-eye"></i></a>
                    </slide>
                    <slide :index="5" style="background: url('./images/office/5.jpg') no-repeat center center; background-size: cover;" class="d-flex justify-content-center align-items-center">
                         <a @click="imagesFifth()" class="btn"><i class="fas fa-eye"></i></a>
                    </slide>
                    <slide :index="6" style="background: url('./images/office/6.jpg') no-repeat center center; background-size: cover;" class="d-flex justify-content-center align-items-center">
                         <a @click="imagesSixth()" class="btn"><i class="fas fa-eye"></i></a>
                    </slide>
                    <slide :index="7" style="background: url('./images/office/7.jpg') no-repeat center center; background-size: cover;" class="d-flex justify-content-center align-items-center">
                        <a @click="imagesSeventh()" class="btn"><i class="fas fa-eye"></i></a>
                    </slide>
                </carousel-3d>
                <!-- Modal -->
                <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">                        
                            <div class="z-depth-1-half" >
                                <img :src="'./images/office/1.jpg'" class="img-fluid" v-if="images.first" />
                                <img :src="'./images/office/2.jpg'" class="img-fluid" v-if="images.second" />
                                 <img :src="'./images/office/3.jpg'" class="img-fluid" v-if="images.therd" />
                                 <img :src="'./images/office/4.jpg'" class="img-fluid" v-if="images.fouth"/>
                                <img :src="'./images/office/5.jpg'" class="img-fluid" v-if="images.fifth"/>                                
                                <img :src="'./images/office/6.jpg'" class="img-fluid" v-if="images.sixth"/>                                
                                <img :src="'./images/office/7.jpg'" class="img-fluid" v-if="images.seventh"/>                                
                                <img :src="'./images/office/7.jpg'" class="img-fluid" v-if="images.eighth"/>

                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <!--Grid column-->

        </div>
        
    </div>
</template>

<script>

import { carousel} from 'vue-owl-carousel2'
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { Carousel0D, CarouselItem } from 'vue-l-carousel'
export default {
    name: 'testemonial',
    components: { 
        carousel, 
        Carousel3d, 
        Slide,
        Carousel0D,
        CarouselItem   
    },
    
    data(){
        return{
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                1650: {
                    items: 1
                }
            },
            toggle: false,
            classes: [],
            show: 
                { 
                    first: true,  
                    second: false,
                    therd: false,
                    fouth: false,  
                    fifth: false,  
                    sixth: false,  
                    seventh: false,  
                    eighth: false,  
                    ninth: false,  
                },
            images:  
                { 
                    first: false,  
                    second: false,
                    therd: false,
                    fouth: false,  
                    fifth: false,  
                    sixth: false,  
                    seventh: false,  
                    eighth: false,  
                    ninth: false,  
                }
        }
    },
    methods: {
  	hoverOver: function() {
    	console.log('over');
    	this.classes = ['animated', 'bounceIn']
    },
    hoverOut: function() {
    	console.log('out');
    	this.classes = []
    },
    hoverOutTimeout: function() {
    	setTimeout(() => { 
      	console.log('out');
    		this.classes = []
      }, 1000);
    },
    showTestimonial1: function() {
        this.show.first = true
        this.show.second = false
        this.show.therd = false
        this.show.fouth = false
        this.show.fifth = false
        this.show.sixth = false
        this.show.seventh = false
        this.show.eighth = false
        this.show.ninth = false
    },
    showTestimonial2: function() {
        this.show.first = false
        this.show.second = true
        this.show.therd = false
        this.show.fouth = false
        this.show.fifth = false
        this.show.sixth = false
        this.show.seventh = false
        this.show.eighth = false
        this.show.ninth = false
    },
    showTestimonial3: function() {
        this.show.first = false
        this.show.second = false
        this.show.therd = true
        this.show.fouth = false
        this.show.fifth = false
        this.show.sixth = false
        this.show.seventh = false
        this.show.eighth = false
        this.show.ninth = false
    },
    showTestimonial4: function() {
        this.show.first = false
        this.show.second = false
        this.show.therd = false
        this.show.fouth = true
        this.show.fifth = false
        this.show.sixth = false
        this.show.seventh = false
        this.show.eighth = false
        this.show.ninth = false
    },
    showTestimonial5: function() {
        this.show.first = false
        this.show.second = false
        this.show.therd = false
        this.show.fouth = false
        this.show.fifth = true
        this.show.sixth = false
        this.show.seventh = false
        this.show.eighth = false
        this.show.ninth = false
    },
    showTestimonial6: function() {
        this.show.first = false
        this.show.second = false
        this.show.therd = false
        this.show.fouth = false
        this.show.fifth = false
        this.show.sixth = true
        this.show.seventh = false
        this.show.eighth = false
        this.show.ninth = false
    },
    showTestimonial7: function() {
        this.show.first = false
        this.show.second = false
        this.show.therd = false
        this.show.fouth = false
        this.show.fifth = false
        this.show.sixth = false
        this.show.seventh = true
        this.show.eighth = false
        this.show.ninth = false
    },
    showTestimonial8: function() {
        this.show.first = false
        this.show.second = false
        this.show.therd = false
        this.show.fouth = false
        this.show.fifth = false
        this.show.sixth = false
        this.show.seventh = false
        this.show.eighth = true
        this.show.ninth = false
    }, 
    showTestimonial9: function() {
        this.show.first = false
        this.show.second = false
        this.show.therd = false
        this.show.fouth = false
        this.show.fifth = false
        this.show.sixth = false
        this.show.seventh = false
        this.show.eighth = false
        this.show.ninth = true
    },
    imagesFirst(){ // vamos usar esta funcao para trocar model ddo btn criar e editar                   
        this.images.first = true,
        this.images.second= false,
        this.images.therd = false,
        this.images.fouth = false,  
        this.images.fifth = false,  
        this.images.sixth = false,  
        this.images.sevent = false,  
        this.images.eight =  false,  
        this.images.ninth = false, 
        $('#modal2').modal('show')
    },
    imagesSecond(){
        this.images.first = false,
        this.images.second= true,
        this.images.therd = false,
        this.images.fouth = false,  
        this.images.fifth = false,  
        this.images.sixth = false,  
        this.images.sevent = false,  
        this.images.eight =  false,  
        this.images.ninth = false,  
        $('#modal2').modal('show')
    },
    imagesTherd(){
        this.images.therd = true, 
        $('#modal2').modal('show')
    },
    imagesFouth(){
         this.images.fouth = true, 
        $('#modal2').modal('show')
    },
    imagesTherd(){
        this.images.therd = true, 
        $('#modal2').modal('show')
    },
    imagesFifth(){
         this.images.fifth = true, 
        $('#modal2').modal('show')
    },
    imagesSixth(){
        this.images.sixth = true, 
        $('#modal2').modal('show')
    },
    imagesSeventh(){
         this.images.seventh = true, 
        $('#modal2').modal('show')
    },
  }
}

</script>