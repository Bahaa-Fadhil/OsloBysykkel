/*
Copyright (c) 2019, Bahaa Fadhil <www.Bahaa.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Application was not tested against server data, and therefore some error handling may occur!

Application task in this script is to display all available bikes and locks on each satations!
*/


const BysykkelApp = document.getElementById('rootAppAvailability'); // Creat const to load HTML id
const logo = document.createElement('img');  // Creat const to load logo img
logo.src = 'Photo/Oslo-Logo.png';
const container = document.createElement('div'); // Creat container to load data to Html-file
container.setAttribute('class', 'container');

BysykkelApp.appendChild(logo);
BysykkelApp.appendChild(container);


// Read funcation - Assemble url, client id and options together
$(document).ready(function () {
  var ClientKey = ['Your API ClientKey'];
  var URL = 'https://oslobysykkel.no/api/v1/stations/availability';
  var options = {
        json: true,
        headers: { 'Client-Identifier' : ClientKey }
  }

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();
    request.open('GET', URL, options, true);
    request.onload = function (data) {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
  
    // chach if not a error or  0
    if (request.data.error == 0) {

         // Load each Stations details by ForEach method
        data.forEach(stations => {
          const card = document.createElement('div'); 
          card.setAttribute('class', 'card');

           // Creating a const and Load Stations title
          const h1 = document.createElement('h1');
          h1.textContent = stations.title;

          // Creating a const and Load Stations id like a title
          const p1 = document.createElement('p');
          stations.availability.bikes = stations.availability.bikes;
          p.textContent = `Station ID: ${stations.availability.id}`;

           // Creating a const and Load Stations-availability-bikes
          const p2 = document.createElement('p');
          stations.availability.bikes = stations.availability.bikes;
          p.textContent = `Available Bikes: ${stations.availability.bikes}`;

           // Creating a constander and Load Stations-availability-locks
          const p3 = document.createElement('p');
          stations.availability.locks = stations.availability.locks;
          p.textContent = `Available Locks: ${stations.availability.locks}`;

            // Creating a container and present the Info like a card with Stations details (id, (availability-bikes & locks))
          container.appendChild(card);
          card.appendChild(h1);
          card.appendChild(p1);
          card.appendChild(p2);
          card.appendChild(p3);
        });
    
    } else {
      // If there is any error with funcation display message below
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Uff, it's not working!`;
      BysykkelApp.appendChild(errorMessage);
    }
  }

});

request.send();
