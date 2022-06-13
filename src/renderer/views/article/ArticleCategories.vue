<template>
    <el-row class="Search">
        <el-col :span="24">
            <el-input v-model="KeyWorld" clearable placeholder="搜索文章内容" class="w-50 m-2" size="small"
                prefix-icon="Search">
            </el-input>
        </el-col>
    </el-row>
    <el-row class="Edit">
        <el-col :span="24">
            <el-button icon="EditPen" @click="NewArticle(0)">新建文章</el-button>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-menu active-text-color="#409eff" :default-openeds="['1']" unique-opened background-color="#FAFAFA" text-color="#666">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <Expand />
                        </el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-scrollbar height="250px">
                        <el-menu-item index="1-1" @click="clickTab('item one')">item one</el-menu-item>
                        <el-menu-item index="1-2" @click="clickTab('item one222')">item one222</el-menu-item>
                        <el-sub-menu index="1-3">
                            <template #title>item three</template>
                            <el-menu-item index="1-3-1">item one</el-menu-item>
                            <el-menu-item index="1-3-2">item one</el-menu-item>
                            <el-menu-item index="1-3-3">item one</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                            <el-menu-item index="1-4-2">item one</el-menu-item>
                            <el-menu-item index="1-4-3">item one</el-menu-item>
                            <el-menu-item index="1-4-4">item one</el-menu-item>
                            <el-menu-item index="1-4-5">item one</el-menu-item>
                            <el-menu-item index="1-4-6">item one</el-menu-item>
                            <el-menu-item index="1-4-7">item one</el-menu-item>
                            <el-menu-item index="1-4-8">item one</el-menu-item>
                            <el-menu-item index="1-4-9">item one</el-menu-item>
                        </el-sub-menu>
                    </el-scrollbar>
                </el-sub-menu>
                 <el-divider border-style="double" />
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><CollectionTag /></el-icon>
                        <span>标签</span>
                    </template>
                    <el-scrollbar height="250px">
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item one</el-menu-item>
                        <el-menu-item index="2-3-1">item one</el-menu-item>
                        <el-menu-item index="2-3-2">item one</el-menu-item>
                        <el-menu-item index="2-3-3">item one</el-menu-item>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item one</el-menu-item>
                        <el-menu-item index="2-4-3">item one</el-menu-item>
                        <el-menu-item index="2-4-4">item one</el-menu-item>
                        <el-menu-item index="2-4-5">item one</el-menu-item>
                        <el-menu-item index="2-4-6">item one</el-menu-item>
                        <el-menu-item index="2-4-7">item one</el-menu-item>
                        <el-menu-item index="2-4-8">item one</el-menu-item>
                        <el-menu-item index="2-4-9">item one</el-menu-item>
                    </el-scrollbar>
                </el-sub-menu>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>

export default {
    name: 'ArticleCategoriesView',
    components: {
    },
    data() {
        return {
            KeyWorld: '',
        }
    },
    computed: {

    },
    methods: {
        //选择分类
        clickTab(title){
            //触发父组件传过来的事件
            this.$emit('clickTab',title)
            //TODO 

        },
        //新建文章
        NewArticle(articleId){
            console.log(articleId);
            const router = this.$router;
            let routerUrl = router.resolve({path:'/article-edit',query:{articleId:666}});
            console.log(routerUrl.href)
            
            window.open(routerUrl.href,'_bank');
        }
    },
}
</script>
<style lang="less" scoped>
.Search {
    text-align: center;
    padding: 22px 12px;
}

.Edit {
    text-align: center;

    .el-button {
        width: 160px;
        height: 36px;
    }
}
</style>