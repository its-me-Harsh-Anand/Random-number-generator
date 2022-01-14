function generateRandom(){
    const date = new Date()
    const milliseconds = date.getMilliseconds()

    return milliseconds/1000
}

function randomBetween(min, max){
    return Math.round((generateRandom() * (max - min +1)) + min)
}

console.log(randomBetween(6, 10))