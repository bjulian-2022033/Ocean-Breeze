import { Toaster } from 'react-hot-toast'
import { routes } from "./routes.jsx"
import { useRoutes } from 'react-router-dom'


function App() {
  const element = useRoutes(routes)


  return (
    <>
     {element}
     <Toaster position="bottom-right" reserveOrder={false}/>
    </>
  )
}

export default App
