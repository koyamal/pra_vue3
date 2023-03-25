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
            if(this.todos[index].isDone){
                this.todos.splice(index, 1);
            }else{
                const output = 
                `
                This Task is Not Done.
                Before Delete Task,
                Change Status to Done.
                `
                alert(output);
            }
        }
    }
})

app.mount('#app')