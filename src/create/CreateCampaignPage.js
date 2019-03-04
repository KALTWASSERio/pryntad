import React, { useState } from 'react'
import styled from 'styled-components'
import Campaign from '../campaigns/Campaign'
import CampaignContainer from '../campaigns/CampaignContainer'
import { split } from '../utils'
import Form from './Form'
import Title from '../common/Title'

const Grid = styled.section`
  display: grid;
  align-content: flex-end;
  padding: 12px;
`
const defaultData = {
  title: '',
  brand: '',
  tags: '',
}
export default function CreateCampaignPage(props) {
  const [data, setData] = useState(defaultData)

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    const tags = split(data.tags)
    props.onSubmit({ ...data, tags })
    setData(defaultData)
  }

  const { title, brand, tags } = data
  return (
    <Grid>
      <Title css="position: absolute; top: 0; width: 100%">Create</Title>
      <CampaignContainer data-cy="preview-container">
        {(title || brand || tags) && (
          <Campaign
            title={title || 'No title yet'}
            brand={brand || 'No content yet'}
            tags={split(tags)}
          />
        )}
      </CampaignContainer>
      <Form data={data} onSubmit={onSubmit} onInputChange={onInputChange} />
    </Grid>
  )
}
