<template>  
    <div class="border"></div>
    <div>
        <p class="text">
            Amélie Benoist © 2023
        </p>
        <p class="ab"><span>.</span>AB</p>
    </div>
</template>

<script>

export default {
  name: 'FooterComponent',

}

</script>

<style lang="scss" scoped>
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
            margin-left: 40px;
            font-size:12px;
        }
    .ab{
        margin-right:40px;
        font-size:30px;

        span{
            color: #700817;
        }
    }
    
</style>
