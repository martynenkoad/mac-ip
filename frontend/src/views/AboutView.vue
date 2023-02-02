
<template>
  <div class="about">
    <BaseLayout>
      <template #header>
        <div class="header">
          <h1
          title="Click to toggle the header!"
          v-if="!showASCIIArt || windowWidth <= 800"
          @click="showASCIIArt = true"
        >
          Welcome to MAC Donalds!
        </h1>
        <div v-else>
        <pre class="pre-tag" @click="showASCIIArt = false">
               ***     ***     ***  ************** ****                            *******                 ********             **     ***     **       **************
               ***     ***     ***  ************** ****                         ***********         ************       ****   *****   ****   **************
               ***     ***     ***  ****            ***  ****                       ***            ****   ***               ***    ***       ***       ***   ****           ***
 ***     ***     ***  ****                   ****                       ***                      ***                ***   ***       ***       ***   ****  
         ***     ***     ***  *********          ****                       ***                      ***                ***   ***       ***       ***   ********* 
         ***     ***     ***  *********          ****                       ***                      ***                ***   ***       ***       ***   ********* 
***     ***     ***  ****                   ****               ***   ***                      ***               ***   ***       ***       ***   ****
                 ***    ***    ***   ****            ***  ****               ***   ***            ****    ***             ***    ***       ***       ***   ****           ***
                   *** ***** ***    **************  ****************   ************        ************     ***       ***       ***   **************
                     **   ***   **      **************  ****************       ********              ********         ***       ***       ***   **************
        </pre>
        <pre class="pre-tag" @click="showASCIIArt = false">
   *****  *****        **    **   *****   *****    ****       *****    *       *   *****    *          ****       **
       *      *     *        *   *   *   *     *   *           *      *    *      *    *  *   *   *      *   *          *      *     **
*      *     *        *   *   *   *****   *           *       *   *      *    *    * *   *****    *          *       *
        *      *****        *   *   *   *     *   *****    ****       *****    *       *   *      *   *****    ****       **
        </pre>
      </div>
        <p>Here you can order the most delicious information about your device you are using :)</p>
        <p>This app was created for users who are wondering about the configuration of their devices or for those students who have to perform their CN-labs.</p>      
        </div>
      </template>
  
      <template #main>
        
  
        <div class="main-section">
          <h2>Do you have any questions? We have prepared some answers to the most widely asked ones.</h2>
          <div class="search-input">
            <input 
              type="text"
              v-model="searchKey"
              placeholder="Search question...."
            />
            <span class="material-symbols-outlined">
              search
            </span>
          </div>

          <div class="questions-container" v-if="searchQuestion(searchKey).length">
            <div
              class="question"
              v-for="question in searchQuestion(searchKey)"
              :key="question"
              :style="{ padding: '20px' }"
            >
              <Question :question="question" />
            </div>
          </div>
        </div>
      </template>
    </BaseLayout>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from "vue"
  import { mapState, mapGetters } from "vuex"
  import BaseLayout from "../assets/layouts/BaseLayout.vue"
  import Question from "../components/Question.vue"

  export default defineComponent({
    name: "AboutView",
    components: {
      BaseLayout,
      Question
    },

    data() {
      return {
        searchKey: "",
        showASCIIArt: false,
        windowWidth: document.documentElement.clientWidth
      }
    },

    mounted() {
      window.addEventListener("resize", this.getWindowWidth)
    },

    unmounted() {
      window.removeEventListener("resize", this.getWindowWidth)
    },

    computed: {
      ...mapState(["questions", "foundQuestions"]) ,
      ...mapGetters(["searchQuestion"])
    },

    methods: {
      getWindowWidth: function() {
        this.windowWidth = document.documentElement.clientWidth
      }
    }

  })
</script>

