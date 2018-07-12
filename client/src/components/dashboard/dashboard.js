import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text} from 'native-base';
import * as h from '../../util/fetch/fetching';

export default class Dashboard extends React.Component {
    render() {
        const { navigate } = this.props.navigation; 
        return (
            <Container>
                <Text>DASHBOARD</Text>              
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
    }
});