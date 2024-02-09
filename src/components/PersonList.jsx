import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';

const baseURL = "https://dummyjson.com/users"

const columns = [
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 130,
        renderCell: (params) => (
          <Avatar alt={params.row.firstName} src={params.row.image} />
        ),
      },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    // add more columns as needed
  ];
  
export default function PersonList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((resData) => {
                setUsers(resData.users);
            });
    }, []);

    return (
        <Box sx={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
    )
}