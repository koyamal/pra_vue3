export default {
    props: ['id', 'title','content'],
    template: `
    <div class="articleClass">
    <p>Id: {{ id }}</p>
    <p>Title: {{ title }}</p>
    <p>Content: {{ content }}</p>
    </div>
    `
}