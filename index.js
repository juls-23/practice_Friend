class Friend{
  constructor(candy,friends){
    this.candy = candy;
    this.friends = friends;
  }

  countCandy(){
    let res = null;
    for(const friend of this.friends){
       res+=friend.candy
    }
    return res
  }


  // countCandy3(){
  //   let res = null;
  //   this.friends.forEach(element => {
  //     res += element.candy 
  //   });
  //   return res
  // }

  // countCandy2(){
  //   return this.friends.reduce((sum,el)=>{
  //       return sum + el.candy 
  //     },0)
   
  // }
  
}

const friend2 = new Friend(2,[])
const friend3 = new Friend(5,[friend2])
const friend4 = new Friend(7,[friend3,friend2])

const arrFriends = [friend2,friend3,friend4];

const friend1 = new Friend(3,arrFriends)

console.log(friend1.countCandy());
console.log(friend3.countCandy());
console.log(friend4.countCandy());


