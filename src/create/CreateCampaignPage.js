import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import styled from 'styled-components'
import { postNewCampaign } from '../services'
import publisher from '../data/publisher.json'
import Form from './Form'
import ReachEstimator from './ReachEstimator'

const PageGrid = styled.div`
  overflow-y: scroll;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  scroll-behavior: auto;
  padding: 14px 14px 0 14px;
  z-index: -1;

  ::-webkit-scrollbar {
    display: none;
  }
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
  const [step, setStep] = useState(0)

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

  useEffect(() => playlistUpdate(), [data, tags])

  function playlistUpdate() {
    setPlaylist(
      publisher
        .filter(publisherDetail =>
          tags.length
            ? tags.some(tag =>
                publisherDetail.interests
                  .map(interest => interest.toLowerCase())
                  .includes(tag.toLowerCase())
              )
            : true
        )
        .filter(publisherDetail =>
          data.format ? publisherDetail.ad_format.includes(data.format) : true
        )

        .filter(publisherDetail =>
          data.gender
            ? publisherDetail.demography.filter(
                item => item.gender === data.gender
              )
            : true
        )

        .filter(publisherDetail => {
          if (data.ageFrom) {
            const ageFrom = publisherDetail.demography.find(
              item => item.ageFrom
            )
            return ageFrom && Number(ageFrom.ageFrom) >= Number(data.ageFrom)
          }
          return true
        })

        .filter(publisherDetail => {
          if (data.ageTo) {
            const ageTo = publisherDetail.demography.find(item => item.ageTo)
            return ageTo && Number(ageTo.ageTo) <= Number(data.ageTo)
          }
          return true
        })
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

  function ReachEstimatorConditional() {
    if (step === 1 || step === 2 || step === 3) {
      return <ReachEstimator playlist={playlist} step={step} />
    } else {
      return null
    }
  }

  return (
    <React.Fragment>
      <PageGrid>
        <Form
          step={step}
          setStep={setStep}
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
          ad={ad}
          props={props}
        />
      </PageGrid>
      <ReachEstimatorConditional />
    </React.Fragment>
  )
}

export default withRouter(CreateCampaignPage)
