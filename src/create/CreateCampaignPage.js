import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { split } from '../utils'
import Form from './Form'
import uid from 'uid'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin: 12px 12px 0 12px;
  scroll-snap-type: y mandatory;
`

const defaultData = {
  title: '',
  brand: '',
  scheduleFrom: '',
  scheduleTo: '',
  format: '',
  placement: '',
  ad: '',
  tags: '',
  id: uid(),
}

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function CreateCampaignPage(props) {
  const [data, setData] = useState(defaultData)
  const [ad, setAd] = useState('')

  function onImageUpload(event) {
    alert('Deine Datei wurde hochgeladen')
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
