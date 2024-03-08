<template>
  <div :class="{ dropdown: true, open: dropdownIsOpen }">
    <div class="dropdown-top-select" @click="dropdownWasOpen">
      <h4>
        {{ titlteDropdown }}
      </h4>
      <slot name="dropdown-top" />
      <button>
        <span class="material-symbols-outlined"> expand_more </span>
      </button>
    </div>
    <div class="dropdown-slot">
      <slot name="dropdown_description" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownIsOpen: false
    }
  },
  props: {
    titlteDropdown: String
  },
  methods: {
    dropdownWasOpen() {
      this.dropdownIsOpen = !this.dropdownIsOpen
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
  height: 56px;
  overflow: hidden;
  transition: 0.5s;
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
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
</style>
