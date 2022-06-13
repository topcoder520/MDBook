<template>
    <base-layout>
        <template #listSide>
            <base-sider />
        </template>
        <template #layout>
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </template>
    </base-layout>
</template>
<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import BaseSider from '@/components/BaseSider/index.vue'
export default {
    name: 'HomeView',
    components: {
        BaseLayout,
        BaseSider,
    },
    
}
</script>