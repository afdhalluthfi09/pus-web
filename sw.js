self.addEventListener('push',()=>{
    self.registartion.sendNotification('test message',{});
});