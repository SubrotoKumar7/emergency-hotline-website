// get element
function getElement(id){
    let element = document.getElementById(id);
    return element;
}

// element
const heart = getElement('heart');
const coin = getElement('coin');
const copy = getElement('copy');
const cardContainer = getElement('card-container');
const historyContainer = getElement('history-container');



cardContainer.addEventListener('click', function(event){
    if(event.target.className.includes('fa-heart')){
        let heartNum = Number(heart.innerHTML);
        let totalHeart = heartNum + 1;
        heart.innerHTML = totalHeart;
    }

    if(event.target.className.includes('call')){
        let title = event.target.parentNode.parentNode.childNodes[1].innerHTML;
        let subtitle = event.target.parentNode.parentNode.childNodes[3].innerHTML;
        let number = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerHTML;

        let date = new Date().toLocaleTimeString();
        let coinNum = Number(coin.innerHTML);


        if(coinNum < 20){
            alert("❌ You don't have enough coins. A minimum of 20 coins is required to make a call.");
            return;
        }
        let totalCoin = coinNum - 20;
        coin.innerHTML = totalCoin;

        let div = document.createElement('div');
        div.innerHTML = `
                    <div class="flex items-center justify-between bg-gray-100 rounded shadow p-3 my-4">
                        <div>
                            <h1 class="font-semibold pt-2">${title}</h1>
                            <p class="text-gray-500 my-2 text-lg">${number}</p>
                        </div>
                        <p class="text-lg">${date}</p>
                    </div>
        `;
        historyContainer.appendChild(div);

        let alertMessage = `📞 Calling ${subtitle} ${number}`;
        alert(alertMessage);
    }

    
});


// clear call history 
getElement('clear-btn').addEventListener('click', function(){
    historyContainer.innerHTML = "";
});