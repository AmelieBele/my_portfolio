<template>
    <QuoteComponent/>
    <WhoIAmComponent/>
    <HardsSkillsComponent/>
  </template>
  
  <script>
  
  import QuoteComponent from "../components/QuoteComponent.vue"
  import WhoIAmComponent from "../components/WhoIAmComponent.vue"
  import HardsSkillsComponent from "../components/HardsSkillsComponent"

  export default {
    name: 'HomePage',
    components: {
      QuoteComponent,
      WhoIAmComponent,
      HardsSkillsComponent,
    },
}
  </script>
  
  <style lang="scss" scoped>

  
  </style>
  