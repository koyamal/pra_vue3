<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <div class="bigbig">
      <slot />
    </div>
    <div>
      <p>AlertBox</p>
    </div>
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
