import jsf from 'json-schema-faker';
import chai, { assert } from 'chai';
import jsonSchema from 'chai-json-schema';
import * as HttpStatus from 'http-status-codes';
import { postmanService } from '../services/Postman.service';
import echoPostmanResponse from '../data/responses/EchoPostman.response';
import echoPostmanSchema from '../data/schemas/EchoPostman.schema';

chai.use(jsonSchema);

describe('My first API test.', () => {
    it('Get on Postman website.', async () => {
        const response = await postmanService.getEchoPostman();
        assert.equal(
            response.status,
            HttpStatus.OK,
            'Testing the right status',
        );
        assert.jsonSchema(
            response.data,
            echoPostmanSchema,
            'Testing the right contract',
        );
        assert.deepEqual(
            response.data,
            echoPostmanResponse,
            'Testing the right response',
        );
    });

    it('Example generating fake data.', () => {
        const fake = jsf.generate(echoPostmanSchema);
        assert.containsAllKeys(echoPostmanResponse, fake);
        assert.notDeepEqual(echoPostmanResponse, fake);
    });
});
