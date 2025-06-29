# 🎯 Career Path Assistant

A smart web-based mini project that helps users identify the most suitable tech career based on their personal interests and skills. It recommends a matching career path and provides a roadmap to get started.


- **Frontend** (GitHub Pages): [Visit Career Path Assistant](https://kavya-kondaveeti.github.io/career-path-guidance-ui/)
- **Backend** (Replit): [Hosted Flask API](https://c58db967-bd98-4190-8454-d1e28d2d8c50-00-z75glrp33pk0.sisko.replit.dev/recommend) <!-- optional -->

---

## 📌 Features

- 🔘 Select your interests (like Python, UI/UX, Linux, etc.)
- 📬 Get a recommended tech career instantly
- 📘 View a roadmap to start learning
- 💡 Beginner-friendly full-stack project (HTML + JS + Flask)
- 🆓 Fully hosted using **GitHub Pages** and **Replit**

---

## 🧠 Technologies Used

| Layer       | Tech                             |
|-------------|----------------------------------|
| Frontend    | HTML, CSS, JavaScript            |
| Backend     | Python, Flask, Flask-CORS        |
| Hosting     | GitHub Pages (frontend), Replit (backend)
| Data Format | JSON (`careers.json` for career mapping)

---

## 🧩 Project Structure

career-path-assistant/
├── index.html # Frontend UI
├── style.css # Styling
├── script.js # JavaScript to send API request
├── main.py # Flask backend with recommendation logic
├── careers.json # Career data: traits, descriptions, roadmap links
└── requirements.txt # Python dependencies (Flask, Flask-CORS)


---

## 🔁 How It Works

1. User selects interests from checkboxes
2. JavaScript sends a POST request to Flask backend `/recommend`
3. Flask compares traits with available careers in `careers.json`
4. Best-matching career is returned with a roadmap URL
5. Frontend displays the result + roadmap link

---

## 🔌 Requirements

Backend dependencies (`requirements.txt`):
Flask==2.3.2
flask-cors==4.0.0


---

## 🚀 Hosting & Deployment

| Component   | Platform     | Notes                     |
|-------------|--------------|---------------------------|
| Frontend    | GitHub Pages | Hosted via repository     |
| Backend     | Replit       | Flask API with CORS       |

> Make sure to allow CORS in Flask:
```python
from flask_cors import CORS
CORS(app, resources={r"/*": {"origins": "*"}})
```
---

📚 Sample Careers Included
Frontend Developer

Backend Developer

DevOps Engineer

Cybersecurity Engineer

Data Scientist

QA Engineer

Each career includes:

Description

Matching traits

Roadmap (via roadmap.sh)

---

## 👩‍💻 Author

Maintained and developed by **Kavya Kondaveeti**
