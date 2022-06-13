<template>
    <div>
        settings
    </div>
</template>
<script>
export default {
    name:'SettingsView',
    created(){
        console.log('settings创建');
    },
    unmounted(){
        console.log('settings销毁');
    }
}
</script>