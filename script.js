const output = "Knock, knock..\nWho's there?\n";

const jokeCollection={
    whos_there:['Tank', 'Nobel', 'Luke','Annie','Cow'],
    reply:['You are welcome','Nobel.. that\'s why I knocked','Look through the peephole','Any thing I can do for you','No cow says moo']
}

const randNum = () => Math.floor(Math.random()*5);

let num=randNum();

let ans = output.concat(jokeCollection.whos_there[num],'\n',jokeCollection.whos_there[num],' who?\n', jokeCollection.reply[num]);


//console.log(jokeCollection.whos_there[num],'\n',jokeCollection.whos_there[num],' who?\n', jokeCollection.reply[num]);


console.log(ans);