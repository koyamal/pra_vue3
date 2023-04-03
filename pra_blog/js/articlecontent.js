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
    <p>Id: {{ id }}</p>
    <p>Title: {{ title }}</p>
    <p v-if="flag">Content: {{ content }}</p>
    <button v-on:click="onClick">{{!flag? "Show": "x"}}</button>
    </div>
    `
}