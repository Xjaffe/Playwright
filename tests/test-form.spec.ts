import { test, expect } from '@playwright/test';


test('Go to Brochures/gencore-ai', async ({ page,context }) => {

  await page.goto('https://securiti.ai/brochures/gencore-ai/', { timeout: 60000 });

  await page.waitForSelector('input[placeholder*="First Name"]', { timeout: 20000 });
  const firstNameInput = page.getByPlaceholder('* First Name');
  await expect(firstNameInput).toBeVisible({ timeout: 60000 });
  await firstNameInput.fill('zeeshan', { timeout: 60000 });


  const lastNameInput = page.getByRole('textbox', { name: '* Last Name:' });
  await expect(lastNameInput).toBeVisible({ timeout: 60000 });
  await lastNameInput.fill('jaffer', { timeout: 60000 });


 const emailInput = page.locator('input[placeholder*="Work Email"]').first();
await expect(emailInput).toBeVisible({ timeout: 60000 });
await emailInput.fill('qduv36j9md@wyoxafp.com');


  const companyInput = page.getByRole('textbox', { name: '* Company Name:' });
  await expect(companyInput).toBeVisible({ timeout: 60000 });
  await companyInput.fill('sdadad', { timeout: 60000 });

  const phoneInput = page.getByRole('textbox', { name: '* Phone Number:' });
  await expect(phoneInput).toBeVisible({ timeout: 60000 });
  await phoneInput.fill('03132325317', { timeout: 60000 });


  const countrySelect = page.getByLabel('*Country:');
  await expect(countrySelect).toBeVisible({ timeout: 60000 });
  await countrySelect.selectOption('Armenia');


  const downloadBtn = page.getByRole('button', { name: 'Download Now' });
  await expect(downloadBtn).toBeVisible({ timeout: 60000 });
  await downloadBtn.click();

 
  await page.waitForURL('https://securiti.ai/thank-you-brochure/?pid=82361', { timeout: 60000 });


  expect(page.url()).toContain('thank-you');


  const thankYouTitle = await page.locator('h1').textContent(); 

  await page.screenshot({ path: 'thank-you.png', fullPage: true });

   const newTab = await context.newPage();
   await newTab.goto('https://temp-mail.io/en', { timeout: 90000 });
   await newTab.waitForLoadState('load');
   await newTab.waitForTimeout(6000);
   await newTab.screenshot({ path: 'temp-mail.png' });
});

test('data-privacy-laws-in-us', async ({ page,context }) => {

  await page.goto('https://securiti.ai/ebooks/data-privacy-laws-in-us/', { timeout: 60000 });


  await page.waitForSelector('input[placeholder*="First Name"]', { timeout: 20000 });
  const firstNameInput = page.getByPlaceholder('* First Name');
  await expect(firstNameInput).toBeVisible({ timeout: 60000 });
  await firstNameInput.fill('Farhan', { timeout: 60000 });

  const lastNameInput = page.getByRole('textbox', { name: '* Last Name:' });
  await expect(lastNameInput).toBeVisible({ timeout: 60000 });
  await lastNameInput.fill('Test', { timeout: 60000 });

 const emailInput = page.locator('input[placeholder*="Work Email"]').first();
await expect(emailInput).toBeVisible({ timeout: 60000 });
await emailInput.fill('dpyfsbad8k@xkxkud.com');


  const companyInput = page.getByRole('textbox', { name: '* Company Name:' });
  await expect(companyInput).toBeVisible({ timeout: 60000 });
  await companyInput.fill('securiti.ai', { timeout: 60000 });


  const phoneInput = page.getByRole('textbox', { name: '* Phone Number:' });
  await expect(phoneInput).toBeVisible({ timeout: 60000 });
  await phoneInput.fill('03132325317', { timeout: 60000 });

  
  await page.getByLabel('*Primary Role').selectOption('Consent');
  await page.getByLabel('*Country:').selectOption('Canada');
  await page.getByLabel('*State:').selectOption('NS');


  const downloadBtn = page.getByRole('button', { name: 'Request Book' });
  await expect(downloadBtn).toBeVisible({ timeout: 60000 });
  await downloadBtn.click();

  await page.waitForURL('https://securiti.ai/thank-you-book/?pid=49859', { timeout: 60000 });

  expect(page.url()).toContain('thank-you-book');

  const thankYouTitle = await page.locator('h1').textContent();

  await page.screenshot({ path: 'thank-you(Farhan).png', fullPage: true });

   const newTab = await context.newPage();
   await newTab.goto('https://temp-mail.io/en', { timeout: 90000 });
   await newTab.waitForLoadState('load');
   await newTab.waitForTimeout(6000);
   await newTab.screenshot({ path: 'temp-mail.png' });
});

test('whitepapers', async ({ page,context }) => {

  await page.goto('https://securiti.ai/whitepapers/2025-privacy-law-updates-key-developments/', { timeout: 60000 });


 await page.waitForSelector('input[placeholder*="First Name"]', { timeout: 20000 });
  const firstNameInput = page.getByPlaceholder('* First Name');
  await expect(firstNameInput).toBeVisible({ timeout: 60000 });
  await firstNameInput.fill('John', { timeout: 60000 });

  const lastNameInput = page.getByRole('textbox', { name: '* Last Name:' });
  await expect(lastNameInput).toBeVisible({ timeout: 60000 });
  await lastNameInput.fill('Doe', { timeout: 60000 });

 const emailInput = page.locator('input[placeholder*="Work Email"]').first();
await expect(emailInput).toBeVisible({ timeout: 60000 });
await emailInput.fill('yu32x6ee7p@knmcadibav.com');

  const companyInput = page.getByRole('textbox', { name: '* Company Name:' });
  await expect(companyInput).toBeVisible({ timeout: 60000 });
  await companyInput.fill('Avanza Solutions', { timeout: 60000 });

  const phoneInput = page.getByRole('textbox', { name: '* Phone Number:' });
  await expect(phoneInput).toBeVisible({ timeout: 60000 });
  await phoneInput.fill('03132325317', { timeout: 60000 });

  const countrySelect = page.getByLabel('*Country:');
  await expect(countrySelect).toBeVisible({ timeout: 60000 });
  await countrySelect.selectOption('Armenia');


  const downloadBtn = page.getByRole('button', { name: 'Download Now' });
  await expect(downloadBtn).toBeVisible({ timeout: 60000 });
  await downloadBtn.click();


  await page.waitForURL('https://securiti.ai/thank-you-document/?pid=97115', { timeout: 60000 });


  expect(page.url()).toContain('thank-you-document');

  const thankYouTitle = await page.locator('h1').textContent(); // Adjust selector as needed

  await page.screenshot({ path: 'thank-you-document.png', fullPage: true });

   const newTab = await context.newPage();
   await newTab.goto('https://temp-mail.io/en', { timeout: 90000 });
   await newTab.waitForLoadState('load');
   await newTab.waitForTimeout(6000);
   await newTab.screenshot({ path: 'temp-mail.png' });
});

test('Infographics', async ({ page,context }) => {


 await page.goto('https://securiti.ai/infographics/kenya-data-protection-act/', { timeout: 60000 });

  await page.waitForSelector('input[placeholder*="First Name"]', { timeout: 20000 });
  const firstNameInput = page.getByPlaceholder('* First Name');
  await expect(firstNameInput).toBeVisible({ timeout: 60000 });
  await firstNameInput.fill('Mac', { timeout: 60000 });

  const lastNameInput = page.getByRole('textbox', { name: '* Last Name:' });
  await expect(lastNameInput).toBeVisible({ timeout: 60000 });
  await lastNameInput.fill('Jordan', { timeout: 60000 });

 const emailInput = page.locator('input[placeholder*="Work Email"]').first();
await expect(emailInput).toBeVisible({ timeout: 60000 });
await emailInput.fill('1lluawyxlf@cmhvzylmfc.com');


  const companyInput = page.getByRole('textbox', { name: '* Company Name:' });
  await expect(companyInput).toBeVisible({ timeout: 60000 });
  await companyInput.fill('Contour Software', { timeout: 60000 });


  const phoneInput = page.getByRole('textbox', { name: '* Phone Number:' });
  await expect(phoneInput).toBeVisible({ timeout: 60000 });
  await phoneInput.fill('03132325317', { timeout: 60000 });

  const countrySelect = page.getByLabel('*Country:');
  await expect(countrySelect).toBeVisible({ timeout: 60000 });
  await countrySelect.selectOption('Armenia');

  const downloadBtn = page.getByRole('button', { name: 'Download Now' });
  await expect(downloadBtn).toBeVisible({ timeout: 60000 });
  await downloadBtn.click();


  await page.waitForURL('https://securiti.ai/thank-you-document/?pid=97006', { timeout: 80000 });

  expect(page.url()).toContain('https://securiti.ai/thank-you-document/?pid=97006');


  const thankYouTitle = await page.locator('h1').textContent(); // Adjust selector as needed

  await page.screenshot({ path: 'thank-you-Mac.png', fullPage: true });

   const newTab = await context.newPage();
   await newTab.goto('https://temp-mail.io/en', { timeout: 90000 });
   await newTab.waitForLoadState('load');
   await newTab.waitForTimeout(6000);
   await newTab.screenshot({ path: 'temp-mail.png' });
});

test('reports', async ({ page,context }) => {

  await page.goto('https://securiti.ai/reports/securiti-named-a-leader-in-data-access-governance/', { timeout: 60000 });


  await page.waitForSelector('input[placeholder*="First Name"]', { timeout: 20000 });
  const firstNameInput = page.getByPlaceholder('* First Name');
  await expect(firstNameInput).toBeVisible({ timeout: 60000 });
  await firstNameInput.fill('Test', { timeout: 60000 });


  const lastNameInput = page.getByRole('textbox', { name: '* Last Name:' });
  await expect(lastNameInput).toBeVisible({ timeout: 60000 });
  await lastNameInput.fill('Sober', { timeout: 60000 });


 const emailInput = page.locator('input[placeholder*="Work Email"]').first();
await expect(emailInput).toBeVisible({ timeout: 60000 });
await emailInput.fill('no7dajeogn@jkotypc.com');


  const companyInput = page.getByRole('textbox', { name: '* Company Name:' });
  await expect(companyInput).toBeVisible({ timeout: 60000 });
  await companyInput.fill('Contour Software', { timeout: 60000 });


  const phoneInput = page.getByRole('textbox', { name: '* Phone Number:' });
  await expect(phoneInput).toBeVisible({ timeout: 60000 });
  await phoneInput.fill('03132325317', { timeout: 60000 });

  const countrySelect = page.getByLabel('*Country:');
  await expect(countrySelect).toBeVisible({ timeout: 60000 });
  await countrySelect.selectOption('Armenia');

  const downloadBtn = page.getByRole('button', { name: 'Download Now' });
  await expect(downloadBtn).toBeVisible({ timeout: 60000 });
  await downloadBtn.click();

  await page.waitForURL('https://securiti.ai/thank-you-document/?pid=97392', { timeout: 80000 });

  expect(page.url()).toContain('https://securiti.ai/thank-you-document/?pid=97392');

  const thankYouTitle = await page.locator('h1').textContent(); // Adjust selector as needed


  await page.screenshot({ path: 'thank-you-reports.png', fullPage: true });

   const newTab = await context.newPage();
   await newTab.goto('https://temp-mail.io/en', { timeout: 90000 });
   await newTab.waitForLoadState('load');
   await newTab.waitForTimeout(6000);
   await newTab.screenshot({ path: 'temp-mail.png' }); 
});
