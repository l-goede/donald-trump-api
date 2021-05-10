export async function getQuotes(quotes) {
  const promise = fetch(
    `https://api.tronalddump.io/search/quote?query=${quotes}`
  );
  const response = await promise;
  const data = await response.json();
  if (data.count === 0) {
    return [];
  }
  return data._embedded.quotes;
}
