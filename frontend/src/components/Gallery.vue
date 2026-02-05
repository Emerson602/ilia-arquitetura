<template>

  <section class="mt-5 col-12 pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">  
    
    <h2 class="fs-2 mt-5 pt-5">Projetos</h2>  

    <div id="gallery-container" class="mt-5 d-flex flex-row justify-content-center align-items-center flex-wrap">       
      
      <div id="project" class="col-11 col-lg-4 m-0 mx-lg-2 d-flex flex-column justify-content-center align-items-center" v-for="(project, index) in visibleProjects" :key="index">
     
        <img class="col-12" :src="project.thumbnail" alt="Project Image" @click="openModal(project)">   
        <p class="fs-5">{{ project.description }}</p>       
      </div>      
    </div>

    <button id="show-more" v-if="showMoreButtonVisibility" @click="showMoreProjects" class="rounded">
        <svg v-if="maxProjects <= totalProjects" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
          <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
        </svg>
    </button>
      
      <ProjectModal         
         :project="selectedProject"
         :isVisible="isModalVisible"
         @close="isModalVisible = false"
         @change-scroll-width="changeWidthScroll"
      />   
     
  </section>
</template>


<script>
import ProjectModal from '@/components/ProjectModal.vue';  

export default {
  name: 'Gallery',
  components: {
    ProjectModal,   
  },
  data() {
    return {
      projects: [],
      totalProjects: 0,
      maxProjects: 4,
      showMore: true,
      selectedProject: null,
      isModalVisible: false,
      showMoreButtonVisibility: true,
    }
  },
  computed: {
    visibleProjects() {
      return this.projects.slice(0, this.maxProjects);
    }
  },
  methods: {
    createProjects() {

      const projects = [
        {
          name: 'Varanda Gourmet',
          description: '',
          thumbnail: require('@/assets/varanda-gourmet/capa.webp'),
          imagesDay: [require('@/assets/varanda-gourmet/1.webp'), require('@/assets/varanda-gourmet/2.webp'), require('@/assets/varanda-gourmet/3.webp')],
          imagesNight: [require('@/assets/varanda-gourmet/1.webp'), require('@/assets/varanda-gourmet/2.webp'), require('@/assets/varanda-gourmet/3.webp')],
        },
        {
          name: 'Banheiro oliva',
          description: '',
          thumbnail: require('@/assets/banheiro-oliva/capa.webp'),
          imagesDay: [require('@/assets/banheiro-oliva/1.webp'), require('@/assets/banheiro-oliva/2.webp')],
          imagesNight: [require('@/assets/banheiro-oliva/1-night.webp'), require('@/assets/banheiro-oliva/2.webp')],
        },
        {
          name: 'Quarto',
          description: '',
          thumbnail: require('@/assets/quarto/capa.webp'),
          imagesDay: [require('@/assets/quarto/1-day.webp'), require('@/assets/quarto/2-day.webp'), require('@/assets/quarto/3.webp'), require('@/assets/quarto/4.webp')],
          imagesNight: [require('@/assets/quarto/1-night.webp'), require('@/assets/quarto/2-night.webp'), require('@/assets/quarto/3.webp'), require('@/assets/quarto/4.webp')],
        },
        {
          name: 'Lavabo',
          description: '',
          thumbnail: require('@/assets/lavabo/capa.webp'),
          imagesDay: [require('@/assets/lavabo/1.webp'), require('@/assets/lavabo/2.webp'), require('@/assets/lavabo/3.webp')],
          imagesNight: [require('@/assets/lavabo/1.webp'), require('@/assets/lavabo/2.webp'), require('@/assets/lavabo/3.webp')],
        },

        
      ];
      
      this.totalProjects = projects.length;
      this.projects = projects;
      return projects
    },
    showMoreProjects() {
      const numberVisibleProjects = 4;

      if (this.maxProjects < this.totalProjects) {
        this.maxProjects += numberVisibleProjects;
      } else {
        this.maxProjects = numberVisibleProjects;
      }
    },
    handleShowMoreButton() {
      if(this.totalProjects <= 4) {
       this.showMoreButtonVisibility = false;
      }
    },
    openModal(project) {
      this.selectedProject = project;
      this.isModalVisible = true;       
      this.changeWidthScroll(0);    
    },
    changeWidthScroll(newWidth) {      

      const style = document.createElement('style');

      style.innerHTML = `        
        ::-webkit-scrollbar {
          width: ${newWidth}px !important; 
        } 
      ` ; 

      document.head.appendChild(style);       

    },
    
  },
  mounted() {
    this.createProjects();    
    this.handleShowMoreButton();
    
  }
}
</script>

<style scoped>

#gallery-container {
  padding: 20px;
}

#project img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

#show-more {
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

button { 
  background-color: var(--color-1) !important;  
  border: solid 2px var(--color-3) !important;
  height: 40px;
  width: 200px; 
}

button:hover {
  background-color: var(--color-3) !important;
  transition: 1s;      
}

button:hover svg {
  fill: #fff !important;
  transition: 1s;    
}

</style>