const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


let logo = document.getElementById('logo-img')
logo.setAttribute('src', '/img/logo.png')


//how to add a tags via DOM
//nav bar code here


const bigLogo = document.getElementById('cta-img');
bigLogo.setAttribute('src', siteContent['cta']['img-src'])
bigLogo.style.marginLeft='4rem'


const aTags = document.querySelectorAll(' nav a');
let aTagArray = Array.from(aTags);
let stringArray = ['Services','Products','Vision','Features','About','Contact'];

for(let i = 0; i < stringArray.length; i++){
  let aTagColor = aTagArray.map((item,index) => item.textContent=stringArray[index])
 }

console.log(aTags)

const newNavTag = document.createElement('a')
newNavTag.innerHTML='FAQ'
document.querySelector('nav').appendChild(newNavTag)

const newNavTag2 = document.createElement('a')
newNavTag2.innerHTML='Careers'
document.querySelector('nav').prepend(newNavTag2)


const headNavColor = document.querySelectorAll('header nav a')
headNavColor.forEach(item => item.style.color='green')




const headerOne = document.querySelector('.cta-text h1');
headerOne.innerText='DOM\n IS \nAWESOME'

const buttonStyle = document.querySelector('.cta-text button');
buttonStyle.textContent='Get Started'


const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])



const topContent = document.querySelectorAll('.top-content .text-content');

const topContArr = Array.from(topContent);
console.log(topContArr)

const topDivTitle = document.querySelector('.top-content .text-content h4')

topDivTitle.textContent=`Features`

const topDivPara = topDivTitle.nextElementSibling;
topDivPara.textContent=`Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odi
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`


const topDivTitle2 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
topDivTitle2.textContent='About';
const topDivPara2 = document.querySelector('.top-content .text-content:nth-of-type(2) p');
topDivPara2.textContent=`About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const botDivHead = document.querySelector('.bottom-content .text-content h4')
botDivHead.textContent='Services';
const botDivPara = document.querySelector('.bottom-content .text-content p')
botDivPara.textContent=`Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis`

const botDivHead2 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
// console.log(botDivHead2)
botDivHead2.textContent='Product';

const botDivPara2 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
botDivPara2.textContent=`Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const botDivHead3 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
botDivHead3.textContent = `Vision`

const botDivPara3 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
botDivPara3.textContent=`Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const footerTitle = document.querySelector('.contact h4')
footerTitle.textContent=`Contact`

const address1 = footerTitle.nextElementSibling;
address1.innerText="123 Way 456 Street\n Somewhere, USA"

const phoneNum = address1.nextElementSibling;
phoneNum.textContent="1 (888) 888-8888 "

const email =phoneNum.nextElementSibling;
email.textContent="sales@greatidea.io"

const footer = document.querySelector('footer p')
footer.textContent=`Copyright Great Idea! 2018`


//need to add 2 new nav items

