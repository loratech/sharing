<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  name: "DisQus",
  mounted() {
    var disqus_config = function() {
      this.page.url = "https://sharing.loratech.tech";
      this.page.identifier = "sharing.loratech";
    };
    (function() {
      var d = document,
        s = d.createElement("script");
      s.src = "https://loratech.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
};
</script>
