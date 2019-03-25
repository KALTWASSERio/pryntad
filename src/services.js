import axios from 'axios'
const ip = process.env.REACT_APP_BACKEND_IP
const campaignsPath = `http://172.16.100.74:4000/campaigns`

export function getAllCampaigns() {
  return axios.get(campaignsPath)
}

export function postNewCampaign(campaign) {
  return axios.post(campaignsPath, campaign)
}

export function getCampaignsFromStorage() {
  return getFromStorage('campaigns') || []
}

export function saveCampaignsToStorage(campaigns) {
  saveToStorage('campaigns', campaigns)
}

export function saveToStorage(name, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}

export function getFromStorage(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    console.error(error.message)
  }
}
