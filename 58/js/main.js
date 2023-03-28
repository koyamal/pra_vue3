const app = Vue.createApp({
    data: () => ({
        km: 0,
        m: 0
    }),
    watch: {
        km: function(val, val2){
            // console.log("new:", val);
            // console.log("old:", val2);
            this.km = val
            this.m = val * 1000
        },
        m: function(val){
            this.m = val
            this.km = val / 1000
        }
    }
})

app.mount('#app');