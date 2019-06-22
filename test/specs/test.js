import { assert } from 'chai';
import { postman } from '../services/postman';
import echoPostmanResponse from '../data/echo.postman.response';

describe('My first API test.', () => {
  it('Get on Postman website.', async () => {
    const response = await postman.getEchoPostman();
    assert.equal(
      response.status,
      200,
      'Testing the correct status',
    );
    assert.containsAllKeys(
      response.data,
      echoPostmanResponse,
      'Testing the correct contract',
    );
    assert.deepEqual(
      response.data,
      echoPostmanResponse,
      'Testing the correct response',
    );
  });
});
