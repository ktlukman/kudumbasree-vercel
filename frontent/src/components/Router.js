import { Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { Startup } from './SportsApp/Startup';
import { Listing } from './SportsApp/English/Listing';
import { Adduser } from './SportsApp/English/Adduser';
import { Viewdetails } from './SportsApp/English/Viewdetails';
import { HomeEn } from './SportsApp/English/Home';
import { Homeml } from './SportsApp/Malayalam/Home';
import { Listingml } from './SportsApp/Malayalam/Listing';
import { Adduserml } from './SportsApp/Malayalam/Adduser';
import { Viewdetailsml } from './SportsApp/Malayalam/Viewdetails';
import { Editdetails } from './SportsApp/English/Editdetails';
import { Editdetailsml } from './SportsApp/Malayalam/Editdetails';

export const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Startup />} />
        <Route path="/sports" element={<Startup />} />
        <Route path="/enhome" element={<HomeEn />} />
        <Route path='/userslist' element={<Listing />}></Route>
        <Route path='/addusers' element={<Adduser />}></Route>
        <Route path='/userslist/:id' element={<Viewdetails />}></Route>
        <Route path='/userslist/edit/:id' element={<Editdetails />}></Route>

        <Route path="/home" element={<Homeml />} />
        <Route path="/mlhome" element={<Homeml />} />
        <Route path='/userslistml' element={<Listingml />}></Route>
        <Route path='/addusersml' element={<Adduserml />}></Route>
        <Route path='/userslistml/:id' element={<Viewdetailsml />}></Route>
        <Route path='/userslistml/edit/:id' element={<Editdetailsml />}></Route>
    </Routes>
    </>
  )
}