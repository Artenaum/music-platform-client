import {test, expect} from '@playwright/test'

test.describe('Create Track Page Test', () => {
	test('test next and back buttons', async ({page}) => {
		await page.goto('http://localhost:3000/tracks/create')

		//await page.locator('label:has-text("Название трека")').waitFor({ state: 'visible' });

		// const nameInput = page.getByLabel('Название трека')
		// const artistInput = page.getByLabel('Имя исполнителя')
		// const textInput = page.getByLabel('Слова к треку')

		// await expect(nameInput).toBeVisible({timeout: 10000})
		// await expect(artistInput).toBeVisible({timeout: 10000})
		// await expect(textInput).toBeVisible({timeout: 10000})

		// await page.getByText('Далее').click()

		// await expect(page.getByText('Загрузить изображение')).toBeVisible()
		// await expect(nameInput).not.toBeVisible()

		// await page.getByText('Назад').click()

		// await expect(nameInput).toBeVisible()
		// await expect(page.getByText('Загрузить изображение')).not.toBeVisible()
	})
})