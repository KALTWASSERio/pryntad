import React, { useState } from 'react'
import styled from 'styled-components'
import { split } from '../utils'
import Form from './Form'
import axios from 'axios'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  overflow-y: scroll;
  padding: 12px;
`

const defaultData = {
  title: '',
  brand: '',
  scheduleFrom: '',
  scheduleTo: '',
  format: '',
  ad: '',
  tags: '',
}

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function CreateCampaignPage(props) {
  const [data, setData] = useState(defaultData)
  const [ad, setAd] = useState('')

  function onImageUpload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onAdSave)
      .catch(err => console.error(err))
  }

  function onAdSave(response) {
    setAd(response.data.url)
  }

  function onInputChange(event) {
    console.log(event.target)
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    const tags = split(data.tags)
    props.onSubmit({ ...data, ad, tags })
    setData(defaultData)
  }

  return (
    <PageGrid>
      <Form
        data={data}
        onSubmit={onSubmit}
        onImageUpload={onImageUpload}
        onInputChange={onInputChange}
      />
    </PageGrid>
  )
}
