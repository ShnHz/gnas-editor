<template>
  <a-layout style="height: 100vh;">
    <a-layout-header>
      <a-menu mode="horizontal" @menu-item-click="menuClick" :default-selected-keys="defaultSelectedKeys">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
          <div :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }">
            LOGO
          </div>
        </a-menu-item>
        <a-menu-item key="/richtext">RichText</a-menu-item>
        <a-menu-item key="/markdownit">MarkdownIt</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <RouterView />
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const defaultSelectedKeys = computed(() => {
  return [route.path]
})

function menuClick(value){
  router.push({
    path:value
  })
}
</script>
<style scoped>
.arco-layout-content{
  width: 1200px;
  margin: 20px auto;
}
</style>