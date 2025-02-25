// Student Marks Component
const StudentMarks = {
  template: `
    <h2>Student Marks</h2>
    <div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th id="name" scope="col">Name</th>
            <th id="mark" scope="col">Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in paginatedStudMarks" :key="student.name">
            <td headers="name">{{ student.name }}</td>
            <td headers="mark">{{ student.mark }}</td>
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
  data() {
    return {
      studMarks: [
        { name: "Amy", mark: 90 },
        { name: "Bill", mark: 80 },
        { name: "Casey", mark: 78 },
        { name: "David", mark: 84 },
        { name: "Emily", mark: 92 },
        { name: "Frank", mark: 75 },
        { name: "Gina", mark: 88 },
        { name: "Henry", mark: 82 },
        { name: "Isabella", mark: 91 },
        { name: "Jack", mark: 77 },
        { name: "Kate", mark: 85 },
        { name: "Liam", mark: 79 },
        { name: "Mia", mark: 90 },
        { name: "Noah", mark: 83 },
        { name: "Olivia", mark: 86 },
        { name: "Parker", mark: 81 },
        { name: "Quinn", mark: 89 },
        { name: "Ryan", mark: 77 },
        { name: "Sophia", mark: 93 },
        { name: "Theodore", mark: 82 },
        { name: "Ava", mark: 88 },
        { name: "William", mark: 84 },
        { name: "Xander", mark: 79 },
        { name: "Yara", mark: 91 },
        { name: "Zoe", mark: 85 },
        { name: "Ethan", mark: 90 }
      ],
      currentPage: 5,
      itemsPerPage: 3
    };
  },
  computed: {
    paginatedStudMarks() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.studMarks.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.studMarks.length / this.itemsPerPage);
    }
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
    }
  }
};

export default StudentMarks;
