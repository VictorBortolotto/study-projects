create table users (
	id serial,
	email varchar(500) not null unique,
	password varchar(200) not null
);

create table note_list (
	id serial,
	name varchar(200) not null,
	id_user int
);

create table note_note_list (
	id_note_list int,
	id_note int
);

create table note (
	id serial,
	name varchar(400) not null,
	description varchar(3500) null
);

alter table users add constraint pk_users primary key (id);
alter table note_list add constraint pk_note_list primary key (id);
alter table note add constraint pk_note primary key (id);

alter table note_note_list add constraint fk_note_note_list_note foreign key (id_note) references note (id);
alter table note_note_list add constraint fk_note_note_list_note_list foreign key (id_note_list) references note_list (id);