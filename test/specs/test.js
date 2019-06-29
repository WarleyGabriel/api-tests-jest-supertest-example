import jsf from 'json-schema-faker';
import chai, { assert } from 'chai';
import jsonSchema from 'chai-json-schema';
import { postman } from '../services/postman';
import echoPostmanResponse from '../data/echo.postman.response';
import echoPostmanSchema from '../schema/echo.postman.schema';

chai.use(jsonSchema);

describe('My first API test.', () => {
  it('Get on Postman website.', async () => {
    const response = await postman.getEchoPostman();
    assert.equal(
      response.status,
      200,
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
    assert.containsAllKeys(
      echoPostmanResponse,
      fake,
    );
    assert.notDeepEqual(
      echoPostmanResponse,
      fake,
    );
  });
});
