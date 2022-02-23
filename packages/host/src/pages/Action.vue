<template>
  <div>
    <button
      v-on:click="addOne"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add One
    </button>
  </div>
</template>

<script>
export default {
   computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addOne() {
      this.$store.commit("addOne");
    },
  },
}
</script>