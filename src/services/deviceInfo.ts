import Device from 'react-native-device-info'

export default {
  getManufacturer: () => {
    return Device.getManufacturer()
  },
  getDeviceName: () => {
    return `${Device.getSystemName()} ${Device.getDeviceId()} ${Device.getReadableVersion()}`
  }
}