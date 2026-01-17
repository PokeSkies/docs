---
title: Storage Options
description: Configuration options for data storage in SkiesCrates
---

Settings for data storage.
```json
"storage": {
  "type": "SQLITE",
  "host": "localhost",
  "port": 27017,
  "database": "skiescrates",
  "username": "root",
  "password": "",
  "table_prefix": "skiescrates_",
  "properties": {
    "useUnicode": "true",
    "characterEncoding": "utf8"
  },
  "pool_settings": {
    "maximum_pool_size": 10,
    "minimum_idle": 10,
    "keepalive_time": 0,
    "connection_timeout": 30000,
    "idle_timeout": 600000,
    "max_lifetime": 1800000
  },
  "url_override": ""
}
```
## Type
The type of storage to use, defaults to `SQLITE`. Supported types are:
- `JSON` - <Badge text="Danger" variant="danger" /> Stores data in a JSON file located at `config/skiescrates/storage.json`. Not recommended for production servers due to performance.
- `SQLITE` - Stores data in a SQLite database located at `config/skiescrates/storage.db`.
- `MYSQL` - Stores data in a MySQL or MariaDB database. Requires a running MySQL/MariaDB server.
- `MONGODB` - Stores data in a MongoDB database. Requires a running MongoDB server.
```json
"type": "SQLITE"
```
## Host
The hostname or IP address of the database server. Only used for `MYSQL` and `MONGODB` storage types.
```json
"host": "localhost"
```
## Port
The port number of the database server. Only used for `MYSQL` and `MONGODB` storage types.
```json
"port": 27017
```
## Database
The name of the database to use. Only used for `MYSQL` and `MONGODB` storage types.
```json
"database": "skiescrates"
```
## Username
The username to connect to the database. Only used for `MYSQL` and `MONGODB` storage types.
```json
"username": "root"
```
## Password
The password to connect to the database. Only used for `MYSQL` and `MONGODB` storage types.
```json
"password": ""
```
## Table Prefix
A prefix to add to all table names in the database. Only used for `MYSQL` and `SQLITE` storage types.
```json
"table_prefix": "skiescrates_"
```
## Properties
Additional properties to add to the database connection URL. Only used for `MYSQL` storage type. Do not modify these unless you know what you're doing.
```json
"properties": {
  "useUnicode": "true",
  "characterEncoding": "utf8"
}
```
## Pool Settings
Settings for the database connection pool. Only used for `MYSQL` and `SQLITE` storage types. Do not modify these unless you know what you're doing.
```json
"pool_settings": {
  "maximum_pool_size": 10,
  "minimum_idle": 10,
  "keepalive_time": 0,
  "connection_timeout": 30000,
  "idle_timeout": 600000,
  "max_lifetime": 1800000
}
```
## URL Override
An optional full database connection URL to use instead of the individual settings above. Only used for `MONGODB` storage types.
```json
"url_override": ""
```