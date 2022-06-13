<template>
    <el-row>
      <el-col :span="24">
        <span class="category-title">{{AategoryTitle}}</span>
      </el-col>
    </el-row>
    <el-divider border-style="double" />
    <el-scrollbar>
        <ArticleListCard></ArticleListCard>
    </el-scrollbar>
</template>
<script>
import ArticleListCard from './ArticleListCard.vue';
export default{
    name: "ArticleListView",
    components: { ArticleListCard },
    props:{
        AategoryTitle:String,
    }
}
</script>
<style lang="less" scoped>
    .el-divider--horizontal{
        margin: 0px !important;
    }
    .category-title{
        display: inline-block;
        margin:24px 24px 12px;
    }
</style>