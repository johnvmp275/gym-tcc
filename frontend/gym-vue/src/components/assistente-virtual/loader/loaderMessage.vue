<template>
    <div v-if="messageLoader" class="resposta-massage assistente-resposta loading ">
        loading...
    </div>
</template>
 
<script>
export default{
    props:{
        messageLoader: Boolean
    }
}
</script>

<style scoped>

</style>