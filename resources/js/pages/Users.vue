<template>
    <div class="container-fluid mt-5">
        <div class="row pt-2">
            <div class="col-2 bg-light px-0 position-fixed h-100 z-depth-1">
                <Sidebar class=""></Sidebar>
            </div>
            <div class="col-10 offset-2 mt-2">
                 <router-view />
            </div>
        </div>
    </div>    
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Dashboard from './user/Dashboard.vue';
import Profile from './user/Profile.vue';
import Classes from './user/Classes.vue';
export default {
   name: 'users',
   data(){
       return{
           //currentComp: 'notes-list'
       }
   },
   components:{   
       Sidebar,
       Classes,
        'notes-list': Dashboard,
        'messages-list': Profile
       
   }
}
</script>