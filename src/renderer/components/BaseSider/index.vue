<template>
    <el-row @click="showSider('ArticleView',0)" >
        <el-col :span="24">
            <el-tooltip content="文章管理" placement="right">
                <el-icon :size="20" :color="siders[0].color">
                    <DocumentCopy/>
                </el-icon>
            </el-tooltip>
        </el-col> 
    </el-row> 
    <el-row  @click="showSider('SettingsView',1)">
        <el-col :span="24">
            <el-tooltip content="设置" placement="right">
                <el-icon :size="20" :color="siders[1].color">
                    <Setting/>
                </el-icon>
            </el-tooltip>
        </el-col> 
    </el-row>  
</template>
<script>

export default {
    name: 'base-sider',
    components: {
    },
    data() {
        return {
            siders: [
                {
                    color: '#409eff',
                    type: 'ArticleView'
                }, {
                    color: '#fff',
                    type: 'SettingsView'
                }
            ],
            colors:{
                normal:'#fff',
                foucused:'#409eff'
            }
        }
    },
    props: {

    },
    methods: {
        showSider(path,index) {
            var siders = this.siders
            for (let i = 0; i < siders.length; i++) {
                const sider = siders[i];
                if (index == i) {
                    sider.color = this.colors.foucused
                } else {
                    sider.color = this.colors.normal
                }
            }
            this.$router.push({name:path})
        }
    }
}
</script>
<style lang="less" scoped>
.el-row {
    text-align: center;
    margin: 18px 2px;
    cursor: pointer;
}
</style>