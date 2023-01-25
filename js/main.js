// Get DOM Elements

const markAllAsReadElement = document.querySelector('.header_link')

//Listend for click events 

markAllAsReadElement.addEventListener('click', markAllAsRead)

//Mark all notifications as read
function markAllAsRead() {
    //Get all unread notifications
    const unreadNotifications = document.querySelectorAll(".notification--unread");
    unreadNotifications.forEach((notification) =>
      notification.classList.remove('notification--unread')
    );
}

