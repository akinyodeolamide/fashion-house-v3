'use client'

import { useRef, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
}

export default function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-sm"
        onEnded={() => setIsPlaying(false)}
        playsInline
      />
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
      >
        <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-full shadow-lg group-hover:scale-110 transition-transform">
          {isPlaying ? (
            <FaPause className="text-primary text-xl" />
          ) : (
            <FaPlay className="text-primary text-xl ml-1" />
          )}
        </div>
      </button>
    </div>
  )
}
