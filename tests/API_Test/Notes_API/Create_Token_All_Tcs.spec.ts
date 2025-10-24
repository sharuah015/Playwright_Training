import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname replacement for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON in a way that's compatible with ESM (avoid import assertions issues)
const jsonPath = path.resolve(__dirname, '../TestData_API/CreateToken.json');
const testData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
 
for (const testCase of testData.testCases) {
    test(`Login API Test - ${testCase.TestCase_ID}`, async ({ request }) => {
        // Login API endpoint
        const loginUrl = 'https://practice.expandtesting.com/notes/api/users/login';
        // Request body with credentials from JSON
        const requestBody = {
            email: testCase.email,
            password: testCase.password
        };
 
        // Make POST request
        const response = await request.post(loginUrl, {
            data: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        });
 
        // Assert response status
        expect(response.status()).toBe(testCase.exp_status_code);
 
        // Parse response body
        const responseBody = await response.json();
 
        // Assertions for response
        expect(responseBody.message).toBe(testCase.exp_res);
        // Log test case details
        console.log(`Test Case ${testCase.TestCase_ID} completed`);
        if (testCase.exp_status_code === 200) {
            console.log('Auth Token:', responseBody.data.token);
        }
    });
}