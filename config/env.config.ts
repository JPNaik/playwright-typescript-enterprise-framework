export const EnvConfig={
    baseurl: process.env.BASE_URL || 'https://automationexercise.com',
    invalidUser:{
        email: process.env.TEST_USER_EMAIL || 'invalid_user_qa@test.com',
        password: process.env.TEST_USER_PASSWORD || 'wrongpassword123',
    }
}as const;