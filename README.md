<div align="center">

# ⚡ AI SEO & GEO Analyzer

**A full-stack, AI-powered web auditing platform for traditional SEO & Generative Engine Optimization (GEO)**

[![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Ready-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](docker-compose.yml)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

*Audit websites for search engines & AI engines. Maximize visibility across Google, ChatGPT, Perplexity & Gemini.*

---

</div>

## 🧑‍💻 About the Creator

Built by **Himanshu Singh** as a full-stack AI-driven web auditing solution to bridge the gap between traditional Search Engine Optimization (SEO) and modern Generative Engine Optimization (GEO).

- **GitHub**: [@hii-mansu](https://github.com/hii-mansu)
- **LinkedIn**: [mansu-singh](https://www.linkedin.com/in/mansu-singh/)
- **Email**: [mail@mansusingh.in](mailto:mail@mansusingh.in)

## 🤔 What Problem Does It Solve?

When webmasters optimize their websites today, traditional SEO tools (Ahrefs, Semrush) focus solely on ranking signals for classic search engines like Google and Bing. However, millions of users now use AI-driven search engines (ChatGPT Search, Perplexity, Claude, Google Gemini) to find answers and recommendations. Without **GEO (Generative Engine Optimization)**:

- ❌ Traditional SEO tools ignore AI search engine readability & citation metrics
- ❌ AI engines fail to accurately summarize, index, or cite your website content
- ❌ You miss out on high-intent AI search traffic and brand authority

**AI SEO & GEO Analyzer** sits at the intersection of automated web scraping and LLM evaluation. It audits site structure, metadata, schema markup, performance, and readability—using Google Gemini to deliver real-time SEO & GEO scorecards, detailed reports, and actionable optimization strategies.

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Dual SEO & GEO Audit** | Evaluates both traditional search engine ranking signals and AI LLM readability & citation factors |
| 🤖 **Gemini AI Integration** | Uses Google Gemini (`@google/genai`) to generate intelligent content summaries and tailored GEO recommendations |
| 🕸️ **Automated DOM Scraping** | High-performance HTML parsing via Cheerio to extract metadata, headings, canonical links, and content density |
| ⚡ **Rate Limiting & Protection** | Express rate-limiting backed by Redis (`rate-limit-redis`) for API endpoint protection |
| 🔐 **JWT Auth System** | Secure access/refresh token authentication flow, cookie support, and transactional password reset emails via Resend |
| 📊 **Interactive Report Dashboard** | Sleek React UI displaying overall scores, sub-score breakdowns, and exportable audit insights |
| 🎨 **Modern Tech Stack** | Built with React 19, Tailwind CSS v4, Vite, Express 5, MongoDB Mongoose, and Zod validation |
| 🚧 **Subscriptions & Billing** | *(Coming Soon)* Tiered subscription models and seamless payment gateway integration |

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide React, TanStack Query (React Query), React Hook Form, Zod, Sonner
- **Backend**: Node.js (v22+), Express 5, MongoDB (Mongoose), Redis (Rate Limiting), Cheerio
- **AI Engine**: Google Gemini API (`@google/genai`)
- **Email & Auth**: Resend API, JWT (jsonwebtoken), bcryptjs
- **Middleware & Security**: Helmet, CORS, Express Rate Limit, Cookie Parser, Morgan

## 📁 Project Structure

```
seo-geo-analyzer/
├── Backend/            → Express 5 REST API, MongoDB models, Cheerio scraper & Gemini AI module
└── frontend/           → React 19 landing page, audit forms & report dashboard UI
```

| Folder | Who is it for? | What's inside? |
|---|---|---|
| **`/Backend`** | Backend developers & API consumers | RESTful routes, auth, Cheerio web scraper & Gemini AI service |
| **`/frontend`** | End users & UI developers | React SPA with dashboard, live analyzer forms, interactive reports, and auth UI |

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v22+
- **MongoDB**: Local instance or MongoDB Atlas cluster connection string
- **Redis**: Local or cloud Redis server (for rate limiting)
- **API Keys**: Google Gemini API Key and Resend API Key

---

### Option 1 — Docker Compose (Fastest & Containerized)

Ensure you have Docker & Docker Compose installed, then run:

```bash
# 1. Create Backend environment file
cp Backend/.env.example Backend/.env

# 2. Build and start all services (Frontend, Backend, MongoDB, Redis)
docker compose up -d --build
```

Container Names:
- **`seo-frontend`**: React web application running on `http://localhost:80`
- **`seo-backend`**: Express API server running on `http://localhost:5000`
- **`seo-mongodb`**: MongoDB Database instance on `localhost:27017`
- **`seo-redis`**: Redis instance on `localhost:6379`

---

### Option 2 — Manual Setup (Local Node.js)

#### 1. Set Up Backend

```bash
# Navigate to the Backend folder
cd Backend

# Install dependencies
npm install

# Create environment configuration file
cp .env.example .env
```

#### Configure `.env` file:
```env
NODE_ENV=dev
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/seo_geo_analyzer
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_FORGET_SECRET=your_jwt_forget_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
JWT_FORGET_EXPIRES_IN=5m
CLIENT_URL=http://localhost:5173
REDIS_URL=redis://127.0.0.1:6379
GEMINI_API_KEY=your_gemini_api_key
RESEND_API_KEY=your_resend_api_key
```

```bash
# Start Backend in development mode
npm run dev
```

The backend server will start at `http://localhost:5000`.

---

#### 2. Set Up Frontend

```bash
# Navigate to the frontend folder
cd ../frontend

# Install dependencies
npm install

# Start Frontend Vite dev server
npm run dev
```

Open `http://localhost:5173` in your browser to access the application.

## 🔧 Architecture & Audit Flow

```
                         ┌──────────────┐
                         │   Client     │
                         │ (React UI)   │
                         └──────┬───────┘
                                │ 1. Send URL
                                ▼
                     ┌─────────────────────┐
                     │   Express Backend   │
                     │    (Node.js 22+)    │
                     └────┬────────────┬───┘
                          │            │
         2. Scrape & Audit│            │ 2. Check Cache
                          ▼            ▼
                 ┌────────────────┐  ┌──────────────┐
                 │    Cheerio     │  │    Redis     │
                 │  Web Scraper   │  │ (Cache Check)│
                 └───────┬────────┘  └──────────────┘
                         │ 3. Extract Metadata & HTML
                         ▼
                 ┌────────────────┐
                 │ Google Gemini  │
                 │  AI Evaluation │
                 └───────┬────────┘
                         │ 4. Save Audit Data
                         ▼
                 ┌────────────────┐
                 │  Redis Cache & │
                 │    MongoDB     │
                 └───────┬────────┘
                         │ 5. Update & Deliver Report
                         ▼
                 ┌────────────────┐
                 │  Report View & │
                 │  UI Dashboard  │
                 └────────────────┘
```

## 🚧 Upcoming Features (Roadmap)

- 💳 **Subscription & Payment Integration**: Stripe / Razorpay integration for Pro & Enterprise subscription tiers (Coming Soon)
- 🔄 **Async Job Queueing**: Background audit task queue for large multi-page website audits
- 📈 **Historical Audit Tracking**: Trend analysis and historical score tracking over time

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Himanshu Singh](https://github.com/hii-mansu)**

</div>
