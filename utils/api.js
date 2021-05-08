export async function getQuotes(quotes) {
  const promise = fetch(
    `https://api.tronalddump.io/search/quote?query=${quotes}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data._embedded.quotes;
}
