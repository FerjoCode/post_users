import Service from "./Modules/Service";
import Post from "./Models/Post";
import User from "./Models/User";
import { userPostUI } from "./modules/Views";

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

        // 4. Get the user gender and photo
        state.users.forEach(async user => {
            // 4.1 Get gender for every user
            await user.getUserGenderPhoto(config.apiUrlGender).then(gender => {
                user.gender = gender.gender;

                // 4.1.1 Get the user photo based on gender
                user.getUserPhoto(config.apiUrlPhoto);

                // 4.1.2 Display the post in the UI after setting photo

                displayUI("posts-container", user);
            });
        });
    });
};

/**
 * Display a given user in the DOM
 *
 * @param {string} selectorClass
 * @param {Object} user
 */

const displayUI = (selectorClass, user) => {
    // 1. Get the HTML selector
    const selector = document.querySelector(`.${selectorClass}`);

    // 2. Insert the html returned in userPostUI method in the DOM
    selector.insertAdjacentHTML("beforeend", userPostUI(user));
};

/**
 * Set up user and posts
 */
const dataController = async () => {
    //Fetch and set initial data for Post and Users
    await setPosts();
    await setUsers();

    // Get the first post of every user
    state.users.forEach(user => user.getUserFirstPost(state.posts));
};

// Initialice functions on load
window.addEventListener("load", dataController);
