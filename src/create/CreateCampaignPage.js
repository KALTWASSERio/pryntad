import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
// import { split } from '../utils'
import Form from './Form'
import uid from 'uid'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  scroll-behavior: auto;
`

const defaultData = {
  title: '',
  brand: '',
  scheduleFrom: '',
  scheduleTo: '',
  format: '',
  placement: '',
  printSpace: '',
  colorSchema: '',
  ad: '',
  location: 'Deutschland',
  ageFrom: '',
  ageTo: '',
  tags: '',
  budget: '',
  bid: '',
  id: uid(),
}

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function CreateCampaignPage(props) {
  const [data, setData] = useState(defaultData)
  const [ad, setAd] = useState('')
  const [tags, setTags] = useState(['a', 'b'])
  const [tagsInput, setTagsInput] = useState('')

  function inputKeyDown(event) {
    const val = event.target.value
    if (
      (event.key === 'Enter' || event.keyCode === 0 || event.keyCode === 32) &&
      val
    ) {
      event.preventDefault()
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return
      }
      setTags([...tags, val])
      setTagsInput('')
    } else if (event.key === 'Backspace' && !val) {
      removeTag(tags.length - 1)
    }
  }

  function removeTag(i) {
    const newTags = [...tags]
    newTags.splice(i, 1)
    setTags(newTags)
  }

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
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function onTagsInputChange(e) {
    setTagsInput(e.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()
    // const tags = split(data.tags)
    data.tags = tags
    data.ad = ad
    props.onSubmit(data)
    setData(defaultData)
  }

  return (
    <PageGrid>
      <Form
        onTagsInputChange={onTagsInputChange}
        tagsInput={tagsInput}
        tagsArray={tags}
        removeTag={removeTag}
        inputKeyDown={inputKeyDown}
        data={data}
        onSubmit={onSubmit}
        onImageUpload={onImageUpload}
        onInputChange={onInputChange}
      />
    </PageGrid>
  )
}
