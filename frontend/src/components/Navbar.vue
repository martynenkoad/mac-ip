<template>
    <nav class="navbar">
        <span 
          class="material-symbols-outlined"
          @click="openNavbar = !openNavbar"
        >
            menu
        </span>

        <div v-if="openNavbar" @click="openNavbar = false">
            <router-link to="/">Home</router-link> 
            <router-link to="/about">About</router-link> 
            <router-link to="/ip">IP</router-link>
        </div>
    </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: "Navigation-Bar",

    data() {
        return {
            openNavbar: false
        }
    }
  })
</script>

