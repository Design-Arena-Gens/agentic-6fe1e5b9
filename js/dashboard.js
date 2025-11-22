// Dashboard JavaScript
// Handles dashboard interactions and sidebar toggle

document.addEventListener('DOMContentLoaded', function() {

    // Sidebar toggle for mobile
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }

    // Logout button handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();

            if (confirm('Are you sure you want to logout?')) {
                // Firebase sign out
                // const { signOut } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
                // const { auth } = await import('./firebase-config.js');
                // await signOut(auth);

                localStorage.clear();
                window.location.href = 'login.html';
            }
        });
    }

    // Search functionality
    const searchUsers = document.getElementById('searchUsers');
    if (searchUsers) {
        searchUsers.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const tableRows = document.querySelectorAll('#usersTable tbody tr');

            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Filter functionality
    const filterRole = document.getElementById('filterRole');
    const filterStatus = document.getElementById('filterStatus');

    if (filterRole) {
        filterRole.addEventListener('change', applyFilters);
    }

    if (filterStatus) {
        filterStatus.addEventListener('change', applyFilters);
    }

    function applyFilters() {
        const roleFilter = document.getElementById('filterRole')?.value.toLowerCase();
        const statusFilter = document.getElementById('filterStatus')?.value.toLowerCase();
        const tableRows = document.querySelectorAll('#usersTable tbody tr');

        tableRows.forEach(row => {
            const role = row.querySelector('td:nth-child(3)')?.textContent.toLowerCase();
            const status = row.querySelector('td:nth-child(5)')?.textContent.toLowerCase();

            let showRow = true;

            if (roleFilter && !role.includes(roleFilter)) {
                showRow = false;
            }

            if (statusFilter && !status.includes(statusFilter)) {
                showRow = false;
            }

            row.style.display = showRow ? '' : 'none';
        });
    }

    // Add User Modal Form Handler
    const addUserForm = document.getElementById('addUserForm');
    if (addUserForm) {
        addUserForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(addUserForm);
            const userData = Object.fromEntries(formData);

            try {
                // Firebase Database Write
                // const { ref, push } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
                // const { database } = await import('./firebase-config.js');

                // await push(ref(database, 'users'), {
                //     ...userData,
                //     createdAt: Date.now()
                // });

                // Simulate for demo
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (typeof bootstrap !== 'undefined') {
                    const modal = bootstrap.Modal.getInstance(document.getElementById('addUserModal'));
                    modal?.hide();
                }

                if (window.NeuroNexus) {
                    window.NeuroNexus.showAlert('User added successfully!', 'success');
                }

                addUserForm.reset();

                // Reload page to show new user
                setTimeout(() => location.reload(), 1500);

            } catch (error) {
                console.error('Error adding user:', error);
                if (window.NeuroNexus) {
                    window.NeuroNexus.showAlert('Failed to add user. Please try again.', 'danger');
                }
            }
        });
    }

    // Delete button handlers
    document.querySelectorAll('.btn-outline-danger').forEach(button => {
        if (button.querySelector('.bi-trash')) {
            button.addEventListener('click', function(e) {
                if (confirm('Are you sure you want to delete this item?')) {
                    const row = this.closest('tr');

                    // Firebase Database Delete
                    // const { ref, remove } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
                    // const { database } = await import('./firebase-config.js');
                    // await remove(ref(database, 'path/to/item'));

                    row.remove();

                    if (window.NeuroNexus) {
                        window.NeuroNexus.showAlert('Item deleted successfully!', 'success');
                    }
                }
            });
        }
    });

    // Real-time updates listener (for Firebase)
    function setupRealtimeListeners() {
        // Firebase Realtime Database listeners
        // const { ref, onValue } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
        // const { database } = await import('./firebase-config.js');

        // const usersRef = ref(database, 'users');
        // onValue(usersRef, (snapshot) => {
        //     const data = snapshot.val();
        //     console.log('Users data updated:', data);
        //     // Update UI with new data
        // });
    }

    // Initialize real-time listeners
    // setupRealtimeListeners();

    // Auto-refresh dashboard stats every 30 seconds
    setInterval(() => {
        // Fetch and update dashboard statistics
        // This would typically call your API or Firebase
        console.log('Refreshing dashboard stats...');
    }, 30000);

    // Initialize charts if on dashboard page
    if (document.getElementById('admin-dashboard') || document.getElementById('lab-dashboard')) {
        initializeDashboard();
    }
});

function initializeDashboard() {
    // Initialize any charts or dynamic content
    console.log('Dashboard initialized');

    // Load dashboard data
    loadDashboardData();
}

async function loadDashboardData() {
    try {
        // Firebase Database Read
        // const { ref, get } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
        // const { database } = await import('./firebase-config.js');

        // const snapshot = await get(ref(database, 'dashboard'));
        // const data = snapshot.val();

        // Update dashboard with data
        console.log('Dashboard data loaded');

    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

// Export functions for external use
window.DashboardUtils = {
    initializeDashboard,
    loadDashboardData
};
