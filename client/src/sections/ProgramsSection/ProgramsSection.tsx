import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

import {
    SectionWrapper,
    Container,
    Grid,
    CardItem,
    IconWrapper,
    Title,
    Description,
    MoreLink, SectionSubtitle, SectionHeader, SectionTitle,
} from "./ProgramsSectionStyled";
import {programs} from "@/description.ts";


const ProgramsSection = () => {
    return (
        <SectionWrapper>

            <SectionHeader>
                <SectionTitle variant="h2">
                    Программы подготовки
                </SectionTitle>
                <SectionSubtitle>
                    Выберите направление военной подготовки
                </SectionSubtitle>
            </SectionHeader>


            <Container>
                <Grid>
                    {programs.map((item, i) => (
                        <CardItem key={i}>
                            <IconWrapper>
                                <SchoolIcon />
                            </IconWrapper>

                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>

                            <RouterLink to={`/programs#${item.id}`}>
                                <MoreLink>
                                    Подробнее <ArrowForwardIcon fontSize="small" />
                                </MoreLink>
                            </RouterLink>
                        </CardItem>
                    ))}
                </Grid>
            </Container>
        </SectionWrapper>
    );
};

export default ProgramsSection;
