import { useState } from 'react'
import MemeCard from './MemeCard'
import MemeModal from './MemeModal'
import type { Meme } from '../types'

type MemeGalleryProps = {
  memes: Meme[]
}

function MemeGallery({ memes }: MemeGalleryProps) {
  const [selected, setSelected] = useState<Meme | null>(null)

  return (
    <>
      <section aria-label="Generated memes" className="gallery">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} onOpen={setSelected} />
        ))}
      </section>
      {selected && <MemeModal meme={selected} onClose={() => setSelected(null)} />}
    </>
  )
}

export default MemeGallery