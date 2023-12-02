    function showModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'block';
    }

    function hideModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }

    function lockUser() {
        alert('User locked!');
        hideModal();
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        var modal = document.getElementById('myModal');
        if (event.target === modal) {
            hideModal();
        }
    };
    function showLockModal() {
        var modal = document.getElementById('lockModal');
        modal.style.display = 'block';
    }

    function hideLockModal() {
        var modal = document.getElementById('lockModal');
        modal.style.display = 'none';
    }

    function lockUser() {
        alert('User locked!');
        hideLockModal();
    }

    function showUnlockModal() {
        var modal = document.getElementById('unlockModal');
        modal.style.display = 'block';
    }

    function hideUnlockModal() {
        var modal = document.getElementById('unlockModal');
        modal.style.display = 'none';
    }

    function unlockUser() {
        alert('User unlocked!');
        hideUnlockModal();
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        var lockModal = document.getElementById('lockModal');
        var unlockModal = document.getElementById('unlockModal');
        if (event.target === lockModal) {
            hideLockModal();
        } else if (event.target === unlockModal) {
            hideUnlockModal();
        }
    };  