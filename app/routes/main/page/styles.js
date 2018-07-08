import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../../config/styles';

export default StyleSheet.create({
  dialogueImage: {
    height: 50,
    width: 50,
  },
});

export const Text = styled.Text`
  font-size: 16;
  font-family: 'Lora-Regular';
  line-height: 22;
  padding: 20px;
`;

export const Dialogue = styled.View`
  background: ${theme.background.translucent};
  margin-bottom: ${props => props.noMargin ? '0px' : '20px'};
  padding: 20px;
  flex-direction: ${props => props.alignment === 'left' ? 'row' : 'row-reverse'};
  align-content: flex-start;
`;

export const DialogueBlock = styled.View`
  background: ${theme.primary};
  margin-bottom: 20px;
  padding: 20px;
`;

export const DialogueTextBlock = styled.View`
  flex-direction: column;
`;

export const DialogueText = Text.extend`
  color: ${theme.text.light};
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;
  text-align: ${props => props.alignment === 'left' ? 'left' : 'right'};
  width: ${`${(Dimensions.get('window').width) - (20 * 4.5)}px`};
`;

export const Interaction = styled.View`
  background: ${theme.secondary};
  padding: 20px;
`;

export const InteractionButton = `
  background-color: ${theme.primary};
  border-radius: 50;
  height: 35;
  padding: 5px 20px;
`;

export const InteractionButtonText = `
  color: ${theme.text.light};
`;

export const InteractionText = Text.extend`
  color: ${theme.text.light};
  padding: 0;
`;

export const InteractionOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
