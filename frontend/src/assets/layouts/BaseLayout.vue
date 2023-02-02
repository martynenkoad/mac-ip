<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "BaseLayout"
})
</script>

<template>
  <div class="base-layout">
      <header>
        <slot name="header"></slot>
      </header>
    
      <main>
        <slot name="main"></slot>
      </main>

      <footer>
        <slot name="footer"></slot>
      </footer>
  </div>
</template>

<style>
  main, header, footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
</style>