const app = Vue.createApp({
    data: () => ({
        firstName: '',
        lastName: '',
        fullName: '',
    }),
    watch: {
        firstName: function(value){
            this.fullName = value + ' ' + this.lastName;
        },
        lastName: function(value){
            this.fullName = this.firstName + ' ' + value;
        }
    }
})

app.mount('#app');