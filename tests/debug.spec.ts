import { test, expect } from '@playwright/test';

test('Debug - test translation with React state trigger', async ({ page }) => {
  // Listen to network requests
  page.on('request', request => {
    if (request.url().includes('api') || request.method() === 'POST') {
      console.log('Request:', request.method(), request.url());
    }
  });
  
  page.on('response', response => {
    if (response.url().includes('api')) {
      console.log('Response:', response.status(), response.url());
    }
  });
  
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
  
  // Wait for page to load
  await page.waitForTimeout(3000);
  
  // Find the input textarea
  const inputTextarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  
  // Output div selector - let's try multiple selectors
  console.log('\n=== Testing React-based input ===\n');
  
  // Focus the textarea first
  await inputTextarea.focus();
  await page.waitForTimeout(500);
  
  // Clear any existing content
  await inputTextarea.clear();
  await page.waitForTimeout(500);
  
  // Type slowly character by character
  const testInput = 'mama';
  for (const char of testInput) {
    await page.keyboard.press(char);
    await page.waitForTimeout(300);
  }
  
  // Wait longer for React state to update
  await page.waitForTimeout(5000);
  
  // Check entire page for Sinhala text
  const bodyHTML = await page.locator('body').innerHTML();
  console.log('\nSearching for මම in page...');
  if (bodyHTML.includes('මම')) {
    console.log('FOUND: මම exists in page!');
    const idx = bodyHTML.indexOf('මම');
    console.log('Context:', bodyHTML.substring(Math.max(0, idx - 100), idx + 100));
  } else {
    console.log('NOT FOUND: මම does not exist in page');
  }
  
  // Check all divs with specific classes
  console.log('\n=== Checking various output elements ===');
  
  // Try finding the output panel by structure
  const cards = await page.locator('.card').all();
  for (let i = 0; i < cards.length; i++) {
    const title = await cards[i].locator('.panel-title').first().textContent().catch(() => '');
    if (title?.includes('Sinhala')) {
      console.log(`\nCard ${i} is Sinhala output card`);
      const cardText = await cards[i].textContent();
      console.log('Full text:', cardText?.substring(0, 200));
      
      // Find child divs
      const childDivs = await cards[i].locator('div').all();
      for (let j = 0; j < childDivs.length; j++) {
        const text = await childDivs[j].textContent();
        const className = await childDivs[j].getAttribute('class');
        if (text && text !== 'Sinhala' && className) {
          console.log(`  Child div ${j}: class="${className?.substring(0, 50)}" text="${text.substring(0, 50)}"`);
        }
      }
    }
  }
  
  // Take screenshot
  await page.screenshot({ path: 'translation-debug.png', fullPage: true });
  console.log('\nScreenshot saved as translation-debug.png');
});
