import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import Users from './pages/Users.vue';
import Dashboard from './pages/user/Dashboard.vue';
import Classes from './pages/user/Classes.vue';
import Profile from './pages/user/Profile.vue';
import NotFound from './pages/404.vue';
export default[
    {
        path: '/',
        component:  Home,
        name: 'home'
    },
    {
        path: '/register',
        component:  Register,
        name: 'register'
    },
    {
        path: '/login',
        component:  Login,
        name: 'login'
    },
    {
        path: '/users',
        component:  Users,
        name: 'users',
        meta:{requiresAuth:true},
        children: [
            {
              // UserProfile will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: 'dashboard',
              component: Dashboard,
              name: 'dashboard'
            },
            {
              // UserProfile will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: 'classes',
              component: Classes,
              name: 'classes'
            },
            {
              // UserPosts will be rendered inside User's <router-view>
              // when /user/:id/posts is matched
              path: 'profile',
              component: Profile,
              name: 'classes'
            }
        ]
    },
    /*{
        path: '/classes',
        component:  Classes,
        name: 'classes',
        //meta:{RequiredAuth:false}
    },*/
    { 
        path: '*', 
        component:  NotFound,
        name: NotFound 
    } //a estrela significa k se nao encontrar nenhum component entrao chama o 404
]