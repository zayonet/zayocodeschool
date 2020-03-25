<template>
    <div>
        <Navbar v-bind:app="this"></Navbar>
        <spinner v-if="loading"></spinner>
        <div v-else-if="initiated">            
            <router-view :app="this"></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
    name: 'app',
    components:{
        Navbar
    },
    data(){
        return {
            user: null,
            loading: false,
            initiated: false,
            req:axios.create({
                baseUrl: BASE_URL
            }),
            //MainHeader: 'main-header'
            MainHeader: ''
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.loading = true;
            this.req.get('auth/init').then(response => {
                this.user = response.data.user;
                this.loading = false;
                this.initiated = true;
            }).catch(error => {
                const response = error.response;
                console.log(response);
            })
        }
    }
}
</script>