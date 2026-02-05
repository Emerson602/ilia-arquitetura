<template>
    <div id="apresentation-container" class="h-auto d-flex flex-column col-12">

        <div class="col-12 p-0 pt-5 pb-5 text-center d-flex flex-column justify-content-center align-items-center">

            <h1 id="title" class="fs-2">
                <span class="m-1 ">
                    <span id="letter-m" class="letter">M</span>
                    <span id="remaining-m" class="remaining">agda</span>
                </span>
                <span id="word" class="m-1">
                    <span id="letter-e" class="letter">E</span>
                    <span id="remaining-e" class="remaining">milia</span>
                </span>
                <span id="word" class="m-1 d-block d-sm-inline">
                    <span id="letter-a" class="letter">A</span>
                    <span id="remaining-a" class="remaining">rquitetura</span>
                </span> 
            </h1>

            <p class="mt-2 fs-2 text-center text-light">
                Construindo espaços que respiram vida e inspiração. 
            </p>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'ApresentationContainer', 
    data() {
      return {
     
      }   
    },
    methods: {
        initAnimation() {
            const remainings = document.querySelectorAll('.remaining');
            const letters = document.querySelectorAll('.letter');

            remainings.forEach(function(remaining) {
                remaining.classList.add('remainings-animation');
            });
            
            letters.forEach(function(letter) {
                letter.classList.add('letters-animation');
            });
        },
        
        handleTitleObserverObserver() {
            const titleObserver = new IntersectionObserver(elements => {
            const element = elements[0];
            if (element.isIntersecting) {         
                this.initAnimation();
                return;
            }  
                
            }, {});

            const title = document.querySelector('#title');
            titleObserver.observe(title);
        },
    },
    mounted() {
        this.handleTitleObserverObserver();      
    }
}
</script>   
    
<style scoped>     

#apresentation-container {
    background-color: var(--color-2);  
    background-image: url('@/assets/bg-mea.gif');   
    background-size: contain;
    background-repeat: no-repeat; 
    background-position: left;    
}

#apresentation-container p {
    width: 100%;
} 

#apresentation-container span {
    font-size: 2.5rem;
    font-family: 'alta', serif !important;
    font-weight: normal;     
    color: var(--color-1); 
}

.letters-animation {
    animation: fadeLetters 1.5s ease-out;
    animation-fill-mode: forwards;
}

#letter-m, #letter-e, #letter-a { 
    position: relative;
    left: 100px;
}

#letter-m {    
    animation-delay: 0s;
}

#letter-e {
    animation-delay: 1.5s;
}

#letter-a {
    animation-delay: 3s;
} 

.remainings-animation {
    animation: fadeRemaining 0.5s ease-out;
    animation-fill-mode: forwards;
}

#remaining-m, #remaining-e, #remaining-a { 
    opacity: 0;  
    position: relative;
    left: 100px;    
}

#remaining-m {    
    animation-delay: 1.3s;
} 

#remaining-e {  
    animation-delay: 2.8s;
} 

#remaining-a {    
    animation-delay: 4.3s;
}

@media(max-width: 576px) {
    #apresentation-container p, #apresentation-container h1 {
        width: 80%;         
    } 

    #letter-m, #letter-e, #letter-a { 
        opacity: 0;
    }
}

@keyframes fadeLetters {
    0%{
        position: relative;
        left: 100px;                 
    }

    100% {         
        position: relative;
        left: 0;  
        opacity: 1;         
    }
} 

@keyframes fadeRemaining {
    0%{
        opacity: 0;     
        position: relative;
        left: 100px;
    } 
    50% {        
        opacity: 0;
        position: relative;
        left: 0;
    }
    100% {    
        opacity: 1;      
        position: relative;
        left: 0;
    }
}




  
</style>

