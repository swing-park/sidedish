const getData = (url, setDataFn, setErrorFn) => {
	fetch(url)
		.then((res) => res.json())
		.then((json) => {
			if (json) { setDataFn(json) }
			else { throw Error() }
		})
		.catch(err => setErrorFn(err));
};

export default getData