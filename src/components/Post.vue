<template>
  <article>
    <header class="entry-header">
      <h1 class="entry-title">
        <span @click="$router.push(`/post/${post.id}`)" rel="bookmark">{{
          post.title
        }}</span>
      </h1>
      <div class="entry-meta">
        <span class="posted-on"
          ><time class="entry-date published">{{ post.createdAt }}</time></span
        >
        <span class="comments-link"><a href="#">Leave a comment</a></span>
      </div>
      <div class="entry-thumbnail">
        <img
          src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/30160348/sep4.jpg"
          alt=""
        />
      </div>
    </header>
    <div class="entry-summary">
      <p>
        {{ post.preview }}
        <a class="more-link" href="blog-single.html">Read more</a>
      </p>
    </div>
    <footer class="entry-footer">
      <span class="cat-links">
        Posted in <a href="#" rel="category tag">audio</a>,
        <a href="#" rel="category tag">embed</a>,
        <a href="#" rel="category tag">media</a>
      </span>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'MyArticle',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
span {
  cursor: pointer;
}
</style>
