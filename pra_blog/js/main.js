import articlecontent from './articlecontent.js';

let id = 0
const app = Vue.createApp({
    data: () => ({
        articles: [
            {
                id: id++,
                title: 'Hello, World',
                content: 'This is Hello, World article.'
            },
            {
                id: id++,
                title: 'Hello, Vue',
                content: 'This is Hello, Vue article.'
            },
            {
                id: id++,
                title: 'Hello, JavaScript',
                content: 'This is Hello, JavaScript article.'
            }
        ]
    }),
    components: {
        articlecontent
    }
})

app.mount('#app');