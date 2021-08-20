import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/layout";
import * as sedeActions from '../redux/actions/sede';

function Sede() {
    const dispatch = useDispatch();
    const getSede = () => {
        dispatch(sedeActions.getSede());
    }
    useEffect(() => {
        getSede();
    }, []);
    return (
        <Layout>
            esta es la pagina de sede
        </Layout>
    );
}

export default Sede;