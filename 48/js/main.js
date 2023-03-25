const app = Vue.createApp({
    data: () => ({
        message: 'Hello! Vue.js!',
        number: 100,
        ok: true
        // ok: false
    })
})

app.mount('#app');