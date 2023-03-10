import { Routes, Route } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home/Home';

function App() {
    return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App;
