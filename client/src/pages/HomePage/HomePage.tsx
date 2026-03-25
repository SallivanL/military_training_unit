import HeroSection from "@/sections/HeroSection/HeroSection";
import {PageWrapper} from "@/pages/HomePage/HomePageStyled.tsx";
import NewsSection from "@/sections/NewsSection/NewsSection.tsx";
import AdvantagesSection from "@/sections/AdvantagesSection/AdvantagesSection.tsx";
import ProgramsSection from "@/sections/ProgramsSection/ProgramsSection.tsx";

const HomePage = () => {
    return (
        <PageWrapper>
            <HeroSection />
            <AdvantagesSection />
            <ProgramsSection />
            <NewsSection />
        </PageWrapper>
        )
};

export default HomePage;
