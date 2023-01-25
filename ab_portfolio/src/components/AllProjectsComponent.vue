<template>    
    <div class="container">
        <h1><span class="point">let</span>Mes projets réalisés<span class="point">=</span></h1>
        <h3><span class="point">if(</span>Pendant ma formation Openclassroms<span class="point">){</span></h3>
        <div class="all-components">
            <BookiComponent class="component"/>
            <OhMyFoodComponent class="component1"/>
            <KanapComponent class="component"/>
            <HotTakesComponent class="component1"/>
            <GroupomaniaComponent class="component"/>
        </div>
        <span class="point">}</span>
        <h3><span class="point">else(</span>À titre personnel<span class="point">){</span></h3>
        <div class="all-components">
            <SkfamilyComponent/>
        </div>
        <span class="point">}</span>
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
        margin:70px;

    }
    span{
        color: #700817;
        font-family: 'La belle Aurore', sans-serif;
        font-size:1rem;
    }
    h3{
        margin-top:50px;
        text-align: center;
    }
    .all-components{
        display: flex;
        flex-wrap: wrap;

    }

    @media only screen and (max-width: 1539px){
        .container{
            margin:60px;
        }
    }
    @media only screen and (max-width: 1319px){
        .container{
            margin:50px;
        }
    }
    @media only screen and (max-width: 1099px){
        .container{
            margin:40px;
        }
    }
    @media only screen and (max-width: 879px){
        .container{
            margin:30px;
        }
    }
    @media only screen and (max-width: 763px){
        .all-components{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>
