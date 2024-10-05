import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';
import { Btn, Container, ContentContainer, DotsBtn } from './styles';
import { router, useLocalSearchParams } from 'expo-router';
import { ConfirmDialog } from '../ConfirmDialog';

export function FloatingButton() {
  const [modalVisible, setModalVisible] = useState(false);

  const firstValue = useSharedValue(30);
  const secondValue = useSharedValue(30);
  const thirdValue = useSharedValue(30);
  const isOpen = useSharedValue(false);

  const params = useLocalSearchParams();
  const theme = useTheme();

  const handlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };
    if (isOpen.value) {
      firstValue.value = withTiming(30, config);
      secondValue.value = withDelay(50, withTiming(30, config));
      thirdValue.value = withDelay(100, withTiming(30, config));
    } else {
      firstValue.value = withDelay(200, withSpring(110));
      secondValue.value = withDelay(100, withSpring(100));
      thirdValue.value = withSpring(110);
    }
    isOpen.value = !isOpen.value;
  };

  const firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(firstValue.value, [30, 110], [0, 1], Extrapolation.CLAMP);

    return {
      right: firstValue.value,
      transform: [{ scale: scale }],
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(secondValue.value, [30, 100], [0, 1], Extrapolation.CLAMP);

    return {
      bottom: secondValue.value,
      right: secondValue.value,
      transform: [{ scale: scale }],
    };
  });

  const thirdIcon = useAnimatedStyle(() => {
    const scale = interpolate(thirdValue.value, [30, 110], [0, 1], Extrapolation.CLAMP);

    return {
      bottom: thirdValue.value,
      transform: [{ scale: scale }],
    };
  });

  const handleDeleteTask = () => {
    console.log(`Excluir Tarefa ${params.taskId}`);

    router.replace('/');
  };

  return (
    <>
      <Container>
        <ContentContainer as={Animated.View} style={thirdIcon}>
          <Btn onPress={() => setModalVisible(!modalVisible)}>
            <MaterialCommunityIcons size={28} name="trash-can-outline" />
          </Btn>
        </ContentContainer>
        <ContentContainer as={Animated.View} style={secondIcon}>
          <Btn
            onPress={() =>
              router.navigate({
                pathname: '/new-task',
                params: { name: 'Editar tarefa', taskId: params.taskId },
              })
            }>
            <MaterialCommunityIcons size={28} name="pencil-outline" />
          </Btn>
        </ContentContainer>
        <ContentContainer as={Animated.View} style={firstIcon}>
          <Btn
            onPress={() =>
              router.navigate({ pathname: '/new-task', params: { name: 'Nova tarefa' } })
            }>
            <MaterialCommunityIcons size={28} name="plus" />
          </Btn>
        </ContentContainer>

        <DotsBtn
          onPress={() => {
            handlePress();
          }}>
          <MaterialCommunityIcons
            size={28}
            name="dots-vertical"
            color={theme.palettes.primary[80]}
          />
        </DotsBtn>
      </Container>

      <ConfirmDialog
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        onAction={handleDeleteTask}
      />
    </>
  );
}
