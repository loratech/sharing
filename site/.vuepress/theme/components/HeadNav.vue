<template>
  <div>
    <nav class="nav-root">
      <div class="home-link">
        <router-link :to="$localePath">L.O.R.A Sharing Hub</router-link>
      </div>
      <span>
        <router-link to="/about/" class="about">About</router-link>
        <SearchBox />
      </span>
    </nav>
    <header class="title-root">
      <h1 class="title-h1">{{ $page.frontmatter.title }}</h1>
    </header>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
  name: "HeadNav",
  components: { SearchBox },
};
</script>
