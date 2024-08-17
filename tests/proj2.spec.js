const{test,expect} = require("@playwright/test")
test("title check",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    await expect(page).toHaveTitle("OrangeHRM")
})


test("logion check",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await  expect(page).toHaveTitle("OrangeHRM")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", {name:'Login'}).click()
})

test("search check",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    const search_icon = await page.locator(".elementor-icon")
    await expect(search_icon).toBeTruthy()
})