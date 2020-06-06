<template>
  <div class="root">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <RouterLink to="/">Take me home.</RouterLink>
    <img src="/error.svg" alt="Error 404" class="error">
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
  `You have reached a Dead End.`,
  `It's Empty here!`
];
export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>