import Service from "./Modules/Service";
import Post from "./Models/Post";
import User from "./Models/User";

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
    // 1. Fetch and store posts in global state
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

/**
 * Set up all user logic
 */
const setUsers = async () => {
    // 1. Fetch and store posts in gobal state
    await service.fetchData(config.apiUrlUsers).then(users => {
        // 2. Initilize state for users
        state.users = [];

        // 3. Create new user instance for each user;
        users.forEach(user => {
            state.users.push(
                new User({
                    id: user.id,
                    name: user.name
                })
            );
        });
    });
};

const dataController = async () => {
    //Fetch and set initial data for Post and Users
    await setPosts();
    await setUsers();
};

// Initialice functions on load
window.addEventListener("load", dataController);

console.log(state);
