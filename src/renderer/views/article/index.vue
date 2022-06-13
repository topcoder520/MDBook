<template>
  <article-layout>
    <template #leftFund>
      <ArticleCategoriesView @clickTab="accept" />
    </template>
    <template #main>
      <ArticleListView :AategoryTitle="CategoryTitle" />
    </template>
  </article-layout>
</template>
<script>

import ArticleLayout from '@/layouts/ArticleLayout.vue'
import ArticleCategoriesView from '@/views/article/ArticleCategories.vue'
import ArticleListView from './ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleLayout,
    ArticleCategoriesView,
    ArticleListView
  },
  data() {
    return {
      CategoryTitle: '8989'
    }
  },
  methods: {
    accept(title) {
      this.CategoryTitle = title;
    }
  },
  created() {
    console.log('article创建');
  },
  unmounted() {
    console.log('article销毁');
  }
}
</script>