import { useEffect, useState } from "react";
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
import { Button, TextField } from "@material-ui/core";
import Modal from "../components/modal";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DEFAULT_FORM = {
    sede: ''
}

function Sede() {
    const classes = useStyles();
    const storeSedes = useSelector(State => State.sede);
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const [formValues, setFormValues] = useState(DEFAULT_FORM);

    const getSede = () => {
        dispatch(sedeActions.getSede());
    }

    const onAddNew = () => {
        setOpenDialog(true);
    }

    const onCloseModal = () => {
        setOpenDialog(false);
    }

    const onConfirm = () => {
        dispatch(sedeActions.saveSede(formValues));
        setOpenDialog(false);
    }

    const onChangeInput = (e) => {
        const value = e.target.value;
        const name = e.target.id;

        setFormValues((state) => {
            return {
                ...state,
                [name]: value
            }
        });
    }

    useEffect(() => {
        getSede();

    }, []);

    const renderModal = () => {
        return (
            <Modal
                open={openDialog}
                onClose={onCloseModal}
                title='Registro de Sedes'
                onConfirm={onConfirm}

            >
                <TextField
                    autoFocus
                    margin="dense"
                    id="sede"
                    label="Ingresar nombre de la Sede"
                    type="text"
                    fullWidth
                    onChange={onChangeInput}
                    value={formValues.sede}
                ></TextField>
            </Modal>
        );
    }

    if (storeSedes.data === null) {
        return (
            <Layout>
                no hay datos
            </Layout>
        )
    }
    return (
        <Layout>
            <Button variant="contained" color="primary" onClick={onAddNew}>
                Agregar
            </Button>
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Codigo</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Fecha de Registro</TableCell>
                            <TableCell>Usuario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeSedes.data.map((row) => (
                            <TableRow key={row.Codigo}>
                                <TableCell component="th" scope="row">
                                    {row.Codigo}
                                </TableCell>
                                <TableCell>{row.Nombre}</TableCell>
                                <TableCell>{row.Estado}</TableCell>
                                <TableCell>{row.Fecha_Registro}</TableCell>
                                <TableCell>{row.Usuario}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {renderModal()}
        </Layout>
    );
}

export default Sede;