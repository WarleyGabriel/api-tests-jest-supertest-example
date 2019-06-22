import { assert } from 'chai';
import { postman } from '../services/postman';
import echoPostmanResponse from '../data/echo.postman.response';

describe('My first API test.', () => {
  it('Get on Postman website.', async () => {
    const response = await postman.getEchoPostman();
    assert.equal(response.status, 200);
    assert.deepEqual(response.data, echoPostmanResponse);
  });
});
