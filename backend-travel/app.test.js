  import { favoriteCities} from "./data/db.js";
  import request from 'supertest'
  import {app} from "./server.js"

  test('GET /api/favorites for all favorite cities', async () => {
    const response = await request(app).get('/api/favorites');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(favoriteCities);
  });

  test('GET /api/favorites/description for description of favorite cities', async () => {
    const response = await request(app).get("/api/favorites/description?cityname=Edmonton");
    expect(response.status).toBe(200);
  });

  test('GET /api/favorites/description for description of favorite cities', async () => {
    const response = await request(app).get("/api/favorites/description?cityname=calgary");
    expect(response.status).toBe(404);
  });