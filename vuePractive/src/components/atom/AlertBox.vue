<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <div class="bigbig">
      <slot />
    </div>
    <div class="alert-box3">
      <p>AlertBox</p>
      <p>HelloGirls
        <h1>thisispen</h1>
      </p>
      <div>
        <h1>
          <h2>
            <h3>
              H1H2H3
              <h4>
                H4
                <h5>H5
                  <h6>
                    H6
                  </h6>
                </h5>
              </h4>
            </h3>
          </h2>
        </h1>
      </div>
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
  color: yellowgreen;
  font-size: 42px;
}
</style>
