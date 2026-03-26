import {
    SectionWrapper,
    Container,
    TableCard,
    TableStyled,
    HeadCell,
    Cell,
    GridTwo,
    Card,
    CardTitle,
    CardText,
    ListRow,
    NumberCircle,
    Bullet,
    TableScroll, SectionHeader, SectionTitle, GridThree, IconWrapper, RequirementCard
} from "./KadrSectionStyled";

import TopicIcon from '@mui/icons-material/Topic';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {requirementsKADR, stagesKADR} from "@/description.ts";
import ChecklistIcon from "@mui/icons-material/Checklist";
import {ListItemRow, ListNumber} from "@/sections/ZapasSection/ZapasSectionStyled.tsx";

const specialties = [
    {
        military: "Инженер по эксплуатации и ремонту воздушных судов",
        civilian: "11.05.03 Инфокоммуникационные технологии и системы специальной связи",
        faculty: "ИЭТИ",
    },
    {
        military: "Инженер по эксплуатации и ремонту воздушных судов",
        civilian: "24.05.06 Системы управления летательными аппаратами",
        faculty: "ИЭТИ",
    },
    {
        military: "Бортовой авиационный техник вертолёта",
        civilian: "13.05.02 Электромеханические системы",
        faculty: "ИЭТИ",
    },
];



const stepsKADR = [
    "Подать заявление в военный коммисориат по месту пребывания до 15 июня",
    "Пройти медицинское освидетельствование",
    "Пройти профессионально психологического отбора",
    "Предоставить личное дело в ВУЦ",
    "Сдать нормативы по физической подготовке",
];

const docs = [
    "Паспорт",
    "Документ об образовании",
    "Результаты ЕГЭ",
    "4 фотографии 3×4",
    "Документы о достижениях",
];

const KadrSection = () => {

    return (
        <SectionWrapper>
            <Container>

                <SectionHeader
                    variant="h2"
                >
                    <SectionTitle>Требования к кандидатам</SectionTitle>
                </SectionHeader>

                <GridThree>
                    {requirementsKADR.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <RequirementCard key={i}>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText>{item.desc}</CardText>
                            </RequirementCard>
                        );
                    })}
                </GridThree>

                {/* TABLE */}

                <TableCard>
                    <TableScroll>
                        <TableStyled>
                            <thead>
                            <tr>
                                <HeadCell>Военная специальность</HeadCell>
                                <HeadCell>Гражданская специальность</HeadCell>
                                <HeadCell align="center">Институт</HeadCell>
                            </tr>
                            </thead>

                            <tbody>
                            {specialties.map((s, i) => (
                                <tr key={i}>
                                    <Cell>{s.military}</Cell>
                                    <Cell>{s.civilian}</Cell>
                                    <Cell align="center">{s.faculty}</Cell>
                                </tr>
                            ))}
                            </tbody>
                        </TableStyled>
                    </TableScroll>
                </TableCard>

                {/* INFO */}

                <GridTwo>

                    <Card>
                        <AccessTimeIcon/>
                        <CardTitle>Срок обучения</CardTitle>
                        <CardText>5(5,5) лет очная форма</CardText>
                    </Card>

                    <Card>
                        <MilitaryTechIcon/>
                        <CardTitle>Контракт</CardTitle>
                        <CardText>
                            Служба в Воздушно космических силах РФ на должностях инженерно-технического состава.
                            Срок службы - 3 года, с возможностью продления контракта
                        </CardText>
                    </Card>

                </GridTwo>

                {/* STEPS */}

                <Card>
                    <AssignmentIcon/>
                    <CardTitle>Порядок поступления</CardTitle>

                    {stepsKADR.map((s, i) => (
                        <ListRow key={i}>
                            <NumberCircle>{i + 1}</NumberCircle>
                            <CardText>{s}</CardText>
                        </ListRow>
                    ))}
                </Card>

                {/* DOCUMENTS */}

                <GridTwo>

                    <Card>
                        <SectionTitle variant="h6">
                            <TopicIcon sx={{ mr: 1 }} />
                            Документы в приёмную комиссию
                        </SectionTitle>

                        {docs.map((d, i) => (
                            <ListRow key={i}>
                                <Bullet/>
                                <CardText>{d}</CardText>
                            </ListRow>
                        ))}
                    </Card>

                    <Card>
                        <SectionTitle variant="h6">
                            <ChecklistIcon sx={{ mr: 1 }} />
                            Этапы отбора
                        </SectionTitle>

                        {stagesKADR.map((stage, i) => (
                            <ListItemRow key={i}>
                                <ListNumber>{i + 1}</ListNumber>
                                <CardText>{stage}</CardText>
                            </ListItemRow>
                        ))}
                    </Card>

                </GridTwo>

            </Container>
        </SectionWrapper>
    )
}

export default KadrSection