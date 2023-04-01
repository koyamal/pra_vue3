const app = Vue.createApp({
    data: () => ({
        styleObject: {
            color: 'blue',
            fontSize: '48px',
            fontWeight: 'bold'
        }
    })
})

app.mount('#app');