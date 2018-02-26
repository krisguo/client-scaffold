export default {
  deriveFileFromChangeEvent (event) {
    const files = event.target.files || event.dataTransfer.files
    if (!files.length) return
    return files[0]
  },

  async readFileAsBinaryString (file) {
    return new Promise(function (resolve) {
      const reader = new FileReader()

      reader.onload = function (event) {
        resolve(event.target.result)
      }

      reader.readAsBinaryString(file)
    })
  },

  async readFileAsArrayBuffer (file) {
    return new Promise(function (resolve) {
      const reader = new FileReader()

      reader.onload = function (event) {
        resolve(event.target.result)
      }

      reader.readAsArrayBuffer(file)
    })
  },

  async readFileAsText (file) {
    return new Promise(function (resolve) {
      const reader = new FileReader()

      reader.onload = function (event) {
        resolve(event.target.result)
      }

      reader.readAsText(file)
    })
  },

  async readFileAsDataURL (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = (event) => {
        const dataURL = event.target.result
        const byteString = atob(dataURL.split(',')[1])
        const arrayBuffer = new ArrayBuffer(byteString.length)
        const intArray = new Uint8Array(arrayBuffer)
        for (let i = 0; i < byteString.length; i++) {
          intArray[i] = byteString.charCodeAt(i)
        }
        return resolve({ dataURL, intArray })
      }
      reader.onerror = (error) => {
        console.error(error)
        return reject(error)
      }
      reader.readAsDataURL(file)
    })
  },

  async deriveMimeStringFromFile (file) {
    const { dataURL } = await this.readFileAsDataURL(file)
    return this.deriveMIMEStringFromDataURL(dataURL)
  },

  async readBlobAsDataURL (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = (event) => {
        const dataURL = event.target.result
        return resolve({ dataURL })
      }
      reader.onerror = (error) => {
        console.error(error)
        return reject(error)
      }
      reader.readAsDataURL(blob)
    })
  },

  deriveMIMEStringFromDataURL (dataURL) {
    return dataURL.split(',')[0].split(':')[1].split(';')[0]
  },
  arrayBufferToString (buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf))
  },
  stringToArrayBuffer (str) {
    const buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
    const bufView = new Uint16Array(buf)
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i)
    }
    return buf
  }
}
