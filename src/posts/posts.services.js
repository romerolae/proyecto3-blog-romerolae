const postControllers = require("./posts.controllers");

const getAllPosts = (req, res) => {
    postControllers
        .findAllPosts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const getPostById = (req, res) => {
    const id = Number(req.params.id);
    postControllers
        .findPostById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const postNewPost = (req, res) => {
    const postObj = req.body;

    postControllers
        .createPost(postObj)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const deletePost = (req, res) => {
    const id = req.params.id;
    postControllers
        .deletePost(id)
        .then((data) => {
            if (data ===1) { //! It should return 1 if the id is a correct one
                res.status(204).json({
                    message: `The post with ID ${id} was deleted successfully`,
                });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

//!  ✔ It should fetch [1], in case that the id we use is the correct one
//! It should fetch [0], in case that the id used is the wrong one
const patchPost = (req, res) => {
    const id = Number(req.params.id);
    const postObj = req.body;
    postControllers
        .updatePost(id, postObj)
        .then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: `Post with ID ${id} was updated successfully`,
                });
            } else {
                res.status(404).json({ message: `Post not found` });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const putPost = (req, res) => {
    const id = Number(req.params.id);
    const postObj = req.body;
    if (!postObj.userName || !postObj.content) {
        return res.status(400).json({
            message: "Missing data",
            fields: {
                userName: "string",
                content: "string",
                isPublished: "boolean",
            },
        });
    }
    postControllers
        .updatePost(id, postObj)
        .then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: `The post with the ID ${id} has been updated successfully`,
                });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
    deletePost,
    patchPost,
    putPost,
};
