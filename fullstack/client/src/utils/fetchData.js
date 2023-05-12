const fetchData = async (url, stateHandler, config = {}) => {
  const result = await fetch(url, config);
  const data = await result.json();
  stateHandler(data);
}

export default fetchData;