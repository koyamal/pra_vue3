const app = Vue.createApp({
    data: () => ({
        isLarge: false
    }),
    methods:{
        onClickChange: function(){
            this.isLarge = !this.isLarge
        }
    }
})

app.mount('#app');