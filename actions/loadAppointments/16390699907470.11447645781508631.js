function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

return {{ data }}.map(item => {
  const d = randomDate(moment().subtract(1, 'months').toDate(), moment().add(1, 'months').toDate());
  return {
    title: item.details,
    start: moment(d).format('YYYY-MM-DD'),
    end: moment(d).format('YYYY-MM-DD'),
	id: item.id,
  }
});