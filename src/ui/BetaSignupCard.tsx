"use client"
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Confetti from 'react-confetti'

const BetaSignupCard = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [betaUsers, setBetaUsers] = useState(2500)
  const [isAnimating, setIsAnimating] = useState(false)

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 156,
    hours: 18,
    minutes: 25,
    seconds: 28
  })

  // Note: Beta users now only increase when someone actually submits the form
  // No random simulation - only real signups increase the count

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    try {
      // Send email to contact@bio-tap.com
      const response = await fetch('/api/send-beta-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: email,
          to: 'contact@bio-tap.com',
          subject: 'New Beta User Signup',
          message: `New beta user signup:\n\nEmail: ${email}\nSignup Time: ${new Date().toLocaleString()}\n\nThis user has joined the BioTap beta program and should be added to the beta user list.`
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }
      
      // Update beta user count
      setBetaUsers(prev => prev + 1)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
      
      // Show success
      setIsSubmitted(true)
      setShowConfetti(true)
      toast.success('🎉 Welcome to BioTap Beta! You\'ll be the first to try our app when it goes live!')
      
      // Hide confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setEmail('')
        setIsSubmitted(false)
      }, 5000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      
      <div className="ico-countdown-card">
        <div className="countdown-header">
          <h2 className="countdown-title">Launch date</h2>
        </div>

        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">days</span>
          </div>
          <div className="countdown-separator">..</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">hours</span>
          </div>
          <div className="countdown-separator">..</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">mins</span>
          </div>
          <div className="countdown-separator">..</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">secs</span>
          </div>
        </div>

        <div className="beta-users-section">
          <div className="beta-users-count">
            <span className={`beta-users-number ${isAnimating ? 'pulse' : ''}`}>
              {betaUsers.toLocaleString()}
            </span>
            <span className="beta-users-label">Beta Users</span>
          </div>
        </div>

            <div className="email-signup-section">
              <p className="signup-description">Join our beta program and be the first to experience BioTap!</p>
              
              {/* Security Badges */}
              <div className="security-badges" style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                <div className="security-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>Adaptive Security</span>
                </div>
                <div className="security-badge">
                  <i className="fas fa-credit-card"></i>
                  <span>Smart Payments</span>
                </div>
                <div className="security-badge">
                  <i className="fas fa-user-check"></i>
                  <span>Biometric Identity</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="email-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading || isSubmitted}
                  required
                />
                <button type="submit" disabled={isLoading || isSubmitted} className="btn-modern">
                  {isLoading ? 'Adding...' : isSubmitted ? 'Joined!' : 'Join Beta'}
                </button>
              </form>
            </div>
      </div>
    </>
  )
}

export default BetaSignupCard
