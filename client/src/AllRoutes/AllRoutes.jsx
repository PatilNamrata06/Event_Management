import { Routes, Route } from "react-router-dom"
import Auth from '../components/Auth'
import MyForm from '../Dashboard/MyForm'

const AllRoutes = () => {
    return (
        <Routes>
          <Route path="/Auth" element={<Auth />} />
          <Route path="/MyForm" element={<MyForm />} />
        </Routes>
    )
}

export default AllRoutes