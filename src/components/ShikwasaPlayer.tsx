import { type FunctionComponent } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { Player } from '../scripts/load-shikwasa'
import Logo from '../assets/logo.png'

type ShikwasaPlayerProps = {
  // Episode: { sourceUrl: string; title: string; chapters?: string[] }
  // playState? --- not needed if component doesn't reload upon URL change
}

const ShikwasaPlayer: FunctionComponent<ShikwasaPlayerProps> = ({}) => {
  const podcast = useRef(null)

  useEffect(() => {
    if (sessionStorage.getItem('playerId') === null) {
      globalThis.player = new Player({
        container: () => podcast.current,
        themeColor: '#C084FC',
        audio: {
          title: 'EP 14 人人都能用英语 ｜ 两个故事一个方法',
          artist: 'Papaya & S1ngS1ng',
          cover: Logo.src,
          src: 'https://media.xyzcdn.net/ljzlWgaTSaYF_DvYW-_w_ItmjTXk.m4a'
        }
      })
      sessionStorage.setItem('playerId', globalThis.player.id)
    } else {
      globalThis.player.ui.mount(podcast.current, true)
    }
  }, [])

  return <div ref={podcast} class='m-6'></div>
}

export default ShikwasaPlayer
