import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import TelegramIcon from "@mui/icons-material/Telegram";
import type { SvgIconComponent } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

interface INavLink{
    label: string;
    path: string;
}

export const navLinks: INavLink[] = [
    { label: "Главная", path: "/" },
    // { label: "О центре", path: "/about" },
    { label: "Программы", path: "/programs" },
    // { label: "Кафедры", path: "/departments" },
    { label: "Поступающим", path: "/admissions" },
    { label: "Новости", path: "/news" },
    // { label: "Контакты", path: "/contacts" },
];



interface IContact {
    icon: SvgIconComponent;
    title: string;
    action: () => void;
    color: string;
}
export const contacts: IContact[] = [
    {
        icon: WhatsAppIcon,
        title: 'Написать в WhatsApp',
        action: () => {},
        color: '#25D366'
    },
    {
        icon: TelegramIcon,
        title: 'Написать в Telegram',
        action: () => {},
        color: '#0088cc'
    },
    {
        icon: LocalPostOfficeIcon,
        title: 'Написать на почту',
        action: () => {},
        color: '#fddd6a'
    },
];



interface IProgram {
    id:string,
    title:string,
    desc:string,
    duration:string,
    format:string,
    requirements:string,
    result:string,
}
export const programs:IProgram[] = [
    {
        id:'kadroff',
        title: "Кадровые офицеры",
        desc: "Очная военная подготовка с последующим прохождением службы по контракту.",
        duration: "5 лет",
        format: "Очная форма",
        requirements: "Годность по здоровью, физподготовка, успеваемость",
        result: "Воинское звание «лейтенант», служба по контракту",
    },
    {
        id:'zapasoff',
        title: "Офицеры запаса",
        desc: "Обучение параллельно с основной специальностью.",
        duration: "2.5 года",
        format: "Параллельно с обучением",
        requirements: "Студент 2 курса, годность по здоровью",
        result: "Воинское звание «лейтенант запаса»",
    },
    {
        id:'zapassold',
        title: "Солдаты запаса",
        desc: "Базовая военная подготовка с зачислением в запас.",
        duration: "1.5 года",
        format: "Параллельно с обучением",
        requirements: "Студент 2 курса, годность по здоровью",
        result: "Зачисление в запас ВС РФ",
    },
];










export const requirementsZAPAS = [
    {
        icon: FavoriteBorderIcon,
        title: "Медицинские",
        desc: "Годность по состоянию здоровья (категория А или Б). Прохождение военно-врачебной комиссии.",
    },
    {
        icon: FitnessCenterIcon,
        title: "Физические",
        desc: "Сдача нормативов: бег 100 м, бег 1 км, подтягивание на перекладине.",
    },
    {
        icon: SchoolOutlinedIcon,
        title: "Академические",
        desc: "Отсутствие задолженностей. Хорошая успеваемость",
    },
];


export const requirementsKADR = [
    {
        icon: FavoriteBorderIcon,
        title: "Медицинские",
        desc: "Годность по состоянию здоровья (категория А или Б). Прохождение военно-врачебной комиссии.",
    },
    {
        icon: FitnessCenterIcon,
        title: "Физические",
        desc: "Сдача нормативов: бег 100 м, бег 1 км, подтягивание на перекладине.",
    },
    {
        icon: SchoolOutlinedIcon,
        title: "Академические",
        desc: "Сдача ЕГЭ (математика, русский, предмет по выборку)",
    },
];

export const stagesZAPAS = [
    "Подача заявления на имя ректора",
    "Прохождение медицинского освидетельствования",
    "Прохождние профессионального психологического отбора",
    "Конкурсный отбор",
];

export const stagesKADR = [
    "Подача заявления на имя ректора",
    "Прохождение медицинского освидетельствования",
    "Прохождние профессионального психологического отбора",
    "Конкурсный отбор",
];

export const documents = [
    "Заявление установленного образца",
    "Паспорт (копия)",
    "Удостоверение гражданина подлежащего призыву",
    "Медицинская справка (086/у)",
    "2 Фотографии 3×4",
    "Характеристики с места учебы",
    "Справка об остутствии судимости",
];






interface INewsItem {
    date: string;
    title: string;
    desc: string;
}

export const newsItems :INewsItem[] = [
    {
        date: "10 февраля 2026",
        title: "День открытых дверей ВУЦ",
        desc: "Военный учебный центр приглашает студентов 1–2 курсов на день открытых дверей. Вы сможете познакомиться с программами подготовки, посетить учебные аудитории и задать вопросы преподавателям.",
    },
    {
        date: "5 февраля 2026",
        title: "Начало весеннего набора",
        desc: "Открыт приём заявлений для поступления на программы подготовки офицеров запаса и солдат запаса. Документы принимаются до 1 апреля 2026 года.",
    },
    {
        date: "28 января 2026",
        title: "Итоги зимних полевых сборов",
        desc: "Курсанты 3 курса успешно завершили зимние полевые учебные сборы на полигоне. Все нормативы были выполнены на отлично.",
    },
    {
        date: "15 января 2026",
        title: "Научная конференция по авиационным технологиям",
        desc: "На базе ВУЦ прошла ежегодная научно-практическая конференция, посвящённая современным авиационным технологиям и перспективам развития военной авиации.",
    },
    {
        date: "25 декабря 2025",
        title: "Торжественная церемония выпуска",
        desc: "Состоялась торжественная церемония вручения дипломов выпускникам программы подготовки кадровых офицеров. 45 лейтенантов получили воинское звание.",
    },
    {
        date: "10 декабря 2025",
        title: "Обновление тренажёрной базы",
        desc: "Учебный центр получил новый авиационный тренажёрный комплекс для подготовки специалистов по эксплуатации авиационной техники.",
    },
];