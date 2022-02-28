import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

// {props.oeuvre}

const CardItem = ({ oeuvre }) => {
    return (
        <view>
            <Card>
                <Text style={{ marginBottom: 10 }}>
                    {oeuvre.auteur}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {oeuvre.title}
                </Text>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri: oeuvre.imageUrl
                    }}
                />
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    {oeuvre.auteur}
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    {oeuvre.annee}
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
        </view>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default CardItem;