var count = 0;
document.addEventListener("DOMContentLoaded", function() {
    const commentBtns = document.querySelectorAll('.comment-btn');

    commentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const commentInput = btn.parentElement.querySelector('.comment-input'); 
            const commentList = btn.parentElement.querySelector('.comment-list'); 
            commentInput.classList.toggle('show-comment-input');
            commentList.classList.toggle('show-comment-list');
        });
    });

    const sendBtns = document.querySelectorAll('.comment-send-btn');

    sendBtns.forEach(btn => {
        count++;
        btn.addEventListener('click', function() {
            const commentField = btn.parentElement.querySelector('.comment-field'); 
            const commentText = commentField.value.trim();

            if (commentText !== '') {
                const commentList = btn.parentElement.parentElement.querySelector('.comment-list');
                const newComment = document.createElement('div');
                newComment.classList.add('comment');
                newComment.innerHTML = `
                    <img src="./images/profile-pic.png" alt="your profile pic" class="your-profile-pic"/>
                    <h4 class="user-name">User Name</h4>
                    <p>${commentText}</p>
                `;

                commentList.appendChild(newComment);
                commentField.value = '';
                commentList.classList.add('show-comment-list');
            }
        });
    });
});
