import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";

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

import * as soporteActions from '../redux/actions/soporte';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DEFAULT_FORM = {
    nombre: '',
    telefono:''
}

function Soporte(){
    const classes = useStyles();
    const storeSoportes = useSelector(State => State.soporte);
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const [formValues, setFormValues] = useState(DEFAULT_FORM);

    const getSoporte = () => {
        dispatch(soporteActions.getSoporte());
    }

    const onAddNew = () => {
        setOpenDialog(true);
    }

    const onCloseModal = () => {
        setOpenDialog(false);
    }

    const onConfirm = () => {
        dispatch(soporteActions.saveSoporte(formValues));
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
        getSoporte();
    }, []);

    const renderModal = () => {
        return (
            <Modal
                open={openDialog}
                onClose={onCloseModal}
                title='Registro de Equipo'
                onConfirm={onConfirm}

            >
                <TextField
                    autoFocus
                    margin="dense"
                    id="nombre"
                    label="Ingresar nombre del soporte"
                    type="text"
                    fullWidth
                    onChange={onChangeInput}
                    value={formValues.nombre}
                ></TextField>
                <br />
                <TextField
                    margin="dense"
                    id="telefono"
                    label="Ingresar telefono del soporte"
                    type="text"
                    fullWidth
                    onChange={onChangeInput}
                    value={formValues.telefono}
                ></TextField>
            </Modal>
        );
    }

    if (storeSoportes.data === null) {
        return (
            <Layout>
                no hay datos
            </Layout>
        )
    }

    return(
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
                            <TableCell>Telefono</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Fecha de Registro</TableCell>
                            <TableCell>Usuario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeSoportes.data.map((row) => (
                            <TableRow key={row.Codigo}>
                                <TableCell component="th" scope="row">
                                    {row.Codigo}
                                </TableCell>
                                <TableCell>{row.Nombre}</TableCell>
                                <TableCell>{row.Telefono}</TableCell>
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

export default Soporte;