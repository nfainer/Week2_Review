import Team from  "./modules/DataObject.js";

// IIFE Immediately invoked function expression
(() => {
    console.log('Fired!')




    function showProfData() {

        // change data on the page here
        let currentProf = this.textContent;

        // grab the bio container and get ready to populate its content
        const bioInfo = document.querySelector('.bio-wrapper').children;

        // this refers to the heading tag (the first child of the bio-wrapper div)
        bioInfo[0].textContent = Team[currentProf].name;

        // this refers to the paragraph tag (the second child of the bio-wrappper div)
        bioInfo[1].textContent = Team[currentProf].role;

        bioInfo[3].src = `images/${Team[currentProf].avatar}`

    }


    for (let prof in Team){
        console.log(prof);

        let teamButton = document.createElement('button');

        teamButton.textContent = prof;
        teamButton.addEventListener('click', showProfData);

        document.querySelector('#section1').appendChild(teamButton);
    };
   
 
})();