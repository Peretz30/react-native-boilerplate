import React from 'react';
import { Container, Content, Item, Input, Icon, Button, Text } from 'native-base';
import {StyleSheet} from 'react-native'

const LoginComponent = ({ handleLoginPress }) => (
    <Container>
        <Content>
            <Item style={styles.input}>
                <Icon active name='md-person' />
                <Input placeholder='Логин' />
            </Item>
            <Item style={styles.input}>
                <Icon active name='md-key' />
                <Input placeholder='Пароль' />

            </Item>
            <Button block transparent onPress={handleLoginPress}>
                <Text>Войти</Text>
            </Button>
        </Content>
    </Container>

)

const styles = StyleSheet.create({
    input: {
      paddingLeft: 10
    }
  });

export default LoginComponent