const app = Vue.createApp({
    data: () => ({
        itmes: null,
        keyword: 'node.js',
        message: '',
    }),
    watch: {

    },
    mounted: function(){
        this.getAnswer();
    },
    methods:{
        getAnswer: function(){
            if(this.keyword === ''){
                console.log('Input Kyeword');
                this.items = null;
                return
            }

            this.message = 'Loading...';
            const vm = this;
            // console.log(this)
            const params = {page: 1, per_page: 20, query: this.keyword}
            axios.get('https://qiita.com/api/v2/items', {params})
                .then(function(response){
                    // console.log(response);
                    vm.items = response.data;
                    console.log(vm.items)
                })
                .catch(function(){
                    vm.message = 'Error: ' + error;
                })
                .finally(function(){
                    // console.log(this)
                    vm.message = ''
                })
        }
    }
})

app.mount('#app');