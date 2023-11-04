console.log('hello, vue');

const app = Vue.createApp({
    //  data, functions
    data(){
        return{
            showBook : true,
            title : 'The Final Empire',
            author : 'Brandon Sanderson',
            age : 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title_in){
            this.title = title_in,
            this.author ='Edgar Allan Poe'
            },
        toggleBook(){
            this.showBook = !this.showBook
        },
        handleEvent(e){
            console.log(e.type);
        },
        handleMouseMove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        }
        }
});

app.mount('#app');