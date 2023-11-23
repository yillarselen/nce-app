# E-commerce App

E-commerce web app developed with Next.js, Context API, styled-components, Jest and React Testing Library.

## Other dependencies

- [`react-icons`](https://react-icons.github.io/react-icons/)
- [`react-toastify`](https://fkhadra.github.io/react-toastify/introduction)

# Demo

[https://main--funny-dusk-255901.netlify.app/](https://main--funny-dusk-255901.netlify.app/)

# Features

- **Product List on Home Page**: Display a list of products on the home page.
- **Instant Product Search**: Conduct an instant search across all products on the main page. On the cart page, pressing enter redirects to the home page with filtered products.
- **Cart Management**: Add/remove products to/from the cart with data stored in localStorage. View your added products on /cart page.
- **Favorites List**: Add/remove products to/from the favorites list with data stored in localStorage. Access your favorite products on the /favorites page by clicking the heart icon in the header.
- **View Cart Details**: Click on the "View Cart" button in the cart menu to view detailed cart information. On mobile, details are displayed on cart button click.

## Folder Structure

- **/app**: Next.js pages
- **/components**: React components with styles and `__tests__` folders
- **/styles**: global styled-components styles
- **/context**: Context API related files
- **/utils**: helper methods
- **/data**: Provided json file

## Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run dev
```

### Compiles and minifies for production

```
pnpm run build
```

### Run your unit tests

```
pnpm test
```
