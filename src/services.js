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
