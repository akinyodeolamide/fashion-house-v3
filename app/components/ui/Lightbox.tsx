'use client'

import { useState, useCallback } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Video from 'yet-another-react-lightbox/plugins/video'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

interface LightboxProps {
  images: string[]
  videos?: string[]
  isOpen: boolean
  onClose: () => void
  startIndex?: number
}

export default function ArchiveLightbox({ images, videos = [], isOpen, onClose, startIndex = 0 }: LightboxProps) {
  const slides = [
    ...images.map(src => ({ src, type: 'image' as const })),
    ...videos.map(src => ({ 
      src, 
      type: 'video' as const,
      sources: [{ src, type: 'video/mp4' }]
    })),
  ]

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      index={startIndex}
      plugins={[Zoom, Video, Thumbnails]}
      animation={{ fade: 300 }}
      carousel={{ finite: slides.length <= 1 }}
      render={{ 
        buttonPrev: slides.length <= 1 ? () => null : undefined,
        buttonNext: slides.length <= 1 ? () => null : undefined,
      }}
    />
  )
}
