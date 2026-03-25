import {
    Bullet,
    CardBlock,
    CardText,
    CardTitle,
    Container, DeadlineCard,
    GridThree, GridTwo, IconWrapper, ListItemRow, ListNumber,
    RequirementCard,
    SectionHeader,
    SectionTitle, SectionWrapper
} from "./ZapasSectionStyled.tsx";
import {documents, requirements, stages} from "@/description.ts";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";

const ZapasSection = () => {
    return (
        <SectionWrapper>
            <Container>
                {/* Requirements */}
                <SectionHeader variant="h2">
                    <SectionTitle>Требования к кандидатам</SectionTitle>
                </SectionHeader>

                <GridThree>
                    {requirements.map((item, i) => {
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

                {/* Stages + Documents */}
                <GridTwo>
                    <CardBlock>
                        <SectionTitle variant="h6">
                            <ChecklistIcon sx={{ mr: 1 }} />
                            Этапы отбора
                        </SectionTitle>

                        {stages.map((stage, i) => (
                            <ListItemRow key={i}>
                                <ListNumber>{i + 1}</ListNumber>
                                <CardText>{stage}</CardText>
                            </ListItemRow>
                        ))}
                    </CardBlock>

                    <CardBlock>
                        <SectionTitle variant="h6">
                            <DescriptionOutlinedIcon sx={{ mr: 1 }} />
                            Необходимые документы
                        </SectionTitle>

                        {documents.map((doc, i) => (
                            <ListItemRow key={i}>
                                <Bullet />
                                <CardText>{doc}</CardText>
                            </ListItemRow>
                        ))}
                    </CardBlock>
                </GridTwo>

                {/* Deadlines */}
                <DeadlineCard>
                    <SectionTitle variant="h6">
                        <EventOutlinedIcon sx={{ mr: 1 }} />
                        Сроки подачи документов
                    </SectionTitle>

                    <CardText>
                        Приём заявлений: <b>1 февраля – 1 апреля</b>. Отбор проводится в
                        <b> мае–июне</b>. Зачисление — до <b>1 августа</b>.
                    </CardText>
                </DeadlineCard>
            </Container>
        </SectionWrapper>
    )
}

export default ZapasSection;