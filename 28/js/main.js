const app = Vue.createApp({
    data: () => ({
    }),
    methods: {
        addItem: function(event){
            console.log('Button Clicked!');
        }
    }
})

app.mount('#app')