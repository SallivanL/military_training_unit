import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import {lazy} from "react";
const HomePage = lazy(() => import('../pages/HomePage/HomePage.tsx'));
const AdmissionsPage = lazy(() => import('../pages/AdmissionsPage/AdmissionsPage.tsx'));
const ProgramsPage = lazy(() => import('../pages/ProgramsPage/ProgramsPage.tsx'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage.tsx'));

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainLayout />}>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={"/admissions"} element={<AdmissionsPage />} />
                    <Route path={"/programs"} element={<ProgramsPage />} />
                    <Route path={"/news"} element={<NewsPage />} />
                </Route>
            </Routes>
        </>
    )
}
