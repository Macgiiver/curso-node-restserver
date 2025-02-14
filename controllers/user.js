const { response, request } = require('express');

const userGet = (req = request, res = response) => {

    const { q, nombre = 'No Name', apikey, page = 1, limit } = req.query;

    res.status(403).json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const userPut = (req, res = response) => {

    const { id } = req.params;

    res.status(201).json({
        msg: 'put API - Controlador',
        id
    });
};

const userPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
};

const userDelete = (req, res = response) => {
    res.status(201).json({
        msg: 'delete API - Controlador'
    });
};

const userPatch = (req, res = response) => {
    res.status(201).json({
        msg: 'patch API - Controlador'
    });
};



module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
};