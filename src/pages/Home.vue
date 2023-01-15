<template>
  <div id="page">
    <div class="container">
      <div id="content" class="site-content">
        <div id="primary" class="content-area column two-thirds">
          <main id="main" class="site-main" role="main">
            <div class="grid bloggrid">
              <div v-for="post in paginatedData" :key="post">
                <MyPost :post="post" />
              </div>
              <div class="buttons">
                <button :disabled="pageNumber === 1" @click="prevPage">
                  Prev
                </button>
                <button @click="nextPage">Next</button>
              </div>
            </div>
            <div class="clearfix"></div>
            <nav class="pagination"></nav>
          </main>
        </div>
        <WidgetArea />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MyPost from '@/components/Post.vue'
import WidgetArea from '@/components/WidgetArea.vue'

export default {
  name: 'HomePage',
  components: {
    MyPost,
    WidgetArea,
  },

  data() {
    return {
      posts: [],
      pageNumber: 1,
      limit: 5,
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get(
          'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts'
        )
        this.posts = response.data
      } catch (e) {
        alert('Ошибка')
      }
    },
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    paginatedData() {
      let from = (this.pageNumber - 1) * this.limit
      let to = from + this.limit
      return this.posts.slice(from, to)
    },
  },
}
</script>

<style scoped>
.buttons {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
