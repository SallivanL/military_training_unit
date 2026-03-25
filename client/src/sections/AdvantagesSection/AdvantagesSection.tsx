import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import ApartmentIcon from "@mui/icons-material/ApartmentOutlined";
import GroupsIcon from "@mui/icons-material/GroupsOutlined";

import {
    SectionWrapper,
    Container,
    Grid,
    CardItem,
    IconWrapper,
    Title,
    Description, SectionSubtitle, SectionHeader, SectionTitle,
} from "./AdvantagesSectionStyled";

const advantages = [
    {
        icon: SchoolIcon,
        title: "Государственный диплом",
        desc: "Получение диплома государственного образца по военной специальности",
    },
    {
        icon: SecurityIcon,
        title: "Военная специальность",
        desc: "Освоение востребованной военной профессии параллельно с обучением",
    },
    {
        icon: ApartmentIcon,
        title: "Современная база",
        desc: "Современная материально-техническая база для практических занятий",
    },
    {
        icon: GroupsIcon,
        title: "Подготовка офицеров",
        desc: "Подготовка кадровых офицеров и специалистов высокой квалификации",
    },
];

const AdvantagesSection = () => {
    return (
        <SectionWrapper>
            <Container>

                <SectionHeader>
                    <SectionTitle variant="h2">
                        Наши преимущества
                    </SectionTitle>
                    <SectionSubtitle>
                        Почему стоит выбрать Военный учебный центр
                    </SectionSubtitle>
                </SectionHeader>

                <Grid>
                    {advantages.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <CardItem key={i}>
                                <IconWrapper>
                                    <Icon fontSize="large" />
                                </IconWrapper>

                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                            </CardItem>
                        );
                    })}
                </Grid>
            </Container>
        </SectionWrapper>
    );
};

export default AdvantagesSection;
