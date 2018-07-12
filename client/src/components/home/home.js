import  React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container } from 'native-base';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Image 
                    source={require('../../assets/applogo.png')}
                    style={{
                        width: 120,
                        height: 120,
                        alignSelf: 'center'
                    }}
                />
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
    logo: {
        width: '50',
        alignSelf: 'center',
    }
});
