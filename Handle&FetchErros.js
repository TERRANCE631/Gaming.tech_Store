import React from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  

// Step 1: Create an ErrorBoundary class to catch rendering errors in child components.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // State to track if an error has been caught
    this.state = { hasError: false };
  }

  // Step 2: This lifecycle method is triggered when an error occurs in a child component.
  // It updates the state to show a fallback UI.
  static getDerivedStateFromError(error) {
    return { hasError: true }; // Set error state to true.
  }

  // Step 3: This method logs error details. It can also be used to send error reports to a server.
  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  // Step 4: Render fallback UI if an error is caught. Otherwise, render child components as usual.
  render() {
    if (this.state.hasError) {
      // Fallback UI to display in case of an error.
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children; // Render child components if no error.
  }
}

// Step 5: The main App component or any other React components go here.
function MyComponent() {
  // Simulating an error for testing purposes
  throw new Error('Simulated error!');
  return <h1>My Component</h1>;
}

// Step 6: Wrap the main App or critical components with the ErrorBoundary.
// If an error occurs inside `MyComponent`, the ErrorBoundary will catch it.
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

// Step 7: Use React's StrictMode during development to highlight potential problems.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
