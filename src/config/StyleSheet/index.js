import { StyleSheet } from "@react-pdf/renderer";

const globalStyles = StyleSheet.create({
    text: {
        fontSize: 10,
        fontFamily: 'Roboto'
    },
    title: {
        fontSize: 15,
        fontFamily: 'Roboto'
    }
    , subTitle: {
        fontSize: 12,
        fontFamily: 'Roboto'
    },
    horizon: {
        display: 'flex',
        flexDirection: 'row',
    },
    wrapperPDF: {
        padding: '0 16 0 16',
        height: '100%',
        width: '100%'
    }

})

export default globalStyles;

