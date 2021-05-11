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
        name: "testOne",
        gender: "male",
        era: "classic"
    },
    {
        name: "testTwo",
        gender: "female",
        era: "new"
    },
    {
        name: "testThree",
        gender: "male",
        era: "new"
    },
    {
        name: "testFour",
        gender: "female",
        era: "classic"
    }
];

let listActorNames = [];

function prepLists (){
    for(let i=0; i<actorData.length; i++){
        listActorNames.push(actorData[i].name)
    }
    console.log(listActorNames)
}

$(prepLists);