import { APIRequestContext,expect } from "@playwright/test";
import { EnvConfig } from "@config/env.config";
import { UserRegistrationData } from "@utils/data-factory";

export class UserApiClient{
    private readonly request:APIRequestContext;

    constructor(request:APIRequestContext){
        this.request=request;
    }

    async createUser(user:UserRegistrationData):Promise<void>{
        const response = await this.request.post(`${EnvConfig.baseurl}/api/createAccount`,{
            form:{
                name: user.name,
                email: user.email,
                password: user.password,
                title: user.title,
                birth_date: user.birthDay,
                birth_month: user.birthMonth,
                birth_year: user.birthYear,
                firstname: user.firstName,
                lastname: user.lastName,
                company: user.company,
                address1: user.address1,
                address2: '',
                country: user.country,
                zipcode: user.zipcode,
                state: user.state,
                city: user.city,
                mobile_number: user.mobileNumber,
            },
        });
        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        expect(body.responseCode).toBe(201);
        expect(body.message).toBe('User created!');
    }

    async deleteUser(email:string,password:string):Promise<void>{
        const response = await this.request.delete(`${EnvConfig.baseurl}/api/deleteAccount`,{
            form:{
                email,
                password,
            },
        });

        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        expect(body.responseCode).toBe(200);
        expect(body.message).toBe('Account deleted!');
    }
}