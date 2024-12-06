const toggleFormLink = document.getElementById('toggle-form');
const toggleFormLinkSignup = document.getElementById('toggle-form-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formTitle = document.getElementById('form-title');

// Toggle between Login and Signup
toggleFormLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Show Sign Up Form and Hide Login Form
  loginForm.classList.add('d-none');
  signupForm.classList.remove('d-none');
  formTitle.textContent = 'Sign Up';
  toggleFormLinkSignup.textContent = 'Already have an account? Log In';
});

toggleFormLinkSignup.addEventListener('click', (e) => {
  e.preventDefault();
  // Show Login Form and Hide Sign Up Form
  signupForm.classList.add('d-none');
  loginForm.classList.remove('d-none');
  formTitle.textContent = 'Log in';
  toggleFormLink.textContent = "Don't have an account? Sign Up";
});

// Form submit handlers (for redirection)
document.getElementById('auth-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // After login, redirect to index page
  window.location.href = "index.html"; // Redirect to homepage or dashboard
});

document.getElementById('signup-auth-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // After successful signup, redirect back to login page
  signupForm.classList.add('d-none');
  loginForm.classList.remove('d-none');
  formTitle.textContent = 'Log in';
  toggleFormLink.textContent = "Don't have an account? Sign Up";
});
