import { useEffect } from 'react'
import type { Meme } from '../types'

type MemeModalProps = {
  meme: Meme
  onClose: () => void
}

function MemeModal({ meme, onClose }: MemeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Meme preview" onClick={onClose}>
      <div className="modal__card" onClick={(e) => e.stopPropagation()}>
        <div className="modal__scroll">
          <img className="modal__img" src={meme.imageUrl} alt={meme.caption} />
          <p className="modal__caption">{meme.caption}</p>
          <a
            className="btn btn--primary modal__open"
            href={meme.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open image in new tab
          </a>
        </div>
        <button
          type="button"
          className="modal__close"
          aria-label="Close preview"
          autoFocus
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  )
}

export default MemeModal