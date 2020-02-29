import Layout from "../../../components/layout";
import { useRouter } from 'next/router';

export const FirstProject = () => {
    const router = useRouter();
    return(
        <Layout>
            <h1>Project: {router.query.id}</h1>
        </Layout>
    )
}

export default FirstProject;
