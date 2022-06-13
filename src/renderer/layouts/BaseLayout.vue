<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="50px">
                <slot name="listSide"></slot>
            </el-aside>
            <el-main>
                <slot name="layout"></slot>
            </el-main>
        </el-container>
    </div>
</template>
<style lang="less" scoped>
    .common-layout{
        height: 100%;
        width: 100%;

        .el-container{
            height: 100%;

            .el-aside{
                background: #303133;
            }

            .el-main{
                padding: 0px;
            }
        }
    }
</style>