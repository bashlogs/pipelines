

## Pipeline configurations process in github actions

🧱 Required GitHub Secrets

Set these in your repo → Settings → Secrets → Actions

Secret Name	Description
AZURE_CREDENTIALS	JSON from az ad sp create-for-rbac
ACR_NAME	e.g. pipedeploy
AKS_RESOURCE_GROUP	Name of your AKS resource group
AKS_CLUSTER_NAME	Name of your AKS cluster
MONGO_URI	MongoDB connection string
REACT_APP_BACKEND_URL	Backend URL for frontend (optional override)

🧾 Create Service Principal (One-Time Setup)

Run this once in your terminal:

az ad sp create-for-rbac \
  --name "github-deployer" \
  --role contributor \
  --scopes /subscriptions/<subscription-id>/resourceGroups/<AKS_RESOURCE_GROUP> \
  --sdk-auth


Copy the JSON output → save it as AZURE_CREDENTIALS in GitHub Secrets.