<template>
    <el-menu class="RightMenu" id="RightMenu" ref="RightMenu">
        <el-menu-item v-for="(item) in listMenu" :key="item" :index="item" @click="SelectItem(item)">{{item}}</el-menu-item>
    </el-menu>
</template> 
<script>

export default {
    name: 'RightMenu',
    props:{
        listMenu:{ 
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods: {
        SelectItem(item){
            //触发父组件传过来的事件
            this.$emit('clickMenuItem',item)
        }
    },
}
</script>
<style lang="less" scoped>
    .RightMenu{
        width: 120px;
        border: 1px solid #eee;
        position: absolute;
        top: 0;
        display:none;

        .el-menu-item{
            height: 40px;
        }
        .is-active{
            color: #303133 !important;
        }
    }
</style>