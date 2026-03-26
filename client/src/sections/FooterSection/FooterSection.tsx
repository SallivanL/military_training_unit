import {useNavigate} from "react-router-dom";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import {
    FooterWrapper,
    Container,
    Grid,
    Column,
    LogoRow,
    LogoText,
    Description,
    ColumnTitle,
    NavLinkStyled,
    ContactRow,
    BottomBar,
} from "./FooterSectionStyled";
import {navLinks} from "@/description.ts";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <FooterWrapper>
            <Container>
                <Grid>
                    {/* Logo & description */}
                    <Column>
                        <LogoRow>
                            <ShieldOutlinedIcon />
                            <LogoText>ВУЦ</LogoText>
                        </LogoRow>

                        <Description>
                            Военный учебный центр при университете. Подготовка
                            высококвалифицированных военных специалистов.
                        </Description>
                    </Column>

                    {/* Navigation */}
                    <Column>
                        <ColumnTitle>Навигация</ColumnTitle>

                        {navLinks
                            .filter(link => link.path !== "/news")
                            .map(link => (
                            <NavLinkStyled key={link.label} onClick={() => navigate(link.path)}>
                                {link.label}
                            </NavLinkStyled>
                        ))}


                    </Column>

                    {/* Info */}
                    <Column>
                        <ColumnTitle>Информация</ColumnTitle>

                        <NavLinkStyled
                            onClick={() => navigate('/news')}
                        >
                           Новости
                        </NavLinkStyled>
                    </Column>

                    {/* Contacts */}
                    <Column>
                        <ColumnTitle>Контакты</ColumnTitle>

                        <ContactRow>
                            <LocationOnOutlinedIcon fontSize="small" />
                            г. Уфа, ул. Аксакова, д. 94
                        </ContactRow>

                        <ContactRow>
                            <PhoneOutlinedIcon fontSize="small" />
                            +7 (908) 350-49-83
                        </ContactRow>

                        <ContactRow>
                            <MailOutlineOutlinedIcon fontSize="small" />
                            vuc@university.ru
                        </ContactRow>
                    </Column>
                </Grid>

                <BottomBar>
                    © {new Date().getFullYear()} Военный учебный центр. Все права защищены.
                </BottomBar>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
