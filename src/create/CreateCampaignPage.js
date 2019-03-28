import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Form from './Form'
import publisher from '../data/publisher.json'
import { withRouter } from 'react-router'
import { postNewCampaign } from '../services'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  scroll-behavior: auto;
  padding: 14px 14px 0 14px;
  ::-webkit-scrollbar {
    display: none;
  }
  background: white;
  z-index: -1;
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
  gender: '',
  ageFrom: '',
  ageTo: '',
  playlist: '',
  tags: '',
  budget: '',
  bid: '',
  id: '',
}

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

function CreateCampaignPage(props) {
  const [data, setData] = useState(defaultData)
  const [ad, setAd] = useState('')
  const [tags, setTags] = useState([])
  const [tagsInput, setTagsInput] = useState('')
  const [playlist, setPlaylist] = useState([])

  function createCampaign(data) {
    postNewCampaign(data)
  }

  function onTagsInputChange(event) {
    setTagsInput(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()
    data.tags = tags
    data.ad = ad
    data.playlist = playlist
    setData(defaultData)
    setPlaylist([])
    createCampaign(data)
    props.history.push('/confirmation')
  }

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
    }
  }

  function removeTag(i) {
    const newTags = [...tags]
    newTags.splice(i, 1)
    setTags(newTags)
  }

  function removePublisher(i) {
    const newPublisher = [...playlist]
    newPublisher.splice(i, 1)
    setPlaylist(newPublisher)
  }

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function playlistUpdate(event) {
    setPlaylist(
      publisher
        .filter(publisherDetail =>
          tags.some(tag =>
            publisherDetail.interests
              .map(interest => interest.toLowerCase())
              .includes(tag.toLowerCase())
          )
        )
        .filter(publisherDetail =>
          publisherDetail.ad_format.includes(data.format)
        )

        .filter(publisherDetail =>
          publisherDetail.demography.filter(item => item.gender === data.gender)
        )
      /*  .filter(publisherDetail =>
            publisherDetail.demography.filter(
              item => Number(item.ageFrom) >= Number(data.ageFrom)
            )
          )
          
          .filter(publisherDetail =>
            publisherDetail.demography.filter(
              item => Number(item.ageTo) <= Number(data.ageTo)
            )
          ) */
    )
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

  return (
    <PageGrid>
      <Form
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        inputKeyDown={inputKeyDown}
        removeTag={removeTag}
        removePublisher={removePublisher}
        onTagsInputChange={onTagsInputChange}
        tagsInput={tagsInput}
        tagsArray={tags}
        data={data}
        onImageUpload={onImageUpload}
        playlistArray={playlist}
        playlistUpdate={playlistUpdate}
        ad={ad}
        props={props}
      />
    </PageGrid>
  )
}

export default withRouter(CreateCampaignPage)
