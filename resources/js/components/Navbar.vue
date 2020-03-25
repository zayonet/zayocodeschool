<template lang="">
    <div>
        <!-- Navbar -->
        <nav :class="app.MainHeader" class="navbar navbar-expand-md navbar-light navbar-white fixed-top mb-5">    
            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <a to="/" class="navbar-brand">
                <img :src="'./images/logo/8.svg'" alt="ZAYOCODE Logo" class="brand-image img-circle elevation-3"
                    style="opacity: .8; width: 32px;">
                <span class="brand-text font-weight-light"><strong class="text-logo-blue">ZAYO</strong><strong class="text-logo-orange">CODE</strong></span>
            </a>
            
            <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link  to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contactos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lingua</a>
                    </li>
                </ul>

                <!-- SEARCH FORM -->
                <form class="form-inline ml-0 ml-md-3">
                    <div class="input-group input-group-sm">
                        <input class="form-control form-control-navbar" type="search" placeholder="Procurar" aria-label="Procurar">
                        <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                        </div>
                    </div>
                </form>&nbsp;
            </div>

            <!-- Right navbar links -->
            <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">   

                <li class="nav-item dropdown">
                    <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle"> <i class="fas fa-user"></i> {{app.user ? app.user.name : 'Account'}}</a>
                    <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                        <div v-if="!app.user">                                
                            <li><router-link  class="dropdown-item" to="/login">Login</router-link></li>
                            <li><router-link  class="dropdown-item" to="/register">Register</router-link></li>
                        </div>
                        <a v-else @click="logout" href="javascript:void(0);" class="dropdown-item">Logout</a>                            
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->
    </div>
</template>

<script>

export default {
    name: 'navbar',
    props: ['app'],
    data() {
        return {
        }
    },
    created(){
        this.$eventHub.$on['onSubmit', function(){
            console.log('logined');
        }]
    },
    methods: {
        logout(){
            this.app.req.post('auth/logout').then(()=>{
                this.app.user = null;
                //this.app.MainHeader = '';
                this.$router.push('/login');
            });
        }
    }
}
</script>

