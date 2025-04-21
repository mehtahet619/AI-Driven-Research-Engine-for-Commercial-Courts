# AiResearchForCommercialCourts

An AI-driven legal research engine built to streamline and enhance case research in Commercial Courts. This project leverages advanced Natural Language Processing (NLP), predictive analytics, and intelligent search to help legal professionals access faster and more relevant legal insights.

## Features

### Context-aware Search Engine  
Uses LegalBERT, T5, and Elasticsearch to enable both semantic and keyword-based legal case retrieval.

### Predictive Analytics  
Predicts case outcomes and durations using XGBoost, LSTM, and historical court data.

### Multilingual and Localized Support  
Supports multiple Indian languages using XLM-R and custom translation layers.

### Explainable AI (XAI)  
Uses SHAP and LIME to ensure model interpretability and legal transparency.

### Personalized Case Recommendations  
Applies transfer learning and legal metadata (e.g., region, judge, court) to tailor case search results.

### Modular Microservices Architecture  
Backend built with Django and Flask; frontend developed in React.js; Elasticsearch powers the real-time search engine.

**Live Link :https://aiforcommercialcourts.vercel.app/**


## Tech Stack

```yaml
NLP Models:
  - BERT
  - LegalBERT
  - T5
  - XLM-R

Frameworks:
  - Typescript
  - React.js

Search:
  - Elasticsearch
  - BM25
  - Dense Retrieval

Machine Learning:
  - XGBoost
  - LSTM

Data Collection:
  - Scrapy
  - BeautifulSoup

Explainability:
  - SHAP
  - LIME
