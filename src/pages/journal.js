// import React, { useState } from "react"
// import { createClient } from "contentful-management"

// const contentfulAccessToken = process.env.GATSBY_CONTENTFUL_DELIVERY_TOKEN
// const contentfulSpaceId = process.env.GATSBY_CONTENTFUL_SPACE_ID

// const client = createClient({
//   space: contentfulSpaceId,
//   accessToken: contentfulAccessToken,
// })

// const saveTableDataToContentful = async updatedData => {
//   try {
//     // Fetch the entry from Contentful
//     const space = await client.getSpace(space)
//     const environment = await space.getEnvironment("YOUR_ENVIRONMENT_ID")
//     const entry = await environment.getEntry("YOUR_ENTRY_ID")

//     // Update the fields with your new data
//     entry.fields.yourFieldName["en-US"] = updatedData

//     // Save the updated entry
//     await entry.update()

//     // If you need to publish the entry
//     await entry.publish()
//   } catch (error) {
//     console.error("Error saving data to Contentful:", error)
//   }
// }

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Button,
// } from "@mui/material"

// const EditableRow = ({ row, onSave }) => {
//   const [editData, setEditData] = useState(row)

//   const handleChange = (e, field) => {
//     setEditData({ ...editData, [field]: e.target.value })
//   }

//   const handleSave = () => {
//     onSave(editData)
//   }

//   return (
//     <TableRow>
//       <TableCell>
//         <TextField
//           value={editData.name}
//           onChange={e => handleChange(e, "name")}
//         />
//       </TableCell>
//       <TableCell>
//         <TextField
//           value={editData.value}
//           onChange={e => handleChange(e, "value")}
//         />
//       </TableCell>
//       <TableCell>
//         <Button onClick={handleSave}>Save</Button>
//       </TableCell>
//     </TableRow>
//   )
// }

// const ReadOnlyRow = ({ row, onEdit }) => (
//   <TableRow>
//     <TableCell>{row.name}</TableCell>
//     <TableCell>{row.value}</TableCell>
//     <TableCell>
//       <Button onClick={() => onEdit(row.id)}>Edit</Button>
//     </TableCell>
//   </TableRow>
// )

// const EditableTable = () => {
//   const initialData = [
//     { id: 1, name: "Item 1", value: "Value 1" },
//     { id: 2, name: "Item 2", value: "Value 2" },
//   ]

//   const [rows, setRows] = useState(initialData)
//   const [editingId, setEditingId] = useState(null)

//   const handleEdit = id => {
//     setEditingId(id)
//   }

//   const handleSave = data => {
//     setRows(rows.map(row => (row.id === data.id ? data : row)))
//     setEditingId(null)
//   }

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Value</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row =>
//             row.id === editingId ? (
//               <EditableRow key={row.id} row={row} onSave={handleSave} />
//             ) : (
//               <ReadOnlyRow key={row.id} row={row} onEdit={handleEdit} />
//             )
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// }

// export default EditableTable
