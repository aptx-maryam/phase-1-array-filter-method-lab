// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(array, nameInput){
    let result = array.filter(name => {
         if (name.toLowerCase() === nameInput.toLowerCase())
         return true
    })
    return result
}

 console.log(findMatching(drivers, "Bobby"))

 function fuzzyMatch(array, string){
     let result = array.filter(name => {
       return name.toLowerCase().indexOf(string.toLowerCase()) === 0
     })
     return result
 }
 console.log(fuzzyMatch(drivers, "Sa"))

 const driversAddress = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

 function matchName(array, nameInput){
    let result = array.filter(obj => obj.name === nameInput)
    return result
 }
 console.log(matchName(driversAddress, "Bobby"))
