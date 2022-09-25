import { BrowserRouter as Router,useRoutes } from 'react-router-dom'

import './App.css'
import { routes } from './router'
import MioPageLoading from './components/loading/page-loading'

function App() {

  return (
    <div className="App">      
      <div className="content">
        {useRoutes(routes)}
      </div>
    </div>
  )
}

export default App
