<template>
  <div>
    <repoNav />
    <mainContent />
    <foot />
  </div>
</template>

<script>
import repoNav from '~/components/repoNav.vue'
import mainContent from '~/components/mainContent.vue'
import foot from '~/components/foot.vue'
export default {
  components: {
    mainContent,
    repoNav,
    foot
  }
}
</script>

<style>

</style>
