import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroWEBM from "@/assets/heroWEBM.webm"
import {
    PageWrapper,
    HeroSection,
    Overlay,
    ContentWrapper,
    Badge,
    Title,
    Subtitle,
    ButtonsWrapper,
    PrimaryButton,
    SecondaryButton, BackgroundVideo,
} from "./HomePageStyled.tsx";
import ShieldIcon from '@mui/icons-material/ShieldOutlined';
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {startFinishing} from "@/store/AppSlice.ts";

const HomePage = () => {

    const contentRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const loadingAppState = useAppSelector(state => state.app.status);

    const handleLoadedVideoData = () => {
        console.log("handleLoadedVideoData success");
        dispatch(startFinishing());
    };

    useEffect(() => {
        const fallback = setTimeout(() => {
            if (loadingAppState === 'loading'){
                dispatch(startFinishing());
                console.log("finishLoading after 4sec");
            }
        }, 4000);

        return () => clearTimeout(fallback);
    }, [dispatch, loadingAppState]);

    useEffect(() => {
        if (contentRef.current) {
            gsap.from(contentRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }
    }, []);

    return (
        <PageWrapper>
            <HeroSection>
                {/*<BackgroundImage src={heroBg} alt="hero" />*/}
                <BackgroundVideo
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={handleLoadedVideoData}
                >
                    <source src={heroWEBM} type="video/webm" />
                </BackgroundVideo>
                <Overlay />


                <ContentWrapper ref={contentRef}>
                    <Badge>
                        <ShieldIcon/>
                        Военный учебный центр
                    </Badge>

                    <Title>
                        Военный учебный центр при УУНиТ
                    </Title>

                    <Subtitle>
                        Подготовка высококвалифицированных военных специалистов для
                        Вооружённых Сил Российской Федерации
                    </Subtitle>

                    <ButtonsWrapper>
                        <PrimaryButton
                            variant="contained"
                            color="secondary"
                        >Поступить</PrimaryButton>


                        <SecondaryButton
                            variant="contained"
                            color="secondary"
                        >
                            Программы подготовки
                        </SecondaryButton>
                    </ButtonsWrapper>
                </ContentWrapper>
            </HeroSection>
        </PageWrapper>
    );
};

export default HomePage;
