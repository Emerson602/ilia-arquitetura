<template>  
         
    <div class="col-10 col-md-6 mt-4 d-flex flex-column text-start fs-5"> 
        <label class="fw-bold my-4">Pretende trocar: *</label>

        <div class="mt-1 form-check" v-for="option in options" :key="option">
            <input 
            class="form-check-input" 
            type="checkbox" 
            :value="option" 
            v-model="form.wantToChange"
            @change="handleCheckbox(option)"
            >
            <label class="form-check-label">{{ option }}</label>
        </div>
    </div>
       
</template>
  
<script>
export default {
  name: 'wantToChange',
  props: {
    form: {
      type: Object,
      required: true
    },    
  },
  data() {
    return {
        options: [
            'Piso',
            'Revestimentos de parede',
            'Forro de gesso',
            'Iluminação',
            'Pontos elétricos',
            'Hidráulica',
            'Nenhum'
        ],
    }
  },
  methods: {
    handleCheckbox(option) {
        if(option === 'Nenhum' && this.form.wantToChange.includes('Nenhum')) {         
            this.form.wantToChange = ['Nenhum'];
        } else if(option !== 'Nenhum' && this.form.wantToChange.includes('Nenhum')) {         
            this.form.wantToChange = this.form.wantToChange.filter(o => o !== 'Nenhum');
        }
    }
  }
}
</script>
   
<style scoped> 


</style>




