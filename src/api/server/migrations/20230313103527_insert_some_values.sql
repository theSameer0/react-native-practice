-- +goose Up
-- +goose StatementBegin
INSERT INTO movies (Id,Name,Language,Image,HeadImage,Tags,Comment) VALUES 
('0','Matrix','English','https://ik.imagekit.io/2h0gcydui/images/Matrix.png','https://ik.imagekit.io/2h0gcydui/images/MatrixHeader.png','English:U/A:2021:Si-fi/Action:2h 28m','To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he"s learned anything, it"s that choice, while an illusion...'),
('1','83','Hindi','https://ik.imagekit.io/2h0gcydui/images/83.png','https://ik.imagekit.io/2h0gcydui/images/83.png','Hindi:U/A:2021:Si-fi/Action:2h 28m','To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he"s learned anything, it"s that choice, while an illusion...'),
('2','Saamanyudu','Telugu','https://ik.imagekit.io/2h0gcydui/images/Saamanyudu.png','https://ik.imagekit.io/2h0gcydui/images/Saamanyudu.png','Telugu:U/A:2021:Si-fi/Action:2h 28m','To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he"s learned anything, it"s that choice, while an illusion...'),
('3','Pushpa','Telugu','https://ik.imagekit.io/2h0gcydui/images/Pushpa.png','https://ik.imagekit.io/2h0gcydui/images/Pushpa.png','Telugu:U/A:2021:Si-fi/Action:2h 28m','To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he"s learned anything, it"s that choice, while an illusion...');
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DELETE FROM movies WHERE Id IN ('0','1','2','3');
-- +goose StatementEnd
