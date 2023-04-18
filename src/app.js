/* eslint-disable */
domain = () => {
  //write your code here
  let pronouns = ["my", "your", "his", "her", "their"];
  let adj = ["green", "happy", "cool", "bright", "fast"];
  let nouns = ["dog", "cat", "house", "car", "book"];
  let extentions = [".com", ".net", ".org"];

  for (let i = 0; i < pronouns.length; i++) 
    for (let j = 0; j < adj.length; j++) 
      for (let k = 0; k < nouns.length; k++) 
        for (let l = 0; l < extentions.length; l++) 
        console.log(pronouns[i] + adj[j] + nouns[k] + extentions[l]);
        
    };
domain()
//let domainName = () => {
//let pronoun = ["the", "our", "you", "anyone"];
//let adj = ["great", "big", "small", "bright"];
//let noun = ["jogger", "racoon", "dog", "cat", "cars"];

//let pronounIndex = Math.floor(Math.random() * pronoun.length);
//let adjIndex = Math.floor(Math.random() * adj.length);
//let nounIndex = Math.floor(Math.random() * noun.length);
//const domainName=
//return pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com";
//};
//console.log(domainName)
