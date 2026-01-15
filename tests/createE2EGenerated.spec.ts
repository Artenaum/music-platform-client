import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('http://localhost:3000/tracks/create');
	await expect(page.locator('div').filter({ hasText: /^Название трека$/ })).toBeVisible()
	await expect(page.locator('div').filter({ hasText: /^Имя исполнителя$/ })).toBeVisible()
	await expect(page.locator('div').filter({ hasText: /^Слова к треку$/ })).toBeVisible()
	
	await page.getByRole('button', { name: 'Далее' }).click();
	await expect(page.locator('div').filter({ hasText: /^Загрузить изображение$/ }).nth(1)).toBeVisible()
	await expect(page.locator('div').filter({ hasText: /^Название трека$/ })).not.toBeVisible()
	await page.getByRole('button', { name: 'Назад' }).click();

	await expect(page.locator('div').filter({ hasText: /^Загрузить изображение$/ }).nth(1)).not.toBeVisible()
	await expect(page.locator('div').filter({ hasText: /^Название трека$/ })).toBeVisible()
	await expect(page.locator('div').filter({ hasText: /^Имя исполнителя$/ })).toBeVisible()
	await expect(page.locator('div').filter({ hasText: /^Слова к треку$/ })).toBeVisible()

});