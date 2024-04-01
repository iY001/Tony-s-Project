const joi = require('joi');

const postSchema = joi.object({
    title: joi.string().min(3).max(255).required(),
    content: joi.string().trim().min(3).max(505).required()
        .messages({
            'string.min': 'Content must be at least 3 characters long.',
            'string.max': 'Content must be at most 505 characters long.'
        })
})

const postUpdatesSchema = joi.object({
    title: joi.string().min(3).max(255),
    content: joi.string().trim().min(3).max(505)
        .messages({
            'string.min': 'Content must be at least 3 characters long.',
            'string.max': 'Content must be at most 505 characters long.'
    })
})
// const postSchema = joi.object({
//     title: joi.string().min(3).max(255).required(),
//     content: joi.string().trim().min(3).max(505).required()
//         .messages({
//             'string.min': 'Content must be at least 3 characters long.',
//             'string.max': 'Content must be at most 505 characters long.'
//         })
// })
module.exports = {
    postSchema
    ,postUpdatesSchema
}
