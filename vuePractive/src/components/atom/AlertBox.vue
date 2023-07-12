<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
      <slot class="bigbig" />
  </div>
</template>
  
<style>
.alert-box {
  color: red;
  font-size: 32px;
}
.bigbig {
  font-size: 60px;
}
</style>