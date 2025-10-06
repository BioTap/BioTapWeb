"use client"
import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number // in milliseconds
  deletingSpeed?: number // in milliseconds
  pauseTime?: number // in milliseconds
}

const TypewriterText = ({ 
  texts, 
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseTime = 2000
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    // If we've completed all cycles, stop the animation
    if (isFinished) {
      return
    }

    const currentText = texts[currentTextIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          // Finished typing, start pause
          setIsPaused(true)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          // Finished deleting, check if we should continue or stop
          const nextIndex = currentTextIndex + 1
          
          if (nextIndex >= texts.length) {
            // We've completed all texts, stop and show the last text
            setIsFinished(true)
            setDisplayText(texts[currentTextIndex])
          } else {
            // Move to next text
            setIsDeleting(false)
            setCurrentTextIndex(nextIndex)
          }
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime, isFinished])

  return (
    <h1 className="hero-title">
      {displayText}
      {!isFinished && <span className="cursor">|</span>}
    </h1>
  )
}

export default TypewriterText
