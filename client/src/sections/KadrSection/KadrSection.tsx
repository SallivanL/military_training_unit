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
    Badge, TableScroll
} from "./KadrSectionStyled";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const specialties = [
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

const steps = [
    "Обратиться в военный комиссариат района для формирования личного дела",
    "До 10 июля представить личное дело в ВУЦ",
    "Подать заявление в приёмную комиссию",
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

                {/* TABLE */}

                <TableCard>
                    <TableScroll>
                        <TableStyled>
                            <thead>
                            <tr>
                                <HeadCell>Военная специальность</HeadCell>
                                <HeadCell>Гражданская специальность</HeadCell>
                                <HeadCell align="center">Факультет</HeadCell>
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
                        <CardText>5,5 лет очная форма</CardText>
                    </Card>

                    <Card>
                        <MilitaryTechIcon/>
                        <CardTitle>Контракт</CardTitle>
                        <CardText>
                            Служба в ВКС РФ на должностях инженерного состава
                            сроком 3 года
                        </CardText>
                    </Card>

                </GridTwo>

                {/* STEPS */}

                <Card>
                    <AssignmentIcon/>
                    <CardTitle>Порядок поступления</CardTitle>

                    {steps.map((s, i) => (
                        <ListRow key={i}>
                            <NumberCircle>{i + 1}</NumberCircle>
                            <CardText>{s}</CardText>
                        </ListRow>
                    ))}
                </Card>

                {/* DOCUMENTS */}

                <GridTwo>

                    <Card>
                        <CardTitle>Документы на комиссию</CardTitle>

                        {docs.map((d, i) => (
                            <ListRow key={i}>
                                <Bullet/>
                                <CardText>{d}</CardText>
                            </ListRow>
                        ))}
                    </Card>

                    <Card>
                        <EmojiEventsIcon/>
                        <CardTitle>Конкурсный отбор</CardTitle>

                        <CardText>
                            Дополнительное испытание по физической подготовке
                        </CardText>

                        <Badge>Сила</Badge>
                        <Badge>Быстрота</Badge>
                        <Badge>Выносливость</Badge>

                    </Card>

                </GridTwo>

            </Container>
        </SectionWrapper>
    )
}

export default KadrSection