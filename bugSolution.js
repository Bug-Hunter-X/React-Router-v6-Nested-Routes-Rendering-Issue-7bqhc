```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          {/* ... other nested routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home</h1>
      {location.pathname === '/' && <p>This is the Home page.</p>}
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

export default App;
```