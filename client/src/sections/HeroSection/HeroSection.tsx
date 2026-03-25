import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ShieldIcon from "@mui/icons-material/ShieldOutlined";
import { useGSAP } from '@gsap/react';
import heroWEBM from "@/assets/heroWEBM.webm";
import heroPNG from "@/assets/heroBg.png";

import {
    HeroContainer,
    BackgroundVideo,
    BackgroundImage,
    Overlay,
    ContentWrapper,
    Badge,
    Title,
    Subtitle,
    ButtonsWrapper,
    PrimaryButton,
    SecondaryButton,
} from "./HeroSectionStyled";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { startFinishing } from "@/store/AppSlice";

import {
    showHeroTitle,
    showHeroContent,
    showNavigation, animationEnded
} from "@/store/AnimationSlice.ts";

import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const titleRef = useRef<HTMLHeadingElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loadingStatus = useAppSelector(state => state.app.status);
    const isMobile = useAppSelector(state => state.device.isMobile);
    const isAnimationEnded = useAppSelector(state => state.animation.isAnimationEnded);

    const handleLoadedVideoData = () => {
        if (loadingStatus !== "loading" && loadingStatus !== 'success') {
            dispatch(startFinishing());
        }
    };

    useEffect(() => {
        if (isMobile) {
            handleLoadedVideoData();
            return;
        }

        const fallback = setTimeout(() => {
            handleLoadedVideoData();
        }, 4000);

        return () => clearTimeout(fallback);
    }, [dispatch, isMobile, loadingStatus]);

    /* INTRO ANIMATION */

    useGSAP(() => {

        if (isAnimationEnded) return
        // начальные состояния

        dispatch(showNavigation(false));
        gsap.set(titleRef.current, { opacity: 0, y: 40 });

        gsap.set(
            [badgeRef.current, subtitleRef.current, buttonsRef.current],
            { opacity: 0, y: 30 }
        );

        gsap.set(overlayRef.current, { opacity: 0 });

        if (loadingStatus !== "success") return;

        const tl = gsap.timeline();



        // 2 секунды видео
        tl.to({}, { duration: !isMobile ? 2 : 0 });

        // главный заголовок
        tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            onStart: () => {
                dispatch(showHeroTitle());
            }
        });

        // остальной контент + overlay
        tl.to(
            [badgeRef.current, subtitleRef.current, buttonsRef.current, overlayRef.current],
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.15,
                onStart: () => {
                    dispatch(showHeroContent());
                }
            }
        );

        // появление навигации
        tl.call(() => {
            dispatch(showNavigation());
            dispatch(animationEnded());
        });

    }, [loadingStatus, dispatch, isAnimationEnded]);

    return (
        <HeroContainer>

            {isMobile ? (
                <BackgroundImage src={heroPNG} alt="hero" />
            ) : (
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
            )}

            <Overlay ref={overlayRef} />

            <ContentWrapper>

                <Badge ref={badgeRef}>
                    <ShieldIcon />
                    Военный учебный центр
                </Badge>

                <Title ref={titleRef}>
                    Военный учебный центр при УУНиТ
                </Title>

                <Subtitle ref={subtitleRef}>
                    Подготовка высококвалифицированных военных специалистов
                    для Вооружённых Сил Российской Федерации
                </Subtitle>

                <ButtonsWrapper ref={buttonsRef}>
                    <PrimaryButton
                        onClick={() => navigate("/admissions")}
                        variant="contained"
                    >
                        Поступить
                    </PrimaryButton>

                    <SecondaryButton
                        onClick={() => navigate("/programs")}
                    >
                        Программы подготовки
                    </SecondaryButton>
                </ButtonsWrapper>

            </ContentWrapper>

        </HeroContainer>
    );
};

export default HeroSection;