<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="250px" class="leftFund">
                <slot name="leftFund"></slot>
            </el-aside>
            <el-main>
                <slot name="main"></slot>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .common-layout{
        height: 100%;
        width: 100%;

        .el-container{
            height: 100%;

            .leftFund{
                background: #FAFAFA;
            }

            .el-main{
                background: #FFFFFF;
                padding: 0px;
                overflow: hidden;
            }
        }
    }
</style>