const app = Vue.createApp({
    data: () => ({
        message: "Hello World!!!"
    }),
    computed:{
        reverseMessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
})

app.mount('#app');