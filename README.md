<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" width=100 />
  <h1>Pub/Sub with Redis + Node.js</h1>
</div>

## Installation

```bash
$ npm install
```

## Running Redis (with docker)

```bash
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

## Running the app

```bash
# start publisher
$ npm run start:pub

# start subscriber
$ npm run start:sub
```

---

<div>
  <sub>Made with 💙 by <a href="https://github.com/joaovictornsv">João Victor</a></sub>
</div>
