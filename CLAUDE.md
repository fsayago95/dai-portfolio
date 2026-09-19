# Project: Personal Developer Portfolio

This is the personal portfolio of Daiana Santillán, a digital marketing and media planning professional, built with Angular.

The purpose of the portfolio is to showcase her experience, skills, ways of working, and professional background (see the CV summary in the repo docs when available).

The portfolio should communicate the following:

> "This is an experienced, data-driven media and marketing professional who plans, runs and optimizes paid and social campaigns, and turns performance data into clear decisions."

Rules for content:
- Never invent metrics, client names, results or testimonials. Only use facts from the CV.
- The site is written in English, in the first person.
- Do not publish the phone number. Use email as the contact channel.

The reviewer agents were written with a software-engineer portfolio in mind. Apply their criteria to this subject: for "seniority" read "professional depth and ownership in marketing/media", and for "projects" read "capabilities and ways of working" when no real case studies exist.

## General Principles

### Simplicity over complexity

Prefer simple, maintainable solutions over unnecessary abstractions.

Do not introduce enterprise-level architecture into this personal portfolio unless there is a clear and measurable benefit.

Avoid:
- unnecessary services
- unnecessary abstractions
- unnecessary design patterns
- unnecessary dependencies
- premature optimization
- excessive state management

### Angular

Use modern Angular best practices.

Prefer:
- standalone components
- signals when appropriate
- modern Angular control flow
- strongly typed TypeScript
- reusable components where there is a real reuse case
- clean separation of responsibilities

Avoid outdated Angular patterns unless there is a specific reason to keep them.

### TypeScript

Prefer:
- strong typing
- descriptive names
- small focused functions
- clear interfaces/types
- maintainable code

Avoid:
- unnecessary `any`
- duplicated logic
- overly clever code
- excessive abstraction

### UI/UX

The design should feel:
- modern
- professional
- intentional
- polished
- consistent

Do not blindly follow design trends.

Avoid unnecessary:
- gradients
- glassmorphism
- animations
- shadows
- decorative elements
- excessive colors

Every visual element should have a purpose.

### Responsive Design

The portfolio must work well on:
- desktop
- tablet
- mobile

Do not simply shrink the desktop layout.

Consider how hierarchy, spacing, navigation, typography and interactions should change on smaller screens.

### Accessibility

Accessibility is a first-class requirement.

Prefer:
- semantic HTML
- keyboard accessibility
- visible focus states
- sufficient color contrast
- correct heading hierarchy
- accessible interactive elements

Do not add ARIA attributes when native HTML semantics already solve the problem.

### Performance

Optimize where it matters.

Do not sacrifice readability or maintainability for micro-optimizations that have no meaningful impact on a personal portfolio.

### Changes

Before making significant changes:

1. Understand the existing implementation.
2. Explain the problem.
3. Explain why the change is beneficial.
4. Prefer the smallest change that solves the problem.

Do not rewrite working code simply because you would implement it differently.

### Design Identity

Preserve the existing identity of the portfolio.

Improve the design rather than replacing it with a generic template.

If something is already working well, explicitly identify it as something to preserve.
