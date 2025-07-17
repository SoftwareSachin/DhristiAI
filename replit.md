# DhristiAI - Replit Development Guide

## Overview

DhristiAI is a modern web application designed to provide AI-powered solutions for India's foundational challenges. The application features a sleek, dark-themed interface inspired by Linear.app's design language, with a focus on governance, healthcare, education, and rural development solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The application follows a monorepo architecture with clear separation of concerns:
- **Frontend**: React-based SPA located in `/client`
- **Backend**: Express.js API server in `/server`
- **Shared**: Common types and schemas in `/shared`

### Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon (serverless PostgreSQL)
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom Linear.app-inspired theme

## Key Components

### Frontend Architecture
- **Component Library**: Comprehensive shadcn/ui components with custom theming
- **Design System**: Linear.app-inspired dark theme with saffron gradient accents
- **Interactive Demo**: Full-featured AI chat interface with tabbed sections for each domain
- **State Management**: TanStack Query for API state management
- **Routing**: File-based routing with Wouter
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL-based sessions
- **Development**: Hot reload with tsx and comprehensive error handling

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `/shared/schema.ts` for type safety across frontend/backend
- **Migrations**: Drizzle-kit for database migrations in `/migrations`

### UI/UX Design
- **Theme**: Dark background with Linear.app's exact color palette
- **Primary Colors**: Desaturated blue (#5E6AD2) with saffron gradient accents
- **Typography**: Inter font family with multiple weights
- **Components**: Comprehensive UI component library with consistent styling
- **Interactive Demos**: Fully functional AI chat interfaces with domain-specific responses
- **Animations**: Custom CSS animations including typing effects and fade-in transitions

## Data Flow

### API Communication
1. Frontend makes requests through TanStack Query
2. Custom `apiRequest` utility handles HTTP requests with error handling
3. Express server processes requests and returns JSON responses
4. Automatic request logging for development debugging

### Database Operations
1. Drizzle ORM provides type-safe database operations
2. Shared schema ensures type consistency between frontend and backend
3. Memory storage implementation for development (can be extended to PostgreSQL)

### State Management
1. TanStack Query manages server state with automatic caching
2. React state for local component state
3. Query invalidation for real-time data updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database queries
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight routing
- **express**: Backend framework

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **tailwindcss**: Utility-first CSS framework
- **drizzle-kit**: Database migrations and introspection

### UI Dependencies
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class names
- **tailwind-merge**: Tailwind class merging utility
- **lucide-react**: Icon library

## Deployment Strategy

### Build Process
1. Frontend builds to `/dist/public` using Vite
2. Backend bundles to `/dist/index.js` using esbuild
3. Static assets served from built frontend
4. Production server runs compiled backend

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific environment detection

### Development Workflow
1. `npm run dev`: Start development server with hot reload
2. `npm run build`: Build for production
3. `npm run start`: Start production server
4. `npm run db:push`: Push database schema changes

### Production Considerations
- Environment variables must be configured for database access
- Static files served efficiently through Express
- Error handling with proper status codes
- CORS and security headers should be configured as needed

### Replit Integration
- Automatic banner injection for development mode
- Cartographer plugin for enhanced debugging
- Runtime error overlay for better development experience