
import React, { useState, ChangeEvent, useEffect } from 'react';
import { Card, List } from 'antd';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Frame from '../Frame/Frame';
import { Link, Switch, Route, Router } from 'react-router-dom';

function User() {
    // const [selectedFiles, setSelectedFiles] = useState([]);

    // const handleCheckboxChange = (file) => {
    //     if (selectedFiles.includes(file)) {
    //         setSelectedFiles(selectedFiles.filter((f) => f !== file));
    //     } else {
    //         setSelectedFiles([...selectedFiles, file]);
    //     }
    // };
    const [file, setFile] = useState();
    const [docs, setDocs] = useState([]);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            console.log(file);
        }
    };

    function handleSubmit(event) {
        event.preventDefault()
        const url = 'https://api-generator.retool.com/d8n2FQ/data';
        const formData = new FormData();
        formData.append('fullName', file);
        formData.append('B', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
            console.log(url);
        });

    }

    const fetchDocsforID = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setDocs(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDocsforID();
    }, []);

    return (

        <div className='boxx'>
            <form onSubmit={handleSubmit}>
                <Button variant="contained" component="label" sx={{ marginLeft: 60 }}>
                    New File? Upload Here
                    <input hidden accept="image/*" multiple type="file" onChange={handleFileChange} />
                </Button>
                <br></br>
                <input type="submit" />
            </form>
            <br></br>
            <Card className='cards' title="Uploaded Files">
            </Card>
            <TableContainer component={Paper} border={3}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Document Name</TableCell>
                            {/* <TableCell align='center'>Date of Upload</TableCell> */}
                            <TableCell align='center'>Current Status</TableCell>
                            <TableCell align='center'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {docs.map((doc) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{doc.docname}</TableCell>
                                <TableCell align="center">{doc.username}</TableCell>
                                <TableCell align="center">
                                    <Link to={{
                                        pathname: "/frame",
                                        state: {
                                            dname: doc.username,
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default User;
