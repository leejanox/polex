import { useScrollToTop } from '@hooks/useScrollToTop'
import { D_introduction } from '@pages/D_introduction'
import { E_introduction } from '@pages/E_introduction'
import { Junior } from '@pages/Junior'
import { Senior } from '@pages/Senior'
import { Routes, Route } from 'react-router-dom'
import { SeniorDetail } from '@pages/SeniorDetail'
import { DetailCard_list } from '@components/Students'
export const Router = () => {



    useScrollToTop();
    
    return (
        <Routes>
            <Route path='/senior' element={<Senior/>} />
            <Route path='/2학년' element={<Senior/>} />
            
            {DetailCard_list.map((v)=>(
                <Route path={`/senior/${v.data.title}`} element={<SeniorDetail title={v.data.title}/>} />
            ))}
            
            {DetailCard_list.map((v)=>(
                <Route path={`/senior/${v.data.id}`} element={<SeniorDetail title={v.data.title}/>} />
            ))}

            <Route path='/junior' element={<Junior/>} />
            <Route path='/생성형이미지' element={<Junior/>} />

            <Route path='/학과소개' element={<D_introduction/>} />
            <Route path='/majorDescription' element={<D_introduction/>} />

            <Route path='/전시소개' element={<E_introduction/>} />
            <Route path='/exhibitionDescription' element={<E_introduction/>} />

            <Route path='/*' element={<E_introduction/>} />
        </Routes>
    )
}
