const app = Vue.createApp({ });

app.component('my-menu', {
    props: ['menu'], // Define props to receive the menu array
    template: `
        <div>
            <h2>Menu List</h2>
            <ul>
                <li v-for="(item, index) in menu" :key="index">{{ item }}</li>
            </ul>
        </div>
    `
});

app.mount('#app');
