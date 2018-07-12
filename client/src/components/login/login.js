import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text} from 'native-base';
import * as h from '../../util/fetch/fetching';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state({
            username: '',
            password: ''
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input 
                            name="username" 
                            value={this.state.username}
                        />
                    </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input 
                            name="password" 
                            secureTextEntry={true} 
                            value={this.state.password}
                        />
                    </Item>
                    <Button 
                        style={styles.loginBtn} 
                        block 
                        onPress={h.fetching(this.state, 'POST', 'http://192.168.1.5:80/notepad/api/api/login.php', (data) => this.handleLogin(data))}
                    >
                        <Text>LOG IN</Text>
                    </Button>
                    <Button danger
                        onPress = {() => navigate('Register')}> 
                        <Text> Or sign up !!</Text> 
                    </Button>
                </Form>
                </Content>               
            </Container>
        );
    }

    handleLogin = () => {
        if(data.status === 200) {
            navigate('Dashboard');
        } else {
            navigate('Login');
        }
    };
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
