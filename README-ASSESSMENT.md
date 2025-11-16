# 🚀 VyomGarud – Military-Grade UAV Systems Website

A modern, fully-animated, high-performance web application built for **VyomGarud**, showcasing advanced UAV capabilities, mission performance, and contact workflows with email integration.
 
Designed with **glassmorphism**, **smooth reveal animations**, **AI-driven visuals**, and a **modern tech stack**.

---

## 🛰️ Features

### 🎨 Frontend
- Fully responsive UI (mobile → tablet → desktop)
- Hero section with animated text reveal
- Smooth scroll-based animations (custom hook)
- Modern glassmorphism UI components
- Stats with animated counters
- Dynamic highlights & capabilities sections
- Contact form with:
  - Toast notification  
  - Success modal  
  - Email sending capability  
- Modern footer with branding & quick links

### 📩 Backend
- Node.js + Express API
- Email sending using **Nodemailer**
- Auto-reply email to the user
- Admin email notification with message details
- Integrated with Vite using **vite-express**
- Strong HTML email templates

---

## 🛠️ Tech Stack

### Frontend
- **React + TypeScript**
- **Vite**
- **TailwindCSS**
- **Lucide Icons**
- Reusable UI components
- Custom scroll-reveal animations

### Backend
- **Node.js / Express**
- **vite-express** (Frontend + Backend in one server)
- **Nodemailer**
- Gmail App Password (secure email sending)

---

## 📁 Project Structure

```
vista-reveal-animations-main/
│
├── public/
│   ├── favicon.png
│   └── placeholder.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Highlights.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   │
│   ├── lib/
│   │   └── send-email.js   (Not used in latest version)
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install Dependencies
```
npm install
```

### 2️⃣ Start Fullstack Server (Frontend + Backend Together)

```
npm run dev
```

This runs:

- Vite React Frontend
- Express Backend
- Nodemailer API at:  
  ```
  POST /api/send-email
  ```

### 3️⃣ Build for Production

```
npm run build
```

---

## 📩 Email API Documentation

### **Endpoint**
```
POST /api/send-email
```

### **Request Body**
```json
{
  "name": "John Doe",
  "email": "john@mail.com",
  "organization": "Company",
  "message": "Hello!"
}
```

### **Response**
| Status | Meaning |
|--------|---------|
| `200` | Email sent successfully |
| `400` | Missing fields |
| `500` | Internal email error |

---

## 📬 Email Templates

### ✔ Admin Email Includes:
- Name  
- Email  
- Organization  
- Message body  
- Timestamp  

### ✔ User Auto-Reply Email Includes:
- Greeting with user's name  
- Confirmation message  
- Message preview  
- VyomGarud signature  

---

## 🚀 Deployment Instructions

### **Deploy on VPS / Linux**
```
npm install
npm run build
node server.js
```

### **Deploy on Render / Railway / VPS**
Make sure:
- Port is exposed through Express
- Gmail App password is added securely
- Build command:
  ```
  npm run build
  ```
- Start command:
  ```
  node server.js
  ```

---

## 🎥 Screenshots (Add your images here)

```
./screenshots/hero.png
./screenshots/highlights.png
./screenshots/contact-form.png
./screenshots/email-preview.png
```

---

## 👨‍💻 Developer Notes
- Animations controlled by `useScrollReveal`
- Counter animations use `easeOutCubic`
- Contact form uses native fetch for backend communication
- All assets are optimized for performance
- Replace `favicon.png` with your drone logo for brand identity

---

## 📄 License
This project is **private** and belongs to **VyomGarud UAV Systems**.  
Do not redistribute without authorization.

---

## 🌐 Author / Maintainer
**Shaik Nagoor Saheb**  
VyomGarud UAV Systems  
📧 contact@vyomgarud.com

---

If you want:
✅ Add GIFs / demo images  
✅ Add CI/CD deploy script  
✅ Add API validation with Zod  
Just tell me — I can extend the README further!
