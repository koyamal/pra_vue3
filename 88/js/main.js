const app = Vue.createApp({
    data: () => ({
        message: ""
    }),
    methods:{
        onClick: function(message){
            console.log(message);
            this.message = message;
        }
    }
})

app.mount('#app');