import { ScreenContainer } from '@/components/ScreenContainer';
import { ContainerTaskDetail, TaskDetail } from './styles';
import { Tag } from '@/components/Tag';

export default function Details() {
  return (
    <ScreenContainer>
      <Tag iconName="calendar-month" title="02/10/24" />
      <ContainerTaskDetail showsVerticalScrollIndicator={false}>
        <TaskDetail>
          * Arroz;{'\n'}* Feijão;{'\n'}* Macarrão;{'\n'}* Molho de tomate; {'\n'}* Ketchup, mostarda
          e maionese;{'\n'}* Farinha de trigo;{'\n'}* Fermento;{'\n'}* Óleo de soja;{'\n'}* Azeite;
          {'\n'}* Vinagre;{'\n'}* Verduras;{'\n'}* Legumes e vegetais;{'\n'}* Cebola;{'\n'}* Alho;
          {'\n'}* Sal;
        </TaskDetail>
        <TaskDetail>
          * Arroz;{'\n'}* Feijão;{'\n'}* Macarrão;{'\n'}* Molho de tomate; {'\n'}* Ketchup, mostarda
          e maionese;{'\n'}* Farinha de trigo;{'\n'}* Fermento;{'\n'}* Óleo de soja;{'\n'}* Azeite;
          {'\n'}* Vinagre;{'\n'}* Verduras;{'\n'}* Legumes e vegetais;{'\n'}* Cebola;{'\n'}* Alho;
          {'\n'}* Sal;
        </TaskDetail>
      </ContainerTaskDetail>
    </ScreenContainer>
  );
}
