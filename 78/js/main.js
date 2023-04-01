const app = Vue.createApp({
    data: () => ({
        styleObject: {
            color: 'blue',
            fontSize: '48px',
            fontWeight: 'bold'
        },
        text: 'Vue.js.',
        flag: true
    }),
    methods:{
        onClick: function(){
            if(this.flag){
                this.text = 'World.';
                this.flag = false;
            }else{
                this.text = 'Vue.js.'
                this.flag = true;
            }
        }
    }
})

app.mount('#app');