export default class User {
    constructor({ id, name }) {
        this.id = id;
        this.name = name;
        this.photo = "";
        this.gender = "";
        this.post = {};
    }

    /**
     * Get the user gender
     *
     * @param {string} genderUrl
     * @return {Promise}
     */
    async getUserGenderPhoto(genderUrl) {
        return await fetch(
            `${genderUrl}/?name=${this.name.split(" ")[0]}`
        ).then(async response => await response.json());
    }

    /**
     * Assing the user photo
     *
     * @param {string} photoUrl
     */
    getUserPhoto(photoUrl) {
        this.photo = `${photoUrl}/${this.gender}/${this.name.split(" ")[0]}`;
    }

    /**
     *  Get the first user post
     * @param {Object} posts
     */
    getUserFirstPost(posts) {
        this.post = posts.filter(post => post.userId === this.id)[0];
    }
}
