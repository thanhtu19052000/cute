import { StyleSheet } from "@react-pdf/renderer"

const globalStyle = StyleSheet.create({
    horizon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textCenterWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    // text: {
    //     alignItems: 'center',
    //     alignContent: 'center'
    // }

})

export default globalStyle;