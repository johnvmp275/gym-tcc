<template>
    {{ $route.params.path }}
</template>

<script>
export default {
    methods: {
        async teste(){
            try {
                const req = await fetch(`http://localhost:3000/produtos${this.$route.params.id}`)
                const data = await req.json()
                console.log(data);
            } catch (error) {
                console.error('Não foi possível buscar os dados', error)
                throw error
            }
        }
    },
    mounted() {
        this.teste()
        console.log("the id is :" + this.$route.params.path);
    }
}
</script>