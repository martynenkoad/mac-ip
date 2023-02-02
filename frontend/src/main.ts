import { createApp } from 'vue'
import "./assets/styles/styles.css"
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { POSITION, useToast } from "vue-toastification"
import "vue-toastification/dist/index.css"

const options = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 4000,
}
const toast = useToast()

const app = createApp(App)
  .use(Toast, options)

app.config.errorHandler = (error: any) => {
  toast.error(error.message || error.toString())
}

app.use(store)
  .use(router)
  .mount('#app')
