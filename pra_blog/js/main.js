import articlecontent from './articlecontent.js';

let id = 1
const app = Vue.createApp({
    data: () => ({
        newTitle: '',
        newContent: '',
        bothInputed: true,
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
            this.bothInputed = this.newTitle && this.newContent
            if(this.bothInputed){
                this.articles.push({id: id++, title: this.newTitle, content: this.newContent})
                this.resetNewValues()
            }
        },
        resetNewValues: function(){
            this.newContent = ''
            this.newTitle = ''
        }
    }
})

app.mount('#app');