create database trello;

use trello;

create table user(
	id int,
    email varchar(400) not null unique,
    password varchar(400) not null,
    reference varchar(10) not null unique
);

create table menager(
	id int,
    nickname varchar(400) not null,
    photo longtext null,
    description varchar(750) null,
    id_user int
);

alter table user add constraint pk_user primary key user(id);
alter table user modify column id int auto_increment;

alter table menager add constraint pk_menager primary key menager(id, id_user);
alter table menager modify column id int auto_increment;

alter table menager add constraint fk_user_menager foreign key menager(id_user) references user(id);

create table frame(
	id int,
    name varchar(500) not null,
    description varchar(600) not null,
    archived boolean default false,
    id_menager int
);

alter table frame add constraint pk_frame primary key frame(id);
alter table frame modify column id int auto_increment;
alter table frame add constraint fk_frame_menager foreign key frame(id_menager) references menager(id);

create table users_frame (
    id_user int,
    id_frame int
);

alter table users_frame add constraint fk_users_frame_user foreign key users_frame(id_user) references user(id);
alter table users_frame add constraint fk_users_frame_frame foreign key users_frame(id_frame) references frame(id);

create table task_list(
	id int,
    name varchar(400) not null
);

alter table task_list add constraint pk_task_list primary key task_list(id);
alter table task_list modify column id int auto_increment;

create table task_list_in_frame(
	id_frame int,
    id_task_list int
);

alter table task_list_in_frame add constraint fk_task_list_in_frame_frame foreign key task_list_in_frame(id_frame) references frame(id);
alter table task_list_in_frame add constraint fk_task_list_in_frame_task_list foreign key task_list_in_frame(id_task_list) references task_list(id);

create table task(
	id int,
    name varchar(500) not null,
    description varchar(500) not null,
    priority varchar(1) default 'L',
    start_date date,
    end_date date,
    spended_time int,
    archived boolean default false
);

alter table task add constraint pk_task primary key task(id);
alter table task modify column id int auto_increment;

create table task_in_task_list(
   id_task int,
   id_task_list int 
);

alter table task_in_task_list add constraint fk_task_in_task_list_task foreign key task_in_task_list(id_task) references task(id);
alter table task_in_task_list add constraint fk_task_in_task_list_task_list foreign key task_in_task_list(id_task_list) references task_list(id);