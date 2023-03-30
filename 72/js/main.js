const app = Vue.createApp({
    data: () => ({
        isLarge: false,
        hasError: true
    }),
    methods:{
        onClickChangeSL: function(){
            this.isLarge = !this.isLarge
        },
        onClickChangeRB: function(){
            this.hasError = !this.hasError
        }
    }
})

app.mount('#app');