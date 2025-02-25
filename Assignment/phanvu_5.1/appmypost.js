const app = Vue.createApp({ });

app.component('app-mypost', {
    data() {
        return {
            statPosts: [],
            strStatus: ''
        }
    },
    template: `
        <div>
            <h2>Status Posting</h2>
            <div>
                <input type="text" v-model="strStatus" placeholder="Enter your status">
                <button @click="addStatus">Post</button>
            </div>
            <div v-for="(post, index) in statPosts" :key="index">
                <p>{{ post }}</p>
                <button @click="removeStatus(index)">Delete</button>
            </div>
        </div>
    `,
    methods: {
        addStatus() {
            if (this.strStatus !== '') {
                this.statPosts.push(this.strStatus);
                this.strStatus = ''; // Clear input field after posting
            }
        },
        removeStatus(index) {
            this.statPosts.splice(index, 1);
        }
    }
});

app.mount('#app');
