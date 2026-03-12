import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

import { Contact } from './pages/Contact';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './pages/NotFound'; // Import NotFound

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Custom 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
