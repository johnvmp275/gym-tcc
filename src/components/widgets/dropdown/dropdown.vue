<template>
    <section :class="{'dropdown': true, 'open':dropdownIsOpen}">
        <div class="dropdown-top-select" @click="dropdownWasOpen">
            {{ titlteDropdown }}
            <slot name="dropdown-top" />
            <button>
                <span class="material-symbols-outlined">
                    expand_more
                </span>
            </button>
        </div>
        <div class="dropdown-slot">

            qwsqsqswqwqswqsqs
            <slot name="dropdown-description" />
        </div>
    </section>
</template>

<script>
export default {
data(){
    return{
        dropdownIsOpen: true,
        titlteDropdown: 'teste'
    }
},
methods:{
    dropdownWasOpen(){
        this.dropdownIsOpen = !this.dropdownIsOpen
    }
}
}
</script>

<style scoped>

button{
    padding: 0;
    cursor: pointer;
}

.dropdown{
    border: 2px solid var(--background-gray-400);
    height: 56px;
    overflow: hidden;
    transition: .5s;
}

.dropdown.open{
    height: min-content;
}

.dropdown.open span{
  transition: .5s;
}

.dropdown.open span{
   transform: rotate(180deg);
}

.dropdown-top-select, .dropdown-slot{
    padding: 16px;
}

.dropdown-top-select{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}
</style>