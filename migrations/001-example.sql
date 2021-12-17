--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
CREATE TABLE User (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE Post (
    id INTEGER PRIMARY KEY,
    userId INTEGER NOT NULL,
    title TEXT NOT NULL,
    isPublished NUMERIC NOT NULL DEFAULT 0,
    CONSTRAINT Post_fk_userId FOREIGN KEY (userId) REFERENCES User (id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT Post_ck_isPublished CHECK (isPublished IN (0, 1))
);

CREATE INDEX Post_ix_userId ON Post (userId);

INSERT INTO
    User (id, name, email)
VALUES
    (1, 'Peter Cantropus', 'peter@cantropus.com');

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------
DROP INDEX Post_ix_userId;

DROP TABLE Post;

DROP TABLE User; 