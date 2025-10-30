# Automated Deployment with AKS, Helm, and GitHub Actions

This project shows how I automated the deployment of a **full-stack application (React + Node.js)** to **Azure Kubernetes Service (AKS)** using **Helm** and **GitHub Actions**.

---

## 🧱 What’s Inside

- **Backend:** Node.js (Express)
- **Frontend:** React (served via Nginx)
- **Containerization:** Docker
- **Deployment:** Helm (Kubernetes package manager)
- **Infrastructure:** Azure Kubernetes Service (AKS)
- **CI/CD:** GitHub Actions

---

## ⚙️ What I’ve Built

I created a CI/CD pipeline that:
1. Builds Docker images for both **frontend** and **backend**.  
2. Pushes the images to **GitHub Container Registry (GHCR)**.  
3. Deploys both services automatically to **AKS** using **Helm**.  
4. Manages environment variables and secrets securely using **GitHub Secrets**.  

So, whenever I push code to the main branch — my application automatically updates on AKS 🎯

---

## 🧩 How It Works

```text
GitHub Push → GitHub Actions → Build Docker Images → Push to GHCR
            → Connect to AKS → Deploy via Helm → App Live on Internet 🌍
```

---

## 🔐 Secrets & Configurations

These values are securely stored in GitHub → **Settings → Secrets → Actions**:

| Secret | Description |
|--------|--------------|
| `AZURE_CREDENTIALS` | Login credentials for Azure (Service Principal) |
| `AKS_RESOURCE_GROUP` | Resource group of AKS cluster |
| `AKS_CLUSTER_NAME` | Name of AKS cluster |
| `MONGO_URI` | MongoDB connection string |
| `REACT_APP_BACKEND_URL` | Backend API endpoint for frontend |

---

## 📦 Deployment Flow

### 1️⃣ Build & Push Images
A GitHub Actions workflow builds Docker images for backend & frontend and pushes them to GHCR.

### 2️⃣ Register Secrets
A separate workflow registers app secrets (Mongo URI, backend URL) into the AKS cluster.

### 3️⃣ Deploy via Helm
Final workflow connects to AKS and deploys both frontend & backend using Helm charts.

---

## 🌐 Accessing the App

Once deployed, run this command to find your public IP:

```bash
kubectl get service frontend
```

Then open your browser at:

```
http://<PUBLIC_IP>
```
---

## ✨ Summary

✅ Full-stack app (React + Node.js)  
✅ Dockerized and deployed on Azure Kubernetes Service  
✅ Automated using Helm and GitHub Actions  
✅ Secure and production-ready setup  
