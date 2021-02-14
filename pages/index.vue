<template>
  <div>
    <repoNav />
    <mainContent />
  </div>
</template>

<script>
import repoNav from '~/components/repoNav.vue'
import mainContent from '~/components/mainContent.vue'
export default {
  components: {
    mainContent,
    repoNav
  }
}
</script>

<style>

</style>
