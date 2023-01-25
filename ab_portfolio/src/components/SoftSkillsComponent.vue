<template>    
    <div class="container">
        <h1><span class="point">for(</span>Soft Skills<span class="point">){</span></h1>
        <div class="soft_skills">
            <p> Esprit d'équipe </p>
            <p> Curieuse </p> 
            <p> Envie d'apprendre </p>   
            <p> À l'écoute </p>
            <p> Flexible </p>
            <p> Intelligence émotionelle </p>
        </div>
        <span class="point">}</span>
    </div>
</template>

<script>

export default {
  name: 'SoftSkillsComponent',

}

</script>

<style lang="scss" scoped>
    .container{
        margin: 150px 70px;


        span{
            color: #700817;
            font-family: 'La belle Aurore', sans-serif;
            font-size:1rem;
        }
        .soft_skills{
            display: flex;
            justify-content:space-around;
            flex-wrap: wrap;
            margin: 30px;
        }

    }
</style>
