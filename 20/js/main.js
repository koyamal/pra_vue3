const app = Vue.createApp({
    data: () => ({
    }),
})

app.component('hello-component', {
    template: '<p>Hello, World.</p>'
})

app.mount('#app');