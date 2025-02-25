export default class LoginView {
    constructor() {
        this.username = '';
        this.password = '';
    }

    render() {
        const container = document.querySelector('#router-view');
        container.innerHTML = `
            <div class="login-container">
                <h2>Login</h2>
                <form id="login-form">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        `;

        this.bindEvents();
    }

    bindEvents() {
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', this.login.bind(this));
    }

    login(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you should make an AJAX request to authenticate the user
        // For now, let's assume login is successful if username is 'admin' and password is 'password'
        if (username === 'admin' && password === 'password') {
            // Redirect to dashboard or perform any action after successful login
            console.log('Login successful');
            // Redirect to dashboard page
            window.location.hash = '/dashboard';
        } else {
            // Display error message for invalid credentials
            alert('Invalid username or password');
        }
        function handleLogin() {
            // Assume login logic here, and on success:
            router.navigate('/dashboard'); // Navigate to the dashboard route
          }
    }
    
}
