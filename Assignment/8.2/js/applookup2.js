const { createApp } = Vue;
const { createVuetify } = Vuetify;
import VuejsPaginateNext from 'vuejs-paginate-next';

const app = createApp({
  components: {
    paginate: VuejsPaginateNext,
  },
  data: function() {
    return {
      currentPage: 1,
      units: [],
      err: null,
    };
  },
  mounted() {
    var self = this;
    var url = 'js/units.json';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the fetched data
        self.units = data;
      })
      .catch(error => {
        console.error(error);
        self.err = error;
      });
  },
  computed: {
    paginatedUnits() {
      let current = this.currentPage * 5;
      let start = current - 5;
      return this.units.slice(start, current);
    },
    totalPages() {
      return Math.ceil(this.units.length / 5);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
  template: `
    <div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th id="code" scope="col">Code</th>
            <th id="desc" scope="col">Description</th>
            <th id="cp" scope="col">Credit Points</th>
            <th id="type" scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unit in paginatedUnits" :key="unit.code">
            <td headers="code">{{ unit.code }}</td>
            <td headers="desc">{{ unit.desc }}</td>
            <td headers="cp">{{ unit.cp }}</td>
            <td headers="type">{{ unit.type }}</td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
          </li>
          <li class="page-item" v-for="page in totalPages" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  `,
});

app.use(createVuetify()).mount('#app');
