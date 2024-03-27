
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'todolist!',
            userValue: '',
            todos: [
                {
                    text: 'lavare la macchina',
                    done: false
                },
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'portare fuori il cane',
                    done: false
                },
                {
                    text: 'fare gli esercizi al pc',
                    done: false
                },
                {
                    text: 'pagare la bolletta del gas',
                    done: false
                },
            ],

        }
    },
    methods: {
        removeListItem(i) {
            this.todos.splice(i, 1);
        },
        addListItem() {
            if (this.userValue !== '') {
                // Creo l'oggetto da inserire
                let newTodo = {
                    done: false,
                    text: '',
                }
                // Inserisco nell'oggetto il testo preso da quello inserito dall'utente
                newTodo.text = this.userValue;
                // Inserisco l'oggetto nell'array
                this.todos.push(newTodo);
                this.userValue = '';
            }
        },
    },
    mounted() {
    },
}).mount('#app');

