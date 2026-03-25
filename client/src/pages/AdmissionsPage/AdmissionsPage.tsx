import { useEffect, useState } from "react";
import { startFinishing } from "@/store/AppSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import ZapasSection from "@/sections/ZapasSection/ZapasSection";
import KadrSection from "@/sections/KadrSection/KadrSection";

import {
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    ToggleWrapper,
    ToggleContainer,
    ToggleButton
} from "./AdmissionsPageStyled";

const AdmissionsPage = () => {

    const dispatch = useAppDispatch();
    const loadingStatus = useAppSelector(state => state.app.status);

    const [tab, setTab] =
        useState<"zapas" | "kadr">("zapas");

    useEffect(() => {
        if (loadingStatus !== "loading") {
            dispatch(startFinishing());
        }
    }, [loadingStatus, dispatch]);

    return (
        <>
            <HeroSection>
                <HeroTitle>Поступающим</HeroTitle>
                <HeroSubtitle>
                    Информация для кандидатов на обучение
                    в Военном учебном центре
                </HeroSubtitle>
            </HeroSection>

            <ToggleWrapper>
                <ToggleContainer>

                    <ToggleButton
                        active={tab === "kadr"}
                        onClick={() => setTab("kadr")}
                    >
                        Кадровые офицеры
                    </ToggleButton>

                    <ToggleButton
                        active={tab === "zapas"}
                        onClick={() => setTab("zapas")}
                    >
                        Программа запаса (для студентов УУНиТ)
                    </ToggleButton>



                </ToggleContainer>
            </ToggleWrapper>

            {tab === "zapas"
                ? <ZapasSection/>
                : <KadrSection/>
            }
        </>
    )
}

export default AdmissionsPage;