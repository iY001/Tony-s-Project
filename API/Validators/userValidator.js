const joi = require('joi');

const signupSchema = joi.object({
    name: joi.string().trim().min(3).max(255).required(),
    email: joi.string().email().trim().lowercase().required(),
    password: joi.string().min(8).max(255).required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
        .messages({
            'string.pattern.base': 'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character.'
        }),
    role: joi.string().valid('user').default('user')
});

const signinSchema = joi.object({
    email: joi.string().email().trim().lowercase().required(),
    password: joi.string().required(),
});

const postUserSchema = joi.object({
    name: joi.string().trim().min(3).max(255).required(),
    email: joi.string().email().trim().lowercase().required(),
    password: joi.string().min(8).max(255).required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
        .messages({
            'string.pattern.base': 'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character.'
        }),
    role: joi.string().valid('admin', 'moderator', 'user').default('user')
});

const putUserSchema = joi.object({
    name: joi.string().trim().min(3).max(255),
    email: joi.string().email().trim().lowercase(),
    password: joi.string().min(8).max(255)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
        .messages({
            'string.pattern.base': 'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character.'
        }),
    role: joi.string().valid('admin')
});

const roleSchema = joi.string().valid('admin', 'moderator', 'user');

module.exports = {
    signupSchema,
    signinSchema,
    postUserSchema,
    putUserSchema,
    roleSchema
}