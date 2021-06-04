//preparing lists for random name generation
let listActorNames = [];
let listActorEasy = [];
let listActorMedium = [];
let listActorHard  = [];

function prepLists (){
    for(let i=0; i<actorData.length; i++){
        listActorNames.push(actorData[i].name)
    }
    listActorNames.sort(Alphabetize);
    

    for(let i=0; i<actorData.length; i++){
        if(actorData[i].difficulty === 'easy'){
            listActorEasy.push(actorData[i].name)
        } else if(actorData[i].difficulty === 'medium') {
            listActorMedium.push(actorData[i].name)
        } else if(actorData[i].difficulty === 'hard'){
            listActorHard.push(actorData[i].name)
        }
    }
}

function Alphabetize(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

function fillNameDropdown(){
    for(let i=0; i< listActorNames.length; i++){
        $(`#nameOne`).append(`<option value='${listActorNames[i]}'>${listActorNames[i]}</option>`)
    }
    
}

//take user input to use in creating challenge

function generateNamedChallenge (event){
    event.preventDefault();
    let resultA = '';
    let resultB = '';
    
    $('#challengeButton').removeClass('highlightButton');
    console.log($(`#nameOne`).val())
    if($(`#nameOne`).val()) {
        resultA = $(`#nameOne`).val();
        resultB = findRandomName(listActorNames, resultA);
    }

    return deliverResult(resultA, resultB)
};

function generateDifficultyChallenge (event, level){
    event.preventDefault();
    let resultA = '';
    let resultB = '';

    $(event.target).siblings().removeClass('highlightButton');
    $(event.target).addClass('highlightButton');

    switch(level){
        case 1:
            resultA = findRandomName(listActorEasy);
            resultB = findRandomName(listActorEasy, resultA);
            break;
        case 2:
            resultA = findRandomName(listActorEasy);
            resultB = findRandomName(listActorMedium);
            break;
        case 3:
            resultA = findRandomName(listActorMedium);
            resultB = findRandomName(listActorMedium, resultA);
            break;
        case 4:
            resultA = findRandomName(listActorMedium);
            resultB = findRandomName(listActorHard);
            break;
        case 5:
            resultA = findRandomName(listActorHard);
            resultB = findRandomName(listActorHard, resultA);
            break;
    }
   
    return deliverResult(resultA, resultB)
}

function findRandomName(list, excluded){

    let rand = Math.floor(Math.random()*list.length)
    if(list[rand] === excluded) rand++;
    return list[rand]
}

//return challenge to user
function deliverResult(resultA, resultB){
    $('.result').empty();
    $('.result').append(`Connect <b>${resultA}</b> to <b>${resultB}</b>`);
    if(interval !== null){
        stopTimer();
        sec = 0;
        $("#seconds").html(pad(++sec%60));
        $("#minutes").html(pad(parseInt(sec/60,10)));
    }
    if(count > 0){
        count = 0;
        $('#connectionCount').text(count);
    }
    if(isPaused){
        isPaused = false;
        $('#pauseButton').text('Pause')
    }
    startTimer();
}

//connection counter for user
let count = 0;
function countConnection(event){
    event.preventDefault();
    count++;
    $('#connectionCount').text(count);
}

function countToZero(event){
    event.preventDefault();
    count = 0;
    $('#connectionCount').text(count);
}

var sec = 0;
function pad ( val ) { 
    return val > 9 ? val : "0" + val; 
}

//timer for challenge
let interval = null;

function startTimer(){
    interval = setInterval(function (){
        $("#seconds").html(pad(++sec%60));
        $("#minutes").html(pad(parseInt(sec/60,10)));
    }, 1000);
}

function stopTimer(event){
    if(event){
         event.preventDefault();
    }
    clearInterval(interval);
}

let isPaused = false;
function togglePause(event){
    event.preventDefault();
    if(!isPaused){
        clearInterval(interval);
        $('#pauseButton').text('Start')
    } else if(isPaused){
        startTimer();
        $('#pauseButton').text('Pause')

    }
isPaused = !isPaused
};

function watchInstructionsClick(){
    $('.show').on('click', function(){
        $('.howTo').toggle(500);
    });
    $('.howTo').on('click', function(){
        $('.howTo').toggle(500);
    })
};

function checkListForDuplicates(list){
    let duplicateNames = []
    for(let i=0; i < list.length; i++) {
        if(list[i] === list[i+1]){
            duplicateNames.push(list[i])
        }
    }
    console.log('duplicate names:' + duplicateNames)
};

function runPage(){
    $('.howTo').hide();
    prepLists();
    fillNameDropdown();
    watchInstructionsClick();
    //checkListForDuplicates(listActorNames);
};

$(runPage);