const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  minions.forEach((element) => {
    console.log(element)
  });


// const allButKev = minions.filter(notkev => {
//   return notkev.name; 
// })
// console.log(allButKev)


// They're all here -- great! But Gru has noticed something off about the array of minions: their names aren't capitalized. He might be a mob boss, but he does care about correct grammar! So let's go ahead and fix that for him using the mapmethod.

// Using the mapmethod, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called 
// capitalizedMinions
  const capitalizedMinions = minions.map((name) => {
    if(name != 'kevin'){
    return name.charAt(0).toUpperCase() +name.slice(1)
    }else {return name}
  });
  // capitalizedMinions.splice(1, 1, "kevin");
  console.log(capitalizedMinions);



  // const actuallyCapitalizedMinions = capitalizedMinions.filter((sneakyMinion) => {
  //   if (sneakyMinion.charAt[0] === 'k') {
  //     return ""
  //   }else {
  //     return sneakyMinion
  //   }
  //})

const actuallyCapitalizedMinions = capitalizedMinions.filter(name => name != "kevin");

console.log(actuallyCapitalizedMinions);


// In order to check whether or not that previous map worked, Gru wants to try using the everymethod instead. So, using every, check whether or not every minion in capitalizedMinionsare actually capitalized.

// Create a function called isCapitalizedthat accepts a minion as an argument and checks whether or not the first letter of the minion's name is capitalized

// function isCapitalized(name){
//     return /[A-Z]/.test(name.charAt[0])
// }


// const defCapitalized = actuallyCapitalizedMinions.every((name) =>{
//   return name.charCodeAt(0) >= 65 && name.charCodeAt(0) <= 90
// })

//why didnt const defCapitalized = actuallyCapitalizedMinions.every((name) => {
//   return /[A-Z]/.test(name.charAt[0])
// }) work



const defCapitalized = actuallyCapitalizedMinions.every((name) => {
    return /[A-Z]/.test(name.charAt(0))
  }) //syntax () != []... pay attention

console.log(defCapitalized)

const failureKev = capitalizedMinions.find((minion) => {
  return minion === 'kevin'

})

console.log(failureKev)

const whereIsKev = capitalizedMinions.findIndex((minion) => {
  return minion === 'kevin'
})
console.log(whereIsKev)

// capitalizedMinions[1].charAt(0).toUpperCase(); // not sure why this wont work movoing on to project

// console.log(capitalizedMinions)