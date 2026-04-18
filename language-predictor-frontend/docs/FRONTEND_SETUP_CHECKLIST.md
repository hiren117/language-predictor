# 🎨 FRONTEND_SETUP_CHECKLIST.md  
*(React + TypeScript + Tailwind CSS + Vite + React Router)*

---

## ⚙️ 1. Prerequisites

- **Node.js:** v18 or later  
- **Package manager:** npm (default with Node)  
- **Editor:** VS Code or IntelliJ IDEA  
- **Browser:** Chrome or Edge  

---

## 🧱 2. Create React + TypeScript + Vite Project

```bash
npm create vite@latest e-com-frontend -- --template react-ts
cd e-com-frontend
npm install
```

---

## 🎨 3. Add Tailwind CSS (v4)

```bash
npm install tailwindcss@latest @tailwindcss/vite
```

Now open your **vite.config.ts** and edit it like this:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

---

## 🧩 4. Configure Tailwind CSS

Inside `src/index.css` (or `src/main.css`), add:
```css
@import "tailwindcss";
```

Then start the dev server:
```bash
npm run dev
```

✅ If Tailwind works, you can test it with:
```html
<h1 className="text-4xl font-bold text-blue-600">
  Tailwind v4 is working perfectly! 🎨
</h1>
```

---

## 🧭 5. Setup React Router DOM

Install router:
```bash
npm install react-router-dom
```

Then update your `main.tsx`:
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from '@/pages/Home.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
```

---

## 🏠 6. Folder Structure (Recommended)

```
src/
 ├─ assets/
 ├─ components/
 │   ├─ homePage/
 │   │   ├─ Hero.tsx
 │   │   ├─ ProductCard.tsx
 │   │   ├─ PopularSection.tsx
 │   │   └─ Features.tsx
 │   └─ Navbar.tsx
 ├─ pages/
 │   └─ Home.tsx
 ├─ App.tsx
 ├─ main.tsx
 └─ index.css
```

📁 You can group related components in folders (like `homePage/`) for better clarity.

---

## 🧠 7. JSX + TypeScript Basics

| Concept | JavaScript | TypeScript |
|----------|-------------|------------|
| Variable | `let x = 5;` | `let x: number = 5;` |
| Function | `function add(a,b){}` | `function add(a:number,b:number):number {}` |
| Object | `const user = {name:"A",age:25}` | `interface User { name: string; age: number }` |
| Props | — | `function Card({ title }: { title: string }) {}` |
| State | `const [c, setC] = useState(0)` | `const [c, setC] = useState<number>(0)` |

---

## 💅 8. Designing a Simple Home Page

```tsx
// Home.tsx
import React from 'react'
import Hero from '@/components/homePage/Hero'
import Features from '@/components/homePage/Features'
import PopularSection from '@/components/homePage/PopularSection'

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <Features />
      <PopularSection />
    </div>
  )
}

export default Home
```

Each imported component (like `Hero`, `Features`, `PopularSection`) can have Tailwind-based styling for quick design.

---

## 💡 9. Example: ProductCard Component

```tsx
// ProductCard.tsx
import React from 'react'

interface ProductCardProps {
  title: string
  price: number
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">₹{price}</p>
        <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
```

---

## 🚀 10. Common Commands

| Action | Command |
|--------|----------|
| Start Dev Server | `npm run dev` |
| Build for Production | `npm run build` |
| Preview Build | `npm run preview` |
| Install Package | `npm install <pkg>` |
| Format Code | `npm run lint` |

---

## 🔗 11. Absolute Imports Setup

- We already did this inside `vite.config.ts`  
  ```ts
  alias: { "@": path.resolve(__dirname, "./src") }
  ```
- Now you can import like:
  ```tsx
  import Hero from '@/components/homePage/Hero'
  ```

---

## ✅ 12. Summary

Frontend ready and verified ✅  
Tech stack:

| Tool | Version / Purpose |
|------|-------------------|
| React | UI library |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router DOM | Navigation |
| Node.js | Runtime |
| npm | Package manager |

---

🎯 **Next Steps**
- Connect your frontend with your Spring Boot backend API.  
- Test endpoints using Postman first, then integrate with Axios or Fetch.  
- Create reusable components (buttons, product cards, navbar, etc.)  
- Add authentication pages (login/signup).  

---

✨ *Now your frontend base is complete and structured like a professional project!* 🚀
