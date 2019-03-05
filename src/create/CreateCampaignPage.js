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
  scheduleFrom: '',
  scheduleTo: '',
  tags: '',
}
export default function CreateCampaignPage(props) {
  const [data, setData] = useState(defaultData)

  function onInputChange(event) {
    console.log(event.target.value)

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

  const { title, brand, scheduleFrom, scheduleTo, tags } = data

  return (
    <Grid>
      <Title css="position: absolute; top: 0; width: 100%">
        Kampagne erstellen
      </Title>
      <CampaignContainer data-cy="preview-container">
        {(title || brand || scheduleFrom || scheduleTo || tags) && (
          <Campaign
            title={title || 'Kein Kampagnentitel'}
            brand={brand || 'Keine Brand'}
            scheduleFrom={scheduleFrom || 'No shedule yet'}
            scheduleTo={scheduleTo || 'kein Enddatum'}
            tags={split(tags)}
          />
        )}
      </CampaignContainer>
      <Form data={data} onSubmit={onSubmit} onInputChange={onInputChange} />
    </Grid>
  )
}
