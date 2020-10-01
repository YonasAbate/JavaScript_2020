// Destructuring

let wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
            twitter: 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/wesbos.developer',
        },
        web: {
            blog: 'https://wesbos.com'
        }
    }
};

let { twitter, facebook } = wes.links.social;
console.log(twitter, facebook); // logs the 2 variables