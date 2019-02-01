/*
Copyright (c) 2019, Bahaa Fadhil <www.Bahaa.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Application was not tested against server data, and therefore some error handling may occur!

Application task in this script is display all data for all satations
*/


  const BysykkelApp = document.getElementById('rootApp'); // Creat const to load HTML id
  const logo = document.createElement('img');  // Creat const to load logo img
  logo.src = 'Photo/Oslo-Logo.png';
  const container = document.createElement('div'); // Creat container to load data to Html-file
  container.setAttribute('class', 'container');

  BysykkelApp.appendChild(logo);
  BysykkelApp.appendChild(container);


  // Read funcation - Assemble url, client id and options together
  $(document).ready(function () {
    var ClientKey = ['Your API ClientKey'];
    var URL = 'https://oslobysykkel.no/api/v1/stations';
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

             // Creating a const and Load Stations-subtitle
            const p1 = document.createElement('p');
            stations.subtitle = stations.subtitle.substring(0, 200);
            p.textContent = `Subtitle: ${stations.subtitle}...`;

             // Creating a const and Load Stations-in_Service
            const p2 = document.createElement('p');
            stations.in_service = stations.in_service;
            p.textContent = `In service: ${stations.in_service}...`;

             // Creating a constander and Load Stations-number of loack into it
            const p3 = document.createElement('p');
            stations.number_of_locks = stations.number_of_locks;
            p.textContent = `Number of locks: ${stations.number_of_locks}...`;

             // Creating a container and present the Info like a card with Stations details
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
