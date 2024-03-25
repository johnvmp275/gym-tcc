<template>
  <div :class="{ dropdown: true, open: dropdownIsOpen }" :style="{ height: dropdownHeight + 'px' }">
    <div class="dropdown-top-select" @click="dropdownWasOpen">
      <h4>
        {{ titlteDropdown }}
      </h4>
      <slot name="dropdown-top" />
      <button>
        <span class="material-symbols-outlined"> expand_more </span>
      </button>
    </div>
    <div class="dropdown-slot" ref="dropdownConteudo">
      <slot name="dropdown_description" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownIsOpen: false,
      dropdownHeight: 56
    }
  },
  props: {
    titlteDropdown: String
  },
  methods: {
    dropdownWasOpen() {
      this.dropdownIsOpen = !this.dropdownIsOpen

      if (this.dropdownIsOpen) {
        this.updateDropdownHeight();
      } else {
        this.dropdownHeight = 56
      }
    },
    updateDropdownHeight() {
      this.$nextTick(() => {
        const referenciaDropdown = this.$refs.dropdownConteudo;
        const conteudoHeight = referenciaDropdown.getBoundingClientRect().height;

        this.dropdownHeight = 70 + conteudoHeight;

      });
    }
  }
}
</script>

<style scoped>
button {
  padding: 0;
  cursor: pointer;
}

.dropdown {
  width: 100%;
  border: 2px solid var(--background-gray-400);
  transition: height .5s;
  overflow: hidden;
  margin-bottom: 20px;
}

.dropdown.open {
  height: auto;
}

/* .dropdown.open span{
  transition: .5s;
} */

.dropdown.open span {
  transform: rotate(180deg);
}

.dropdown-top-select {
  padding: 16px;
}

.dropdown-slot {
  padding: 0 16px 16px;
}

.dropdown-top-select {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
</style>
