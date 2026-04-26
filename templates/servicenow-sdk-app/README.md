# ServiceNow SDK App Template

Use this folder as a starting point for supported ServiceNow SDK/Fluent work.

## Setup

```bash
npm install
npx @servicenow/sdk --help
```

Authenticate to a non-production instance:

```bash
npx @servicenow/sdk auth --add https://<instance>.service-now.com --type oauth --alias dev
```

Create or initialize the app using the official SDK flow:

```bash
npx @servicenow/sdk init
```

## Guardrail

This template does not deploy AI Agent Studio records directly. Use it for ServiceNow SDK-supported app artifacts and keep AI agent/workflow creation in AI Agent Studio unless your platform team has approved a specific adapter.
