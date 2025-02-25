// Import necessary modules
import Router from "./components/router.js";
import LoginView from './components/login.js';
import DashboardView from './components/dashboard.js';

// Initialize the router
const router = new Router(window.location.hash, '#!');

// Define routes
router.on('/', () => {
  router.navigate('/login');
});

router.on('/login', () => {
  const loginView = new LoginView();
  loginView.render('#router-view');
});

router.on('/dashboard', () => {
  const dashboardView = new DashboardView();
  dashboardView.render('#router-view');
});

router.on('/dashboard/:tab', ({ data }) => {
  const dashboardView = new DashboardView();
  dashboardView.currentTab = data.tab; // Set the current tab based on the URL
  dashboardView.render('#router-view');
});

// Start the router
router.resolve();

// Handle navigation events
window.addEventListener('hashchange', () => {
  router.resolve();
});
