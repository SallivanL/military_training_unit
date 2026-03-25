import {useRef, useState} from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShieldIcon from "@mui/icons-material/ShieldOutlined";
import {Box, Drawer, Tooltip} from "@mui/material";

import {
    AppBarStyled,
    ToolbarStyled,
    LogoWrapper,
    NavLinksDesktop,
    NavLinkItem,
    AdmissionButton,
    MobileToggle,
    DrawerContent,
    DrawerLink, DesktopOnly,
} from "./NavigationStyled";
import {alpha} from "@mui/material/styles";
import ThemeToggleButton from "@/components/ThemeToggleButton/ThemeToggleButton.tsx";
import {contacts, navLinks} from "@/description.ts";
import {useAppSelector} from "@/store/hooks.ts";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";



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

    const navRef = useRef(null);
    const showNavigation = useAppSelector(state => state.animation.showNavigation);

    const shouldShowNavigation =
        location.pathname !== "/" || showNavigation;


    useGSAP(() => {
        if (!shouldShowNavigation || !navRef.current) return;

        gsap.fromTo(
            navRef.current,
            { y: -180, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

    }, [shouldShowNavigation]);

    return (
        <>
            <AppBarStyled
                sx={{ opacity: shouldShowNavigation ? 1 : 0 }}
                ref={navRef} position="fixed" elevation={0}>
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
                        <ThemeToggleButton/>
                    </NavLinksDesktop>
                    <DesktopOnly>
                        <RouterLink to="/admissions" style={linkStyle}>
                            <AdmissionButton variant="contained">
                                Поступить
                            </AdmissionButton>
                        </RouterLink>
                    </DesktopOnly>
                    {/* Mobile toggle */}
                    <MobileToggle onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </MobileToggle>
                </ToolbarStyled>
            </AppBarStyled>

            {/* Mobile Drawer */}
            <Drawer
                anchor="top"
                open={isOpen}
                onClose={toggleDrawer(false)}
                slotProps={{
                    paper: {
                        sx: (theme) => ({
                            background: alpha(theme.palette.background.paper, 0.45),
                            backdropFilter: "blur(12px)",
                            borderBottom: `1px solid ${theme.palette.divider}`,
                        }),
                    },
                    backdrop: {
                        sx: {
                            backgroundColor: "rgba(0,0,0,0.3)",
                        },
                    },
                }}
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
                            <DrawerLink
                                fullWidth
                            >
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
                    {/* Контакты внизу */}
                    <Box sx={{
                        marginTop:'20px',
                        padding: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 3,

                        flexWrap: 'wrap',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                    }}>
                        {contacts.map(({icon: Icon, title, action, color}) => (
                            <Tooltip key={title} title={title} arrow>
                                <Icon
                                    fontSize="large"
                                    onClick={action}
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.2)',
                                            color: color,
                                        }
                                    }}
                                />
                            </Tooltip>
                        ))}
                        <ThemeToggleButton sx={{transform:'scale(1.2)'}}/>
                    </Box>
                </DrawerContent>
            </Drawer>

        </>
    );
};

export default Navigation;
