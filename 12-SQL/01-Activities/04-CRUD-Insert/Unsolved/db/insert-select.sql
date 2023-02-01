-- Adds column and rows to biographies table
INSERT INTO biographies (id, name)
--Sets the values of the id, name
VALUES
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");
-- Selects all (*) the data within the biographies table
SELECT * FROM biographies;
