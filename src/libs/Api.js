import axios from 'axios'

export const api = axios.create({
  baseURL: "https://ordenamento-api.herokuapp.com/",
})
