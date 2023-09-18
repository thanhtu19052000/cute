import QUY_TRINH from "./quyTrinh"

export const URL_BASE = 'http://localhost:3000'

const PAGE_URL = {
    LOGIN: "/login",
    SEARCH: "/search",
    PORTAL: "/portal",
    CREATE: {
        CURRENT: "/create",
        ...QUY_TRINH
    }

}
export default PAGE_URL;



export const API_MASTER = {
    GROUP_DOC: 'api/master/1'
}

