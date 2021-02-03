const bonus = 10;

function sum(first, second) {
    var result = first + second + bonus;
    if(result>9){
        var mood= 'Happy';
        mood='fishy';
        mood='funky';
    }
    console.log(mood);
    return result;
}

const total = sum(5,8);
console.log(total); 