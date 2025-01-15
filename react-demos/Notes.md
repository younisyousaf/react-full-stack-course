# React JS Notes

## Create Portal in React

CreatePortal is a utility from `react-dom` that allows us to render children into a DOM node that exists outside of the parent component's DOM hierarchy.

It's useful when we want to render something that is not a direct child of the component that is rendering it.

Example: Modals

* When we want to render a modal, we don't want it to be a direct child of the component that triggered it. Instead, we want it to be a direct child of the `<body>` element, so it can be positioned absolutely and cover the entire screen.

By using `createPortal`, we can render the modal as a direct child of the `<body>` element, even though it's being rendered by a component that is nested deep inside the app.

Example: Toaster Notifications

* When we want to show a toaster notification, we don't want it to be a direct child of the component that triggered it. Instead, we want it to be a direct child of the `<body>` element, so it can be positioned absolutely and appear on top of all other elements.

By using `createPortal`, we can render the toaster notification as a direct child of the `<body>` element, even though it's being rendered by a component that is nested deep inside the app.

Example: React Select

* When we want to render a dropdown menu for a select component, we don't want it to be a direct child of the component that rendered it. Instead, we want it to be a direct child of the `<body>` element, so it can be positioned absolutely and appear on top of all other elements.

By using `createPortal`, we can render the dropdown menu as a direct child of the `<body>` element, even though it's being rendered by a component that is nested deep inside the app.

In summary, `createPortal` is a useful utility for rendering children into a DOM node that exists outside of the parent component's DOM hierarchy. It's particularly useful when we want to render something that is not a direct child of the component that is rendering it.

## useEffect Hook

The useEffect Hook allows you to perform side effects in function components.

Side effects include things like data fetching, directly updating the DOM, and timers.

## Syntax

```javascript
useEffect(() => {
    // Do something
    return () => {
        // Cleanup
    };  
}, [dependency1, dependency2, ...]);
```

* The useEffect Hook without any dependency array will run after every render.
* The useEffect Hook with a dependency array will run whenever the dependencies change.
* The useEffect Hook with an empty dependency array will run once when the component mounts and never again.
* The useEffect Hook with a dependency array and an empty function will run once when the component mounts and never again.
* We are not allowed to render the hook inside the Conditional Statements.

## Context API

It is a feature that allows you manage and share state accross the components tree without passing the props down manually at every level.
It's useful for scenarios where you need to share data or functions across many components, especially when these components are nested deep inside the app.

### useContext Hook

It allows us to access the context values provided by a context object directly within a functional component. It provides a way to pass the data through the component tree without have to pass the prosp down manually at every level.
