<template>
    <div>
        <Header></Header>
        <About></About>
        <Members></Members>
        <Testimonial></Testimonial>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Members from '../components/Members.vue';
import Testimonial from '../components/Testimonial.vue';
import Footer from '../components/Footer.vue';
export default {
   name: 'home',
   components:{
       Header,
       About,
       Members,
       Testimonial,
       Footer
   }
}
</script>