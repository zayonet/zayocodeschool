/**<template>
    <div class="container-fluid mt-5">
        <div class="row pt-3">
            <div class="col-2 bg-light px-0 position-fixed h-100">
                <Sidebar :current-comp="currentComp" class=""></Sidebar>
            </div>
            <div class="col-10 offset-2"  :is="currentComp"></div>
        </div>
    </div>    
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Dashboard from './Dashboard.vue';
import Profile from './Profile.vue';
import Classes from './Classes.vue';
export default {
   name: 'users',
   data(){
       return{
           currentComp: 'notes-list'
       }
   },
   components:{   
       Sidebar,
        'notes-list': Dashboard,
        'Classes': Classes,
        'messages-list': Profile
       
   },
   created() {
        this.$eventHub.$on('switchComp', comp => {
           this.currentComp = comp;
      })
  },
}

</script>
<script>
/**
 <template>
    <!-- Sidebar -->
    <div class="sidebar px-0">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel py-3 mb-3 d-flex grey lighten-2">
            <div class="image">
                <img :src="'./images/profile/2.jpeg'" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">Alexander Pierce</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="#" class="nav-link" 
                    @click="switchComponent('notes-list')"
                    :disabled="currentComp === 'notes-list'">
                        <i class="nav-icon fas fa-tachometer-alt text-blue"></i>
                    <p>
                        Dashboard
                        
                    </p>
                    </a>
                    
                </li>
                <li class="nav-item has-treeview menu-close">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-cog"></i>
                        <p>
                            Managment
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a class="nav-link" 
                        @click="switchComponent('classes')"
                        :disabled="currentComp === 'classes'">
                        <i class="fa fa-users nav-icon text-green"></i>
                        <p>Users</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                        <i class="fa fa-circle nav-icon"></i>
                        <p>Inactive Page</p>
                        </a>
                    </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"  
                    @click="switchComponent('messages-list')"
                    :disabled="currentComp === 'messages-list'">
                    <i class="nav-icon fas fa-user"></i>
                    <p>
                        Profile                                
                    </p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar --> 
</template>

<script>
    export default {
        name: 'sidebar',
        props: {
            currentComp: {
                type: String,
                required: true
            }
        },
        methods: {
            switchComponent(comp) {
                this.$eventHub.$emit('switchComp', comp);
            }
        }
    }
</script>
 **/
