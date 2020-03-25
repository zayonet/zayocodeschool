<template>
    <div class="container-fluid px-0">
        <!--Section: Content-->
        <section class="white-text bground-logo-orange p-5">
            
            <h3 class="text-center font-weight-bold mb-4 pb-2">Counter</h3>

            <div class="row">

                <div class="col-md-4 mb-4">
                    <div class="row">
                    <div class="col-6 pr-0">
                        <h4 class="display-4 text-right mb-0 count-up">
                            <ICountUp
                                :delay="projects.delay"
                                :endVal="projects.endVal"
                                :options="projects.options"
                                @ready="onReadyProjects"
                            />
                        </h4>
                    </div>

                    <div class="col-6">
                        <p class="text-uppercase font-weight-normal mb-1">Projects</p>
                        <p class="mb-0"><i class="fas fa-briefcase fa-2x mb-0"></i></p>
                    </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="row">
                    <div class="col-6 pr-0">
                        <h4 class="display-4 text-right mb-0 count1">
                            <ICountUp
                                :delay="customer.delay"
                                :endVal="customer.endVal"
                                :options="customer.options"
                                @ready="onReadyCustomers"
                            />
                        </h4>
                    </div>

                    <div class="col-6">
                        <p class="text-uppercase font-weight-normal mb-1">Customers</p>
                        <p class="mb-0"><i class="fas fa-user fa-2x mb-0"></i></p>
                    </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="row">
                    <div class="col-6 pr-0">
                        <h4 class="display-4 text-right"><span class="d-flex justify-content-end">
                            <ICountUp
                                :delay="Satisfaction.delay"
                                :endVal="Satisfaction.endVal"
                                :options="Satisfaction.options"
                            />%</span></h4>
                    </div>

                    <div class="col-6">
                        <p class="text-uppercase font-weight-normal mb-1">Satisfaction</p>
                        <p class="mb-0"><i class="fas fa-smile fa-2x mb-0"></i></p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Section: Content-->

        <!-- Section Video-->
        <section class="bground-logo-blue z-depth-1">

            <!-- Modal -->
            <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe id="player" class="embed-responsive-item" :src="'./images/filme.mp4'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> <!-- src="https://www.youtube.com/embed/7MUISDJ5ZZ4" -->
                    </div>
                    </div>
                </div>
            </div>

            <div class="row no-gutters">

                <div class="col-lg-6 order-md-2">
                    <div class="view">
                        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(152).jpg" alt="Video title">
                        <div class="mask flex-center rgba-black-light">
                            <a id="play" class="btn-floating btn-danger btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mx-auto d-flex align-items-center text-white">
                    <div class="px-4 py-4 py-lg-0">
                    <h3 class="font-weight-normal mb-4">Give a Fresh Design to Your MDB</h3>
                    <p class="mb-0">Fresh fellow even the whole is work outcome them. They original on mountains, drew the
                        support time. The of to graduate. Into to is the to she at return understand every in there transmitting
                        you've he the was and in finger.</p>
                    </div>
                </div>

            </div>
            
        </section>

        <!-- Section -->
        <section class="p-md-3 text-lg-left bg-white">
            <h2 class="font-weight-bold text-center mb-5 pb-3">Features</h2>
            <div class="row text-center d-flex justify-content-center">
                <div class="col-lg-3 col-md-6 mb-5">
                    <i class="fas fa-map-marker-alt fa-3x indigo-text mb-4"></i>
                    <h4 class="font-weight-bold mb-4">Feature 1</h4>
                    <p class="text-muted px-2 mb-lg-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5">
                    <i class="fa fa-map pink-text fa-3x mb-4"></i>
                    <h4 class="font-weight-bold mb-4">Feature 2</h4>
                    <p class="text-muted px-2 mb-lg-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5">
                    <i class="fas fa-globe-africa fa-3x amber-text mb-4"></i>
                    <h4 class="font-weight-bold mb-4">Feature 3</h4>
                    <p class="text-muted px-2 mb-md-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5">
                    <i class="fas fa-street-view fa-3x green-text mb-4"></i>
                    <h4 class="font-weight-bold mb-4">Feature 4</h4>
                    <p class="text-muted px-2 mb-md-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
    import ICountUp from 'vue-countup-v2';
    export default {
        name: 'members',
        components: {
        ICountUp
        },
        data() {
            return {
                customer:{
                    delay: 1000,
                    endVal: 120500,
                    options: {
                        useEasing: true,
                        useGrouping: true,
                        separator: ',',
                        decimal: '.',
                        prefix: '',
                        suffix: ''
                    }
                },
                projects:{
                    delay: 1000,
                    endVal: 50,
                    options: {
                        useEasing: true,
                        useGrouping: true,
                        separator: ',',
                        decimal: '.',
                        prefix: '',
                        suffix: ''
                    }
                },
                Satisfaction:{
                    delay: 1000,
                    endVal: 25,
                    options: {
                        useEasing: true,
                        useGrouping: true,
                        separator: ',',
                        decimal: '.',
                        prefix: '',
                        suffix: ''
                    }
                }
            };
        },
        methods: {
            onReadyCustomers: function(instance, CountUp) {
                const that = this.customer;
                instance.update(that.endVal + 100); //onReadyProjects
            },
            onReadyProjects: function(instance, CountUp) {
                const that = this.projects;
                instance.update(that.endVal + 2); //
            },
            
        }
    };
</script>

<style scoped>
  .iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
  }
</style>