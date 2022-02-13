
import 'antd/dist/antd.css'
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import Render from '../components/render';
import { useRouter } from 'next/router';
import { getPageData } from '../api/mock';
import { useContext } from 'react';
import AppContext from '../components/context';

const PageRender = ({ data }: { data: any }) => {
    const { query } = useRouter()
    const ctx = useContext(AppContext)
    debugger
    return <Render data={data} />
}
export async function getServerSideProps(context: any) {
    const { pageKey } = context.params;
    debugger
    const data = await getPageData()

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default PageRender
