export const event = { name: 'Bellflower Car Show', edition: '28th Annual', date: 'Saturday, October 3, 2026', shortDate: 'October 3, 2026', time: '2:00 PM – 6:00 PM', location: 'Downtown Bellflower, CA', email: 'info@bellflower-car-show.com', phone: '(562) 317-4325' };
export const blocks = [
  { id: 100, from: 'Flora Vista St.', to: 'Oak St.' },
  { id: 200, from: 'Oak St.', to: 'Belmont St.' },
  { id: 300, from: 'Belmont St.', to: 'Flower St.' },
  { id: 400, from: 'Flower St.', to: 'Maple St.' },
  { id: 500, from: 'Maple St.', to: 'Walnut St.' },
];
export type SpotStatus = 'available' | 'booked' | 'reserved' | 'vendor';
export function spotStatus(block: number, index: number): SpotStatus {
  if ((index + block / 100) % 11 === 0) return 'vendor';
  if ((index + block / 100) % 7 === 0) return 'reserved';
  if ((index + block / 100) % 4 === 0) return 'booked';
  return 'available';
}
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Bellflower Car Show` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Bellflower Car Show` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
