import styled from 'styled-components/native';
import { theme } from '../../../config/styles';

export default StyleSheet.create({
  images: {
    height: 200,
    width: undefined,
  },
});

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StoryBlock = styled.View`
  height: 200px;
  width: 100%;
`;
