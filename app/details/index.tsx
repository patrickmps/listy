import { Tag } from '@/components/Tag';
import { Row, Container, ContainerTaskDetail, TaskDetail } from './styles';
import { FloatingButton } from '@/components/FloatingButton';

export default function Details() {
  return (
    <Container>
      <Row>
        <Tag iconName="tag-outline" title="Mercado" isDisable={true} rotateIcon={true} />
        <Tag iconName="calendar-month" title="02/10/25" isDisable={true} rotateIcon={false} />
        <Tag iconName="clock-outline" title="21:00" isDisable={true} rotateIcon={false} />
      </Row>
      <ContainerTaskDetail>
        <TaskDetail>
          * Arroz;{'\n'}* Feijão;{'\n'}* Macarrão;{'\n'}* Molho de tomate; {'\n'}* Ketchup, mostarda
          e maionese;{'\n'}* Farinha de trigo;{'\n'}* Fermento;{'\n'}* Óleo de soja;{'\n'}* Azeite;
          {'\n'}* Vinagre;{'\n'}* Verduras;{'\n'}* Legumes e vegetais;{'\n'}* Cebola;{'\n'}* Alho;
          {'\n'}* Sal;
        </TaskDetail>
      </ContainerTaskDetail>
      <FloatingButton />
    </Container>
  );
}
