<template>
    <div>
        <span class="material-symbols-outlined warning">
            error
        </span>
        <span>
            <h1>404, página não encontrada :(</h1>
            <RouterLink to="/">Clique aqui para ir para página inicial</RouterLink>
        </span>
    </div>
</template>

<style scoped>
div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}

h1 {
    font-size: 28px;
    color: var(--background-gray-700);
}

.warning {
    display: flex;
    align-items: center;
    color: var(--background-wine);
    font-size: 80px;
}

a{
    padding: 0;
    color: var(--background-gray-700);
    opacity: 0.7;
}

a:hover{
    text-decoration: underline;
}
</style>