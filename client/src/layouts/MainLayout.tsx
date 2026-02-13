import { Outlet } from 'react-router-dom'
import Navigation from "../components/Navigation/Navigation.tsx";
import {LayoutBox} from "./Styled.tsx";
export default function MainLayout() {
    return (
        <>
            <Navigation />
            <LayoutBox>
                <Outlet />
            </LayoutBox>
        </>
    )
}
