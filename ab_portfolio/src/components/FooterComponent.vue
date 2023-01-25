<template>  
    <div class="border"></div>
    <div class="container">
        <p class="text">
            Amélie Benoist © 2023<span> }</span>
        </p>
    </div>
</template>

<script>

export default {
  name: 'FooterComponent',

}

</script>

<style lang="scss" scoped>
    .container{
        display:flex;
        justify-content:center;
    }
    .border{
        border-top: ridge  #70081858;
        margin-left: 15px;
        margin-right: 15px;
        
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:30px 0px;
        
    }
    .text{
        text-align: center;
        font-size:12px;
    }

    span{
        color: #700817;
        font-family: 'La belle Aurore', sans-serif;
        font-size:1rem;
    }
    
</style>
