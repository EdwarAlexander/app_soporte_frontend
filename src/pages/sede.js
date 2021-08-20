import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";
import * as sedeActions from '../redux/actions/sede';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Sede() {
    const classes = useStyles();
    const storeSedes = useSelector(State => State.sede);
    const dispatch = useDispatch();
    const getSede = () => {
        dispatch(sedeActions.getSede());
    }
    const saveSede = () =>{
        dispatch(sedeActions.saveSede());
    }
    useEffect(() => {
        getSede();

    }, []);
    return (
        <Layout>
            <Button variant="contained" color="primary" onClick={saveSede}>
                Agregar
            </Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Codigo</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="right">Fecha de Registro</TableCell>
                            <TableCell align="right">Usuario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {storeSedes.data.map((row) => (
                            <TableRow key={row.Codigo}>
                                <TableCell component="th" scope="row">
                                    {row.Codigo}
                                </TableCell>
                                <TableCell align="right">{row.Nombre}</TableCell>
                                <TableCell align="right">{row.Estado}</TableCell>
                                <TableCell align="right">{row.Fecha_Registro}</TableCell>
                                <TableCell align="right">{row.Usuario}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}

export default Sede;