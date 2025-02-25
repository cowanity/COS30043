import Insert from './insert.js';
import Update from './update.js';
import Delete from './delete.js';

export default class DashboardView {
    constructor() {
        // Initialize dashboard data
        this.units = []; // This will contain the units data fetched from the backend
        this.currentPage = 1;
        this.pageSize = 10; // Number of units to display per page
        this.currentTab = 'view'; // Default to the view tab

        // Create instances of Insert, Update, and Delete classes
        this.insertInstance = new Insert();
        this.updateInstance = new Update();
        this.deleteInstance = new Delete();
    }

    render() {
        const container = document.querySelector('#router-view');
        container.innerHTML = `
            <div class="dashboard-container">
                <h2>Dashboard</h2>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link ${this.currentTab === 'view' ? 'active' : ''}" id="view-tab" href="#view">View</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${this.currentTab === 'insert' ? 'active' : ''}" id="insert-tab" href="#insert">Insert</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${this.currentTab === 'update' ? 'active' : ''}" id="update-tab" href="#update">Update</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${this.currentTab === 'delete' ? 'active' : ''}" id="delete-tab" href="#delete">Delete</a>
                    </li>
                </ul>
                <div class="tab-content" id="dashboard-content">
                    <div class="tab-pane fade ${this.currentTab === 'view' ? 'show active' : ''}" id="view" role="tabpanel">
                        <div id="units-list"></div>
                        <div id="pagination"></div>
                    </div>
                    <div class="tab-pane fade ${this.currentTab === 'insert' ? 'show active' : ''}" id="insert" role="tabpanel">
                        ${this.insertInstance.renderInsertForm()}
                    </div>
                    <div class="tab-pane fade ${this.currentTab === 'update' ? 'show active' : ''}" id="update" role="tabpanel">
                        ${this.updateInstance.renderUpdateForm()}
                    </div>
                    <div class="tab-pane fade ${this.currentTab === 'delete' ? 'show active' : ''}" id="delete" role="tabpanel">
                        ${this.deleteInstance.renderDeleteForm()}
                    </div>
                </div>
            </div>
        `;

        // Fetch units data and render the units list
        this.fetchUnits();

        // Add event listeners to tab links
        const tabs = container.querySelectorAll('.nav-link');
        tabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default link behavior
                const tabId = tab.getAttribute('href').substring(1);
                this.currentTab = tabId;
                window.location.hash = `#/dashboard/${tabId}`; // Update the URL hash
                this.render(); // Re-render the dashboard view
            });
        });

        // Add event listeners for insert, update, and delete forms
        this.insertInstance.addInsertEventListener(this.units);
        this.updateInstance.addUpdateEventListener(this.units);
        this.deleteInstance.addDeleteEventListener(this.units);
    }

    fetchUnits() {
        // Here you should make an AJAX request to fetch units data from the backend
        // After receiving data, call renderUnitsList to render the units list
        // For demonstration purposes, let's assume units data is fetched successfully and stored in this.units
        this.units = [
            {"code":"ICT10001", "desc":"Problem Solving with ICT", "cp":12.5, "type":"Core"},
            {"code":"COS10005", "desc":"Web Development", "cp":12.5, "type":"Core"},
            {"code":"INF10003", "desc":"Introduction to Business Information Systems", "cp":12.5, "type":"Core"},
            {"code":"INF10002", "desc":"Database Analysis and Design", "cp":12.5, "type":"Core"},
            {"code":"COS10009", "desc":"Introduction to Programming", "cp":12.5, "type":"Core"},
            {"code":"INF30029", "desc":"Information Technology Project Management", "cp":12.5, "type":"Core"},
            {"code":"ICT30005", "desc":"Professional Issues in Information Technology", "cp":12.5, "type":"Core"},
            {"code":"ICT30001", "desc":"Information Technology Project", "cp":12.5, "type":"Core"},
            {"code":"COS20001", "desc":"User-Centred Design", "cp":12.5, "type":"Software Development"},
            {"code":"TNE10005", "desc":"Network Administration", "cp":12.5, "type":"Software Development"},
            {"code":"COS20016", "desc":"Operating System Configuration", "cp":12.5, "type":"Software Development"},
            {"code":"SWE20001", "desc":"Development Project 1 - Tools and Practices", "cp":12.5, "type":"Software Development"},
            {"code":"COS20007", "desc":"Object Oriented Programming", "cp":12.5, "type":"Software Development"},
            {"code":"COS30015", "desc":"IT Security", "cp":12.5, "type":"Software Development"},
            {"code":"COS30043", "desc":"Interface Design and Development", "cp":12.5, "type":"Software Development"},
            {"code":"COS30017", "desc":"Software Development for Mobile Devices", "cp":12.5, "type":"Software Development"},
            {"code":"INF20012", "desc":"Enterprise Systems", "cp":12.5, "type":"Systems Analysis"},
            {"code":"ACC10007", "desc":"Financial Information for Decision Making", "cp":12.5, "type":"Systems Analysis"},
            {"code":"INF20003", "desc":"Requirements Analysis and Modelling", "cp":12.5, "type":"Systems Analysis"},
            {"code":"ACC20014", "desc":"Management Decision Making", "cp":12.5, "type":"Systems Analysis"},
            {"code":"INF30005", "desc":"Business Process Management", "cp":12.5, "type":"Systems Analysis"},
            {"code":"INF30003", "desc":"Business Information Systems Analysis", "cp":12.5, "type":"Systems Analysis"},
            {"code":"INF30020", "desc":"Information Systems Risk and Security", "cp":12.5, "type":"Systems Analysis"},
            {"code":"INF30001", "desc":"Systems Acquisition & Implementation Management", "cp":12.5, "type":"Systems Analysis"}
        ];

        this.renderUnitsList();
    }

    renderUnitsList() {
        const unitsListContainer = document.getElementById('units-list');
        unitsListContainer.innerHTML = ''; // Clear previous content

        // Calculate start and end index of units to display based on currentPage and pageSize
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = Math.min(startIndex + this.pageSize, this.units.length);

        // Render units for the current page
        for (let i = startIndex; i < endIndex; i++) {
            const unit = this.units[i];
            const unitElement = document.createElement('div');
            unitElement.textContent = `${unit.code}: ${unit.desc}`; // Display both code and description
            unitsListContainer.appendChild(unitElement);
        }

        // Render pagination
        this.renderPagination();
    }

    renderPagination() {
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = ''; // Clear previous content

        // Calculate total number of pages based on total units and pageSize
        const totalPages = Math.ceil(this.units.length / this.pageSize);

        // Create pagination buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                // Update currentPage and re-render units list
                this.currentPage = i;
                this.renderUnitsList();
            });
            paginationContainer.appendChild(pageButton);
        }
    }
}
