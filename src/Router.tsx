import { useScrollToTop } from '@hooks/useScrollToTop'
import { D_introduction } from '@pages/D_introduction'
import { E_introduction } from '@pages/E_introduction'
import { HighTech } from '@pages/HighTech'
import { Junior } from '@pages/Junior'
import { Review } from '@pages/Review'
import { Senior } from '@pages/Senior'
import { Routes, Route } from 'react-router-dom'
import { Temi } from '@components/Students/Temi'

export const Router = () => {



    useScrollToTop();
    
    return (
        <Routes>
            <Route path='/senior' element={<Senior/>} />
            <Route path='/2학년' element={<Senior/>} />
            <Route path='/senior/토리' element={<Temi/>} />
            <Route path='/senior/VR' element={<Temi/>} />

            <Route path='/highTech' element={<HighTech/>} />
            <Route path='/하이테크' element={<HighTech/>} />

            <Route path='/junior' element={<Junior/>} />
            <Route path='/1학년' element={<Junior/>} />

            <Route path='/학과소개' element={<D_introduction/>} />
            <Route path='/majorDescription' element={<D_introduction/>} />

            <Route path='/방명록' element={<Review/>} />
            <Route path='/review' element={<Review/>} />

            <Route path='/전시소개' element={<E_introduction/>} />
            <Route path='/exhibitionDescription' element={<E_introduction/>} />

            <Route path='/*' element={<E_introduction/>} />
        </Routes>
    )
}
