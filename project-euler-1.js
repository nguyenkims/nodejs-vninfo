var N = 1000, sum = 0;
for (var i = 0; i < N ; i ++){
	if (i % 3 == 0 || i % 5 == 0){
		sum += i;
	}
}

console.log(sum);
