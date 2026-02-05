<template>
  <div v-if="isVisible" class="col-12 h-100 position-absolute top-0 left-0 d-flex justify-content-center align-items-center" @click.self="closeModal"> 

    <div id="modal" class="col-12 d-flex flex-column justify-content-start align-items-center position-fixed top-0 left-0 pt-5 pb-5 text-center">

    <div class="col-12 d-flex justify-content-end align-items-center position-absolute top-0">
      <button @click="closeModal" id="close-modal" class="button rounded border-0 m-3 m-md-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>
    </div>
    
    <div class="mt-2 d-flex flex-row"> 
      <button @click="changeToDay" id="btn-day" class="rounded m-1 p-1 d-flex justify-content-center align-items-center" data-toggle="tooltip" data-placement="top" title="Dia">
        <svg xmlns="http://www.w3.org/2000/svg" v-if="isNight" width="20" height="20" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>  

        <svg xmlns="http://www.w3.org/2000/svg" v-if="isDay" width="20" height="20" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
      </button>

      <button @click="changeToNight" id="btn-night" class="rounded m-1 p-1 d-flex justify-content-center align-items-center" data-toggle="tooltip" data-placement="top" title="Noite">
        <svg xmlns="http://www.w3.org/2000/svg" v-if="isDay" width="20" height="20" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" v-if="isNight" width="20" height="20" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
      </button>
    </div>

      <h3 class="fs-3 mt-5">{{ project.name }}</h3> 

      <div class="col-10 mt-3 d-flex flex-column justify-content-center align-items-center">

        <img v-if="isDay" class="col-12 col-md-5" :src="project.imagesDay[currentImageIndex]" alt="Project Image">
        <img v-if="isNight" class="col-12 col-md-5" :src="project.imagesNight[currentImageIndex]" alt="Project Image"> 

        <div class="position-absolute col-10 col-md-4 d-flex justify-content-between align-items-center">
          <button @click="backImage" id="btn-back" ref="btnBack" class="btn-disabled">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-chevron-left" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </button>

          <button @click="nextImage" id="btn-next" ref="btnNext" class="btn-enabled">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
        </div>  
      </div>   

      <div id="tumbnails" class="mt-3 p-0 col-10 d-flex flex-row justify-content-center align-items-center">
        <img v-if="isDay" v-for="(image, index) in project.imagesDay" :key="index" :src="image" @click="changeImage(index)" class="m-2" alt="Thumbnail Image">
        <img v-if="isNight" v-for="(image, index) in project.imagesNight" :key="index" :src="image" @click="changeImage(index)" class="m-2" alt="Thumbnail Image">
      </div>

      <p class="col-10 fs-5">{{ project.description }}</p>      
      
    </div>
  </div>
</template>

<script> 
export default {
  name: 'ProjectModal',
  props: {
    project: Object,
    isVisible: Boolean,
  },
  data() {
    return {
      currentImageIndex: 0,
      isDay: true,
      isNight: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.emitChangeWidthScroll();
    },
    emitChangeWidthScroll() {
      this.$emit('change-scroll-width', 10);
    },
    changeImage(index) {
      this.currentImageIndex = index;
      this.toggleButtonStyle();
    },    
    changeToDay() {
      if(this.isDay == false) {
        this.isDay = true;
        this.isNight = false;
      }      
    },
    changeToNight() {
      if(this.isNight == false) {
        this.isNight = true;
        this.isDay = false;
      }
    },
    toggleButtonStyle() {
      const btnBack = this.$refs.btnBack;
      const btnNext = this.$refs.btnNext;
      const totalImgsDay = this.project.imagesDay.length;
      const totalImgsNight = this.project.imagesNight.length;
      
      if (btnBack && btnNext) {
        
        btnBack.setAttribute('class', 'btn-enabled');
        btnNext.setAttribute('class', 'btn-enabled');         
        
        if (this.currentImageIndex >= totalImgsDay - 1 || this.currentImageIndex >= totalImgsNight - 1) {
          btnNext.setAttribute('class', 'btn-disabled');          
        }  

        if (this.currentImageIndex <= 0) {        
          btnBack.setAttribute('class', 'btn-disabled');         
        }
      }
    },
    nextImage() {
     
      if(this.currentImageIndex < this.project.imagesDay.length - 1) {     
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project.imagesDay.length || (this.currentImageIndex + 1) % this.project.imagesDay.length;  
        this.toggleButtonStyle();            
      }  
           
    },
    backImage() {   

      if(this.currentImageIndex) {
        this.currentImageIndex = (this.currentImageIndex - 1) % this.project.imagesDay.length || (this.currentImageIndex - 1) % this.project.imagesNight.length; 
        this.toggleButtonStyle();
      }     
   
    },
  },

  mounted() {

  }
}
</script>

<style scoped>

#modal {
  background-color: var(--color-7);
  height: 100vh;  
  overflow-y: scroll;
  z-index: 100;
} 

#close-modal {
  background-color: transparent;
}

.btn-enabled {
  text-decoration: none;
  background-color: var(--color-1);
  border: solid 2px var(--color-1);
  height: 40px;
  border-radius: 4px;
  margin: 10px;  
}

#btn-day, #btn-night, #btn-day svg, #btn-night svg {
  background-color: var(--color-1);   
  fill: var(--color-7);
} 

.btn-disabled {
    text-decoration: none;
    background-color: transparent;
    color: transparent;
    border: transparent;
    cursor: default; 
}

.btn-disabled svg {
  fill: transparent
}

.btn-enabled:hover {
  background-color: var(--color-3);
  transition: 1s;  
}

.btn-enabled svg:hover {
    fill: var(--color-7) !important;    
}

#tumbnails img {
  width: 50px;
  height: auto;
}

#tumbnails img:hover {
  cursor: pointer;  
}

</style>
