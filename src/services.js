import axios from 'axios'
const ip = process.env.REACT_APP_BACKEND_IP
const campaignsPath = `http://${ip}:4000/campaigns`

export function getAllCampaigns() {
  return axios.get(`${campaignsPath}/getAll`)
}

export function getSingleCampaign(id) {
  return axios.get(`${campaignsPath}/getSingle/${id}`)
}

export function postNewCampaign(campaign) {
  return axios.post(campaignsPath, campaign)
}

/* export function getCampaignsFromStorage() {
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
 */
