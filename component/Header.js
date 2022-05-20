import { StyleSheet } from "react-native"
import { Header as HeaderRNE } from "@rneui/themed"
import { StatusBar } from "expo-status-bar"

const Header = () => {
    return (
        <>
            <StatusBar style="auto" />
            <HeaderRNE
                leftComponent={{
                    icon: 'menu',
                    color: '#fff',
                }}

                centerComponent={{ text: 'Apprenants de la Manu', style: styles.heading }}
            />
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});