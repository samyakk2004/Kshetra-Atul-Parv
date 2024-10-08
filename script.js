// const overlay = document.getElementById('overlay-container');
// const detailOverlay = document.getElementById('detail-overlay-container');
// const overlayHeading = document.getElementById('overlay-heading');
// const overlayListHeading = document.getElementById('overlay-list-heading');
// const zpButton = document.getElementById('show-zp-list');
// const yuvaButton = document.getElementById('show-yuva-campaign');
// const mahilaButton = document.getElementById('show-mahila-campaign');
// const covidButton = document.getElementById('show-covid-beneficiaries');
// const schoolAlumnisButton = document.getElementById('show-school-alumnis');
// const closeButton = document.getElementById('close-overlay');
// const closeDetailButton = document.getElementById('close-detail-overlay');
// const detailList = document.getElementById('detail-list');
// const searchInput = document.getElementById('village-search');

// const zpData = {
//     "Varunji": [
//         ["Koyana Vasahat", "415539"],
//         ["Chachegaon", "415122"],
//         ["Nandlapur", "415539"],
//         ["Jakhinwadi", "415539"],
//         ["Chougulemala(Kale)", "415104"],
//         ["Chapane Mala (Kale)", "415104"],
//         ["Dhondewadi", "415104"],
//         ["Kale Teck", "415104"],
//         ["Vanvasmachi", "415105"],
//         ["Khodashi", "415124"],
//         ["Mundhe", "415124"],
//         ["Varunji", "415124"],
//         ["Gote", "415124"],
//         ["Vijaynagar", "415124"],
//         ["Vahagaon", "415124"],
//         ["Ghonshi", "415124"]
//     ],
//     "Kale": [
//         ["Tulsan", "415111"],
//         ["Vithobachiwadi", "415111"],
//         ["Ond", "415111"],
//         ["Thorat Mala (Ond)", "415111"],
//         ["Kalawade", "415539"],
//         ["Kasarshirambe", "415539"],
//         ["Belawade Bu.", "415539"],
//         ["Pachuptewadi", "415111"],
//         ["Kale", "415104"],
//         ["Munavale", "415539"],
//         ["Nandgaon", "415111"],
//         ["Pawarwadi", "415111"],
//         ["Ondoshi-Patilmala", "415111"],
//         ["Wathar", "415539"],
//         ["Malkhed", "415539"],
//         ["Sanjaynagar Kale", "415104"]
//     ],
//     "Wing": [
//         ["Ambawade", "415103"],
//         ["Ane", "415103"],
//         ["Kole", "415103"],
//         ["Shinganwadi", "415103"],
//         ["Kusur", "415103"],
//         ["Kolewadi", "415103"],
//         ["Shindewadi", "415122"],
//         ["Tarukh", "415103"],
//         ["Vanarwadi/Pawarwadi", "415103"],
//         ["Bamanwadi/Shibewadi", "415103"],
//         ["Potale", "415103"],
//         ["Gharewadi", "415103"],
//         ["Yenake", "415103"],
//         ["Yerawale", "415122"],
//         ["Wing", "415122"],
//         ["Kirape", "415114"]
//     ],
//     "Yelgaon": [
//         ["Undale", "415111"],
//         ["Manav / Manu", "415111"],
//         ["Shewalewadi (Undale)", "415111"],
//         ["Talgaon", "415111"],
//         ["Salshirambe", "415111"],
//         ["Khudyachiwadi", "415111"],
//         ["Maharugadewadi", "415111"],
//         ["Jinti (Undale)", "415111"],
//         ["Akaichiwadi", "415111"],
//         ["Ghogaon", "415111"],
//         ["Sawade", "415111"],
//         ["Bandekarwadi", "415111"],
//         ["Halelwadi", "415111"],
//         ["Latakewadi", "415111"],
//         ["Mhasoli", "415111"],
//         ["Shewalewadi (Mhasoli)", "415111"],
//         ["Shelakewadi (Yevati)", "415111"],
//         ["Shewalewadi (Yewati)", "415111"],
//         ["Hanmantwadi", "415111"],
//         ["Gharalwadi", "415111"],
//         ["Bhurbushi", "415111"],
//         ["Yelgaon", "415111"],
//         ["Gotewadi", "415111"],
//         ["Bharewadi", "415111"],
//         ["Ganeshwadi", "415111"],
//         ["Yenape", "415111"],
//         ["Chormarwadi (Yenape)", "415111"],
//         ["Matekarwadi (Yenape)", "415111"],
//         ["Loharwadi (Yenape)", "415111"],
//         ["Yevati", "415111"]
//     ],
//     "Rethare BK": [
//         ["Atake", "415539"],
//         ["Rethare Khurd", "415108"],
//         ["Rethare Budruk", "415108"],
//         ["Shere", "415108"],
//         ["Shenoli", "415108"],
//         ["Gondi", "415108"],
//         ["Julewadi", "415108"],
//         ["Khubi", "415108"]
//     ],
//     "Karve": [
//         ["Karve", "415124"],
//         ["Vadgaon Haveli", "415124"],
//         ["Goleshwar", "415124"],
//         ["Kapil", "415124"],
//         ["Kodoli", "415124"],
//         ["Dushere", "415108"],
//         ["Jujarwadi", "415539"],
//         ["Narayanwadi", "415539"]
//     ],
//     "Saidapur": [
//         ["Saidapur", "415124"],
//         ["Goware", "415105"]
//     ],
//     "Malkapur": [
//         ["Agashivnagar", "415539"],
//         ["Malkapur", "415539"]
//     ],
//     "Karad City": [
//         ["Somvarpeth", "415110"],
//         ["Mangalvarpeth", "415110"],
//         ["Budhvarpeth", "415110"],
//         ["Guruvarpeth", "415110"],
//         ["Shukruvarpeth", "415110"],
//         ["Shanivarpeth", "415110"],
//         ["Ravivarpeth", "415110"]
//     ]
// };

// function openOverlay(title, listTitle, showSchoolAlumnis) {
//     overlayHeading.textContent = title;
//     overlayListHeading.textContent = listTitle;
//     if (showSchoolAlumnis) {
//         overlay.classList.add('school-alumnis-active');
//         document.getElementById('village-search').style.display = 'none'; 
//         document.getElementById('not-found-message').style.display = 'none'; 
//     } else {
//         overlay.classList.remove('school-alumnis-active');
//         document.getElementById('village-search').style.display = 'block'; 
//     }
//     overlay.classList.add('active');
// }

// function openDetailOverlay(title, details) {
//     detailList.innerHTML = details.map(item => `
//         <div class="detail-header">
//             <div class="detail-column">${item[0]}</div>
//             <div class="detail-column">${item[1]}</div>
//         </div>
//     `).join('');
//     document.getElementById('detail-overlay-heading').textContent = title;
//     detailOverlay.classList.add('active');
// }

// zpButton.addEventListener('click', function() {
//     openOverlay('Door 2 Door Campaign', 'ZP List', false);
// });

// yuvaButton.addEventListener('click', function() {
//     openOverlay('Yuva Campaign', 'ZP List', false);
// });

// mahilaButton.addEventListener('click', function() {
//     openOverlay('Mahila Campaign', 'ZP List', false);
// });

// schoolAlumnisButton.addEventListener('click', function() {
//     openOverlay('School Alumnis', 'School Alumnis List', true);
//     document.getElementById('village-search').style.display = 'none'; 
//     document.getElementById('not-found-message').style.display = 'none'; 
// });

// document.querySelectorAll('.list-link').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         const zpName = this.textContent;
//         if (zpData[zpName]) {
//             const details = zpData[zpName];
//             openDetailOverlay(zpName, details);
//         }
//     });
// });

// closeButton.addEventListener('click', function() {
//     overlay.classList.remove('active');
//     overlay.classList.remove('school-alumnis-active');
// });

// closeDetailButton.addEventListener('click', function() {
//     detailOverlay.classList.remove('active');
// });

// searchInput.addEventListener('keyup', function() {
//     const searchTerm = searchInput.value.toLowerCase().trim();
//     const listItems = document.querySelectorAll('#overlay-list li');

   
//     listItems.forEach(item => item.style.display = 'none');

    
//     listItems.forEach(item => {
//         if (item.textContent.toLowerCase().trim().startsWith(searchTerm)) {
//             item.style.display = 'block';
//         }
//     });

    
//     if (Array.prototype.filter.call(listItems, item => item.style.display === 'block').length === 0) {
//         document.getElementById('not-found-message').style.display = 'block';
//     } else {
//         document.getElementById('not-found-message').style.display = 'none';
//     }
// });


// const detailSearchInput = document.getElementById('detail-village-search');
// detailSearchInput.addEventListener('keyup', function() {
//     const searchTerm = detailSearchInput.value.toLowerCase().trim();
//     const detailListItems = document.querySelectorAll('#detail-list .detail-header');

    
//     detailListItems.forEach(item => item.style.display = 'none');

    
//     detailListItems.forEach(item => {
//         const villageName = item.querySelector('.detail-column:first-child').textContent.toLowerCase().trim();
//         if (villageName.startsWith(searchTerm)) {
//             item.style.display = 'flex';
//         }
//     });

    
//     if (Array.prototype.filter.call(detailListItems, item => item.style.display === 'flex').length === 0) {
//         document.getElementById('detail-not-found-message').style.display = 'block';
//     } else {
//         document.getElementById('detail-not-found-message').style.display = 'none';
//     }
// });




const overlay = document.getElementById('overlay-container');
const detailOverlay = document.getElementById('detail-overlay-container');
const overlayHeading = document.getElementById('overlay-heading');
const overlayListHeading = document.getElementById('overlay-list-heading');
const zpButton = document.getElementById('show-zp-list');
const yuvaButton = document.getElementById('show-yuva-campaign');
const mahilaButton = document.getElementById('show-mahila-campaign');
const covidButton = document.getElementById('show-covid-beneficiaries');
const schoolAlumnisButton = document.getElementById('show-school-alumnis');
const closeButton = document.getElementById('close-overlay');
const closeDetailButton = document.getElementById('close-detail-overlay');
const detailList = document.getElementById('detail-list');
const searchInput = document.getElementById('village-search');

const zpData = {
    "Varunji": [
        ["Koyana Vasahat", "415539"],
        ["Chachegaon", "415122"],
        ["Nandlapur", "415539"],
        ["Jakhinwadi", "415539"],
        ["Chougulemala(Kale)", "415104"],
        ["Chapane Mala (Kale)", "415104"],
        ["Dhondewadi", "415104"],
        ["Kale Teck", "415104"],
        ["Vanvasmachi", "415105"],
        ["Khodashi", "415124"],
        ["Mundhe", "415124"],
        ["Varunji", "415124"],
        ["Gote", "415124"],
        ["Vijaynagar", "415124"],
        ["Vahagaon", "415124"],
        ["Ghonshi", "415124"]
    ],
    "Kale": [
        ["Tulsan", "415111"],
        ["Vithobachiwadi", "415111"],
        ["Ond", "415111"],
        ["Thorat Mala (Ond)", "415111"],
        ["Kalawade", "415539"],
        ["Kasarshirambe", "415539"],
        ["Belawade Bu.", "415539"],
        ["Pachuptewadi", "415111"],
        ["Kale", "415104"],
        ["Munavale", "415539"],
        ["Nandgaon", "415111"],
        ["Pawarwadi", "415111"],
        ["Ondoshi-Patilmala", "415111"],
        ["Wathar", "415539"],
        ["Malkhed", "415539"],
        ["Sanjaynagar Kale", "415104"]
    ],
    "Wing": [
        ["Ambawade", "415103"],
        ["Ane", "415103"],
        ["Kole", "415103"],
        ["Shinganwadi", "415103"],
        ["Kusur", "415103"],
        ["Kolewadi", "415103"],
        ["Shindewadi", "415122"],
        ["Tarukh", "415103"],
        ["Vanarwadi/Pawarwadi", "415103"],
        ["Bamanwadi/Shibewadi", "415103"],
        ["Potale", "415103"],
        ["Gharewadi", "415103"],
        ["Yenake", "415103"],
        ["Yerawale", "415122"],
        ["Wing", "415122"],
        ["Kirape", "415114"]
    ],
    "Yelgaon": [
        ["Undale", "415111"],
        ["Manav / Manu", "415111"],
        ["Shewalewadi (Undale)", "415111"],
        ["Talgaon", "415111"],
        ["Salshirambe", "415111"],
        ["Khudyachiwadi", "415111"],
        ["Maharugadewadi", "415111"],
        ["Jinti (Undale)", "415111"],
        ["Akaichiwadi", "415111"],
        ["Ghogaon", "415111"],
        ["Sawade", "415111"],
        ["Bandekarwadi", "415111"],
        ["Halelwadi", "415111"],
        ["Latakewadi", "415111"],
        ["Mhasoli", "415111"],
        ["Shewalewadi (Mhasoli)", "415111"],
        ["Shelakewadi (Yevati)", "415111"],
        ["Shewalewadi (Yewati)", "415111"],
        ["Hanmantwadi", "415111"],
        ["Gharalwadi", "415111"],
        ["Bhurbushi", "415111"],
        ["Yelgaon", "415111"],
        ["Gotewadi", "415111"],
        ["Bharewadi", "415111"],
        ["Ganeshwadi", "415111"],
        ["Yenape", "415111"],
        ["Chormarwadi (Yenape)", "415111"],
        ["Matekarwadi (Yenape)", "415111"],
        ["Loharwadi (Yenape)", "415111"],
        ["Yevati", "415111"]
    ],
    "Rethare BK": [
        ["Atake", "415539"],
        ["Rethare Khurd", "415108"],
        ["Rethare Budruk", "415108"],
        ["Shere", "415108"],
        ["Shenoli", "415108"],
        ["Gondi", "415108"],
        ["Julewadi", "415108"],
        ["Khubi", "415108"]
    ],
    "Karve": [
        ["Karve", "415124"],
        ["Vadgaon Haveli", "415124"],
        ["Goleshwar", "415124"],
        ["Kapil", "415124"],
        ["Kodoli", "415124"],
        ["Dushere", "415108"],
        ["Jujarwadi", "415539"],
        ["Narayanwadi", "415539"]
    ],
    "Saidapur": [
        ["Saidapur", "415124"],
        ["Goware", "415105"]
    ],
    "Malkapur": [
        ["Agashivnagar", "415539"],
        ["Malkapur", "415539"]
    ],
    "Karad City": [
        ["Somvarpeth", "415110"],
        ["Mangalvarpeth", "415110"],
        ["Budhvarpeth", "415110"],
        ["Guruvarpeth", "415110"],
        ["Shukruvarpeth", "415110"],
        ["Shanivarpeth", "415110"],
        ["Ravivarpeth", "415110"]
    ]
};

function openOverlay(title, listTitle, showSchoolAlumnis) {
    overlayHeading.textContent = title;
    overlayListHeading.textContent = listTitle;
    if (showSchoolAlumnis) {
        overlay.classList.add('school-alumnis-active');
        document.getElementById('village-search').style.display = 'none'; 
        document.getElementById('not-found-message').style.display = 'none'; 
    } else {
        overlay.classList.remove('school-alumnis-active');
        document.getElementById('village-search').style.display = 'block'; 
    }
    overlay.classList.add('active');
}

function openDetailOverlay(title, details) {
    detailList.innerHTML = details.map(item => `
        <div class="detail-header">
            <a href="#" class="detail-column village-link">${item[0]}</a>
            <div class="detail-column">${item[1]}</div>
        </div>
    `).join('');
    document.getElementById('detail-overlay-heading').textContent = title;
    detailOverlay.classList.add('active');
}


detailList.addEventListener('click', function(event) {
    if (event.target.classList.contains('village-link')) {
        event.preventDefault();
        const villageName = event.target.textContent.trim();
        openFormPopup(villageName);
    }
});

zpButton.addEventListener('click', function() {
    openOverlay('Door 2 Door Campaign', 'ZP List', false);
});

yuvaButton.addEventListener('click', function() {
    openOverlay('Yuva Campaign', 'ZP List', false);
});

mahilaButton.addEventListener('click', function() {
    openOverlay('Mahila Campaign', 'ZP List', false);
});

schoolAlumnisButton.addEventListener('click', function() {
    openOverlay('School Alumnis', 'School Alumnis List', true);
    document.getElementById('village-search').style.display = 'none'; 
    document.getElementById('not-found-message').style.display = 'none'; 
});

document.querySelectorAll('.list-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const zpName = this.textContent;
        if (zpData[zpName]) {
            const details = zpData[zpName];
            openDetailOverlay(zpName, details);
        }
    });
});

closeButton.addEventListener('click', function() {
    overlay.classList.remove('active');
    overlay.classList.remove('school-alumnis-active');
});

closeDetailButton.addEventListener('click', function() {
    detailOverlay.classList.remove('active');
});

searchInput.addEventListener('keyup', function() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const listItems = document.querySelectorAll('#overlay-list li');

   
    listItems.forEach(item => item.style.display = 'none');

    
    listItems.forEach(item => {
        if (item.textContent.toLowerCase().trim().startsWith(searchTerm)) {
            item.style.display = 'block';
        }
    });

    
    if (Array.prototype.filter.call(listItems, item => item.style.display === 'block').length === 0) {
        document.getElementById('not-found-message').style.display = 'block';
    } else {
        document.getElementById('not-found-message').style.display = 'none';
    }
});


const detailSearchInput = document.getElementById('detail-village-search');
detailSearchInput.addEventListener('keyup', function() {
    const searchTerm = detailSearchInput.value.toLowerCase().trim();
    const detailListItems = document.querySelectorAll('#detail-list .detail-header');

    
    detailListItems.forEach(item => item.style.display = 'none');

    
    detailListItems.forEach(item => {
        const villageName = item.querySelector('.detail-column:first-child').textContent.toLowerCase().trim();
        if (villageName.startsWith(searchTerm)) {
            item.style.display = 'flex';
        }
    });

    
    if (Array.prototype.filter.call(detailListItems, item => item.style.display === 'flex').length === 0) {
        document.getElementById('detail-not-found-message').style.display = 'block';
    } else {
        document.getElementById('detail-not-found-message').style.display = 'none';
    }
});

document.querySelectorAll('#detail-list .detail-header').forEach(header => {
    header.addEventListener('click', function(event) {
        const villageName = header.querySelector('.detail-column:first-child').textContent.trim();
        openFormPopup(villageName);
    });
});

function openFormPopup(villageName) {
    const popup = document.createElement('div');
    popup.classList.add('form-popup');
    popup.innerHTML = `
        <h2>${villageName} Registration</h2>
        <form id="registration-form">
            <label>First Name:</label>
            <input type="text" name="firstName" required><br><br>
            <label>Middle Name (Optional):</label>
            <input type="text" name="middleName"><br><br>
            <label>Last Name:</label>
            <input type="text" name="lastName" required><br><br>
            <label>Phone Number:</label>
            <input type="tel" name="phoneNumber" required><br><br>
            <label>Email Address:</label>
            <input type="email" name="email" required><br><br>
            <button type="submit" class="submit-button">Submit</button>
        </form>
        <button class="close-popup">Close</button>
    `;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.classList.add('active');
    }, 100);

    popup.querySelector('.close-popup').addEventListener('click', function() {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.remove();
        }, 500);
    });

    popup.querySelector('#registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        console.log(formData);
        popup.classList.remove('active');
        setTimeout(() => {
            popup.remove();
        }, 500);
    });
}










// Import required libraries
const { google } = require('googleapis');

// Set up authentication
const auth = new google.auth.GoogleAuth({
  client_id: '733510732584-cdn05sir34o5not25hs9sbgg8b523prn.apps.googleusercontent.com',
  client_secret: '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',
  redirect_uri: 'YOUR_REDIRECT_URI'
});

// Set up Sheets API client
const sheets = google.sheets({ version: 'v4', auth });

// Form submission handler
function submitForm(formData, villageName, zpName) {
  // Select the corresponding sheet
  const sheetName = `${zpName} - ${villageName}`;
  const spreadsheetId = '11wztAuAsijsb_1WyFHZVZP-sA85COgGuNl9xeKTVkhQ';

  // Append data to the sheet
  sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`, // Append to first row
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    includeValuesInResponse: true,
    value: [formData]
  }, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Data appended to ${sheetName} sheet.`);
    }
  });
}

// ...

function openFormPopup(villageName) {
  const popup = document.createElement('div');
  popup.classList.add('form-popup');
  popup.innerHTML = `
    <h2>${villageName} Registration</h2>
    <form id="registration-form">
      <label>First Name:</label>
      <input type="text" name="firstName" required><br><br>
      <label>Middle Name (Optional):</label>
      <input type="text" name="middleName"><br><br>
      <label>Last Name:</label>
      <input type="text" name="lastName" required><br><br>
      <label>Phone Number:</label>
      <input type="tel" name="phoneNumber" required><br><br>
      <label>Email Address:</label>
      <input type="email" name="email" required><br><br>
      <button type="submit" class="submit-button">Submit</button>
    </form>
    <button class="close-popup">Close</button>
  `;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.classList.add('active');
  }, 100);

  popup.querySelector('.close-popup').addEventListener('click', function() {
    popup.classList.remove('active');
    setTimeout(() => {
      popup.remove();
    }, 500);
  });

  popup.querySelector('#registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const zpName = overlayHeading.textContent.split(' ')[0]; // Get ZP name from overlay heading
    submitForm(formData, villageName, zpName);
    popup.classList.remove('active');
    setTimeout(() => {
      popup.remove();
    }, 500);
  });
}

// Initialize Google Auth
const auth2 = gapi.auth2.init({
    client_id: '733510732584-cdn05sir34o5not25hs9sbgg8b523prn.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  });
  
  // Authenticate user
  auth2.signIn().then(() => {
    // User authenticated, you can now use the Sheets API
  }).catch((err) => {
    console.error(err);
  });