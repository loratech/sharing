<template>
  <div class="root">
    <HeadNav />
    <Content />
    <ul class="post-list">
      <li v-for="post in posts" class="post">
        <span v-if="post.frontmatter.blog">
          <h2>
            <router-link :to="post.path">{{
              post.frontmatter.title
            }}</router-link>
          </h2>
          <code>{{ post.frontmatter.date }}</code>
          <code>{{ post.frontmatter.author }}</code>
          <p>{{ post.frontmatter.description }}</p>
        </span>
      </li>
    </ul>
    <FootNav />
  </div>
</template>

<script>
import HeadNav from "@theme/components/HeadNav";
import FootNav from "@theme/components/FootNav";

export default {
  components: {
    HeadNav,
    FootNav,
  },
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages.sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      });
      return posts;
    },
  },
};
</script>
