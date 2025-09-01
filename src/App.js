import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import usePeople from "./Hooks/usePeople";




function Home() {
  const { people, loading, error, fetchPeople } = usePeople();

  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={fetchPeople}>
        Load People
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <ul>
        {people.map((person, index) => (
          <li key={index}>{person.name}</li> // adapt "name" to your API data
        ))}
      </ul>
    </div>
  );
}


function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/products/car">Cars</Link> |{" "}
        <Link to="/products/bike">Bikes</Link>
      </nav> 
      <Outlet /> 
    </div>
  );
}

function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
        <li>Toyota</li>
        <li>Mercedes</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
