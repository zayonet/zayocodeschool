<template>
    <!-- Sidebar -->
    <div class="sidebar px-0">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel py-3 mb-3 d-flex border-bottom border-light" style="background: url('./images/b2.png') no-repeat center center; background-size: cover;">
            <div class="image">
                <img :src="'./images/profile/3.jpg'" class="elevation-2" alt="User Image">
            </div>
            <div class="info bg-white">
                <a href="#" class="d-block">Alexander Pierce</a>
            </div>
        </div>
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->
                <li class="nav-item">
                     <router-link to="/users/dashboard"  class="nav-link" >
                        <i class="nav-icon fas fa-tachometer-alt text-blue"></i>
                    <p>
                        Dashboard
                        
                    </p>
                    </router-link>
                    
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
                        <router-link to="/users/classes" class="nav-link" >
                        <i class="fa fa-users nav-icon text-green"></i>
                        <p>Users</p>
                        </router-link>
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
                     <router-link to="/users/profile"  class="nav-link" >
                    <i class="nav-icon fas fa-user"></i>
                    <p>
                        Profile                                
                    </p>
                    </router-link>
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
    }
</script>