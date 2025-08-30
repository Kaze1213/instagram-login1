document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginBtn.addEventListener('click', handleLogin);

    async function handleLogin(e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Login successful!');
                usernameInput.value = '';
                passwordInput.value = '';
            } else {
                alert(data.message || 'Login failed');
            }

        } catch (error) {
            console.error('Login error:', error);
            alert('Server connection error');
        }
    }
});