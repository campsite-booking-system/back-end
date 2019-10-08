# Vulpee - Back-end

Vulpee is a Booking Management System. This repo contains the back-end of the Vulpee service.

The application is written in [Typescript](http://www.typescriptlang.org/) using the [AdonisJS](https://adonisjs.com/) framework.

## Installation

1. Clone the repository

```bash
git clone https://github.com/vulpee/back-end
```

2. Create and fill the `.env` file from the given example file

```bash
cd back-end
cp .env.example .env
```

3. Follow the instructions in the [infrastructure](https://github.com/vulpee/infrastructure) repo to launch the services

4. Setup the database

```bash
docker exec -w /app/dist vulpee-back-end bash -c 'npm install ; npm run db:reset'
```

This will create the database and tables and will also seed some starter data to it.
It will create a demo establishment and 3 types of users you can use to login with:

- `view@vulpee.com` | `password`: User with only reading permissions on the establishment
- `manager@vulpee.com` | `password`: User with all permissions on the establishment
- `admin@vulpee.com` | `password`: User with access and full permissions on all establishments
