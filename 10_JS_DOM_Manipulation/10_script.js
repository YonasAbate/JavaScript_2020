/**
           DOM Manipulation
Document Object Model (DOM)
  1.  Document => html document
  2.  Window   => Browser
 */
 // CSS => nav{}  
 // JS  => (document.querySelector('nav'));
 // Jquery => $('nav')

      // <nav id='test'>
 // CSS => #test{}; 
 // JS  => (document.querySelector('#test'));
 // Jquery => $('#test');

         // <nav id='test'>
// CSS =>  .name{}; 
 // JS  => (document.querySelector('.test'));
 // Jquery => $('.test');         

 console.log(document);

 // head
 console.log(document.head);

 // title
 console.log(document.title);
 document.title = 'DOM javaScript';

 // body
 console.log(document.body);

 // nav
 let navTag = document.querySelector('nav')
console.log(navTag);

 // anchor tag
 let anchorTag = document.querySelector('nav a');
 console.log(anchorTag);
 
 // inner text 
 let theText = anchorTag.innerText;
 console.log(theText);

 // change the inner text
//  anchorTag.innerText = 'Yonas Admassie';

 // h1 tag access from html
 let h1Tag = document.querySelector('#npm')
 console.log(h1Tag);

         // style using javaScript
//  h1Tag.style.backgroundColor = 'limeGreen';
//  h1Tag.style.textAlign = 'center';
//  h1Tag.style.padding = '15px';
//  h1Tag.style.fontSize = '45px';
//  h1Tag.style.boxShadow = '0 0 10px red';