var push = require('web-push')

//cara mendapatakan public dan  private key 

/* 
   jika sudah menjalankan  perintah di bawah ini dengan perintah -node push.js-
   maka tulis kembali seperti code selanjutnya
   let vapidKeys =push.generateVAPIDKeys();
   console.log(vapidKeys) 
   
*/

let vapidKeys ={
  publicKey: 'BL573nj_9EpSn5A39nXhcPQEKLR15V7TBQwTJkZwxUFliIDgX1jhJS8sD7VYLwKeUb5mhdDZ3_ofNi5bWPBzDxI',
  privateKey: 'xF25SnH8ApUyNvYGUG8Us-IzdEzUqt_ES7NzxgTc9bI'
}

push.setVapidDetails('mailto:luthfi@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey)
var sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/fdIBIcYBavU:APA91bEhM2usdYGXouKnBAKIvyuUGUy99cLkJzozersXkWoRzqVXXMBK1W4aEvlpb2Fsrn_fr2NJ_3VzbhlfpS8Birenh-kCQcw-mTntytLRRU6gxGlb505zD9LxO9xl_RsTXQX2wCyo","expirationTime":null,"keys":{"p256dh":"BGc0HlAdhBxForT4XvYV0PESiVHffNnnCjkbfRfiXf8NydXM2HgPnip_vISnBMLRj_vZIaE1-q2sWqIt2b-DAkk","auth":"OWdFhJSeNaDzuz_GZOxdiA"}};
push.sendNotification(sub,'tes pesan')