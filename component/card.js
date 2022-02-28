import * as React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

// {props.oeuvre}

export default class cardList extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Card>
                        <Card.Title>{musiques.title}</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri: musiques.imageUrl
                            }}
                        />
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            {musiques.auteur}
                        </Text>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            {musiques.annee}
                        </Text>
                        <Button icon={
                            <Icon name="code"
                                color="#ffffff"
                                iconStyle={{ marginRight: 10 }} />
                        }
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="Editer"
                        />
                    </Card>
                </View>
            </ScrollView>
        )
    }
}