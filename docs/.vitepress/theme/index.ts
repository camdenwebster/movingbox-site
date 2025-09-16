import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Card from './components/Card.vue'
import CardGroup from './components/CardGroup.vue'
import Steps from './components/Steps.vue'
import Step from './components/Step.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Card', Card)
    app.component('CardGroup', CardGroup)
    app.component('Steps', Steps)
    app.component('Step', Step)
  }
} satisfies Theme