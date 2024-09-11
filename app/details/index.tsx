import { ScreenContainer } from '@/components/ScreenContainer';
import { ContainerTaskDetail, TaskDetail } from './styles';

export default function Details() {
  return (
    <ScreenContainer>
      <ContainerTaskDetail>
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
