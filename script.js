const actorData =[
    {
        name: "Kevin Bacon",
        gender: "male",
        era: "new"
    },
    {
        name: "test One",
        gender: "male",
        era: "classic"
    },
    {
        name: "test Two",
        gender: "female",
        era: "new"
    },
    {
        name: "test Three",
        gender: "male",
        era: "new"
    },
    {
        name: "test Four",
        gender: "female",
        era: "classic"
    }
];

//preparing lists for random name generation
let listActorNames = [];
let listActorMale = [];
let listActorFemale =[];
let listActorClassic = [];
let listActorNew = [];

function prepLists (){
    for(let i=0; i<actorData.length; i++){
        listActorNames.push(actorData[i].name)
    }
    listActorNames.sort(Alphabetize);

    for(let i=0; i<actorData.length; i++){
        if(actorData[i].gender === 'male'){
            listActorMale.push(actorData[i].name)
        } else {
            listActorFemale.push(actorData[i].name)
        }
    }

    for(let i=0; i<actorData.length; i++){
        if(actorData[i].era === 'new'){
            listActorNew.push(actorData[i].name)
        } else {
            listActorClassic.push(actorData[i].name)
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

//take user input to use in creating challenge

function generateChallenge (event){
    event.preventDefault()
    let paramOptions = ['nameOne', 'genderOne', 'eraOne', 'genderTwo', 'eraTwo'];
    let resultA = '';
    let resultB = '';
    let userParams = [];
    
    for(let i=0; i<paramOptions.length; i++){
        if($(`#${paramOptions[i]}`).val() !== ""){
            let obj = {};
            let varName = paramOptions[i];
            let varValue = $(`#${paramOptions[i]}`).val();
            obj[varName] = varValue;
            userParams.push (obj);
        }
    }
    console.log(userParams.length)
    if(userParams.length === 0) {
        resultA = findRandomName();
        resultB = findRandomName();
    } else {
        //use params to pare down search
        console.log('to be built')
    }

    return deliverResult(resultA, resultB)
};

function findRandomName(){
    let rand = Math.floor(Math.random()*listActorNames.length)
    return listActorNames[rand]
}

//return challenge to user
function deliverResult(resultA, resultB){
    $('.result').html(`<div>Connect ${resultA} to ${resultB}</div>`)
}

$(prepLists);