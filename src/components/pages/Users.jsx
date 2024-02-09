import React from 'react'
import { Box } from '@mui/material'
import PersonList from '../PersonList'
function Users() {
  return (
    <Box bgcolor={'background.default'} color={'text.primary'}>
        <h1>Users Page</h1>
        <PersonList />
    </Box>
  )
}

export default Users
