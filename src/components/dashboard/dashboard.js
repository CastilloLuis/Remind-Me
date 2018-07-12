import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Text} from 'native-base';

import AddNote from '../addnote/index';
import SwipeItem from '../swipeitem/item';
// import Note from '../notes/note';

import * as h from '../../util/fetch/fetching';

export default class Dashboard extends React.Component {

    state = {
        notes: []
    }

    render() {
        
        const { navigate } = this.props.navigation; 
        return (
            <ScrollView>
                <Container>
                    <Text>MY DASHBOARD</Text>
                    {this.state.notes.map((n) => {
                            return (
                                <SwipeItem 
                                    title={n.note_title} 
                                    noteid={n.note_id} 
                                    deleteNote={(noteid) => this.deleteNote(noteid)}
                                />                             
                            )
                        }).reverse()
                    }       
                    <AddNote />        
                </Container>
            </ScrollView>
        );
    }

    componentDidMount() {
        h.fetching(null, 'GET', `http://192.168.1.4:80/notepad/api/api/get.php?userid=${1}`, (data) => {
            console.log(data);
            this.setState({notes: data})
        });
    }

    deleteNote = (noteid) => {
        console.log('noteid'+noteid)
        h.fetching(null, 'GET', `http://192.168.1.4:80/notepad/api/api/delete.php?note_id=${noteid}`, (data) => {
            let mydata = data;
            if(mydata.status === 200) {
                const newstate = this.state.notes.filter(n => {
                    return n.note_id !== noteid
                })
                console.warn(this.state.notes);
                console.log(newstate)
                this.setState({notes: newstate});
            }
        })
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