<template>
    <div v-for="banner in bannerSecundario" :key="banner.id">
        <img :src="banner.image" :alt="banner.titulo">
    </div>
</template>

<script>
export default {
    props: {
        bannerSecundario: Array
    }
}
</script>