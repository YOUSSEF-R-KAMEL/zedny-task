# 🚀 Zedny Task – Angular Dashboard  

A **modern, responsive, and dynamic** Angular dashboard featuring **dark mode**, **interactive charts**, and **tooltip support**. Built using **Angular, PrimeNG, and Chart.js**, this project is designed for scalability and maintainability.  

---

## 🎯 Features  

✅ **Fully Responsive** – Works seamlessly on all screen sizes.  
✅ **Dark Mode UI** – Toggle between dark and light themes.  
✅ **Interactive Charts** – Line and bar charts powered by Chart.js.  
✅ **PrimeNG Components** – Beautiful UI elements with PrimeNG.  
✅ **Tooltips & Animations** – Smooth user interactions.  
✅ **Modular & Maintainable** – Follows Angular best practices.  

---

## 🛠️ Tech Stack  

🔹 **Angular 17+** – Frontend framework  
🔹 **PrimeNG** – UI components  
🔹 **Chart.js** – Data visualization  
🔹 **SCSS** – Custom styling & theming  
🔹 **TypeScript** – Strongly typed JavaScript  

---

## 🛆 Installation  

### 1⃣ Clone the repository  

```bash
git clone https://github.com/YOUSSEF-R-KAMEL/zedny-task.git
cd zedny-task
```

### 2⃣ Install dependencies  

```bash
npm install
```

### 3⃣ Run the application  

```bash
ng serve
```

> Open your browser and go to `http://localhost:4200/`  

---

## 🏠 Project Structure  

```
zedny-task/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable UI components
│   │   ├── core/             # Core services and modules
│   │   ├── shared/           # Shared utilities and models
│   │   └── app.routes.ts     # Routing configuration
│   ├── assets/               # Static assets (images, icons, etc.)
│   ├── styles.scss           # Global styles and dark mode setup
│   ├── main.ts               # Entry point
├── angular.json              # Angular project configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Documentation
```

---

## 🌈 Theming & Dark Mode  

The application supports **dark mode** using SCSS variables. You can customize themes in `styles.scss`:  

```scss
:root {
  --primary-color: #42A5F5;
  --background-color: #121212;
  --text-color: #ffffff;
}
```

To toggle between light and dark mode dynamically, use:  

```typescript
document.documentElement.classList.toggle('dark-mode');
```

---

## 📊 Working with Charts  

Charts are powered by **PrimeNG** and **Chart.js**. Example dataset:  

```typescript
this.data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56],
      borderColor: '#42A5F5',
      backgroundColor: 'rgba(66, 165, 245, 0.2)',
      fill: true,
    }
  ]
};
```

To update chart options:  

```typescript
this.options = {
  responsive: true,
  plugins: {
    legend: { display: true, position: 'bottom' }
  }
};
```

---

## 🚀 Deployment  

To build the project for production:  

```bash
ng build --configuration=production
```

> The output files will be in the `dist/` folder. You can deploy them to any static hosting service like **Netlify, Vercel, or Firebase Hosting**.

---

## 📜 Contribution Guidelines  

We welcome contributions! To contribute:  

1. **Fork the repository**  
2. **Create a new branch**: `git checkout -b feature/new-feature`  
3. **Make changes and commit**: `git commit -m "Added a new feature"`  
4. **Push to GitHub**: `git push origin feature/new-feature`  
5. **Open a Pull Request**  

---

## 🐝 License  

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it!  

---

🌟 **Enjoy coding and happy building!** 🚀

