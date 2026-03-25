import { Outlet } from 'react-router-dom'
import Navigation from "../components/Navigation/Navigation.tsx";
import {LayoutBox} from "./Styled.tsx";
import FooterSection from "@/sections/FooterSection/FooterSection.tsx";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop.tsx";

export default function MainLayout() {
    return (
        <>
            <ScrollToTop/>
            <Navigation />
            <LayoutBox>
                <Outlet />
                <FooterSection/>
            </LayoutBox>
        </>
    )
}