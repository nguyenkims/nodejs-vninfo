// This example illustrates how we can use JS as a fast scripting language
// to solve algorithmic problems. The problem here is at https://projecteuler.net/problem=1
// Just run node project-euler-1 and voilà, you pass the 1st problem of project-euler !

var N = 1000, sum = 0;
for (var i = 0; i < N ; i ++){
	if (i % 3 == 0 || i % 5 == 0){
		sum += i;
	}
}

console.log(sum);
