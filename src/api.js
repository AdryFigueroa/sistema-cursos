const API_KEY = 'ac2583a546b44bce8336483f951ccf64';
const BASE_URL = 'https://api.rawg.io/api';

export async function fetchGames() {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}