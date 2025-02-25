<template>
  <div>
    <h2>Status Posting</h2>
    <div>
      <input type="text" v-model="strStatus" placeholder="Enter your status">
      <button @click="addStatus">Post</button>
    </div>
    <div v-for="(post, index) in statPosts" :key="index" class="post-item">
      <span class="status-text">{{ post }}</span>
      <button class="delete-button" @click="removeStatus(index)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
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
</script>

<style scoped>
/* Base settings for the entire app */
body {
    font-family: 'Arial', sans-serif; /* Consistent font throughout the app */
    background-color: #f4f4f4; /* Light gray background for contrast */
    color: #333; /* Dark gray text for readability */
    margin: 0;
    padding: 40px 0; /* Top and bottom padding for overall spacing */
}

/* Container styling */
#app {
    background: white;
    width: 80%; /* Adjust width to fit larger screens */
    max-width: 600px; /* Limiting max width for larger screens */
    margin: 0 auto; /* Center aligning the app */
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Subtle shadow for depth */
}

/* Header styling */
h1, h2 {
    text-align: center; /* Centering headers */
}

/* Styling for input elements */
input[type="text"] {
    width: calc(100% - 122px); /* Adjust width to leave space for the button */
    padding: 10px;
    margin-right: 10px; /* Space between the input field and the button */
    border: 2px solid #ccc; /* Subtle border styling */
    border-radius: 5px; /* Rounded corners */
    display: inline-block; /* Allows elements to be on the same line */
}

/* General button styling */
button {
    background-color: #4CAF50; /* Vivid green background */
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: inline-block; /* Allows elements to be on the same line */
}

button:hover {
    background-color: #367B3A; /* Darker green on hover */
}

/* Styling for posted items and delete button */
.post-item {
    background-color: #E8F5E9; /* Light green background for each post */
    padding: 10px 20px; /* Padding for some breathing room */
    margin-top: 10px; /* Space between consecutive posts */
    display: flex; /* Using Flexbox for better alignment */
    justify-content: space-between; /* Maximizes space between status text and the delete button */
    align-items: center; /* Vertically centers items in the container */
    border-radius: 5px; /* Optional: rounded corners */
}

.status-text {
    flex-grow: 1; /* Allows the status text to fill the space */
    margin-right: 10px; /* Ensures some space between the text and the delete button */
}

button.delete-button {
    background-color: #FF5733; /* Bright red for delete actions */
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    transition: background-color 0.3s;
    /* No need to add margin-left as justify-content: space-between takes care of positioning */
}

/* Responsive adjustments for smaller screens */
@media (max-width: 600px) {
    .post-item {
        flex-direction: row; /* Keeps items in a row on smaller screens */
    }

    input[type="text"], button {
        width: 100%; /* Makes input and button full width */
        display: block; /* Stacks them vertically */
        margin: 10px 0; /* Adds vertical spacing */
    }
}
</style>
