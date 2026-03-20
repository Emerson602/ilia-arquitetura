<template>  
         
      <div class="col-10 col-md-6 mt-4 d-flex flex-column mt-4 text-start fs-5">
          <label class="my-4 fw-bold">Qual a faixa de investimento prevista para sua obra (incluindo construção e acabamentos)?</label>

          <div class="form-check" v-for="range in [
              'Até R$50,000',
              'De R$50,000 a R$100,000',
              'De R$100,000 a R$200,000',
              'Acima R$200,000',
          ]" :key="range">
              <input class="form-check-input" type="radio" :value="range" v-model="form.investmentRange">
              <label class="form-check-label">{{ range }}</label>
          </div>
      </div>
       
</template>
  
<script>
export default {
  name: 'investmentRange',
  props: {
    form: {
      type: Object,
      required: true
    }
  }
}
</script>
   
<style scoped> 


</style>
