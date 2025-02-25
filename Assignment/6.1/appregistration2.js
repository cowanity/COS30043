new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobileNumber: '',
        errors: {},
        showTerms: false
    },
    methods: {
        submitForm() {
            this.errors = {}; // Reset errors
            this.validateFirstName();
            this.validateLastName();
            this.validateUserName();
            this.validatePassword();
            this.validateConfirmPassword();
            this.validateEmail();
            this.validatePostcode();
            this.validateMobileNumber();
        },
        toggleTerms() {
            this.showTerms = !this.showTerms;
        },
        validateFirstName() {
            if (!this.firstName.match(/^[a-zA-Z]+$/)) {
                this.errors.fname = 'First name must contain letters only.';
            } else {
                delete this.errors.fname;
            }
        },
        validateLastName() {
            if (!this.lastName.match(/^[a-zA-Z]+$/)) {
                this.errors.lname = 'Last name must contain letters only.';
            }
        },
        validateUserName() {
            if (this.userName.length < 3) {
                this.errors.username = 'User name must be at least 3 characters.';
            }
        },
        validatePassword() {
            const specialChars = ['$', '%', '^', '&', '*'];
            const containsSpecialChar = specialChars.some(char => this.password.includes(char));
            if (this.password.length < 8 || !containsSpecialChar) {
                this.errors.password = 'Password must be at least 8 characters long and contain at least one special character ($, %, ^, &, or *).';
            }
        },
        validateConfirmPassword() {
            if (this.confirmPassword !== this.password) {
                this.errors.confirmPassword = 'Passwords do not match.';
            }
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) {
                this.errors.email = 'Invalid email address.';
            }
        },
        validatePostcode() {
            const postcodeRegex = /^\d{4}$/;
            if (!postcodeRegex.test(this.postcode)) {
                this.errors.postcode = 'Postcode must be exactly 4 numeric digits.';
            }
        },
        validateMobileNumber() {
            const mobileRegex = /^04\d{8}$/;
            if (!mobileRegex.test(this.mobileNumber)) {
                this.errors.mobile = 'Mobile number must be 10 digits and start with 04.';
            }
        }
    }
});