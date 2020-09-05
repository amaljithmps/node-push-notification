console.log('Service Worker loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Recieved...');
    self.registration.showNotification(data.title, {
        body: 'Notified by admin',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-Ur5t_tg3BxCzyZ4HWJNv_Du4pr_nzqHn-Q&usqp=CAU'
    });
});