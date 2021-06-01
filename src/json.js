//import axios from 'axios';
const API_URL = 'http://localhost:8000';
let suka = []

function getResults() {

    const url = `${API_URL}/api/v1/results/`;

    return axios({
        method: 'get',
        url: url,
        // data: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI0ODg2MzkwLCJqdGkiOiI3ZTIxZGZmY2YzOGU0YmJlYjNmOWM4NGUxYzYxNWQ2ZCIsInVzZXJfaWQiOjF9._I8CimQyZ2vjcIWwpPfsAZdPfm36_slqDy9fDJ3Cbic'
        },
    }).then(response => response.data);

}

var test = getResults().then(function(result) {
    suka.push(result)
});


function waitForDOM() {
    if (suka.length) {
        json = suka[0]
        console.log(json)
        json.values.forEach((item) => {
            document.getElementById("my-values").insertAdjacentHTML(
                "beforeend",
                `
                    <span>${item.id}. ${item.data}</span>
                `
            );
        });

        json.principles.forEach((item) => {
            document.getElementById("my-principles").insertAdjacentHTML(
                "beforeend",
                `
                    <span>${item.id}. ${item.data}</span>
                `
            );
        });

        json.quotes.forEach((item) => {
            document.getElementById("my-quotes").insertAdjacentHTML(
                "beforeend",
                `
                    <li><span>${item.data}</span></li>
                `
            );
        });

        json.algorithms_business.forEach((item) => {
            document.getElementById("content-business").insertAdjacentHTML(
                "beforeend",
                `
                <div class="notes">
                    <span contentEditable="true">${item.id}. ${item.data}</span>
                </div>
                `
            );
        });

        json.algorithms_relationships.forEach((item) => {
            document.getElementById("content-relationships").insertAdjacentHTML(
                "beforeend",
                `
                <div class="notes">
                    <span contentEditable="true">${item.id}. ${item.data}</span>
                </div>
                `
            );
        });

    } else {
        setTimeout(waitForDOM, 300);
    }
}

waitForDOM()