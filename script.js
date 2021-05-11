function generateChallenge (event){
    event.preventDefault()
    let varNames = ['nameOne', 'genderOne', 'eraOne', 'nameTwo', 'genderTwo', 'eraTwo']
    let nameOne = $('#nameOne').val();
    for(let i=0; i<varNames.length; i++){
        if($(`#${varNames[i]}`).val() !== ""){
            console.log($(`#${varNames[i]}`).val())
        }
    }
};



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


$(prepLists);