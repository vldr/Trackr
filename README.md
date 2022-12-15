<p align="center">
  <img src='logo.svg?raw=true' width='50%'>
</p>

---

A platform for makers, hobbyists, students, and professionals to easily store and visualize data recorded from internet-connected devices like Arduinos and Raspberry Pis.

- [Mission Statement](#mission-statement)
- [How to Build and Run](#how-to-build-and-run)
  - [Backend](#backend)
  - [Frontend](#frontend)

## Mission Statement

There exists a community of makers, students, hobbyists, and professionals who create and design systems that are capable of collecting sensor data like humidity, temperature, and atmospheric pressure.

These makers wish to store and visualize their sensor data, but there exist barriers in place like managing databases, web servers, etc.

As such, trackr sets out to make it easier for these makers to store and visualize their data.

## How to Build and Run

Currently, trackr consists of two components: the frontend and the backend.
The front end is the website that users interact with, whereas the back end is the REST API that responds to requests made by users through the front end.

### Backend

**Note:** When building or running, the Go server executable will use the `.env` file for its environment variables on runtime. Make sure this file exists when running the server executable.

#### Building

To build the backend, make sure you have [Go] installed and GCC installed.

1. From the root directory, navigate to the `backend/` directory.
2. Type `make`

Your build files will be located in the `bin/` directory.

#### Running

In addition to building, you can also run the backend in a development environment.
To run the backend, make sure you have [Go] installed and GCC installed.

1. From the root directory, navigate to the `backend/` directory.
2. Type `make run`
3. Press `Control + C` on your keyboard to exit.

### Frontend

#### Building

To build the frontend, make sure you have [NodeJS] installed.

**Note:** When building, React will use the `.env.production` file for its environment variables. Make sure this file exists when building&mdash;this file is only used when building.

1. From the root directory, navigate to the `frontend/` directory.
2. If it is your first time building the frontend, type `make clean`, otherwise skip this step.
3. Type `make`

Your build files will be located in the `build/` directory.

#### Running

In addition to building, you can also run the frontend in a development environment.
To run the frontend, make sure you have [NodeJS] installed.

**Note:** When running, React will use the `.env.development` file for its environment variables. Make sure this file exists when running the frontend.

1. From the root directory, navigate to the `frontend/` directory.
2. Type `make run`
3. Press `Control + C` on your keyboard to exit.

[nodejs]: https://nodejs.org/en/
[go]: https://go.dev/
