// Authentication JavaScript
// This file handles user authentication using Firebase
// Backend developers should integrate actual Firebase Authentication

document.addEventListener('DOMContentLoaded', function() {

    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const loginBtn = document.querySelector('#loginForm button[type="submit"]');
            const loginText = document.getElementById('login-text');
            const loginSpinner = document.getElementById('login-spinner');

            // Show loading state
            loginText.classList.add('d-none');
            loginSpinner.classList.remove('d-none');
            loginBtn.disabled = true;

            try {
                // Firebase Authentication Login
                // const { signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
                // const { auth } = await import('./firebase-config.js');
                // const userCredential = await signInWithEmailAndPassword(auth, email, password);

                // Simulate login for demo purposes
                await simulateAsync();

                // Get user role from database
                const userRole = localStorage.getItem('userRole') || 'admin'; // Demo: default to admin

                showAuthAlert('Login successful! Redirecting...', 'success');

                // Redirect based on role
                setTimeout(() => {
                    if (userRole === 'admin') {
                        window.location.href = 'admin-dashboard.html';
                    } else {
                        window.location.href = 'lab-dashboard.html';
                    }
                }, 1500);

            } catch (error) {
                showAuthAlert('Login failed. Please check your credentials.', 'danger');
                console.error('Login error:', error);
            } finally {
                loginText.classList.remove('d-none');
                loginSpinner.classList.add('d-none');
                loginBtn.disabled = false;
            }
        });
    }

    // Register Form Handler
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const role = document.getElementById('role').value;
            const organization = document.getElementById('organization').value;
            const registerBtn = document.querySelector('#registerForm button[type="submit"]');
            const registerText = document.getElementById('register-text');
            const registerSpinner = document.getElementById('register-spinner');

            // Validate passwords match
            if (password !== confirmPassword) {
                showAuthAlert('Passwords do not match!', 'danger');
                return;
            }

            // Validate password length
            if (password.length < 8) {
                showAuthAlert('Password must be at least 8 characters long!', 'danger');
                return;
            }

            // Show loading state
            registerText.classList.add('d-none');
            registerSpinner.classList.remove('d-none');
            registerBtn.disabled = true;

            try {
                // Firebase Authentication Registration
                // const { createUserWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
                // const { auth, database } = await import('./firebase-config.js');
                // const { ref, set } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');

                // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                // const user = userCredential.user;

                // Store user data in Realtime Database
                // await set(ref(database, 'users/' + user.uid), {
                //     firstName: firstName,
                //     lastName: lastName,
                //     email: email,
                //     role: role,
                //     organization: organization,
                //     createdAt: Date.now()
                // });

                // Simulate registration for demo
                await simulateAsync();
                localStorage.setItem('userRole', role);

                showAuthAlert('Registration successful! Redirecting to login...', 'success');

                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);

            } catch (error) {
                showAuthAlert('Registration failed. Please try again.', 'danger');
                console.error('Registration error:', error);
            } finally {
                registerText.classList.remove('d-none');
                registerSpinner.classList.add('d-none');
                registerBtn.disabled = false;
            }
        });
    }

    // Forgot Password Form Handler
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const resetBtn = document.querySelector('#forgotPasswordForm button[type="submit"]');
            const resetText = document.getElementById('reset-text');
            const resetSpinner = document.getElementById('reset-spinner');

            // Show loading state
            resetText.classList.add('d-none');
            resetSpinner.classList.remove('d-none');
            resetBtn.disabled = true;

            try {
                // Firebase Password Reset
                // const { sendPasswordResetEmail } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
                // const { auth } = await import('./firebase-config.js');
                // await sendPasswordResetEmail(auth, email);

                // Simulate for demo
                await simulateAsync();

                showAuthAlert('Password reset link sent! Please check your email.', 'success');

            } catch (error) {
                showAuthAlert('Failed to send reset link. Please try again.', 'danger');
                console.error('Password reset error:', error);
            } finally {
                resetText.classList.remove('d-none');
                resetSpinner.classList.add('d-none');
                resetBtn.disabled = false;
            }
        });
    }
});

// Helper function to show alerts in auth pages
function showAuthAlert(message, type) {
    const alertDiv = document.getElementById('auth-alert');
    if (alertDiv) {
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        alertDiv.classList.remove('d-none');

        // Auto hide after 5 seconds
        setTimeout(() => {
            alertDiv.classList.add('d-none');
        }, 5000);
    }
}

// Simulate async operation for demo
function simulateAsync() {
    return new Promise(resolve => setTimeout(resolve, 1500));
}

// Check authentication state
function checkAuthState() {
    // Firebase Auth State Observer
    // const { onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
    // const { auth } = await import('./firebase-config.js');

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         console.log('User is signed in:', user);
    //     } else {
    //         console.log('No user signed in');
    //     }
    // });
}

// Logout function
function logout() {
    // const { signOut } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
    // const { auth } = await import('./firebase-config.js');
    // await signOut(auth);

    localStorage.clear();
    window.location.href = 'login.html';
}

// Initialize auth state check
checkAuthState();
