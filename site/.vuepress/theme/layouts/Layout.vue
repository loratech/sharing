<template>
  <div class="root">
    <HeadNav />
    <code class="author">{{ $page.frontmatter.author }}</code>
    <code class="date">{{ $page.frontmatter.date }}</code>
    <code class="tags" v-for="tag in $page.frontmatter.tags">{{ tag }}</code>
    <Content />
    <FootNav />
    <DisQus />
  </div>
</template>

<script>
import HeadNav from "@theme/components/HeadNav";
import FootNav from "@theme/components/FootNav";
import DisQus from "@theme/components/DisQus";

export default {
  components: {
    HeadNav,
    FootNav,
    DisQus,
  },
};
</script>
