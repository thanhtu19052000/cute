import { STYLE_TEXT } from "../../config/constant";
import { StyleSheet } from "@react-pdf/renderer";

// import { StyleSheet } from "@react-pdf/renderer"

function handleStyleSheet(arrayStyle) {
    const stylesExport = {};
    if (!arrayStyle) {
        return []
    }
    if (arrayStyle.length) {
        arrayStyle.forEach(element => {
            switch (element) {
                case STYLE_TEXT.BOLD:
                    stylesExport['fontWeight'] = 'bold';
                    break;
                case STYLE_TEXT.ITALIC:
                    stylesExport['fontStyle'] = 'italic';
                    break;
                case STYLE_TEXT.ITALIC:
                    stylesExport['textDecoration'] = 'underline';
                    break;
                default:
                    break;
            }
        });
    }
    return stylesExport
}
export function handleStyleTableSheet(arrayStyle) {
    const stylesExport = {
        display: 'flex',
        flexDirection: 'row'
    };
    if (!arrayStyle) {
        return []
    }
    if (arrayStyle.length) {
        arrayStyle.forEach(element => {
            if (element.search('w-') != -1) {
                stylesExport['width'] = `${element.replace('w-', '')}`;
            }
            if (element.search('h-') != -1) {
                stylesExport['height'] = `${element.replace('h-', '')}`;
            }
            if (element.search('mh-') != -1) {
                stylesExport['minHeight'] = `${element.replace('mh-', '')}`;
            }
            switch (element) {
                case 'x-center':
                    stylesExport['justifyContent'] = 'center';
                    break;
                case 'left':
                    stylesExport['justifyContent'] = 'left';
                    break;
                case 'right':
                    stylesExport['justifyContent'] = 'right';
                    break;
                case 'y-center':
                    stylesExport['justifyContent'] = 'center';
                    break;
                case 'start':
                    stylesExport['justifyContent'] = 'flex-start';
                    break;
                case 'end':
                    stylesExport['justifyContent'] = 'flex-end';
                    break;
                default:
                    break;
            }
        });
    }
    return stylesExport
}
const styles = StyleSheet.create({
    a: {
        alignItems: 'flex-st'
    }
})

export default handleStyleSheet