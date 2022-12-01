import { Navigate, Route, Routes } from "react-router-dom"
import { PharmacyPage } from "../pages/PharmacyPage"
import { HomeView } from "../views/HomeView"
import { InventoryView } from "../views/InventoryView"
import { LaboratoryView } from "../views/LaboratoryView"

export const PharmacyRoutes = () => {
  return (
    <PharmacyPage>
      <Routes>
        <Route path='/' element={<HomeView />}  />
        <Route path='/employees' element={<p>employees</p>}  />
        <Route path='/inventory' element={<InventoryView />}  />
        <Route path='/customers' element={<p>customers</p>}  />
        <Route path='/laboratories' element={<LaboratoryView />}  />
        <Route path='/pucharses' element={<p>Ventas</p>}  />
        <Route path='/*' element={<Navigate to={"/"} />}  />
      </Routes>
    </PharmacyPage>
  )
}
