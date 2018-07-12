import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text} from 'native-base';
import * as h from '../../util/fetch/fetching';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    render() {
        const { navigate } = this.props.navigation; 
        return (
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>E-mail</Label>
                        <Input 
                            value={this.state.email}
                            />
                    </Item>                    
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input 
                            value={this.state.username}
                        />
                    </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input 
                            value={this.state.password}
                        />
                    </Item>
                    <Button 
                        style={styles.registerBtn} 
                        block 
                        onPress={h.fetching(this.state, 'POST', 'htpp://localhost:80/api/api/register.php', () => {navigate('Dashboard')})}><Text>REGISTER</Text></Button>
                </Form>
                </Content>               
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerBtn: {
        width: '80%',
        alignSelf: 'center',
    }
});