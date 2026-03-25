import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSuccess } from "@/store/AppSlice";

import {
    LoaderWrapper,
    LoaderContent,
    LoaderTitle,
} from "./AppLoaderStyled";

const MIN_DISPLAY_TIME = 1500;

const AppLoader = () => {
    const status = useAppSelector(state => state.app.status);
    const dispatch = useAppDispatch();

    const wrapperRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const minTimePassedRef = useRef(false);


    // Минимальное время показа
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            minTimePassedRef.current = true;
        }, MIN_DISPLAY_TIME);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    // Когда статус finishing → проверяем минимальное время → fade out
    useEffect(() => {
        if (status === "finishing") {
            const tryFinish = () => {
                if (minTimePassedRef.current && wrapperRef.current) {
                    gsap.to(wrapperRef.current, {
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        onComplete: () => {
                            dispatch(setSuccess());
                        },
                    });
                } else {
                    setTimeout(tryFinish, 50);
                }
            };

            tryFinish();
        }
    }, [status, dispatch]);

    return (
        <LoaderWrapper ref={wrapperRef}>
            <LoaderContent>
                <LoaderTitle>
                    Военный учебный центр
                </LoaderTitle>
            </LoaderContent>
        </LoaderWrapper>
    );
};

export default AppLoader;
