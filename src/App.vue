<template>
  <NavView />
  <router-view />
</template>

<script>
  import NavView from '@/views/NavView.vue'

  export default {
    components: { NavView },
  }
</script>
