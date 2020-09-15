import { StatusCodes } from 'http-status-codes';
import * as Chance from 'chance';
import { client } from '../client';

const chance = new Chance();

describe('Managing books', function () {
    it('/GET - All books', async () => {
        const response = await client()
            .get('/books')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(StatusCodes.OK);

        expect(response.body.length).toBeGreaterThanOrEqual(100);
    });

    it('/GET - An specific book', async () => {
        const response = await client()
            .get('/books/15')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(StatusCodes.OK);

        const responseBase = require('../response/book.json');

        expect(response.body).toMatchObject(
            expect.objectContaining(responseBase),
        );
    });

    it('/POST - A new book', async () => {
        const params = {
            Title: chance.word({ length: 15 }),
            Description: chance.sentence(),
            PageCount: 499,
            Excerpt: chance.paragraph(),
            PublishDate: new Date().toISOString,
        };

        const response = await client()
            .post('/books')
            .send(params)
            .expect(StatusCodes.OK);

        delete params['PublishDate'];

        expect(response.body).toMatchObject(expect.objectContaining(params));
    });

    it('/PUT - Update a book', async () => {
        const params = {
            ID: 10,
            Title: chance.word({ length: 25 }),
            Description: chance.sentence(),
            PageCount: 1000,
            Excerpt: chance.paragraph(),
            PublishDate: '2020-09-14T18:29:12.39Z',
        };

        const response = await client()
            .put(`/books/${params.ID}`)
            .send(params)
            .expect(StatusCodes.OK);

        expect(response.body).toMatchObject(params);
    });

    it('/DELETE - Remove a book', async () => {
        const response = await client()
            .delete(`/books/10`)
            .expect(StatusCodes.OK);

        expect(response.body).toMatchObject({});
    });
});
