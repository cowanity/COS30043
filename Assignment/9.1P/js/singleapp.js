const { createApp } = Vue;

const NameTest = {
  template: `
  <div class="container">
    <h1>String Test</h1>
	<div id="app">
		<p>Please enter your name:
		<input v-model="strName"  /> 
		</p>
		<!-- Directives are special attributes with the v- prefix. -->

      <p v-if="strName.toLowerCase() === 'vu'">Awesome name!</p>
      <p v-else-if="strName === ''">You haven't entered any name!</p>
      <p v-else>{{ strName }} is not my name!</p>

	</div>
  </div>
      `,
  data() {
    return { strName: "" };
  },
};

const PostManagement = {
  template: `  
  <div class="container">
  <h1>Status Post</h1>
  <div class="form-group">
    <label for="strStatus" class="form-check-label">Status:</label>
    <input
      class="form-control"
      v-model="strStatus"
      type="text"
      placeholder="Enter your Status"
      required
    />
    <button @click="add" class="btn btn-primary mt-2">Post</button>
  </div>

  <div v-if="statPosts.length > 0">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Function</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(str, index) in statPosts" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ str }}</td>
          <td>
            <button @click="remove(index)" class="btn btn-primary">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
  data() {
    return {
      statPosts: [],
      strStatus: "",
    };
  },
  methods: {
    add() {
      //push status into statPosts array
      if (this.strStatus.trim() != '')
        {
          this.statPosts.unshift(this.strStatus);
          this.strStatus = "";
        } else {
          alert("Please enter valid input")
        }
    },
    remove(index) {
      //delete status from statPost using index
      this.statPosts.splice(index, 1);
    },
  },
};

const StudentMarks = {
  template: `
  <div class="container">
    <div class="row">
        <div class="col-12">
          <h2>Student Marks</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Mark</th>
                <th scope="col">Extra</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in getItems" :key="student.name">
                <td>{{ student.name }}</td>
                <td>{{ student.mark }}</td>
                <td>{{ student.extra}}</td>
              </tr>
            </tbody>
          </table>
          <paginate 
		        :v-model = "currentPage"
		        :page-count="9"    
		        :page-range="3" 
		        :margin-pages="1"
		        :click-handler="clickCallback" 
		        :prev-text=" 'Prev Page' " 		
		        :next-text="'Next Page'" 
		        :container-class="'pagination'" 
		        :active-class="'currentPage'"
            :initial-page="currentPage"
		      >
	        </paginate>
        </div>
      </div>
    </div>
  `,

  components: {
    paginate: VuejsPaginateNext,
  },

  data() {
    return {
      perPage: 3,
      currentPage: 4,
      students: [
        { name: "Amy", mark: 59, extra: 3 },
        { name: "Bill", mark: 60 },
        { name: "Casey", mark: 53 },
        { name: "David", mark: 86 },
        { name: "Eva", mark: 92 },
        { name: "Frank", mark: 58 },
        { name: "Grace", mark: 94 },
        { name: "Henry", mark: 71 },
        { name: "Isabel", mark: 99 },
        { name: "John", mark: 70 },
        { name: "Kathy", mark: 86 },
        { name: "Liam", mark: 51 },
        { name: "Monica", mark: 70 },
        { name: "Nathan", mark: 77 },
        { name: "Olivia", mark: 79 },
        { name: "Peter", mark: 58 },
        { name: "Quincy", mark: 53 },
        { name: "Rachel", mark: 76 },
        { name: "Sam", mark: 55 },
        { name: "Tina", mark: 81 },
        { name: "Ursula", mark: 78 },
        { name: "Victor", mark: 57 },
        { name: "Wendy", mark: 99 },
        { name: "Xavier", mark: 78 },
        { name: "Yasmin", mark: 66 },
        { name: "Zack", mark: 60 },
      ],
    };
  },
  computed: {
		getItems: function() {
			let current = this.currentPage * 3;  // total 24 units, suppose 2 per page, 12 pages
			let start = current - 3;
			return this.students.slice(start, current);
		}
	},
    methods: {
		//sets the clicked page
		clickCallback: function(pageNum) {
			this.currentPage = Number(pageNum);
		}
    }
};


const routes = [
  { path: "/", component: NameTest },
  { path: "/post-management", component: PostManagement },
  { path: "/student-marks", component: StudentMarks },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

//Router app
const app = Vue.createApp({});

app.component("navbar", {
  template: `<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/">Name Test </router-link> |
        </li>
        <li class="nav-item">
          <router-link to="/post-management">Post Management</router-link>
          |
        </li>
        <li class="nav-item">
          <router-link to="/student-marks">Student Marks</router-link>
        </li>
      </ul>
    </div>
  </nav>
</div>`,
});
app.use(router);
app.mount("#app");
