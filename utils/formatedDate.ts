const formatedDate = (date?: string | undefined) => {
	return new Date(date!).toLocaleDateString('en-NL', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
};

export default formatedDate;
