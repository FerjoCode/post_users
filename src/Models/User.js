export default class User {
    constructor({ id, name }) {
        this.id = id;
        this.name = name;
        this.photo = "";
        this.gender = "";
        this.post = {};
    }

    async getUserGenderPhoto(genderUrl) {
        return await fetch(
            `${genderUrl}/?name=${this.name.split(" ")[0]}`
        ).then(async response => await response.json());
    }

    getUserPhoto(photoUrl) {
        this.photo = `${photoUrl}/${this.gender}/${this.name.split(" ")[0]}`;
    }
}
