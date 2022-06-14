var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttributes('src');
    if(mySrc ==='file:///E:/Desain%20Web/Labwork%207%20javascript/beginner-html-site-styled-gh-pages/images/firefox-icon.png') {
        myImage.setAttribute ('src','file:///E:/Desain%20Web/Labwork%207%20javascript/beginner-html-site-styled-gh-pages/images/Cara-menggunakan-pencarian-foto-terbalik-di-gambar-Google.jpg');
    } else {
    myImage.setAttributeNS ('src','file:///E:/Desain%20Web/Labwork%207%20javascript/beginner-html-site-styled-gh-pages/images/firefox-icon.png')
    }    
}