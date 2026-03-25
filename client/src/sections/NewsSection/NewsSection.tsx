import EventIcon from "@mui/icons-material/Event";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

import {
    SectionWrapper,
    Container,
    Grid,
    CardItem,
    DateRow,
    Title,
    Description,
    MoreWrapper, SectionSubtitle, SectionHeader, SectionTitle,
} from "./NewsSectionStyled";

const news = [
    {
        date: "10 февраля 2026",
        title: "День открытых дверей ВУЦ",
        desc: "Приглашаем студентов 1–2 курсов на день открытых дверей.",
    },
    {
        date: "5 февраля 2026",
        title: "Начало весеннего набора",
        desc: "Открыт приём заявлений на программы подготовки.",
    },
    {
        date: "28 января 2026",
        title: "Итоги зимних сборов",
        desc: "Курсанты успешно завершили учебные полевые сборы.",
    },
];

const NewsSection = () => {
    return (
        <SectionWrapper>
            <Container>

                <SectionHeader>
                    <SectionTitle variant="h2">
                        Новости и объявления
                    </SectionTitle>
                    <SectionSubtitle>
                        Последние события и актуальная информация
                    </SectionSubtitle>
                </SectionHeader>


                <Grid>
                    {news.map((item, i) => (
                        <CardItem key={i}>
                            <DateRow>
                                <EventIcon fontSize="small" />
                                {item.date}
                            </DateRow>

                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </CardItem>
                    ))}
                </Grid>

                <RouterLink to="/news">
                    <MoreWrapper>
                        Все новости <ArrowForwardIcon fontSize="small" />
                    </MoreWrapper>
                </RouterLink>
            </Container>
        </SectionWrapper>
    );
};

export default NewsSection;
