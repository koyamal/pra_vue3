const app = Vue.createApp({
    data: () => ({
        counter: 0
    }),
    methods:{
        onClick: function(){
            this.counter += 1;
        }
    }
})

app.mount('#app');