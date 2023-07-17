# CHU-NEONATAL-BACK-WEB


Database Schema:  https://dbdiagram.io/d/645040f0dca9fb07c45406e5


<<<<<<< HEAD

CHU API




Getting Started
If not already done, install Docker Compose with Docker Desktop (v2.10+)
Run docker compose build --pull --no-cache to build fresh images
Run docker compose up -d to run the containers.
Open https://localhost:4430 in your favorite web browser. (For API documentation, open https://localhost:4430/api/docs)
Generate the public and private keys used for signing JWT tokens:
Enter the php Container: docker compose exec php sh
Launch set -e
Generate keys php bin/console lexik:jwt:generate-keypair
Update Permissions:
setfacl -R -m u:www-data:rX -m u:"$(whoami)":rwX config/jwt
setfacl -dR -m u:www-data:rX -m u:"$(whoami)":rwX config/jwt
PS: to stop the Docker containers, run docker compose down --remove-orphans

Tech & Features
PHP 8.2
Symfony 6.2
Caddy 2.6
API Platform already installed and integred
JWT Authentication, Security & User Entity with Password Hash implemented
