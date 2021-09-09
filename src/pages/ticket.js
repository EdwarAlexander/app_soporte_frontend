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

import * as ticketActions from '../redux/actions/ticket';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function Ticket() {
    const classes = useStyles();
    const storeTickets = useSelector(State => State.tickets);
    const dispatch = useDispatch();

    const getTicket = () => {
        dispatch(ticketActions.getTicket());
    }

    useEffect(() => {

        getTicket();
    }, []);

    console.log(storeTickets.data);
    return (
        <Layout>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Codigo</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Ip_Equipo</TableCell>
                            <TableCell>Titulo</TableCell>
                            <TableCell>Nivel</TableCell>
                            <TableCell>Soporte</TableCell>
                            <TableCell>Equipo</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Hora Inicio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeTickets.data.map((row) => (
                            <TableRow key={row.Codigo}>
                                <TableCell component="th" scope="row">
                                    {row.Codigo}
                                </TableCell>
                                <TableCell>{row.Fecha}</TableCell>
                                <TableCell>{row.Ip_Equipo}</TableCell>
                                <TableCell>{row.Titulo}</TableCell>
                                <TableCell>{row.Nivel}</TableCell>
                                <TableCell>{row.Soporte}</TableCell>
                                <TableCell>{row.Equipo}</TableCell>
                                <TableCell>{row.Estado}</TableCell>
                                <TableCell>{row.Hora_inicio}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}

export default Ticket;