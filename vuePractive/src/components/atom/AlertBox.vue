<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <div class="bigbig">
      <slot />
    </div>
    <div class="alert-box3">
      <p>AlertBox</p>
      <p>This is Box</p>
      <div>
        <p>AlertBox.</p>
        <div class="alert-box2">
          <p>AlertBox.</p>
          <input type="radio">
        </div>
        <input type="radio">
      </div>
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
.alert-box2 {
  color: blue;
  font-size: 42px;
}
.alert-box3 {
  color: blue;
  font-size: 42px;
}
</style>
