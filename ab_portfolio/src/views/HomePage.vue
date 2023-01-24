<template>
    <QuoteComponent/>
    <WhoIAmComponent/>
    <HardSkillsComponent/>
    <SoftSkillsComponent/>
    <AllProjectsComponent/>
    <ContactComponent/>
    <FooterComponent/>
  </template>
  
  <script>
  
  import QuoteComponent from "../components/QuoteComponent.vue"
  import WhoIAmComponent from "../components/WhoIAmComponent.vue"
  import HardSkillsComponent from "../components/HardSkillsComponent"
  import FooterComponent from "../components/FooterComponent.vue"
  import SoftSkillsComponent from "../components/SoftSkillsComponent.vue"
  import AllProjectsComponent from "../components/AllProjectsComponent.vue"
  import ContactComponent from "@/components/ContactComponent.vue"

  export default {
    name: 'HomePage',
    components: {
      QuoteComponent,
      WhoIAmComponent,
      FooterComponent,
      SoftSkillsComponent,
      HardSkillsComponent,
      AllProjectsComponent,
      ContactComponent,
    },
}
  </script>
  
  <style lang="scss" scoped>

  
  </style>
  