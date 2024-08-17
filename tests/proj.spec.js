const {test,expect}=require('@playwright/test');

test("1-title_check",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    await expect(page).toHaveTitle("Online Shop Demo – Demo Site")
})

test('2-url_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    const login_page=await page.getByRole('link', { name: 'Login' })
    await login_page.click()
    await expect(page).toHaveURL('https://www.onlineshopdemo.co.uk/my-account/');
})

test('3-search_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    const search_icon= await page.locator(".elementor-icon")
    await expect(search_icon).toBeTruthy()
})
test('4-hove-checking',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/my-account/")
    const hover_option= await page.locator(".jet-menu-title").nth(2);
    await hover_option.hover()
    await expect(hover_option).toBeVisible()
})

test('5-product-check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/")
    await page.locator('.jet-woo-product-thumbs__inner').nth(0).click();
    await page.locator('#pa_color').selectOption({index:1});
    await page.locator('#pa_size').click();
    await page.locator('#pa_size').selectOption({index:1});
    await page.getByRole('button', { name: 'Add to basket' }).click()
    const confirmtext=page.getByText('“Cateye sunglasses” has been added to your basket.');
    await expect(confirmtext).toBeVisible();
})