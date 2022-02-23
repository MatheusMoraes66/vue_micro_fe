<template>
  <div class="text-3x1 bg-blue-900 text-white p-5 flex justify-between">
    <div class="font-bold mr-3"> Header</div>
    <div class="mr-5">|</div>
    <div class="flex gap-3 flex-grow">
      <router-link to="/"> Home</router-link>
      <router-link to="/about"> About</router-link>
      <router-link to="/action"> Action</router-link>
    </div>
    <div>{{count}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store?.state?.count ?? 0;
    }
  }
}
</script>

