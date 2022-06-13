<template>
  <div class="container">
    <el-row v-for="i in 9" :key="i">
      <el-col :span="24" @contextmenu.prevent="openRightMenu($event, i)">
        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          style="width: 100px;height: 100px;" fit="contain"></el-image>
        <div class="des-box">
          <p class="title">git建立本地仓库并上传代码到GitHub2</p>
          <p class="des">Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。 Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。Git 是
            Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。 官网地址为：https://git-scm.com/</p>
          <p class="des">更新:2022-05-23</p>
        </div>
      </el-col>
      <el-divider border-style="double" />
    </el-row>
    <RightMenu :listMenu="listMenuData" @clickMenuItem="SelectMenuItem"/> 
  </div>
</template>
<script>

import RightMenu from '@/components/common/RightMenu.vue'

export default {
  name: 'ArticleListCardView',
  components: {
    RightMenu
  },
  data() {
    return {
      listMenuData:[
        "编辑标签",
        "编辑文章",
        "删除文章",
      ]
    }
  },
  mounted() {
    this.$globalClick(() => {
        var menu = document.querySelector('#RightMenu')
        if(menu){
          menu.style.display = "none";
        }
    });
  },
  methods: {
    //右键
    openRightMenu(MouseEvent) {
      var menu = document.querySelector('#RightMenu')
      menu.style.left = MouseEvent.clientX - 290 + 'px';
      if(document.documentElement.clientHeight-56<=MouseEvent.screenY){
          menu.style.top = MouseEvent.clientY - (this.listMenuData.length*40+56) + 'px'
      }else{
        menu.style.top = MouseEvent.clientY - 56 + 'px'
      }
      menu.style.display = "block";
    },
    //选中右键菜单
    SelectMenuItem(item){

        console.log(item);
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  .el-row {
    position: relative;
    padding: 3px 35px;

    .el-col {
      cursor: pointer;
    }

    .el-image {
      display: inline-block;
      width: 20%;
    }

    .el-divider--horizontal {
      margin: 12px 0 !important;
    }

    .des-box {
      display: inline-block;
      position: absolute;
      top: 13px;
      margin-left: 10px;
      width: 78%;

      .title {
        width: 100%;
        font-size: 18px;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .des {
        width: 100%;
        font-size: 14px;
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 5px;
      }
    }
  }

  .el-row:last-child {
    margin-bottom: 60px;
  }
}
</style>