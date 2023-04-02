const app = Vue.createApp({
    data: () => ({
        message: 'Hello, World!!',
        count: 0,
        user: {
            lastName: 'Tanaka',
            firstName: 'Taro',
            prefecture: 'Tokyo'
        },
        colors: ['Red', 'Blue', 'Green']
    })
})

app.mount('#app');