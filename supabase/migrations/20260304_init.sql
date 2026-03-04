create table tasks (
  id bigint generated types always as identity primary key,
  title text not null,
  is_completed boolean default false
);