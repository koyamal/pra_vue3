const app = Vue.createApp({
    data: () => ({

    }),
    computed: {
        computedNumber: function(){
            console.log('Computed is called');
            return Math.random();
        }
    },
    methods: {
        methodsNumber: function(){
            console.log('Methods is called');
            return Math.random();
        } 
    }
})

app.mount('#app');