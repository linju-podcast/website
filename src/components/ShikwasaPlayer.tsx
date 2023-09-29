import { type FunctionComponent } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { Player } from '../scripts/load-shikwasa'
import Logo from '../assets/logo.png'

type ShikwasaPlayerProps = {
  // Episode: { sourceUrl: string; title: string; chapters?: string[] }
  // playState? --- not needed if component doesn't reload upon URL change
}

const ShikwasaPlayer: FunctionComponent<ShikwasaPlayerProps> = ({}) => {
  useEffect(() => {
    const player = new Player({
      container: () => document.querySelector('#shikwasa-player-container'),
      themeColor: '#C084FC',
      audio: {
        title: 'EP1 不完备实测转码工具包 ｜ 最基础的检查点',
        artist: 'Papaya & S1ngS1ng',
        cover: Logo.src,
        src: 'https://podcasts.captivate.fm/media/a7ab2c4e-531a-4bad-aa45-09a6c88d3160/Wangshanglinju-EP-1.mp3'
      }
    })

    const path = window.location.pathname
    console.log(path)
  }, [])

  return <div id='shikwasa-player-container' class='m-6'></div>
}

export default ShikwasaPlayer
