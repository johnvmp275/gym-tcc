<template>
    <h1>{{ product.titulo }}</h1>
    <img :src="product.image" alt="" srcset="">
    <p>{{ product.price}}</p>
    <p>curta: {{ descricao.curta}}</p>
    <br>
    <p>longa: {{ descricao.longa}}</p>
    <br>
</template>

<script>
export default {
    data() {
        return {
            product: [],
            descricao: {}
        }
    },
    methods: {
        async teste() {
            try {
                const req = await fetch(`http://localhost:3000/produtos/${this.$route.params.id}`)
                const data = await req.json()
                this.product = data
                this.descricao = data.descricoes


                console.log(this.descricao);
            } catch (error) {
                console.error('Não foi possível buscar os dados', error)
                throw error
            }
        }
    },
    mounted() {
        this.teste()
        console.log("the id is :" + this.$route.params.id);
    }
}
</script>