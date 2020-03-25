<template>
    <div class="container-fluid bg-white" >
      
        <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-center">  
                <div class="view p-5">              
                    <img :src="'./images/about1.svg'" class="img-fluid" alt="About us" style="width:700px">  
                </div>              
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center border-left">
                <div class="p-4">            
                    <h3 class="font-weight-bold mb-4"><span class="text-logo-blue">ZAYO</span><span class="text-logo-orange">CODE</span></h3>

                    <p>Is a trendsetter in children’s technological education for children aged 5-11, whose main goal is:</p>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">To transform children from passive users of technologies into ACTIVE CREATORS with the help os technologies through the creation of their own products (games, movies etc).</li>
                        <li  class="list-group-item">To lay the basis of the skills necessary for a successful future of the child – 4C-skills (communication, creativity, collaboration, critical thinking) and the basic principles of digital citizenship.</li>
                        <li  class="list-group-item">To offer the child and his parents the first understanding of “Global citizen” concept, demonstrating the limitless of the world and the opportunity to present their own products at major world conferences, receiving awards and recognition.</li>
                    </ul> 
                    
                    <button type="button" class="btn btn-orange btn-rounded mx-0">Unlock Tech Genius</button>
                </div>
            </div>
        </div>

    </div>        
    
</template>

<script>
    export default {
        name: 'about'
    }
</script>