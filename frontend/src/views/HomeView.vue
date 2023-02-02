<template>
  <BaseLayout>
    <template #header>
      <Header />
    </template>

        
    <template #main>
      <input 
        class="main-input"
        type="text"
        placeholder="00:00:00:00:00:00"
        maxLength="17"
        v-model.trim="searchKey"
        @keydown="handleKeyPress"
        @paste.prevent="handlePaste()"
        @input="handleInputChange($event, searchKey)"
      />
      <button
        class="basic-button"
        @click="asyncSearchMAC(searchKey)"
      >
        Find MAC Info
      </button>


      <div
        v-if="foundMacAddress || wasMacInfoUpdated"
      >
        <div :class="foundMacAddress ? 'fade-in-top' : ''">
          <FoundMAC />
        </div>
      </div>
    </template>

    <template #footer>
      <button
        v-if="wasMacInfoUpdated"
        class="basic-button"
        @click="setCloseFoundMac"
      >
        Hide Information
      </button>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { mapState, mapActions, mapMutations } from 'vuex'
  import Header from "../components/Header.vue"
  import FoundMAC from '../components/FoundMAC.vue'
  import BaseLayout from '../assets/layouts/BaseLayout.vue'
  import stringRoutines from '../lib/stringRoutines'

  export default defineComponent({
    name: 'HomeView',
    components: {
      BaseLayout,
      Header,
      FoundMAC
    },

    data: function() {
      return {
        searchKey: ""
      }
    },

    computed: {
      ...mapState(["foundMacAddress", "wasMacInfoUpdated"])
    },

    methods: {
      ...mapActions(["asyncSearchMAC"]),
      ...mapMutations(["setCloseFoundMac"]),
      
      handleKeyPress(e: KeyboardEvent) {
        if(e.key === "Backspace" || e.key === "Delete") {
          if(this.searchKey.endsWith(":", this.searchKey.length)) {
              this.searchKey = this.searchKey.slice(this.searchKey.length - 1, this.searchKey.length)
            }
        }
      },

      handlePaste: function() {
        return false
      },


      handleInputChange: function (e: Event, searchKey: string) {
        let currentValue = ((e.target as HTMLInputElement).value).toString()
        if (!stringRoutines.lettersAndNumbersOnly(currentValue)) {
          let newString = currentValue.slice(0, currentValue.length - 1)
          currentValue = newString
          this.searchKey = newString
        }

        if (currentValue.length === 2 && currentValue.lastIndexOf(":") === -1) {
          currentValue += ":"
          this.searchKey += ":"
           console.log("searchKey:", searchKey)
        } else if (currentValue.length - currentValue.lastIndexOf(":") === 3 && currentValue.length !== 17) {
          currentValue += ":"
          this.searchKey += ":"
        } 
      },

    }
    
  })
</script>
