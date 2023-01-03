<template>    
    <div class="container">
        <div>
            <p class="scroll">scroll down</p>
            <p><i class="fa-solid fa-arrow-down"></i></p>
        </div>
        <div>
            <p class="scroll">scroll down</p>
            <p><i class="fa-solid fa-arrow-down"></i></p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ScrollDownComponent',

}

</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content:space-between;
        position: absolute;
        .scroll{
            writing-mode: vertical-rl;
            display: flex;
            flex-direction: column;
            
        }
    }
</style>
