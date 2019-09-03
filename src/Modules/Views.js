/**
 * Here you can export you html templates and markups to be rendered in the DOM
 */

export const userPostUI = user => {
    const lines = user.post.body.split("\n");
    const paragraphs = lines.map(line => `<p class="post-content">${line}</p>`);

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
