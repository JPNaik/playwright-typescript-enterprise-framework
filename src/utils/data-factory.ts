export interface UserRegistrationData{
    name: string;
    email: string;
    password: string;
    title: 'Mr' | 'Mrs';
    birthDay: string;
    birthMonth: string;
    birthYear: string;
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
}
export class DataFactory{
    static generateUser():UserRegistrationData{
        const uniqueId = `${Date.now()}_${Math.floor(Math.random()*10000)}`;
        return{
            name: `QA_User_${uniqueId}`,
            email: `qa_auto_${uniqueId}@example.com`,
            password: 'Password@123',
            title: 'Mr',
            birthDay: '15',
            birthMonth: 'May',
            birthYear: '1992',
            firstName: 'Alex',
            lastName: 'Mercer',
            company: 'Enterprise QA Corp',
            address1: '123 Automation Street',
            country: 'United States',
            state: 'California',
            city: 'San Francisco',
            zipcode: '94105',
            mobileNumber: '5551234567',
        };
    }
}