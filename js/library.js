
// function-1 --- add or remove color from btn -----
function removeOrAddColorBtn(id) {
    // document.getElementById('donate-btn').classList.add('bg-white');
    // document.getElementById('history-btn').classList.add('bg-white');

    document.getElementById('donate-btn').classList.remove('bg-lime-300');
    document.getElementById('history-btn').classList.remove('bg-lime-300');

    document.getElementById('donate-btn').classList.add('text-gray-600');
    document.getElementById('history-btn').classList.add('text-gray-600');


    document.getElementById(id).classList.add('bg-lime-300');
    document.getElementById(id).classList.remove('text-gray-600');
    document.getElementById(id).classList.add('text-black');

}


// function-2  ------------ 

function showHistoryOrDonateSection(id) {

    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}


// function - 3 

function getTextValueById (id){

  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// function -4

function getInputValueById (id){

    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}



function getHeadingTextValueById (id){

  const headingText = document.getElementById(id).innerText;
  
  return headingText;
}
