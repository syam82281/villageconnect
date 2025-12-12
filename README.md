Here you go Syam — a **clean, simple, professional README** that is perfect for GitHub.
This version is short, clear, and ideal for beginners **and** DevOps project documentation.

You can copy–paste this into your **README.md** file.
---
# **README.md (Simple & Professional)**

```markdown
#  VillageConnect – DevOps CI/CD Project

VillageConnect is a simple Node.js Express application deployed using a full CI/CD pipeline on AWS EC2 with Docker and Jenkins.  
This project demonstrates end-to-end DevOps skills, including automation, containerization, and continuous deployment.
---
##  Features
- Node.js Express API
- Dockerized application
- Jenkins CI/CD Pipeline
- GitHub Webhook integration
- Automatic deployment to AWS EC2
---
##  Project Files

```
VillageConnect/
│── app.js                # Main Node.js app
│── Dockerfile            # Docker build file
│── package.json
│── deploy.sh             # Container restart script
└── Jenkins Pipeline      # Configured in Jenkins UI

```

---

## API Endpoints

### Root:
```

GET /

```
Response:
```

VillageConnect Server is Running!

```

### Village API:
```

GET /api/village
````
Response:
```json
{ "message": "Welcome to VillageConnect API!" }
````
##  Docker Commands

### Build:
```bash
docker build -t villageconnect-app .
`
### Run:
```bash
docker run -d -p 3000:3000 --name villageconnect-container villageconnect-app
```
##  CI/CD Pipeline (GitHub → Jenkins → Docker → EC2)

### Jenkins Stages:

1. Pull code from GitHub
2. Build Docker image
3. Stop old container
4. Run new container
5. Deploy automatically

Webhook triggers the pipeline on every GitHub push.

---

## 🛠 Technologies Used

* Node.js / Express
* Docker
* Jenkins
* AWS EC2 (Ubuntu)
* GitHub Webhooks

---

## How to Run Locally

Install dependencies:

```bash
npm install
```

Start server:

```bash
node app.js
```

Open:

```
http://localhost:3000
```

---

## Status

✔ CI/CD Pipeline Completed
✔ Jenkins Integration Working
✔ Deployed on EC2
✔ Docker Automated Deployment

---

## Author

**Syam**

