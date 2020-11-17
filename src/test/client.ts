import * as superteste from 'supertest';

export function client(): superteste.SuperTest<superteste.Test> {
    return superteste('https://fakerestapi.azurewebsites.net/api/v1');
}
