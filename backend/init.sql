CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    done BOOLEAN DEFAULT VALUE false,
    deadline TIMESTAMP
);

INSERT INTO todos(title, description, deadline) VALUES ('Pasear al perro', 'Es un caniche', '2020-11-19'::timestamp);
INSERT INTO todos(title, description, deadline) VALUES ('Comprar la tele', 'Samsung 55"', '2020-11-20'::timestamp);
INSERT INTO todos(title, description, deadline) VALUES ('Estudiar para Inge', 'Capítulos 1 al 10', '2020-11-21'::timestamp);
INSERT INTO todos(title, description, deadline) VALUES ('Anotarme en el gimnasio', 'Santa Fe 1234', '2020-11-19'::timestamp);