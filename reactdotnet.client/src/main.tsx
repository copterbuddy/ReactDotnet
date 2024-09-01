import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import WeatherForecast from './WeatherForecast.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/weatherforecast" element={<WeatherForecast />} />
      </Routes>
  </BrowserRouter>
</StrictMode>,
)
