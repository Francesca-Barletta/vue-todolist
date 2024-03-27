
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'todolist!',
        todo: [
            {
                text:'lavare la macchina',
                done: false
            },
            {
                text:'fare la spesa',
                done: false
            },
            {
                text:'portare fuori il cane',
                done: false
            },
            {
                text:'fare gli esercizi al pc',
                done: false
            },
            {
                text:'pagare la bolletta del gas',
                done: false
            },
        ],

      }
    },
    methods: {
        removeListItem(i) {
                this.todo.splice(i, 1);
            }
        },
    mounted() {
	

	},
  }).mount('#app');

