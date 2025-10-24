import { test, expect } from '@playwright/test'

test.describe('Create Token - API Testing @smoke', () => {
  const baseUrl = 'https://practice.expandtesting.com'

    test('Login as an existing user', async ({ request }) => {

    const response = await request.post(`${baseUrl}/notes/api/users/login`, {
      data: {
        "email": "Prithvi@abc.com",
        "password": "asdfgh"
      },
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(200)
    expect(responseBody.data.token).toBeTruthy()
    const token = responseBody.data.token
    console.log(token)
    
  })
})