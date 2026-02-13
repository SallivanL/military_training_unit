import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShieldIcon from "@mui/icons-material/ShieldOutlined";
import { Drawer } from "@mui/material";

import {
    AppBarStyled,
    ToolbarStyled,
    LogoWrapper,
    NavLinksDesktop,
    NavLinkItem,
    AdmissionButton,
    MobileToggle,
    DrawerContent,
    DrawerLink,
} from "./NavigationStyled";

const navLinks = [
    { label: "Главная", path: "/" },
    { label: "О центре", path: "/about" },
    { label: "Программы", path: "/programs" },
    { label: "Кафедры", path: "/departments" },
    { label: "Поступающим", path: "/admissions" },
    { label: "Новости", path: "/news" },
    { label: "Контакты", path: "/contacts" },
];

const linkStyle = {
    textDecoration: "none",
    color: "inherit",
};

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleDrawer = (open: boolean) => () => {
        setIsOpen(open);
    };

    return (
        <>
            <AppBarStyled position="absolute" elevation={0}>
                <ToolbarStyled>
                    {/* Logo */}
                    <RouterLink to="/" style={linkStyle}>
                        <LogoWrapper>
                            <ShieldIcon />
                            ВУЦ
                        </LogoWrapper>
                    </RouterLink>

                    {/* Desktop nav */}
                    <NavLinksDesktop>
                        {navLinks.map((link) => (
                            <RouterLink key={link.path} to={link.path} style={linkStyle}>
                                <NavLinkItem active={location.pathname === link.path}>
                                    {link.label}
                                </NavLinkItem>
                            </RouterLink>
                        ))}
                    </NavLinksDesktop>

                    <RouterLink to="/admissions" style={linkStyle}>
                        <AdmissionButton variant="contained" color="secondary">
                            Поступить
                        </AdmissionButton>
                    </RouterLink>

                    {/* Mobile toggle */}
                    <MobileToggle onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </MobileToggle>
                </ToolbarStyled>
            </AppBarStyled>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                <DrawerContent>
                    <MobileToggle
                        onClick={toggleDrawer(false)}
                        sx={{ alignSelf: "flex-end" }}
                    >
                        <CloseIcon />
                    </MobileToggle>

                    {navLinks.map((link) => (
                        <RouterLink
                            key={link.path}
                            to={link.path}
                            style={linkStyle}
                            onClick={toggleDrawer(false)}
                        >
                            <DrawerLink active={location.pathname === link.path}>
                                {link.label}
                            </DrawerLink>
                        </RouterLink>
                    ))}

                    <RouterLink
                        to="/admissions"
                        style={linkStyle}
                        onClick={toggleDrawer(false)}
                    >
                        <AdmissionButton
                            variant="contained"
                            color="secondary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Поступить
                        </AdmissionButton>
                    </RouterLink>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Navigation;
