const app = Vue.createApp({
    data: () => ({
        ranDomValue: 0,
        hello: ""
    }),
    computed: {
        computedNumber: function(){
            console.log('Computed is called');
            this.ranDomValue = this.hello
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