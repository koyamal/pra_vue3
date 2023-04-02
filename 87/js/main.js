const app = Vue.createApp({
    data: () => ({
        counter: 0
    }),
    methods:{
        onClick: function(event){
            this.counter++;
            console.log(event.target.id)
        }
    }
})

app.mount('#app');