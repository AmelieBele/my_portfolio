<template>    
    <div class="container">
        <h1><span class="point">for(</span>Hard Skills<span class="point">){</span></h1>
        <p class="logos">
            <i class="fa-brands fa-vuejs"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-sass"></i>
        </p>
        <span class="point">}</span>
    </div>
</template>

<script>

export default {
  name: 'HardSkillsComponent',

}

</script>

<style lang="scss" scoped>
    .container{
        margin: 150px 70px;
    }
    span{
        color: #700817;
        font-family: 'La belle Aurore', sans-serif;
        font-size:1rem;
    }

    .logos{
        font-size:50px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 30px;

    }
    
</style>
