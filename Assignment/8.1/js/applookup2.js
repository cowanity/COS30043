var unitsData=[{'name': 'Amy', 'mark': 59},
	{'name': 'Bill', 'mark': 60},
	{'name': 'Casey', 'mark': 53},
	{'name': 'David', 'mark': 86},
	{'name': 'Eva', 'mark': 92},
	{'name': 'Frank', 'mark': 58},
	{'name': 'Grace', 'mark': 94},
	{'name': 'Henry', 'mark': 71},
	{'name': 'Isabel', 'mark': 99},
	{'name': 'John', 'mark': 70},
	{'name': 'Kathy', 'mark': 86},
	{'name': 'Liam', 'mark': 51},
	{'name': 'Monica', 'mark': 70},
	{'name': 'Nathan', 'mark': 77},
	{'name': 'Olivia', 'mark': 79},
	{'name': 'Peter', 'mark': 58},
	{'name': 'Quincy', 'mark': 53},
	{'name': 'Rachel', 'mark': 76},
	{'name': 'Sam', 'mark': 55},
	{'name': 'Tina', 'mark': 81},
	{'name': 'Ursula', 'mark': 78},
	{'name': 'Victor', 'mark': 57},
	{'name': 'Wendy', 'mark': 99},
	{'name': 'Xavier', 'mark': 78},
	{'name': 'Yasmin', 'mark': 66},
	{'name': 'Zack', 'mark': 60}]

const { createApp } = Vue
const { createVuetify } = Vuetify
const app = createApp()
const vuetify = createVuetify()

app.component('app-lookup2', // indicating the component tag
  {
	components: {
			paginate: VuejsPaginateNext,
	},
    // defining data to be used in the component
    data: function() {
      return {
		perPage: 5,
        currentPage: 5,
        units: unitsData
      }
    },
    // define the template for the component
    template: `
    <div>
		<h1>Student Marks</h1>

		<v-table>
			<thead>
				<tr>
					<th>Student Name</th>
					<th>Mark</th>
				</tr>
			</thead>
			<!-- Using v-for to loop units and list them -->
			<tbody>
				<tr v-for="unit in getItems"  >
					<td>{{unit.name}}</td>
					<td>{{unit.mark}}</td>
				</tr>
			</tbody>
	</v-table>

	<!-- Vue Paginate template -->
	<paginate 
	v-model = "currentPage"
		:page-count="9"    
		:page-range="5" 
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
    `,
	
	// 	:page-count                 --Total count of pages. required   
	//	:page-range                 -- number of pages displayed, default 3.It is recommended to use an odd number, so that the same number of pages are displayed before and after the active page
	//	:margin-pages              --  The number of displayed pages for margins. default: 1
		
	computed: {
		getItems: function() {
			let current = this.currentPage * 5;  // total 24 units, suppose 2 per page, 12 pages
			let start = current - 5;
			return this.units.slice(start, current);
		}
	},
    methods: {
		//sets the clicked page
		clickCallback: function(pageNum) {
			this.currentPage = Number(pageNum);
		}
    }
  });

app.use(vuetify).mount('#app')