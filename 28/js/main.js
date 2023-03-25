const app = Vue.createApp({
    data: () => ({
        newItem: ''
    }),
    methods: {
        addItem: function(event){
            console.log('Button Clicked!');
        }
    }
})

app.mount('#app')