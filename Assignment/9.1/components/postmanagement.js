// Post Management Component
const PostManagement = {
  template: `
    <div class="container">
      <h2 class="mt-4 mb-4 text-center">Status Post App</h2>
      <div class="mb-4">
        <label for="status" class="form-label">Status:</label>
        <input type="text" v-model="strStatus" id="status" class="form-control" placeholder="Enter your status">
        <button class="btn btn-success mt-2" @click="addStatus">Post</button>
      </div>
      <div>
        <h3>Status Updates</h3>
        <div v-for="(post, index) in statPosts" :key="index" class="d-flex justify-content-between align-items-center mb-2">
          <p class="mb-0">{{ post }}</p>
          <button class="btn btn-warning" @click="removeStatus(index)">Delete</button>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      statPosts: [],
      strStatus: ''
    };
  },
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
};

export default PostManagement;
