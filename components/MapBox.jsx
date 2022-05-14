import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
const style = {
  wrapper: '  h-[60%] my-4 overflow-hidden w-[90%] rounded-2xl',
}

const MapBox = () => {
  const location = [[79.1278, 12.9215]]
  const center = getCenter(location)
  console.log({ center })

  //! view state
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  })
  return (
    <div className={style.wrapper}>
      <ReactMapGL
        mapStyle="mapbox://styles/magesh007/cks0ibo5b3pjy17pex5lf5cyz"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></ReactMapGL>
    </div>
  )
}

export default MapBox
