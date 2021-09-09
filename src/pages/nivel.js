import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from '../components/layout';

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

import * as nivelActions from '../redux/actions/nivel';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DEFAULT_FORM = {
    nivel: ''
}

function Nivel() {
    const classes = useStyles();
    const storeNiveles = useSelector(State => State.nivel);
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const [formValues, setFormValues] = useState(DEFAULT_FORM);

    const getNivel = () => {
        dispatch(nivelActions.getNivel());
    }

    const onAddNew = () => {
        setOpenDialog(true);
    }

    const onCloseModal = () => {
        setOpenDialog(false);
    }

    const onConfirm = () => {
        dispatch(nivelActions.saveNivel(formValues));
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
        getNivel();

    }, []);

    const renderModal = () => {
        return (
            <Modal
                open={openDialog}
                onClose={onCloseModal}
                title='Registro de Niveles'
                onConfirm={onConfirm}

            >
                <TextField
                    autoFocus
                    margin="dense"
                    id="nivel"
                    label="Ingresar nombre del Nivel del ticket"
                    type="text"
                    fullWidth
                    onChange={onChangeInput}
                    value={formValues.nivel}
                ></TextField>
            </Modal>
        );
    }

    if (storeNiveles.data === null) {
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
                        {storeNiveles.data.map((row) => (
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

export default Nivel;