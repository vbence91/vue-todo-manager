export default {
    props: ['id', 'text', 'type', 'tags'],
    
    methods: {
        tagToUpper(tag) {
            return tag.toUpperCase()
        },
        deleteTodo(todoId) {
            let index = this.$parent.todos.findIndex(x => x.id == todoId)
            this.$parent.todos.splice(index, 1)
        }
    },

    template: `
    <div class="alert alert-dismissible fade show" role="alert" v-bind:class="type">
        {{id}}
        <br>
        {{text}}
        <div>
            <template v-for="tag in tags">
               <span class="badge badge-secondary mr-2">{{tagToUpper(tag)}}</span>
            </template>
        </div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="deleteTodo(id)">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `
}