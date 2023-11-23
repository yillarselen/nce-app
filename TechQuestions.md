# React

## 1.1 State Management

React handles state management through its built-in state system, `setState` method, and also allows for external state management libraries like Redux to be integrated.

### `setState`

- Used for managing local state within a React component.
- State is managed at the component level, allowing each component to have its own state.
- Changes in the state trigger a re-render of the component.
- Updates can be asynchronous, as React batches state updates for performance reasons.
- Immediate state updates cannot be guaranteed.
- Suitable for simple to medium-sized applications where state management needs are not complex.

### Redux

- Designed for managing global state in larger applications, providing a single source of truth.
- State is stored in a centralized store, allowing components to read from and dispatch actions to this store.
- Follows a strict unidirectional data flow. Actions are dispatched, and reducers handle these actions to update the state predictably.
- Supports middleware for handling asynchronous actions and side effects, making it suitable for complex scenarios.
- Provides features like time-travel debugging, facilitating tracking and debugging of application state changes.

### Comparison

- **Complexity:**

  - `setState` is simpler and suitable for smaller applications or components.
  - Redux is more suitable for larger, complex applications.

- **Developer Experience:**

  - `setState` has a lower learning curve and less boilerplate.
  - Redux involves more setup but offers a disciplined structure.

- **Performance:**

  - `setState` is efficient for smaller applications.
  - Redux provides optimizations for larger applications.

- **Learning Curve:**
  - `setState` is easier for beginners.
  - Redux has a steeper learning curve due to additional concepts.

For smaller applications, simple components, or when starting with React, `setState` may be sufficient. As the application grows in complexity, Redux or other state management solutions become more relevant for maintaining a scalable and maintainable codebase.

## 1.2 React Reconciliation

React Reconciliation updates the actual DOM based on changes in the virtual DOM. It ensures synchronization between the user interface and data, minimizing unnecessary updates.

In React 18, an improved reconciliation algorithm, leveraging Concurrent Mode, enhances performance. Concurrent Mode enables React to handle multiple tasks concurrently, improving responsiveness. The new algorithm, termed "Concurrent React," divides reconciliation into smaller "fibers" and prioritizes them, allowing React to interrupt and resume efficiently, prioritizing user interactions and high-priority tasks.

## 1.3 Code splitting and Lazy loading

Code splitting and lazy loading in React improve the initial load time by breaking down the application bundle into smaller parts. Components are loaded only when they are needed, reducing the initial payload. React provides a built-in solution using `React.lazy` and `Suspense`.

Alternatively, we can use third-party libraries like `react-loadable` for a similar effect. These techniques help optimize performance by loading resources on-demand and improving the user experience.

## 1.4 React Form Handling Approaches

### 1. Controlled Components

**Pros:** Single source of truth for form data, easy to manipulate and validate.  
**Cons:** Can lead to verbose code, especially in larger forms.

### 2. Uncontrolled Components

**Pros:** Simpler syntax for smaller forms, integrates with non-React code.  
**Cons:** Limited control over form elements, state and DOM can get out of sync.

### 3. React Hook Form

**Pros:** Lightweight library with efficient performance, clean syntax. Offers efficient performance optimizations, reducing unnecessary re-renders.  
**Cons:** Adds a dependency, learning curve for beginners.

### 4. Formik

**Pros:** Powerful form-handling library, simplifies form management and validation.  
**Cons:** Adds a dependency, learning curve for beginners.

Controlled components rely on state management to track the state of form inputs, while uncontrolled components use refs to access the form inputs and their values. Libraries like React Hook Form provide a lot of functionality out of the box and can help reduce the amount of boilerplate code.

# TypeScript

## 2.1 Concept of generics in TypeScript with example

Generics in TypeScript allow us to create reusable components, functions, and classes with types that can vary depending on the specific use case. They enable to write more flexible and type-safe code. Generics are particularly useful when we want to create components or functions that can work with different data types without sacrificing type safety.

```
import React from 'react';

// Generic List component
interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: Props<T>) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{props.renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage in a React component
const Component = () => {
  const strings = ['Hello', 'World'];
  const numbers = [1, 2, 3];

  return (
    <div>
      <List items={strings} renderItem={(item) => <span>{item}</span>} />
      <List items={numbers} renderItem={(item) => <span>{item}</span>} />
    </div>
  );
};
```

## 2.2 Creating reusable components and maintaining type safety with TypeScript

To create reusable components with TypeScript and maintain type safety:

**Use TypeScript Interfaces or Types:**  
Define clear interfaces or types for component props to enforce type safety.

**Generic Components:**  
Utilize generics for components that need to work with various data types, providing flexibility while ensuring type safety.

**Default Props and Optional Properties:**  
Employ default props and optional properties when appropriate for enhanced flexibility without sacrificing type safety.

**Avoid any Type:**  
Minimize the use of the any type to leverage TypeScript's static typing for error detection during development.

**Documentation:**  
Document components and their props using comments or tools like JSDoc to facilitate proper usage and understanding for developers.

## 2.3 Advantages and potential challenges of migrating an existing JavaScript codebase to TypeScript

### Advantages

- The most important advantage is that TypeScript introduces static typing, which can catch type-related errors during development, leading to more robust and predictable code.

- It provides better tooling support, including autocompletion, code navigation, and inline documentation. IDEs can provide intelligent suggestions based on the defined types.

- It enhances code readability and maintainability, and can make it easier for developers to understand code without extensive comments.

- Renaming a variable or function is less error-prone with TypeScript.

- TypeScript has a large and active community. Integration with popular frameworks is well-supported in TypeScript.

### Challenges

- Migrating a large codebase can be time-consuming, and the initial conversion may introduce some overhead.

- Configuring the TypeScript build process and integrating it with existing tools can be challenging. (Adjusting build configurations)

- Some JavaScript libraries may lack TypeScript type definitions, which requires additional effort to find suitable declerations.

- The migration process might disrupt the ongoing development workflow, potentially affecting project timelines.

# Next.js

## 3.1 Client-side and Server-side rendering and routing

Next.js uses a file-system-based routing system, where folders are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a `page.js` file.

The App Router uses a hybrid approach for routing and navigation. On the server, your application code is automatically code-split by route segments. And on the client, Next.js prefetches and caches the route segments. This means, when a user navigates to a new route, the browser doesn't reload the page, and only the route segments that change re-render - improving the navigation experience and performance.

There are two ways to navigate between routes in Next.js:

- Using the `<Link>` Component
- Using the `useRouter` Hook

`<Link>` is a built-in component that extends the `<a>` tag to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.

The `useRouter` hook allows you to programmatically change routes.
This hook can only be used inside Client Components and is imported from `next/navigation`.

`useRouter` provides access to the router object and used for programmatically navigating, listening to route changes, and accessing current route information within components. `Link` is a component for declarative client-side navigation and used to create hyperlinks that trigger client-side transitions between pages.

## 3.2 Caching strategies in Next.js

- **Client-side caching:** Recommended for scenarios with limited, cacheable data, aiming to reduce server load and enhance user experience. This strategy is effective for static assets, small datasets, and situations where data updates are infrequent.

- **Server-side caching:** Appropriate for applications delivering identical data to multiple clients, particularly when data changes infrequently or follows a predictable schedule. Widely used in content-heavy websites, APIs, and database-driven applications.

- **Stale-While-Revalidate (SWR):** Excellent for applications emphasizing immediate responses, where occasional use of slightly outdated data is acceptable. This strategy suits frequently accessed data, such as news articles or social media posts, where real-time accuracy is not crucial.

## 3.3 Authentication and authorization in a Next.js application

In a Next.js application, implementing Authentication and authorization typically involves a combination of frontend and backend strategies.

### Authentication

- Libraries like `next-auth` can be used to manage user sessions and authentication on the client-side.
- Server-side authentication can be implemented using API routes.

## Authorization

- Roles can be assigned to users to control access based on roles.
- Token-Based Authorization (JWT) can be added in headers.

Integrating external providers (Google, Facebook) using OAuth and third-party authorization providers can be used.

# MobX

## 4.1 MobX, Redux and Recoil

#### MobX

MobX generally considered less boilerplate and easier to grasp than Redux. It simplifies the process of managing state changes and reacts to changes automatically. It is suited for smaller to medium sized applications and best for where simplicity and ease of use are prioritized.

#### Redux

Redux introduces more boilerplate code and use store, which is a single source of truth. It follows an immutable state pattern, where actions are dispatched to update the store. It can be well-suited for large and complex applications.

#### Recoil

Recoil introduces the atoms concept. It allows flexible state management. Components can subscribe to and modify atoms, making state management more localized. Suited for both simple and complex scenarios and various sizes of applications.

## 4.2 Handling asynchronous actions and side effects with MobX

- Use `@action` to mark functions that modify state.
- Modify state within asynchronous code using `runInAction`.
- Create MobX reactions to trigger side effects based on observed data changes.
- Catch errors within MobX actions and modify state accordingly.
- Use async/await syntax for cleaner asynchronous code.
- Consider using MobX middleware or libraries like mobx-thunk for complex actions.

## 4.3 How MobX observes changes to state and updates the React components automatically?

MobX's observables, reactions, and MobX-react bindings work together to provide automatic updates in React components.

- State that needs to be observed is marked as observable using the observable function or decorators like `@observable`.
- Actions (`@action`) ensure that state modifications are tracked and trigger reactions.
- When an observable state property changes, MobX keeps track of the dependencies (observers) that need to be notified.
- Functions called Reactions automatically run when the observed state changes. (`reaction`)
- Reactions capture the dependencies automatically, ensuring they re-run when relevant state changes.
- Components marked as observers (`@observer`) re-render automatically on relevant state changes.
