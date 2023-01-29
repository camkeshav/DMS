import React from "react";
import { Card, List } from 'antd';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {

    const [docs, setDocs] = useState([]);

    const handleVerify = async (hash) => {
        const config = {
            'username': localStorage.getItem('Name'),
        };
        const response = await axios.patch(`http://172.22.24.193/verify/${hash}`, config);
        alert(`${response.msg}`);
    }

    const handleReject = async (hash) => {
        const config = {
            'username': localStorage.getItem('Name'),
        };
        const response = await axios.patch(`http://172.22.24.193/reject/${hash}`, config);
        const data = response.json();
        alert(`${data.msg}`);
    }


    const fetchDocs = async () => {
        const heads = {
            headers: {
                'mode': 'no-cors',
                'Access-Control-Allow_origin': '*',
            }
        }
        try {
            const response = await axios.get(`http://172.22.24.193/alldocs`, heads);
            setDocs(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDocs();
    }, []);


    return (
        <div>
            <Card title="Documents Data">
            </Card>

            <TableContainer component={Paper} border={3}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Document Name</TableCell>
                            {/* <TableCell align='center'>Date of Upload</TableCell> */}
                            <TableCell align='center'>Created By</TableCell>
                            <TableCell align='center'>Verified By</TableCell>
                            <TableCell align='center'>Status</TableCell>
                            <TableCell align='center'></TableCell>
                            <TableCell align='center'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {docs.map((doc) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{doc.name}</TableCell>
                                <TableCell align="center">{doc.created_by}</TableCell>
                                <TableCell align="center">{doc.verified_by}</TableCell>
                                <TableCell align="center">{doc.status}</TableCell>
                                <TableCell align="center">
                                    <Link to={{
                                        pathname: "/frame",
                                        state: {
                                            dname: doc.name,
                                            hash: doc.hash,
                                        },
                                    }} underline="hover"
                                        style={{
                                            marginRight: "1.5rem",
                                            color: "blue",
                                        }}>{`View Doc`}</Link>
                                    {/* <Switch>
                                        <Route path='/frame' exact component={Frame} >View Docs</Route>
                                    </Switch> */}
                                </TableCell>
                                <TableCell align="center"><Button size="medium" variant="contained" color="success" onClick={() => handleVerify(doc.hash)}>
                                    Success
                                </Button>
                                    <Button size="medium" variant="outlined" color="error" onClick={() => handleReject(doc.hash)}>
                                        Error
                                    </Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
};
export default Admin;

