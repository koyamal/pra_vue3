const app = Vue.createApp({
    data: () => ({
        user: {
            firstName: 'Taro',
            lastName: 'Yamada',
            age: 20
        }
    })
})

app.mount('#app');