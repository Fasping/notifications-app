// Get DOM Elements

const markAllAsReadElement = document.querySelector('.header_link')
const unreadCountElement = document.querySelector('.unread-count')

//Listend for click events 

markAllAsReadElement.addEventListener('click', () => {
    markAllAsRead()
    resetUnreadCount()
})

//Mark all notifications as read
function markAllAsRead() {
   
    const unreadNotifications = document.querySelectorAll(".notification--unread");
    unreadNotifications.forEach((notification) =>
      notification.classList.remove('notification--unread')
    );
}

function resetUnreadCount() {
    unreadCountElement.textContent = '0'

}

