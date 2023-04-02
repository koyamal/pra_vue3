const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        onClick: function(){
            this.message = new Date().toLocaleTimeString();
        }
    }
})

app.mount('#app');