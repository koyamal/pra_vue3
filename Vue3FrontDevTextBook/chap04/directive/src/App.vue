<script setup lang="ts">
import {ref} from "vue";

const isSendButtonDisabled = ref(false);
</script>

<template>
  <p><button type="button" v-bind:disabled="isSendButtonDisabled">Send</button></p>
</template>
