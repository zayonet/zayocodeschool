<template>
    <div class="container mt-5">

         <div class="col-md-4 offset-md-4 py-4">
            <div class="login-logo">
                 <router-link to="/"><strong class="text-logo-blue">ZAYO</strong><strong class="text-logo-orange">CODE</strong></router-link>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>
                    
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">
                                {{error }}
                            </li>
                        </ul>
                    </div>
                    <form  v-on:submit.prevent="onSubmit" method="post">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email"  v-model="email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password"  v-model="password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="icheck-primary">
                            <input type="checkbox" id="remember">
                            <label for="remember">
                                Remember Me
                            </label>
                        </div>
                        <div class="">
                                <button type="submit" class="btn btn-primary btn-block btn-sm">Sign In</button>
                        </div>
                    </form>

                      <!-- Social register -->
                    <div class="text-center mt-2">
                        <p>or sign up with:</p>

                        <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
                        <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
                        <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
                        <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>
                        <small><p><router-link to="/forgot-password" class="text-center">I forgot my password</router-link></p></small>
                    </div>                    
                    <!-- /.social-auth-links -->

                    <hr>
                    <p class="mb-0">
                        <router-link to="/register" class="text-center">Register a new membership</router-link>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
            </div>
    </div>
</template>

<script>
export default {
   name: 'login', 
   props:['app'],
   data(){
       return {
            email: '',
            password: '',
            errors: [],
       }
   },
   methods: {
       onSubmit(){
           this.errors = [];
          
           if(!this.email){
               this.errors.push('Email is require.');
           }
           if(!this.password){
               this.errors.push('Password is require.');
           }
          
           if(!this.errors.length){
              const data = {
                    email : this.email,
                    password : this.password
              }
              this.app.req.post('auth/login' , data).then(response => {
                  this.app.user = response.data;
                  //this.$eventHub.$emit('onSubmit', this.MainHeader);
                  this.$router.push('/users');
                  //this.app.MainHeader = 'main-header';
                console.log(this.app.MainHeader);
              }).catch(error => {
                  this.errors.push(error.response.data.error);
              });
           }
       }
   }
}
</script>