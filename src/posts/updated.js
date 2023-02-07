const { updatePost} = require("./posts.controllers");

const id = 1;
const postObj = {
    title: "Updated Title",
    content: "Updated Content",
};

updatePost(id, postObj)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });