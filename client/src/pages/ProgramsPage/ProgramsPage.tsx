import { Link as RouterLink } from "react-router-dom";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

import {
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    SectionWrapper,
    Container,
    ProgramsWrapper,
    ProgramCard,
    ProgramTitle,
    ProgramDescription,
    InfoGrid,
    InfoItem,
    InfoLabel,
    InfoValue,
    ApplyButton,
} from "./ProgramsPageStyled";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {useEffect} from "react";
import {startFinishing} from "@/store/AppSlice.ts";
import {programs} from "@/description.ts";



const ProgramsPage = () => {

    const dispatch = useAppDispatch();
    const loadingStatus = useAppSelector(state => state.app.status);

    useEffect(() => {
        if (loadingStatus !== "loading") {
            dispatch(startFinishing());
        }
    }, [loadingStatus, dispatch]);

    return (
        <>
            {/* Hero */}
            <HeroSection>
                <HeroTitle>Программы подготовки</HeroTitle>
                <HeroSubtitle>
                    Выберите направление военной подготовки в соответствии с вашими целями
                </HeroSubtitle>
            </HeroSection>

            <SectionWrapper>
                <Container>
                    <ProgramsWrapper>
                        {programs.map((prog, i) => (
                            <ProgramCard
                                id={prog.id}
                                key={i}>
                                <ProgramTitle>{prog.title}</ProgramTitle>
                                <ProgramDescription>{prog.desc}</ProgramDescription>

                                <InfoGrid>
                                    <InfoItem>
                                        <AccessTimeOutlinedIcon />
                                        <div>
                                            <InfoLabel>Срок обучения</InfoLabel>
                                            <InfoValue>{prog.duration}</InfoValue>
                                        </div>
                                    </InfoItem>

                                    <InfoItem>
                                        <MenuBookOutlinedIcon />
                                        <div>
                                            <InfoLabel>Формат</InfoLabel>
                                            <InfoValue>{prog.format}</InfoValue>
                                        </div>
                                    </InfoItem>

                                    <InfoItem>
                                        <CheckCircleOutlineIcon />
                                        <div>
                                            <InfoLabel>Требования</InfoLabel>
                                            <InfoValue>{prog.requirements}</InfoValue>
                                        </div>
                                    </InfoItem>

                                    <InfoItem>
                                        <WorkspacePremiumOutlinedIcon />
                                        <div>
                                            <InfoLabel>Результат</InfoLabel>
                                            <InfoValue>{prog.result}</InfoValue>
                                        </div>
                                    </InfoItem>
                                </InfoGrid>

                                <RouterLink to="/admissions" style={{ textDecoration: "none" }}>
                                    <ApplyButton variant="contained" color="secondary">
                                        Подать заявку
                                    </ApplyButton>
                                </RouterLink>
                            </ProgramCard>
                        ))}
                    </ProgramsWrapper>
                </Container>
            </SectionWrapper>
        </>
    );
};

export default ProgramsPage;
