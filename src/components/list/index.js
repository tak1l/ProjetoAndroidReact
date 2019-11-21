import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'

import styles from './Styles'
import stylesNavbar from '../navbar/Styles'

export default List = (props) => {

    deleteI = async id => {
        console.log(id)
        props.delete(id)
    }
    
    return (
        <View>
             <FlatList 
                data={props.payments}
                keyExtractor={payment => payment._id}
                renderItem={({ item }) => (
                    <View style={[styles.card, stylesNavbar.shadow]}>
                        <View style={[stylesNavbar.navbar, {marginTop: 0, paddingStart: 10}]}>
                            <Text style={[stylesNavbar.nickname, {fontSize: 16, fontWeight: 'bold'}]}> {item.description} </Text>
                            <TouchableOpacity style={{position: 'absolute', marginTop: 12, marginLeft: 288}} onPress={() => deleteI(item._id)}> 
                                <Image source={require('../../../assets/icons/res/drawable-xhdpi/round_delete_white_18.png')}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.nomenclatura}> Método do Pagamento: <Text style={styles.content}>{item.payment_type.description} </Text></Text>
                        <Text style={styles.nomenclatura}> Tipo de Despesa:   <Text style={styles.content}>{item.expense_type.description} </Text></Text>
                        <Text style={styles.nomenclatura}> Data do Pagamento: <Text style={styles.content}>{item.dt_payment} </Text></Text>
                        <Text style={styles.nomenclatura}> Data de Vencimento: <Text style={styles.content}>{item.dt_expire} </Text></Text>
                        <Text style={styles.nomenclatura}> Preço da Multa: <Text style={styles.content}>{item.fine_amount.$numberDecimal} </Text></Text>
                        <Text style={styles.nomenclatura}> Preço do Juros: <Text style={styles.content}>{item.interest_amount.$numberDecimal} </Text></Text>
                        <Text style={styles.nomenclatura}> Preço Pago: <Text style={styles.content}>{item.value.$numberDecimal} </Text></Text>
                    </View>
                )}
            />
        </View>
    )
}

