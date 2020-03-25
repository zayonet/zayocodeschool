<template>
    <div class="container mt-5">

        <div class="col-md-4 offset-4 py-4">
            <div class="register-logo">
                <router-link to="/"><strong class="text-logo-blue">ZAYO</strong><strong class="text-logo-orange">CODE</strong></router-link>
            </div>

            <div class="card">
                <div class="card-body register-card-body">
                    <p class="login-box-msg">Register a new membership</p>
                    
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">
                                {{error }}
                            </li>
                        </ul>
                    </div>
                    <form v-on:submit.prevent="onSubmit" method="post">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Full name" v-model="name">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                <span class="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password" v-model="password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Retype password" v-model="passwordAgain">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="icheck-primary">
                            <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                            <label for="agreeTerms">
                            I agree to the <a href="#">terms</a>
                            </label>
                        </div>
                        <div class="">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>
                    </form>

                    <!-- Social register -->
                    <div class="text-center mt-2">
                        <p>or sign up with:</p>

                        <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
                        <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
                        <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
                        <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>
                        <small><p><router-link to="/login" class="text-center">I already have a membership</router-link></p></small>
                    </div>


                    <hr>

                    <!-- Terms of service -->
                    <small>
                        <p>By clicking
                            <em>Sign up</em> you agree to our
                            <a href="" target="_blank">terms of service</a>
                        </p>
                    </small>
                </div>
                <!-- /.form-box -->
            </div><!-- /.card -->
        </div>
    </div>
</template>

<script>
export default {
   name: 'register', 
   props:['app'],
   data(){
       return {
           name: '',
           email: '',
           password: '',
           passwordAgain: '',
           isActive: 'main-header',
           errors: []

       }
   },
   methods: {
       onSubmit(){
           this.errors = [];
           if(!this.name){
               this.errors.push('Name is require.');
           }
           if(!this.email){
               this.errors.push('Email is require.');
           }
           if(!this.password){
               this.errors.push('Password is require.');
           }
           if(!this.passwordAgain){
               this.errors.push('Password confirmation is require.');
           }   
    
           if(this.password !==  this.passwordAgain){
               this.errors.push('password do not match is require.');
           }
           if(!this.errors.length){
              const data = {
                    name : this.name,
                    email : this.email,
                    password : this.password
              }
              this.app.req.post('auth/register' , data).then(response => {
                  this.app.user = response.data;
                  //this.app.MainHeader = 'main-header';
                  this.$router.push('/users');
              }).catch(error => {
                  this.errors.push(error.response.data.error);
              });
           }
       }
   }
}
</script>