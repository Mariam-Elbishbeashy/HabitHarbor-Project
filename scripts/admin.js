function displayUsers() {
    const adminContent = document.getElementById('admin-content');

    // Clear the current content
    adminContent.innerHTML = '';
    const addButton = document.createElement('button');
    addButton.id = 'add-btn';
    addButton.className = 'admin-btn';
    addButton.classList.add('add-btn');
    addButton.textContent = 'Add';
    adminContent.appendChild(addButton);

    const users = ['Laura Lucas', 'Mariam Bishbeashy','Sama Ahmed', 'Sondos Ahmed', 'Ahmed Hesham'];
    users.forEach(user => {
        // Create a div for each user
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-item');

        // Add user name
        const userName = document.createElement('span');
        userName.textContent = user;
        userDiv.appendChild(userName);

        // Add buttons
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const editUserBtn = document.createElement('button');
        editUserBtn.className = 'admin-btn';
        editUserBtn.id='edit-btn';
        editUserBtn.innerHTML=`
            <i class="bi bi-pencil"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
            </svg>
        `;

        const removeUserBtn = document.createElement('button');
        removeUserBtn.className = 'admin-btn';
        removeUserBtn.id = 'remove-btn';
        removeUserBtn.innerHTML = `
            <i class="bi bi-person-dash"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
            </svg>
        `;
        removeUserBtn.addEventListener('click', function() {
            // Call deleteForm function when remove button is clicked
            deleteForm(user);
        });

       
        buttonsContainer.appendChild(editUserBtn);
        buttonsContainer.appendChild(removeUserBtn);
        userDiv.appendChild(buttonsContainer);
       
        adminContent.appendChild(userDiv);
    });
}
function displayAdmins() {
    const adminContent = document.getElementById('admin-content');
    
    adminContent.innerHTML = '';
    const addButton = document.createElement('button');
    addButton.id = 'add-btn';
    addButton.className = 'admin-btn';
    addButton.classList.add('add-btn');
    addButton.textContent = 'Add';
    adminContent.appendChild(addButton);
    const admins = ['Lara Khaled'];
    admins.forEach(admin => {

        const adminDiv = document.createElement('div');
        adminDiv.classList.add('admin-item');

        const adminName = document.createElement('span');
        adminName.textContent = admin;
        adminDiv.appendChild(adminName);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const editAdminBtn = document.createElement('button');
        editAdminBtn.className = 'admin-btn';
        editAdminBtn.id = 'edit-btn'
        editAdminBtn.innerHTML = `
            <i class="bi bi-pencil"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293z"/>
            </svg>
        `;
        
        const removeAdminBtn = document.createElement('button');
        removeAdminBtn.className = 'admin-btn';
        removeAdminBtn.id = 'remove-btn';
        removeAdminBtn.innerHTML = `
            <i class="bi bi-person-dash"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
            </svg>
        `;
        removeAdminBtn.addEventListener('click', function() {
            // Call deleteForm function when remove button is clicked
            deleteForm(admin);
        });
        
        buttonsContainer.appendChild(editAdminBtn);
        buttonsContainer.appendChild(removeAdminBtn);
        adminDiv.appendChild(buttonsContainer);

        adminContent.appendChild(adminDiv);
    });
}

function displayDailyChallenges(category) {
    const adminContent = document.getElementById('admin-content');
    adminContent.innerHTML = '';
    const addButton = document.createElement('button');
    addButton.id = 'add-btn';
    addButton.className = 'admin-btn';
    addButton.classList.add('add-btn');
    addButton.textContent = 'Add';
    adminContent.appendChild(addButton);

    const dailyChallenges = {
        Physical: ['Run for an hour', 'Swim for 30 minutes'],
        WellBeing: ['Meditate for 20 minutes', 'Practice yoga for 30 minutes'],
        Nutrition: ['No sugar for today', 'Eat 5 servings of fruits and vegetables']
    };

    
    const challenges = dailyChallenges[category];

    
    challenges.forEach(activity => {
        const activityDiv = document.createElement('div');
        activityDiv.classList.add('activity-item');

        const activityName = document.createElement('span');
        activityName.textContent = activity;
        activityDiv.appendChild(activityName);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const editActivityBtn = document.createElement('button');
        editActivityBtn.className = 'admin-btn';
        editActivityBtn.id = 'edit-btn';
        editActivityBtn.innerHTML = `
            <i class="bi bi-pencil"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293z"/>
            </svg>
        `;

        const removeActivityBtn = document.createElement('button');
        removeActivityBtn.className = 'admin-btn';
        removeActivityBtn.id = 'remove-btn';
        removeActivityBtn.innerHTML = `
            <i class="bi bi-x-lg"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
        `;
        removeActivityBtn.addEventListener('click', function() {
            // Call deleteForm with the necessary parameters
            deleteForm(activity);
        });
        buttonsContainer.appendChild(editActivityBtn);
        buttonsContainer.appendChild(removeActivityBtn);
        activityDiv.appendChild(buttonsContainer);

        adminContent.appendChild(activityDiv);
    });
}

// Function to show or hide the User category buttons
function showUserCategory() {
    const userCategory = document.querySelector('.user-category');
    userCategory.style.display = userCategory.style.display === 'none' || userCategory.style.display === '' ? 'block' : 'none';
    const challengesCategory = document.querySelector('.challenges-category');
    challengesCategory.style.display = 'none';
}

// Function to show or hide the Daily Challenges category buttons
function showChallengesCategory() {
    const challengesCategory = document.querySelector('.challenges-category');
    challengesCategory.style.display = challengesCategory.style.display === 'none' || challengesCategory.style.display === '' ? 'block' : 'none';
    const userCategory = document.querySelector('.user-category');
    userCategory.style.display = 'none';
}

// Function to activate a button and add the active state
function activateButton(buttonId) {
    const buttons = document.querySelectorAll('.admin-btn');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.getElementById(buttonId);
    activeButton.classList.add('active');
}
function deleteForm(form){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title: "Deleted!",
            text: "Activity has been deleted.",
            icon: "success"
        });
        }
    });
}
