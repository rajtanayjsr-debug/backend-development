# Experiment 04: Create Responsive Web Pages with Bootstrap and Tailwind CSS

## Objective

To build the same responsive web page using two CSS frameworks — Bootstrap and Tailwind CSS — and understand their approaches, responsive classes, components, utilities, and tradeoffs.

## Technologies Used

- HTML5
- Bootstrap 5.3.3
- Tailwind CSS
- Responsive Web Design
- CSS Grid and Flexbox concepts
- CDN integration

---

## Part A — Bootstrap

Bootstrap follows a component-based approach and provides ready-made components and a responsive 12-column grid system.

### Task 1 — Bootstrap Setup

Bootstrap 5.3.3 was added using the CDN stylesheet.

File:

`task1-bootstrap.html`

The Bootstrap CDN makes Bootstrap classes available in the HTML page.

### Task 2 — Responsive Bootstrap Navbar

Created a responsive navigation bar containing:

- MySite
- Home
- About
- Services
- Contact

The `navbar-expand-lg` class displays the full navigation on large screens and collapses it into a hamburger menu on smaller screens.

File:

`task2-bootstrap.html`

### Task 3 — Bootstrap Hero Section

Created a responsive hero section using the Bootstrap grid system.

The hero contains:

- Welcome to MySite heading
- Description
- Get Started button
- Learn More button
- Responsive image

The layout uses `row` and `col-lg-6`.

On large screens, the text and image appear side by side.

On smaller screens, they stack vertically.

File:

`task3-bootstrap.html`

### Task 4 — Bootstrap Card Grid and Footer

Created an Our Services section containing:

- Web Design
- Development
- SEO

The responsive cards use:

`col-md-6 col-lg-4`

Responsive behavior:

- Mobile — 1 column
- Tablet — 2 columns
- Desktop — 3 columns

A Bootstrap footer was also added.

File:

`task4-bootstrap.html`

---

## Part B — Tailwind CSS

Tailwind CSS follows a utility-first approach. Instead of using pre-built components, small utility classes are combined directly inside HTML elements.

### Task 5 — Tailwind Setup

Tailwind CSS was added using the CDN script.

File:

`task5-tailwind.html`

### Task 6 — Tailwind Navbar

Created a navigation bar using Tailwind utility classes.

Important utilities used include:

- `bg-gray-900`
- `text-white`
- `flex`
- `items-center`
- `justify-between`
- `px-4`
- `py-3`
- `gap-6`

File:

`task6-tailwind.html`

### Task 7 — Tailwind Hero Section

Created a responsive hero section using Tailwind utilities.

The main responsive layout uses:

`flex flex-col lg:flex-row`

Responsive behavior:

- Mobile — Hero content stacks vertically
- Desktop — Text and image appear side by side

The `lg:w-1/2` utility gives both sections equal width on large screens.

File:

`task7-tailwind.html`

### Task 8 — Tailwind Card Grid and Footer

Created the final responsive Tailwind page with an Our Services card grid.

The responsive grid uses:

`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

Responsive behavior:

- Mobile — 1 column
- Tablet — 2 columns
- Desktop — 3 columns

Cards use utilities such as:

- `bg-white`
- `rounded-xl`
- `shadow-md`
- `p-6`
- `hover:shadow-lg`
- `transition-shadow`

A Tailwind-styled footer was also added.

File:

`task8-tailwind.html`

---

## Bootstrap vs Tailwind CSS

| Feature | Bootstrap | Tailwind CSS |
|---|---|---|
| Approach | Component-based | Utility-first |
| Components | Pre-built | Created using utilities |
| Grid | 12-column grid | Flex/Grid utilities |
| Customization | Bootstrap theme/classes | Highly customizable |
| HTML Classes | Shorter | More utility classes |
| Learning Style | Component names | Utility patterns |
| Best For | Quick prototypes and dashboards | Custom designs and landing pages |

## Files Included

- `task1-bootstrap.html` — Bootstrap setup
- `task2-bootstrap.html` — Bootstrap responsive navbar
- `task3-bootstrap.html` — Bootstrap hero section
- `task4-bootstrap.html` — Bootstrap card grid and footer
- `task5-tailwind.html` — Tailwind setup
- `task6-tailwind.html` — Tailwind navbar
- `task7-tailwind.html` — Tailwind hero section
- `task8-tailwind.html` — Tailwind card grid and footer

## Key Concepts Learned

- CSS Frameworks
- Bootstrap CDN
- Tailwind CSS CDN
- Bootstrap 12-column grid
- Bootstrap responsive breakpoints
- Bootstrap components
- Tailwind utility classes
- Tailwind responsive prefixes
- Responsive navigation
- Responsive hero sections
- Responsive card grids
- Mobile-first design

## Conclusion

In this experiment, the same responsive web page was developed using Bootstrap and Tailwind CSS. Bootstrap provided ready-made components and a responsive grid system, while Tailwind CSS used utility classes to provide greater control over the design. Both frameworks simplified responsive web development compared with writing all responsive CSS manually.