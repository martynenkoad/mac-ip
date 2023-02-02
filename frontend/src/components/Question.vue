<template>
    <div>
        <h3>{{ question.question }}</h3>
        <p>{{ question.answer }}</p>
        <a
          :href="question.links"
          target="_blank"
          v-if="question.links"
        >
          {{ question.links }}
        </a>
    </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import Question from '../types/questionType'

  export default defineComponent({
    name: "Question-Component",
    props: {
        question: Object as PropType<Question>
    }, 
    setup (props) {
        props.question
    }
  })
</script>

<style>

</style>