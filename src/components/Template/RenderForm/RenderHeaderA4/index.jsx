import React from 'react'
import { View } from '@react-pdf/renderer'
import svgLogoBg from '../../../asset/logo/ocb-text-logo-bg.svg'
import svgLogoFr from '../../../asset/logo/ocb-coin-logo.svg'

function HeaderA4() {
    return (
        <View>
            <View>
                <svgLogoFr />
                <svgLogoBg />
            </View>
            <View>
                <Text>Content here</Text>
            </View>
        </View>
    )
}

export default HeaderA4

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});
