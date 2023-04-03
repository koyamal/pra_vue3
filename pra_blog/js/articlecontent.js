export default {
    data: () => ({
        flag: false
    }),
    methods:{
        onClick: function(){
            this.flag = !this.flag
        }
    },
    props: ['id', 'title','content'],
    template: `
    <div class="articleClass">
    <h2>No-{{id}}: {{ title }}</h2>
    <div v-if="flag">Content:<br> {{ content }}</div>
    <button v-on:click="onClick">{{!flag? "Show": "x"}}</button>
    </div>
    `
}