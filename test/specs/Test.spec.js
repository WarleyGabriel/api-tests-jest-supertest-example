import jsf from 'json-schema-faker';
import chai, { assert } from 'chai';
import jsonSchema from 'chai-json-schema';
import Chance from 'chance';
import request from 'supertest';
import * as HttpStatus from 'http-status-codes';
import { postmanService } from '../services/Postman.service';
import echoPostmanResponse from '../data/responses/EchoPostman.response.json';
import echoPostmanSchema from '../data/schemas/EchoPostman.schema.json';

chai.use(jsonSchema);
const chance = new Chance();

describe('My first API test.', () => {
    it('Check response on Postman website.', async () => {
        const response = await postmanService.getEchoPostman();
        assert.equal(
            response.status,
            HttpStatus.OK,
            'Testing the right status',
        );
        assert.deepEqual(
            response.data,
            echoPostmanResponse,
            'Testing the right response',
        );
    });

    it('Check contract on Postman website.', async () => {
        const response = await postmanService.getEchoPostman();
        assert.jsonSchema(
            response.data,
            echoPostmanSchema,
            'Testing the right contract',
        );
    });

    it('Example generating fake data.', () => {
        const fake = jsf.generate(echoPostmanSchema);
        assert.containsAllKeys(echoPostmanResponse, fake);
        assert.notDeepEqual(echoPostmanResponse, fake);
    });

    it('Just an example with "chance".', () => {
        assert.isString(chance.cpf());
    });

    it('Just an example with "supertest".', (done) => {
        request('https://postman-echo.com')
            .get('/get')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(HttpStatus.OK, done);
    });
});
