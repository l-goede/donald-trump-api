export async function getQuotes(tag) {
  const promise = fetch(`https://api.tronalddump.io/tag/${tag}`);
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.tag;
}
