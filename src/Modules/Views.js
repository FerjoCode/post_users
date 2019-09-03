/**
 * Here you can export you html templates and markups to be rendered in the DOM
 */

/**
 * Get a user and return a markup to be rendered
 *
 * @param {Object} user
 * @return {String}
 */
export const userPostUI = user => {
    const lines = user.post.body.split("\n");
    const sortedParagraphs = sortParagrapths(lines);
    const paragraphs = sortedParagraphs.map(
        line => `<p class="post-content">${line}</p>`
    );

    return `<div class="post-wrapper" id="${user.id}">
            <figure class="post-header">
                <img
                    src="${user.photo}"
                    alt=""
                    class="user-img"
                />
                <h5 class="user-name">
                    ${user.name}
                </h5>
            </figure>
            <div class="post-body">
                ${paragraphs.join("")}
            </div>
        </div>`;
};

/**
 *  Return an array of sorted paragraph
 *
 * @param {Array} paragrapths
 * @return {Array}
 */
const sortParagrapths = (paragrapths, type = "DESC") => {
    return paragrapths.sort((a, b) => {
        return type === "DESC" ? b.length - a.length : a.length - b.length;
    });
};
