// Merge data/*.json into site/listings.json
import fs from 'node:fs';
const unis = JSON.parse(fs.readFileSync('data/unis.json', 'utf8'));
const seen = new Set();
const listings = [];
for (const f of fs.readdirSync('data').filter(f => f.endsWith('.json') && f !== 'unis.json')) {
  let arr;
  try { arr = JSON.parse(fs.readFileSync('data/' + f, 'utf8')); } catch (e) { console.error('skip', f, e.message); continue; }
  for (const x of arr) {
    const key = (x.url || '').replace(/[?#].*$/, '').replace(/\/$/, '');
    if (!key || seen.has(key)) continue;
    if (typeof x.lat !== 'number' || typeof x.lng !== 'number' || typeof x.price !== 'number') continue;
    seen.add(key);
    listings.push({ ...x, id: f.replace('.json', '') + '-' + listings.length });
  }
}
fs.writeFileSync('site/listings.json', JSON.stringify({ unis, listings, updated: new Date().toISOString() }, null, 1));
console.log('listings:', listings.length);
