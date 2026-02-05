<template>
    <section id="most-recent" class="pt-5 pb-5"> 

        <h3 class="fs-2 mt-5 text-center">Projetos em destaque:</h3>

        <div class="col-12 mt-5 d-flex justify-content-center align-itens-center">
            <p class="col-9">
                Cada <strong>projeto</strong> nasce de um <strong>processo criativo singular</strong>, atento ao uso real do espaço e à <strong>identidade</strong> de quem irá vivenciá-lo, resultando em ambientes que equilibram <strong>estética, funcionalidade e bem-estar.</strong>
            </p>
        </div>

        <div class="col-12 d-flex flex-row justify-content-center align-items-center flex-wrap">

            <div id="container-overlay" class="position-relative col-10 col-sm-7 col-md-5 col-lg-3 m-4 d-flex justify-content-center align-items-center">
                <div id="overlay" class="p-2 position-absolute d-flex flex-column justify-content-center align-items-center col-10 col-sm-7 col-md-5 col-lg-3">
                    <span class="text-white fs-5">Varanda gourmet</span>
                </div>
                <img class="col-12" src="../assets/projetos-destaques/destaque-1.webp" alt="image">
            </div>

            <div id="container-overlay" class="position-relative col-10 col-sm-7 col-md-5 col-lg-3 m-4 d-flex justify-content-center align-items-center">
                <div id="overlay" class="p-2 position-absolute d-flex flex-column justify-content-center align-items-center col-10 col-sm-7 col-md-5 col-lg-3">
                    <span class="text-white fs-5">Quarto</span>
                </div>
                <img class="col-12" src="../assets/projetos-destaques/destaque-2.webp" alt="image">
            </div>

            <div id="container-overlay" class="position-relative col-10 col-sm-7 col-md-5 col-lg-3 m-4 d-flex justify-content-center align-items-center">
                <div id="overlay" class="p-2 position-absolute d-flex flex-column justify-content-center align-items-center col-10 col-sm-7 col-md-5 col-lg-3">
                    <span class="text-white fs-5">Lavabo</span>
                </div>
                <img class="col-12" src="../assets/projetos-destaques/destaque-3.webp" alt="image"> 
            </div>  
           
        </div> 

        <div class="col-12 mt-5 d-flex justify-content-center align-itens-center text-decoration-none">            
            <router-link id="see-all-projects" to="/projects" class="col-9 text-center text-md-end">      
                Veja todos os nossos projetos <br>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#141414" class="bi bi-arrow-right" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>             
            </router-link>   
        
        </div>
        
    </section>  
    
</template>
    
<script>

export default {     

    name: 'Highlights', 
    data() {
      return {
       
      }   
    },
    methods: {
      
    },
    mounted() {
      
    }
}
</script>   
    
<style scoped>     
    #most-recent {
        background-color: var(--color-7);
    }

    #see-all-projects {
        color: var(--color-8);
        text-decoration: none;
        font-weight: bold;
    }

    #see-all-projects:hover {
        color: var(--color-1); 
    }

    #overlay {     
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 1s ease-in;
        background-color: var(--color-1);
    }

    #container-overlay img {
        display: block;
        width: 100%;
        height: auto;  
    }

    #most-recent div:hover, #content:hover {
        opacity: 1;  
    } 

    #container-overlay:hover #overlay {
        opacity: 1;
    }  

</style>

