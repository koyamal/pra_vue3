const app = Vue.createApp({
    data: () => ({

    }),
    computed: {
        computedNumber: function(){
            console.log('computed is called')
            return Math.random()
        }
    },
    methods: {
        methodsNumber: function(){
            console.log('methods is called')
            return Math.random()
        } 
    }
})

app.mount('#app');