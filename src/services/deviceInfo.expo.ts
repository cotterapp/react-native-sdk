import * as Device from 'expo-device'

export default {
  getManufacturer: () => {
    return Device.manufacturer
  },
  getDeviceName: () => {
    return `${Device.osName} ${Device.modelId || Device.designName} ${Device.osVersion}`
  }
}