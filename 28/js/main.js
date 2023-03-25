const app = Vue.createApp({
    data: () => ({
        newItem: '',
        todos: []
    }),
    methods: {
        addItem: function(event){
            console.log('Button Clicked!');
            let todo = {
                item: this.newItem
            }
            this.todos.push(todo);
            this.newItem = "";
            // console.log(this);
        }
    }
})

app.mount('#app')