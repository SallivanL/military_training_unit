import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // если есть #id
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
                return;
            }
        }

        // обычный переход — вверх
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, hash]);

    return null;
}