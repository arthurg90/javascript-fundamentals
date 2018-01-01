// for(i=1;i<50;)
// 	console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);

// The condition (before the ?)
// The if true result (before the :)
// The if false result (after the :)


for (let i = 1; i <= 50; i += 1) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }

    if (i % 5 === 0) {
        output += "Buzz";
    }

    console.log(output === "" ? i : output);
}
