<template>
  <header id="masthead" class="site-header">
    <div class="site-branding">
      <h1 class="site-title"><a href="index.html" rel="home">Moschino</a></h1>
      <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
    </div>
    <nav id="site-navigation" class="main-navigation">
      <button class="menu-toggle">Menu</button>
      <a class="skip-link screen-reader-text" href="#content"
        >Skip to content</a
      >
      <div class="menu-menu-1-container">
        <ul id="menu-menu-1" class="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="elements.html">Elements</a></li>
          <li>
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li><a href="portfolio-item.html">Portfolio Item</a></li>
              <li><a href="blog-single.html">Blog Article</a></li>
              <li><a href="shop-single.html">Shop Item</a></li>
              <li><a href="portfolio-category.html">Portfolio Category</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
}
</script>

<style scoped>
html {
  border: 12px solid #111;
}
.site-header {
  padding-top: 2em;
  padding-bottom: 1em;
}
.header-image {
  margin-top: 1em;
  text-align: center;
  margin-bottom: 2em;
}
</style>
