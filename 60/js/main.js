const app = Vue.createApp({
    data: () => ({
        colors: [
            {name: 'Red'},
            {name: 'Green'},
            {name: 'Blue'},
        ]
    }),
    watch: {
        colors: {
            handler: function(newVal, oldVal){
                console.log('Update');
            },
            deep: true
        }
    },
    methods: {
        onClick: function(event){
            if(this.colors[1].name === "White"){
                this.colors[1].name = "Green";
            }else{
                this.colors[1].name = "White"
            }
        }
    }
})

app.mount('#app');