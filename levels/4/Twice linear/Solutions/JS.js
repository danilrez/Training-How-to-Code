const dblLinear = (n) => {
	const u = [1];
	let a = 0,
		b = 0;
	while (u.length <= n) {
		let x = 2 * u[a] + 1;
		let y = 3 * u[b] + 1;
		x < y ? (u.push(x), a++) : x > y ? (u.push(y), b++) : (u.push(x), a++, b++);
	}
	return u[n];
};
