import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { Font } from '@react-pdf/renderer';
import React from "react";

// import MyCustomFont from '../fonts/Anton-Regular.ttf';


// import LebronStretch from "../photos/lebron_transparent.png";





const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        // fontFamily: "AntonFamily",
    },
    text: {
        margin: 12,
        fontSize: 10,
        textAlign: "justify",
        flex: 1
        // fontFamily: "AntonFamily",

    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 40,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        // fontFamily: "AntonFamily",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 8,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
        // fontFamily: "AntonFamily",
    },
    horizon: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

const PDFFile = () => {

    const pageColors = ['#f6d186', '#f67280', '#c06c84'];

    const pages = [
        // { text: 'First page content goes here...', image: LebronStretch },
        { text: 'Second page content goes here...', image: 'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcwMzExMzEwNTc0MTAxODM5/lebron-dunk.jpg' },
        { text: 'Third page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
        { text: 'Third page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
        { text: 'Third page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
        { text: 'Third page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
    ]

    return (
        <Document>
            <Page style={{ ...styles.body }}>
                <Text style={styles.header} fixed>Header Here</Text>
                {pages.map((page, index) => {
                    return (

                        <View>

                            {/* <Image style={styles.image} src={page.image} /> */}
                            <View style={styles.horizon}>
                                <Text style={styles.text}>
                                    {page.text}
                                </Text>
                                <Text style={styles.text}>
                                    {page.text}
                                </Text>
                            </View>
                            {/* <Text
                                style={styles.pageNumber}
                                render={({ pageNumber, totalPages }) =>
                                    `${pageNumber} / ${totalPages}`
                                }
                            /> */}
                        </View>

                    )
                })}
            </Page>
        </Document>
    );
};

export default PDFFile;