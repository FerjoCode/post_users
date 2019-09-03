import Service from "./Modules/Service";
import Post from "./Models/Post";

import * as config from "./config";

import "./styles.scss";

// Create global state.
const state = {};

// Create an instance of the api service
const service = new Service();

/**
 * Set up all post logic
 */

const setPosts = async () => {
    // 1. Fetch and save posts in global state
    await service.fetchData(config.apiUrlPosts).then(posts => {
        // 2. Initialize state for posts
        state.posts = [];

        // 3. Create new post instance for each fetched post.
        posts.forEach(post => {
            state.posts.push(
                new Post({
                    id: post.id,
                    userId: post.userId,
                    body: post.body
                })
            );
        });
    });
};

// Initialice functions on load
window.addEventListener("load", setPosts);

console.log(state);
