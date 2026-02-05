<template> 
    <div id="content"> 
      <div ref="polygonEl" class="polygon">
        <img src="../assets/logo.webp" alt="image-logo">  
      </div>      
    </div>
</template> 


<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';


const polygonEl = ref(null)
let rafId = null

const MIN = -1.5
const MAX = 1.5
const SPEED = 0.028

let points = [
  { x: 0, y: 0 },
  { x: 100, y: 0 },
  { x: 100, y: 100 },
  { x: 0, y: 100 }
]

let targets = []

function rand(min, max) {
  return Math.random() * (max - min) + min
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val))
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function generateTargets() {
  return points.map((p, i) => ({
    x: clamp(
      p.x + rand(MIN, MAX),
      i === 0 || i === 3 ? 0 : 80,
      i === 1 || i === 2 ? 100 : 20
    ),
    y: clamp(
      p.y + rand(MIN, MAX),
      i < 2 ? 0 : 80,
      i < 2 ? 20 : 100
    )
  }))
}

function update() {
  if (!polygonEl.value) return

  let done = true

  points.forEach((p, i) => {
    p.x = lerp(p.x, targets[i].x, SPEED)
    p.y = lerp(p.y, targets[i].y, SPEED)

    if (
      Math.abs(p.x - targets[i].x) > 0.1 ||
      Math.abs(p.y - targets[i].y) > 0.1
    ) {
      done = false
    }
  })

  polygonEl.value.style.setProperty(
    '--clip',
    `polygon(
      ${points[0].x}% ${points[0].y}%,
      ${points[1].x}% ${points[1].y}%,
      ${points[2].x}% ${points[2].y}%,
      ${points[3].x}% ${points[3].y}%
    )`
  )

  if (done) targets = generateTargets()

  rafId = requestAnimationFrame(update)
}

onMounted(() => {
  targets = generateTargets()
  update()
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped> 


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



#content { 
  width: 100%;
  height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/concept-image.webp');
  background-repeat: no-repeat;
  background-size: cover;  
  z-index: 100;
}

.polygon {

  width: 320px;
  height: 320px;
  background-color: var(--color-1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0.9;
  

  --clip: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: var(--clip);

  will-change: clip-path;
}

@media (max-width: 768px) {
  .polygon {
    width: 60%;
    height: 300px;
  }
}

.polygon img {
  width: 150px;
  height: auto;
}


</style>

