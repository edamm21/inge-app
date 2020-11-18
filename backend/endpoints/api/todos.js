const express = require('express');
const router = express.Router();
const { pool } = require('../../postgreSQL');

/*
    @route: GET /api/todos
    @desc: GET de todos a la BD
    @access: público
 */
router.get('/', (req, res) => {
    const query = 'SELECT * FROM todos ORDER BY deadline ASC;';
    pool.query(query, (error, results) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        if(error)
            return res.status(400).json({ msg: 'Error buscando TODOs' }); 
        res.status(200).json(results.rows);
    });
});

/*
    @route: GET /api/todos/:id
    @desc: GET de un todo específico de la BD
    @access: público
 */
router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM todos WHERE id = $1;';
    const id = [req.params.id];
    pool.query(query, id, (error, results) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');    
        if(error)
            return res.status(400).json({ msg: 'Error buscando TODO' });
        res.status(200).json(results.rows);
    });
});

/*
    @route: POST /api/todos
    @desc: Crear un nuevo todo
    @access: público
 */
router.post('/', (req, res) => {
    const query = 'INSERT INTO todos(title, description, deadline) VALUES($1, $2, $3);';
    const values = [req.body.title, req.body.description, req.body.deadline];
    pool.query(query, values, (error, results) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        if(error)
            return res.status(400).json({ msg: 'Error creando TODO' });
        return res.status(200).json({ msg: 'TODO añadido a la BD exitosamente!' });
    });
});

/*
    @route: DELETE /api/todos/:id
    @desc: Intenta eliminar un todo de la BD
    @access: público
 */
router.delete('/:id', (req, res) => {
    console.log('Deleting....');
    const query = 'DELETE FROM todos WHERE id = $1 RETURNING id;';
    const id = [req.params.id];
    pool.query(query, id, (error, results) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        if(error)
            return res.status(400).json({ msg: 'Error eliminando todo' });
        else if(results.rows.length === 0)
            return res.status(400).json({ msg: 'El id no existe!' });
        else
            return res.status(200).json({ msg: 'Todo eliminado exitosamente!' });

    });
});

/*
    @route: PUT /api/todos/id
    @desc: Tilda como completo el todo
    @access: público
 */
router.put('/:id', (req, res) => {
    console.log('Completing...');
    const query = 'UPDATE todos SET done = true WHERE id = $1 RETURNING *;';
    const id = [req.params.id];
    pool.query(query, id, (error, results) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        if(error)
            return res.status(400).json({ msg: 'Error completando TODO' });
        console.log(results.rows[0]);
        return res.status(200).json(results.rows[0]);
    });
});

module.exports = router;