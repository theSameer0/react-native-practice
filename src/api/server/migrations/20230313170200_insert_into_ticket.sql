-- +goose Up
-- +goose StatementBegin
INSERT INTO ticket VALUES ('0','','','',0,0,'0','0','0');
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DELETE FROM ticket WHERE Id = '0';
-- +goose StatementEnd
