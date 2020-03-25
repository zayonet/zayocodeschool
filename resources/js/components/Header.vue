<template>
    <div class="container-fluid Header" style="padding-left:0px;">
       
    <!--Section: Content-->
    <section class="text-center text-lg-left dark-grey-text">

      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-md-6 mb-4 mb-md-0" style="padding-right: 0px;">

            <!--carousel with Image-->
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active carousel-item-left">
                        <img class="d-block w-100" :src="'./images/header/c1.jpg'" alt="First slide">
                    </div>
                    <div class="carousel-item carousel-item-next carousel-item-left">
                        <img class="d-block w-100" :src="'./images/header/c2.jpg'" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" :src="'./images/header/c5.jpg'" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="btn carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
        <!--Grid column-->
        <!--Grid column-->
        <div class="col-md-6 mb-4 mb-md-0 mt-0 d-inline-flex justify-content-center align-items-center p-2 text-white" style="background:  url('/images/header/3.svg') no-repeat left center; background-size: cover; padding-left: 0px;">
            <!--carousel without Image-->
             <div id="word" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#word" data-slide-to="0" class=""></li>
                    <li data-target="#word" data-slide-to="1" class="active"></li>
                    <li data-target="#word" data-slide-to="2" class=""></li>
                </ol>
                <div class="carousel-inner text-center">
                    <div class="carousel-item active carousel-item-left">
                        <h1 class="font-weight-bold text-uppercase display-4">Informação</h1>

                        <p class="text-cyan">
                            Judging from all generally accepted forms of studying, we would rather call it the first programming courses in a child’s life, but with a focus on the development of creativity through composing new things (stories, cartoons, games) using modern technologies.</p>

                        <a class="btn bground-logo-blue btn-custom-blue ml-0" href="#" role="button">Veja mais<i class="fa fa-plane ml-2"></i></a>
                    </div>
                    <div class="carousel-item carousel-item-next carousel-item-left">
                        <h1 class="font-weight-bold text-uppercase display-4">Carreira</h1>

                         <p class="text-cyan">
                            Judging from all generally accepted forms of studying, we would rather call it the first programming courses in a child’s life, but with a focus on the development of creativity through composing new things (stories, cartoons, games) using modern technologies.</p>

                        <a class="btn bground-logo-blue btn-custom-blue ml-0" href="#" role="button">Veja mais<i class="fa fa-plane ml-2"></i></a>
                    </div>
                    <div class="carousel-item">
                        <h1 class="font-weight-bold text-uppercase display-4">Oportunidade</h1>

                         <p class="text-cyan">
                            Judging from all generally accepted forms of studying, we would rather call it the first programming courses in a child’s life, but with a focus on the development of creativity through composing new things (stories, cartoons, games) using modern technologies.</p>

                         <a class="btn bground-logo-blue btn-custom-blue ml-0" href="#" role="button">Veja mais<i class="fa fa-plane ml-2"></i></a>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#word" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#word" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
          

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->


    </section>
    <!--Section: Content-->
    </div>
</template>

<script>
    export default {
        name: "Header",
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
