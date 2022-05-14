import axios from "axios"

export const operations = {
  
  async getOperationsList() {
    try {
      const data = await axios.get(`/operations`)
      return data
    } catch (error) {
      throw error
    }
  },
  
  async setOperationItem(operationData) {
    try {
      const data = await axios.post(`/operations`, operationData)
      return data
    } catch (error) {
      throw error
    }
  },
  
  async getOperationItem(operationId) {
    try {
      const data = await axios.get(`/operations/${operationId}`)
      return data
    } catch (error) {
      throw error
    }
  },
  
  async updateOperationItem(operationId, operationData) {
    try {
      const data = await axios.get(`/operations/${operationId}`, operationData)
      return data
    } catch (error) {
      throw error
    }
  },
  
}