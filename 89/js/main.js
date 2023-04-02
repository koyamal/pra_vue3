const app = Vue.createApp({
    data: () => ({
        message: "World."
    }),
    methods:{
        onClick: function($event, message){
            console.log(message);
            this.message = message;
            console.log($event.target.id)
        }
    }
})

app.mount('#app');