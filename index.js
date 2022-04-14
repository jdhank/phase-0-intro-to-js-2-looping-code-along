function writeCards(friends, type){
    const cards = [];
    for (let i = 0; i <3; i++){
        cards.push(`Thank you, ${friends[i]}, for the wonderful ${type} gift!`);
    }
    return cards
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(){
    for (let i =10; i >= 0; i--) {
        console.log(i)
    }
    
}
countDown(10)