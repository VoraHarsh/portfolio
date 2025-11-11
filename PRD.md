## 🎯 PRD (Product Requirements Document)

### **Portfolio Website - Technical Specifications**

#### **Project Overview**
A modern, responsive portfolio website for a Full Stack Engineer built with Next.js 14, TypeScript, and Tailwind CSS.

#### **Key Features**
1. **Dark/Light Theme Toggle** - Persistent theme with localStorage
2. **Smooth Scrolling** - Section navigation with scroll spy
3. **Responsive Design** - Mobile-first approach
4. **Modular Architecture** - Reusable components
5. **Type Safety** - Full TypeScript implementation
6. **Performance Optimized** - Next.js Image optimization

#### **Technical Stack**
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **Icons:** Lucide React
- **Animations:** CSS Transitions + Framer Motion (optional)

#### **Component Structure**
- **Layout Components:** Header, SideNav, ScrollToTop, Footer
- **Section Components:** Hero, About, Experience, Skills, Projects, Testimonials, Contact
- **UI Components:** Button, Card, Input (reusable primitives)
- **Hooks:** useTheme, useScrollSpy (custom logic)
- **Data Layer:** Centralized in `/data/portfolio.ts`

#### **Design Requirements**
- Clean, minimalist aesthetic
- Circular hero photo on the right side
- Side navigation dots for section tracking
- Smooth transitions (300ms duration)
- Card-based layouts with hover effects
- Color scheme: Blue accent (#3b82f6)

#### **Sections Required**
1. Home/Hero - Name, roles, CTA buttons, circular photo
2. About - Profile image + biography text
3. Experience - Timeline with cards
4. Skills - Tabbed categories with icons
5. Projects - Grid cards with links
6. Testimonials - Grid layout with avatars
7. Contact - Email form with validation