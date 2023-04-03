export default {
    data: () => ({
        flag: false
    }),
    props: ['id', 'title','content'],
    template: `
    <div class="articleClass">
    <p>Id: {{ id }}</p>
    <p>Title: {{ title }}</p>
    <p v-if="flag">Content: {{ content }}</p>
    </div>
    `
}