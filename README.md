# API RESTFull

### Clone the git repository of the project:
    git clone git@github.com:Tetaaard/rest-api-docker.git
### Open the terminal of the project and go in the folder of the project:
    cd project-name

### Build the project with docker-compose:
    docker-compose up --build

### If you use ubuntu:
    sudo docker exec -it rest-api-docker_mongomongo_1  bash
### if you use windows:
    winpty docker exec -it rest-api-docker_mongo_1 bash

### Run  mongo with command:
    mongo
### Create dtabase:
    use database
### Create collection:
    db.createCollection('pictures')
### Exit mongo :
    exit

### import folder database.json in collection pictures with cli in root of the project  or with mongodb compass !
    mongoimport --db database --collection pictures --drop --jsonArray --file server/database.json


# Enjoy and like Q!

