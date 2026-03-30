import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:8086';
const OUT = './figma-screenshots';

const pages = [
  { path: '/', name: '01-home' },
  { path: '/certification', name: '02-certification' },
  { path: '/approved', name: '03-approved' },
  { path: '/ap-credential', name: '04-ap-credential' },
  { path: '/for/developers-owners', name: '05-for-developers-owners' },
  { path: '/for/operators', name: '06-for-operators' },
  { path: '/for/capital-providers', name: '07-for-capital-providers' },
  { path: '/for/impact-professionals', name: '08-for-impact-professionals' },
  { path: '/commons', name: '09-commons' },
  { path: '/commons/individual', name: '10-commons-individual' },
  { path: '/commons/organization', name: '11-commons-organization' },
  { path: '/resources/standard', name: '12-standard' },
  { path: '/resources/rossi', name: '13-rossi' },
  { path: '/resources/blog', name: '14-blog' },
];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

for (const { path, name } of pages) {
  console.log(`Capturing ${name} (${path})...`);
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle0', timeout: 15000 });

  // Force all reveal animations to show immediately
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
        visibility: visible !important;
      }
    `
  });

  // Add 'revealed' class to all elements that use the reveal pattern
  await page.evaluate(() => {
    document.querySelectorAll('[class]').forEach(el => {
      el.classList.add('revealed');
    });
  });

  // Scroll through the full page to trigger any lazy loading
  await page.evaluate(async () => {
    const scrollStep = window.innerHeight;
    const maxScroll = document.body.scrollHeight;
    for (let y = 0; y < maxScroll; y += scrollStep) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });

  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log(`  → ${OUT}/${name}.png`);
}

await browser.close();
console.log('\nDone! All screenshots saved to ./figma-screenshots/');
