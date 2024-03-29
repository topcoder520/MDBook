import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//插件
import VMdEditor from './plugins/markdown'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//监听全局点击事件
app.config.globalProperties.$globalClick= function (callback) {
    document.getElementById('app').onclick = function () {
        callback();
    };
};

app.use(VMdEditor);

app.mount('#app');

