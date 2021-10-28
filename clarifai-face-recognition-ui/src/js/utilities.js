export const particlesOptions = () => {
  return {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
}

export const app = new Clarifai.App({
  apiKey: '5e4afbe01c8b45d18462909022b98ebf'
})

export const calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  const image = document.getElementById('input-image')
  const width = Number(image.width)
  const height = Number(image.height)
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}