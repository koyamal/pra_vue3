<script setupt lang="ts">
import {RouterLink} from "vue-router";
</script>
<template>
  <h1>404 Not Found</h1>
  <section>
    <p>
      Top Page is
        <RouterLink v-bind:to="{name: 'AppTop'}">
          here
        </RouterLink>
    </p>
  </section>
</template>
