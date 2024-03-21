let htmlBtn = document.querySelector('.get-html-btn');
let cssBtn = document.querySelector('.get-css-btn');
let jsBtn = document.querySelector('.get-javascritp-btn');
let nodeBtn = document.querySelector('.get-node-btn');
let mongodbBtn = document.querySelector('.get-mongodb-btn');
let dsaBtn = document.querySelector('.get-dsa-btn');

let htmlContainer = document.querySelector('.html-topic-container');
let cssContainer = document.querySelector('.css-topic-container');
let jsContainer = document.querySelector('.javascritp-topic-container');
let nodeContainer = document.querySelector('.node-topic-container');
let mongodbContainer = document.querySelector('.mongodb-topic-container');
let dsaContainer = document.querySelector('.dsa-topic-container');

function fetchData(url) {
    let promise = new Promise((resolve) => {
        const request = new XMLHttpRequest();
        request.open('GET', `http://localhost:3000/${url}`, true);
        request.send();
        request.onreadystatechange = () => {
            if(request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText));
            }
        }
    })
    return promise;
}

// async function docData() {
//     const response = await fetch("http://localhost:3000/65faf759a3ec10c637bea19f");
//     const data = await response.json();
// //   } // Another way to fetch data like XMLHttpRequest()...


htmlBtn.addEventListener('click', () => {
    let topic = '1.' + Math.ceil(Math.random() * 37);
    fetchData('65faf759a3ec10c637bea19f')
    .then((docData) => {
        htmlContainer.innerText = `${topic} => ${docData[topic]}`;
    })
});

cssBtn.addEventListener('click', () => {
    let topic = '2.' + Math.ceil(Math.random() * 38);
    fetchData('65faf798a3ec10c637bed88b')
    .then((docData) => {
        cssContainer.innerText = `${topic} => ${docData[topic]}`;
    })
});

jsBtn.addEventListener('click', () => {
    let topic = '3.' + Math.ceil(Math.random() * 58);
    fetchData('65faf7b3a3ec10c637bee08f')
    .then((docData) => {
        jsContainer.innerText = `${topic} => ${docData[topic]}`;
    })
});

nodeBtn.addEventListener('click', () => {
    let topic = '4.' + Math.ceil(Math.random() * 63);
    fetchData('65faf7cba3ec10c637beea7e')
    .then((docData) => {
        nodeContainer.innerText = `${topic} => ${docData[topic]}`;
    })
});

mongodbBtn.addEventListener('click', () => {
    let topic = '5.' + Math.ceil(Math.random() * 25);
    fetchData('65faf7e8a3ec10c637bef3ae')
    .then((docData) => {
        mongodbContainer.innerText = `${topic} => ${docData[topic]}`;
    })
});

dsaBtn.addEventListener('click', () => {
    let alOrDs = Math.ceil(Math.random() * 2);
    if(alOrDs === 1) {
        let topic = Math.ceil(Math.random() * 5);
        fetchData('65faf805a3ec10c637bf234d')
        .then((docData) => {
            dsaContainer.innerText = `${topic} => ${docData[topic]} [Alogrithm]`;
        })
    } else {
        let topic = '3.' + Math.ceil(Math.random() * 11);
        if(topic == 3.10) {
            topic = '2';
        } else if(topic == 3.11) {
            topic = '4';
        }
        fetchData('65faf81fa3ec10c637bf2c01')
        .then((docData) => {
            dsaContainer.innerText = `${topic} => ${docData[topic]}  [Data Structure]`;
        })
    }
});