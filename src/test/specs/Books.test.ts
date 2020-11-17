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
            title: chance.word({ length: 15 }),
            description: chance.sentence(),
            pageCount: 499,
            excerpt: chance.paragraph(),
            publishDate: new Date().toISOString,
        };

        const response = await client()
            .post('/books')
            .send(params)
            .expect(StatusCodes.OK);

        delete params['publishDate'];

        expect(response.body).toMatchObject(expect.objectContaining(params));
    });

    it('/PUT - Update a book', async () => {
        const params = {
            ID: 10,
            title: chance.word({ length: 25 }),
            description: chance.sentence(),
            pageCount: 1000,
            excerpt: chance.paragraph(),
            publishDate: '2020-09-14T18:29:12.39Z',
        };

        const response = await client()
            .put(`/books/${params.ID}`)
            .send(params)
            .expect(StatusCodes.OK);

        delete params['ID'];

        expect(response.body).toMatchObject(params);
    });

    it('/DELETE - Remove a book', async () => {
        const response = await client()
            .delete(`/books/10`)
            .expect(StatusCodes.OK);

        expect(response.body).toMatchObject({});
    });

    it('/CONTRACT - Check contract of getting books', async () => {
        const response = await client()
            .get('/books/1')
            .set('Accept', 'application/json')
            .expect(StatusCodes.OK);

        const responseBase = require('../response/book.json');

        Object.keys(responseBase).forEach((k) =>
            expect(response.body).toHaveProperty(k),
        );
    });
});
