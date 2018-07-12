import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text} from 'native-base';
import * as helpers from '../../util/fetch/fetching';

export default class Login extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Button style={styles.loginBtn} block><Text>LOG IN</Text></Button>
                    <Button danger
                        onPress = {() => navigate('Register')}> 
                        <Text> Or sign up !!</Text> 
                    </Button>
                </Form>
                </Content>               
            </Container>
        );
    }
}

const login = () => {
    helpers.generateJSON
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBtn: {
        width: '80%',
        alignSelf: 'center',
    }
});
