import  React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Button, Item, Text, Content } from 'native-base';
import Register from '../register/register';
import Login from '../login/login';

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;     
        return (
            <Container>
                <Content style={{marginTop: 60}}>
                    <Image 
                        source={require('../../assets/applogo.png')}
                        style={{
                            width: 120,
                            height: 120,
                            alignSelf: 'center',
                            marginTop: 50
                        }}
                    />
                    <Content style={{
                        marginTop: '50%',
                    }}>
                        <Button
                            style={styles.btnStyle}
                            rounded 
                            block
                            onPress={() => navigate('Login')}>
                            <Text>LOG IN</Text>
                        </Button>
                        <Button
                            style={styles.btnStyle}
                            rounded 
                            danger
                            block
                            onPress={() => navigate('Register')}>
                            <Text>SIGN UP</Text>
                        </Button>
                    </Content>  
                </Content>           
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStyle: {
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
    }
});
