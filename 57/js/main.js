const app = Vue.createApp({
    data: () => ({
        message: "Hello, World"
    }),
    watch: {
        message: function(newVal, oldVal){
           console.log(`new: ${newVal}, old: ${oldVal}`); 
        }
    }
})

app.mount('#app');