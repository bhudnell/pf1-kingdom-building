import request from 'supertest';
import sinon from 'sinon';
import { Express } from 'express';

import { createApp } from '../../../src/app';
import { hexService } from '../../../src/modules/hex';
import { testHex1, testHex2 } from '../../testUtils';

describe('hexRouter', () => {
	let app: Express;
	const sandbox = sinon.createSandbox();

	beforeAll(() => (app = createApp()));
	afterEach(() => sandbox.restore());

	describe('GET /', () => {
		it('should return 200 and a list of hexes with an existing kingdomId', (done) => {
			sandbox.stub(hexService, 'getAllHexes').resolves([testHex1, testHex2]);

			request(app)
				.get('/api/hex?kingdomId=1')
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					expect(res.body.length).toEqual(2);
					expect(res.body[0]).toMatchObject(testHex1);
					expect(res.body[1]).toMatchObject(testHex2);
					done();
				});
		});

		it('should return 404 when the kingdomId doesnt exist in the db', (done) => {
			sandbox.stub(hexService, 'getAllHexes').resolves([]);

			request(app)
				.get('/api/hex?kingdomId=0')
				.expect('Content-Type', /text\/plain/)
				.expect(404)
				.end((err, res) => {
					if (err) return done(err);
					expect(res.text).toEqual('Not Found');
					done();
				});
		});

		it('should return 400 for missing kingdomId', (done) => {
			const expectedResBody = {
				ok: false,
				status: 400,
				error: [
					{
						keyword: 'required',
						instancePath: '/query',
						schemaPath: '#/properties/query/required',
						params: {
							missingProperty: 'kingdomId',
						},
						message: "must have required property 'kingdomId'",
					},
				],
			};

			request(app)
				.get('/api/hex')
				.expect('Content-Type', /json/)
				.expect(400)
				.end((err, res) => {
					if (err) return done(err);
					expect(res.body).toMatchObject(expectedResBody);
					done();
				});
		});

		it('should return 400 for a non-number kingdomId', (done) => {
			const expectedResBody = {
				ok: false,
				status: 400,
				error: [
					{
						keyword: 'type',
						instancePath: '/query/kingdomId',
						schemaPath: '#/properties/query/properties/kingdomId/type',
						params: {
							type: 'number',
						},
						message: 'must be number',
					},
				],
			};

			request(app)
				.get('/api/hex?kingdomId=string')
				.expect('Content-Type', /json/)
				.expect(400)
				.end((err, res) => {
					if (err) return done(err);
					expect(res.body).toMatchObject(expectedResBody);
					done();
				});
		});

		it('should return 400 for illegal parameters', (done) => {
			const expectedResBody = {
				ok: false,
				status: 400,
				error: [
					{
						keyword: 'additionalProperties',
						instancePath: '/query',
						schemaPath: '#/properties/query/additionalProperties',
						params: {
							additionalProperty: 'illegalParameter',
						},
						message: 'must NOT have additional properties',
					},
				],
			};

			request(app)
				.get('/api/hex?kingdomId=1&illegalParameter=true')
				.expect('Content-Type', /json/)
				.expect(400)
				.end((err, res) => {
					if (err) return done(err);
					expect(res.body).toMatchObject(expectedResBody);
					done();
				});
		});
	});
});
