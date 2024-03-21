// src/test/test.js
const { describe, it, expect } = require('@jest/globals');
const request = require('supertest');
const { app, getEngagementScore, startServer } = require('../index');

beforeAll(() => {
    server = startServer(3002);
});

afterAll(async () => {
    if (server) {
        await new Promise((resolve) => server.close(resolve));
    }
});

describe('Server Test', function() {
    describe('getEngagementScore', function() {
        jest.setTimeout(10000);
        it('should calculate the correct engagement score', async () => {
            const attendances = ['10', '20', '30', '40'];
            const score = await getEngagementScore(attendances);
            expect(score).toBeGreaterThanOrEqual(0); 
        });        
    });
});





