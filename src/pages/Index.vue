<template>
  <Layout>
    <div class="h-screen"></div>

    <ProgressWheel>
      <div v-for="i in [1,2,3,4,5,6,7,8,9,10]">
        <div class="text-red-500">Test{{i}}</div>
        <div class="h-48">Test</div>
      </div>
    </ProgressWheel>
  </Layout>
</template>

<script>
import ProgressWheel from "../components/ProgressWheel";

export default {
  components: {ProgressWheel},
}
</script>
