import React, { useCallback, useState } from 'react'
import { Paper } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import ProgressList from './ProgressList'
import ImagesList from './ImagesList'

const AddImages = () => {
    const [files,setFiles] = useState([])
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles)
    },[])

    const { getRootProps , getInputProps , isDragActive} = useDropzone({
        onDrop,
        accept: {'images/*':[]}
    })
  return (
    <>
    <Paper
    sx={{
        cursor:'pointer',
        background:'#fafafa',
        color:'#bdbdbd',
        border:'1px dashed #ccc',
        '&:hover':{border:'2px solid #ccc'}
    }}>
        <div style={{padding:'16px'}}  {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragActive?(
                <p style={{ color:'green'}}>Drop the files here..</p>
            ):(
                <p>Drag 'n' Drop files here, or click to select files</p>
            )}
            <em style={{fontSize:20,color:'red',fontWeight:'bold'}}>(images with *.jpeg,*.png,*.jpg extensions will be accepted)</em>
        </div>
    </Paper>
    <ProgressList {...{ files }} />
      <ImagesList />
    </>
    
  )
}

export default AddImages