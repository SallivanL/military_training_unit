import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
    PageWrapper,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    ContainerStyled,
    NewsGrid,
    NewsCard,
    NewsDate,
    NewsTitle,
    NewsText,
} from "./NewsPageStyled";
import {useEffect} from "react";
import {startFinishing} from "@/store/AppSlice.ts";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {newsItems} from "@/description.ts";



const NewsPage = () => {

    const dispatch = useAppDispatch();
    const loadingStatus = useAppSelector(state => state.app.status);

    useEffect(() => {
        if (loadingStatus !== "loading") {
            dispatch(startFinishing());
        }
    }, [loadingStatus, dispatch]);

    return (
        <PageWrapper>
            <HeroSection>
                <HeroTitle>Новости и события</HeroTitle>
                <HeroSubtitle>
                    Актуальная информация о жизни Военного учебного центра
                </HeroSubtitle>
            </HeroSection>

            <ContainerStyled>
                <NewsGrid>
                    {newsItems.map((item, index) => (
                        <NewsCard key={index}>
                            <NewsDate>
                                <CalendarMonthIcon fontSize="small" />
                                {item.date}
                            </NewsDate>

                            <NewsTitle>
                                {item.title}
                            </NewsTitle>

                            <NewsText>
                                {item.desc}
                            </NewsText>
                        </NewsCard>
                    ))}
                </NewsGrid>
            </ContainerStyled>
        </PageWrapper>
    );
};

export default NewsPage;