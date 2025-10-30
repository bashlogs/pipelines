# ⚙️ AKS CI/CD Pipeline Overview

## 🎯 Objective

You want the GitHub Actions pipeline to:

1. **Connect to Azure Kubernetes Service (AKS)**
2. **Build & Push Docker images** (Backend + Frontend) to **Azure Container Registry (ACR)**
3. **Deploy via Helm**, using secrets stored in **GitHub Secrets**

---

## 🧱 Required GitHub Secrets

Set these in your repository:

> **GitHub → Settings → Secrets and variables → Actions**

| Secret Name | Description |
|--------------|-------------|
| `AZURE_CREDENTIALS` | JSON output from `az ad sp create-for-rbac` |
| `ACR_NAME` | Your Azure Container Registry name (e.g., `pipedeploy`) |
| `AKS_RESOURCE_GROUP` | Name of your AKS resource group |
| `AKS_CLUSTER_NAME` | Name of your AKS cluster |
| `MONGO_URI` | MongoDB connection string |
| `REACT_APP_BACKEND_URL` | Backend URL for frontend (optional override) |

---

## 🧾 One-Time Setup — Create Azure Service Principal

Run the following in your terminal (replace placeholders):  

```bash
az ad sp create-for-rbac \
  --name "github-deployer" \ 
  --role contributor \ 
  --scopes /subscriptions/<subscription-id>/resourceGroups/<AKS_RESOURCE_GROUP> \
  --sdk-auth
```

## ✅ Next Steps

Once the secrets are configured:
1. Push your code to `main` branch or manually trigger the pipeline.  
2. GitHub Actions will:  
   - Authenticate with Azure  
   - Build & push Docker images to ACR  
   - Deploy your Helm chart to AKS automatically.  

---

💡 **Tip:** You can verify the deployment using:

```bash
kubectl get svc
kubectl get pods
```

Then open the frontend’s **External IP** in your browser.
