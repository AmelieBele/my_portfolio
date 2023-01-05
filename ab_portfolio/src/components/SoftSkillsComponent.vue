<template>    
    <div class="container">
        <h1><span class="point">.</span>Soft Skills</h1>
        <div class="soft_skills">
            <p>Esprit d'équipe</p>
            <p>Curieuse</p> 
            <p>Envie d'apprendre</p>   
            <p>À l'écoute</p>
            <p>Flexible</p>
            <p>Intelligence émotionelle</p>
        </div>

    </div>
</template>

<script>

export default {
  name: 'SoftSkillsComponent',

}

</script>

<style lang="scss" scoped>
    .container{

        margin: 70px;

        span{
            color: #700817;
  
        }
        .soft_skills{
            display: flex;
            justify-content:space-around;
            margin-top: 30px;
        }

    }
</style>
