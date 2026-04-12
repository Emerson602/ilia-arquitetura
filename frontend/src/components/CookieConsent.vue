<template>
  <div v-if="!accepted" class="cookie-banner">
    <p>
      Utilizamos cookies para melhorar sua experiência.
      Ao continuar, você concorda com nossa
      <a href="/politica-de-privacidade">Política de Privacidade</a>.
    </p>

    <div class="actions">
      <button @click="acceptCookies">Aceitar</button>
      <button @click="رفضCookies">Recusar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const accepted = ref(true);

onMounted(() => {
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) {
    accepted.value = false;
  }
});

function acceptCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  accepted.value = true;
}

function رفضCookies() {
  localStorage.setItem('cookie_consent', 'rejected');
  accepted.value = true;
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #222;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
}

.cookie-banner p {
  margin: 0;
  font-size: 14px;
}

.cookie-banner a {
  color: #4da6ff;
  text-decoration: underline;
}

.actions button {
  margin-left: 10px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
}

.actions button:first-child {
  background: #4caf50;
  color: white;
}

.actions button:last-child {
  background: #f44336;
  color: white;
}
</style>