<script setup>
import apiService from '@/components/store/fetchData';
</script>

<template>
    <div class="menu-rodape">
        {{ teste }}
        <ul class="list-menu-rodape">
            <li v-for="item in menuNv">
                <span>{{item.label}}</span>
                <ul>
                    <li>
                        <RouterLink class="link-institucionais" :to="`/paginas/${item.path}`">
                            {{ item.label }}
                        </RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuNv: []
        }
    },
    methods: {
        async fetchData() {
            const menus = await apiService.getDadosOfMenus()
            const menuRodape = menus.find(item => item.paginas).paginas
            this.menuNv = menuRodape
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>

<style scoped>
.menu-rodape {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
}

a {
    padding: 10px 0;
}

li {
    width: auto;
}

.list-menu-rodape {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}
</style>