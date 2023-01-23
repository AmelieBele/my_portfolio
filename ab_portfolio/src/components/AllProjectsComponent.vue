<template>    
    <div class="container">
        <h1><span class="point">.</span>Mes projets réalisés</h1>
        <h3><span class="point">.</span>Pendant ma formation Openclassroms</h3>
        <div class="all-components">
            <BookiComponent/>
            <OhMyFoodComponent/>
            <KanapComponent/>
            <HotTakesComponent/>
            <GroupomaniaComponent/>
        </div>
        <h3><span class="point">.</span>À titre personnel</h3>
        <div class="sk-component">
            <SkfamilyComponent/>
        </div>
    </div>
</template>

<script>

import BookiComponent from "../components/BookiComponent.vue"
import GroupomaniaComponent from "./GroupomaniaComponent.vue";
import HotTakesComponent from "./HotTakesComponent.vue";
import KanapComponent from "./KanapComponent.vue";
import OhMyFoodComponent from "./OhMyFoodComponent.vue";
import SkfamilyComponent from "./SkfamilyComponent.vue";
export default {
  name: 'AllProjectsComponent',
  components: {
    BookiComponent,
    OhMyFoodComponent,
    KanapComponent,
    HotTakesComponent,
    GroupomaniaComponent,
    SkfamilyComponent
},

}

</script>

<style lang="scss" scoped>
    .container {
        margin: 70px;
    }
    span{  
        color: #700817;
    }
    h3{
        margin-top:50px;
        text-align: center;
    }
    .all-components{
        display: flex;
        flex-wrap: wrap;
    }
  

</style>
