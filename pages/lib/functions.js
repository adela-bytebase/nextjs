// lib/functions.js

import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_API_KEY,
  version: "v4",
});


// Grab all posts from Ghost
export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all",
      })
      .catch((err) => {
        console.error(err);
      });
  }
  