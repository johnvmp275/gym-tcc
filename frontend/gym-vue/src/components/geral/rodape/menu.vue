<script setup>
import apiService from '@/components/store/fetchData';
</script>

<template>
    <div class="menu-rodape">
        <ul class="list-menu-rodape">
            <li v-for="item in menuNv" :key="item.id" class="menu">
                <span>{{item.label}}</span>
                <ul class="sub-list-menu">
                    <li v-for="sub in item.sub" :key="sub.id">
                        <RouterLink class="link-institucionais" :to="sub.path">
                            {{ sub.label }}
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
            const menuRodape = menus.find(item => item.rodape_menu).rodape_menu
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
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
}

span{
    font-weight: 800;
}

a {
    padding: 0;
    color: var(--background-gray-700);
}

a:hover{
    text-decoration: underline;
}

li {
    width: auto;
}

.sub-list-menu{
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
}

.list-menu-rodape {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}
</style>