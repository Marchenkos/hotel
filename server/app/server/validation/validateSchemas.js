const Joi = require("joi");

const name = Joi.string().min(3).insensitive().required();
const description = Joi.string().insensitive().default("Not described");
const login = Joi.string().min(3).required();
const currentUser = Joi.any().valid("admin").required()
const nameForUpdate = Joi.string().min(3).insensitive().allow(null);
const descriptionForUpdate = Joi.string().insensitive().allow(null);
const loginForUpdate = Joi.string().min(3).allow(null);

const boardSchema = Joi.object().keys({
    name,
    description,
    color: Joi.string().default("white"),
    createAt: login,
    currentUser
});

const boardSchemaForUpdate = Joi.object().keys({
    name: nameForUpdate,
    description: descriptionForUpdate,
    color: Joi.string().allow(null),
    createAt: loginForUpdate,
    currentUser
});

const cardSchema = Joi.object().keys({
    name,
    description,
    estimate: Joi.number().max(3).default(1),
    dueDate: Joi.date().min("now").allow(null),
    labels: Joi.array().items(Joi.string(), Joi.number()).max(10),
    status: Joi.boolean().truthy("Yes").falsy("No").default(false),
    createAt: login,
    currentUser
});

const cardSchemaForUpdate = Joi.object().keys({
    name: nameForUpdate,
    description: descriptionForUpdate,
    estimate: Joi.number().max(3).allow(null),
    dueDate: Joi.date().min("now").allow(null),
    labels: Joi.array().items(Joi.string(), Joi.number()).max(10).allow(null),
    status: Joi.boolean().truthy("Yes").falsy("No").allow(null),
    createAt: loginForUpdate,
    currentUser
});

const deleteSchema = Joi.object().keys({
    currentUser
});

const userSchama = Joi.object().keys({
    login,
    password: Joi.string().alphanum().min(8).required()
});

module.exports = new Map ([
    [/\/board$/, boardSchema],
    [/(\/(board|card)\/(remove|removeAll)\/)\w+/, deleteSchema],
    [/(\/board\/refresh\/)\w+/, boardSchemaForUpdate],
    [/(\/card\/refresh\/)\w+/, cardSchemaForUpdate],
    [/\/card$/, cardSchema],
    [/\/registration/, userSchama],
    [/\/login/, userSchama]
]);
