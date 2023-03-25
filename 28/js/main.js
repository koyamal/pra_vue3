const app = Vue.createApp({
    data: () => ({
        newItem: '',
        todos: []
    }),
    methods: {
        addItem: function(event){
            console.log('Add Button Clicked!');
            if(this.newItem === ''){
                return
            }

            let todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo);
            this.newItem = "";
            // iconsole.log(this);
        },
        deleteItem: function(index){
            console.log('Delete Button Clicked!');
            // console.log(index);
            this.todos.splice(index, 1);
        }
    }
})

app.mount('#app')