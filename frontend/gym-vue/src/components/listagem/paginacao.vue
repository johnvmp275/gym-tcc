<template>
    <section class="pagination-section">
        <div class="pagination">
            <button @click="paginaAnterior" :disabled="paginaAtual === 1">
                <span class="material-symbols-outlined"> arrow_back_ios </span>
            </button>
            <span>Página {{ paginaAtual }} de {{ totalPages }}</span>
            <button @click="proximaPagina" :disabled="paginaAtual === totalPages">
                <span class="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        paginaAtual: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        },
    },
    methods: {
        irParaPagina(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.paginaAtual = pageNumber
            }
        },
        paginaAnterior() {
            if (this.paginaAtual > 1) {
                this.$emit('paginaMudada', this.paginaAtual - 1)
            }
        },
        proximaPagina() {
            if (this.paginaAtual < this.totalPages) {
                this.$emit('paginaMudada', this.paginaAtual + 1)
            }
        }
    }
}
</script>

<style scoped>
.pagination-section {
    margin-top: 20px;
    display: flex;
    justify-content: end;
}

.pagination {
    display: flex;
    align-items: center;
    gap: 8px;
}

.pagination button {
    cursor: pointer;
    width: 36px;
    background: var(--background-wine);
    border: none;
    display: flex;
    padding: 6px;
    text-align: center;
    color: var(--background-white);
}

@media (max-width: 1100px) {
    .pagination{
        margin: 0 auto;
    }
}
</style>