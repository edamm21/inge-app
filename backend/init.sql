CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    done BOOLEAN DEFAULT VALUE false,
    deadline TIMESTAMP
);