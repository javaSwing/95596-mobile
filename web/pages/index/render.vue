
<template>
  <div class="container">
    <Button type="primary" block>
      button
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { mapState } from 'vuex'
import { Button } from 'vant'
export default defineComponent({
  components: {
    Button
  },
  created () {
  }
})
</script>

<style lang="less">
.container {
  font-size: 16px;
}
</style>
