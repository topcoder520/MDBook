<template>
    <v-md-editor v-model="text" placeholder="输入正文" autofocus default-fullscreen @save="SaveContent">
    </v-md-editor>
    <!--保存提示-->
    <el-drawer v-model="drawer" direction="rtl" :with-header="false" size="50%">
        <template #default>
            <el-form :model="form" label-width="120px">
                <el-form-item label="标题">
                    <el-input v-model="formData.title" />
                </el-form-item>
                <el-form-item label="分类">
                    <el-cascader v-model="cascader.value" :options="cascader.options" :props="cascader.props"
                        @change="handleChange" />
                </el-form-item>
                <el-form-item label="标签">
                    <el-select-v2 v-model="selectTag.value" filterable :options="selectTag.options"
                        placeholder="Please select" style="width: 240px" multiple />
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="des" :rows="2" type="textarea" placeholder="Please input" />
                </el-form-item>
            </el-form>
        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button @click="cancelClick">取消</el-button>
                <el-button type="primary" @click="confirmClick">确认保存</el-button>
            </div>
        </template>
    </el-drawer>
</template>
<script>

import { ElMessage } from 'element-plus'

export default {
    name: 'ArticleEditView',
    data() {
        const options = Array.from({ length: 10 }).map((_, idx) => {
            const label = idx + 1
            return {
                value: `Group ${label}`,
                label: `Group ${label}`,
                options: Array.from({ length: 10 }).map((_, idx) => ({
                    value: `Option ${idx + 1 + 10 * label}`,
                    label: `${idx % 10}${idx + 1 + 10 * label}`,
                })),
            }
        });
        return {
            drawer: false, //是否显示编辑信息
            text: '', //文章内容
            formData: {
                title: '',
                des: '',
                category: '',
                tag: '',
                banner: ''
            },
            cascader: {
                value: [],
                props: { expandTrigger: 'hover' },
                options: [
                    {
                        value: 'Id1',
                        label: '分类1',
                        children: [
                            {
                                value: 'Id11',
                                label: '分类11',
                            },
                            {
                                value: 'Id12',
                                label: '分类12',
                            },
                        ]
                    },
                    {
                        value: 'Id2',
                        label: '分类2',
                        children: [
                            {
                                value: 'Id21',
                                label: '分类21',
                            },
                            {
                                value: 'Id22',
                                label: '分类22',
                            },
                        ]
                    },
                ]
            },
            selectTag: {
                value: [],
                options: options
            }
        };
    },
    mounted() {
    },
    created() {
        console.log(this.$route.query.articleId);
    },
    methods: {
        SaveContent(text, html) {
            console.log(text);
            console.log(html);
            this.drawer = true;
        },
        cancelClick() {
            this.drawer = false
        },
        confirmClick() {
            //校验数据
            //提交数据
            //提示结果
            ElMessage({
                message: 'Congrats, this is a success message.',
                type: 'success',
            })
        }
    },
}
</script>