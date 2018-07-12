import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

import AddNote from '../addnote/index';
import Note from '../notes/note';

import * as h from '../../util/fetch/fetching';

export default class Dashboard extends React.Component {

    state = {
        notes: []
    }

    render() {
        
        const { navigate } = this.props.navigation; 
        return (
            <Container>
                <Text>MY DASHBOARD 22</Text>
                {
                    this.state.notes.map((n) => {
                        return (
                            <Note 
                                title={n.note_title} 
                                text={n.note_text} 
                                userid={n.user_id} 
                                new={false}
                            />
                        )
                    })
                }
                <AddNote />                
            </Container>
        );
    }

    componentDidMount() {
        h.fetching(null, 'GET', `http://192.168.1.3:80/notepad/api/api/get.php?userid=${1}`, (data) => {
            console.log(data);
            this.setState({notes: data})
        });
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