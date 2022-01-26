<template>
  <div class="chat">
    <dm-editor v-model:value="htmlString"></dm-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DmEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    DmEditor
  },
  setup() {
    const htmlString = ref<string>('xxhh')
    return {
      htmlString
    }
  }
})
</script>

<style scoped lang="less">
.chat {
  margin-top: 15px;
}
</style>
