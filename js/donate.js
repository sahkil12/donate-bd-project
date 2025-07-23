

// 1
document.getElementById('donate-now-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const donateAmount = getInputValueById('donate-amount');
        const mainAccountBalance = getTextValueById('main-balance');
        const sectionAccountAmount = getTextValueById('section-balance');


        if (typeof donateAmount === 'number' && donateAmount > 0) {

            if (donateAmount <= mainAccountBalance) {
                const cutAmountForAccount = mainAccountBalance - donateAmount;
                document.getElementById('main-balance').innerText = cutAmountForAccount;

                const addSectionAccountBalance = sectionAccountAmount + donateAmount;

                document.getElementById('section-balance').innerText = addSectionAccountBalance;

                // time -----
                const now = new Date();
                const date = now.toLocaleString('en-BD', {

                    timeZone: "Asia/Dhaka",
                    dateStyle: 'full',
                    timeStyle: 'medium'
                });

                const donateForHead = getHeadingTextValueById('noakhali');

                const historyContainer = document.getElementById('history-container');

                const div = document.createElement('div');
                div.classList.add('border-[1px]');
                div.classList.add('border-gray-200');
                div.classList.add('py-7');
                div.classList.add('px-5');
                div.classList.add('rounded-xl');

                div.innerHTML = `
        
        <h2 class="font-bold text-xl pb-5"> ${donateAmount} Taka is Donated for ${donateForHead}</h2>
                 <p class="text-base text-gray-500">Date : ${date} </p>
        
        `
                historyContainer.appendChild(div);
                 alert("Successfully You have donated for humankind!")

            }
            else {

                alert("You don't have enough balance to donate!");
            }

        }
        else {
            alert("Failed To Donate! Please Input Right Value!");
            return;
        }

    })








// 2
document.getElementById('donate-now-btn2')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const donateAmount = getInputValueById('donate-amount2');
        const mainAccountBalance = getTextValueById('main-balance');
        const sectionAccountAmount = getTextValueById('section-balance2');


        if (typeof donateAmount === 'number' && donateAmount > 0) {

            if (donateAmount <= mainAccountBalance) {
                const cutAmountForAccount = mainAccountBalance - donateAmount;
                document.getElementById('main-balance').innerText = cutAmountForAccount;

                const addSectionAccountBalance = sectionAccountAmount + donateAmount;

                document.getElementById('section-balance2').innerText = addSectionAccountBalance;

                // time -----
                const now = new Date();
                const date = now.toLocaleString('en-BD', {

                    timeZone: "Asia/Dhaka",
                    dateStyle: 'full',
                    timeStyle: 'medium'
                });

                const donateForHead = getHeadingTextValueById('feni');

                const historyContainer = document.getElementById('history-container');

                const div = document.createElement('div');
                div.classList.add('border-[1px]');
                div.classList.add('border-gray-200');
                div.classList.add('py-7');
                div.classList.add('px-5');
                div.classList.add('rounded-xl');

                div.innerHTML = `
        
        <h2 class="font-bold text-xl pb-5"> ${donateAmount} Taka is Donated for ${donateForHead}</h2>
                 <p class="text-base text-gray-500">Date : ${date} </p>
        
        `
                historyContainer.appendChild(div);
                 alert("Successfully You have donated for humankind!")

            }
            else {

                alert("You don't have enough balance to donate!");
            }

        }
        else {
            alert("Failed To Donate! Please Input Right Value!");
            return;
        }

    })








// 3
document.getElementById('donate-now-btn3')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const donateAmount = getInputValueById('donate-amount3');
        const mainAccountBalance = getTextValueById('main-balance');
        const sectionAccountAmount = getTextValueById('section-balance3');


        if (typeof donateAmount === 'number' && donateAmount > 0) {

            if (donateAmount <= mainAccountBalance) {
                const cutAmountForAccount = mainAccountBalance - donateAmount;
                document.getElementById('main-balance').innerText = cutAmountForAccount;

                const addSectionAccountBalance = sectionAccountAmount + donateAmount;

                document.getElementById('section-balance3').innerText = addSectionAccountBalance;

                // time -----
                const now = new Date();
                const date = now.toLocaleString('en-BD', {

                    timeZone: "Asia/Dhaka",
                    dateStyle: 'full',
                    timeStyle: 'medium'
                });

                const donateForHead = getHeadingTextValueById('Quota');

                const historyContainer = document.getElementById('history-container');

                const div = document.createElement('div');
                div.classList.add('border-[1px]');
                div.classList.add('border-gray-200');
                div.classList.add('py-7');
                div.classList.add('px-5');
                div.classList.add('rounded-xl');

                div.innerHTML = `
        
        <h2 class="font-bold text-xl pb-5"> ${donateAmount} Taka is Donated for ${donateForHead}</h2>
                 <p class="text-base text-gray-500">Date : ${date} </p>
        
        `
                historyContainer.appendChild(div);
                alert("Successfully You have donated for humankind!")

            }
            else {

                alert("You don't have enough balance to donate!");
            }

        }
        else {
            alert("Failed To Donate! Please Input Right Value!");
            return;
        }

    })















