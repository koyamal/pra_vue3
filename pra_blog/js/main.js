import articlecontent from './articlecontent.js';

let id = 0
const app = Vue.createApp({
    data: () => ({
        newTitle: '',
        newContent: '',
        bothInputed: false,
        isDanger: true,
        articles: [
            {
                id: id++,
                title: 'Hello, World',
                content: `
                This is Hello, World article.
                This is Hello, World article.
                This is Hello, World article.
                This is Hello, World article.
                This is Hello, World article.
                This is Hello, World article.
                `
            },
            {
                id: id++,
                title: 'Hello, Vue',
                content: `
                This is Hello, Vue article.
                This is Hello, Vue article.
                This is Hello, Vue article.
                This is Hello, Vue article.
                This is Hello, Vue article.
                This is Hello, Vue article.
                `
            },
            {
                id: id++,
                title: 'Hello, JavaScript',
                content: `
                This is Hello, JavaScript article.
                This is Hello, JavaScript article.
                This is Hello, JavaScript article.
                This is Hello, JavaScript article.
                This is Hello, JavaScript article.
                This is Hello, JavaScript article.
                `
            }
        ]
    }),
    components: {
        articlecontent
    },
    methods:{
        addArticle: function(){
            if(this.newTitle && this.newContent){
                this.articles.push({id: id++, title: this.newTitle, content: this.newContent});
                this.newContent = '';
                this.newTitle = '';
                this.bothInputed = false
            }else{
                this.bothInputed = true
            }
        }
    }
})

app.mount('#app');