"use client"
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Confetti from 'react-confetti'
import { useLanguage } from '@/contexts/LanguageContext'

const BetaSignupCard = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [betaUsers, setBetaUsers] = useState(() => {
    // Load saved beta users count from localStorage, default to 2500
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('biotap-beta-users')
      return saved ? parseInt(saved, 10) : 2500
    }
    return 2500
  })
  const [isAnimating, setIsAnimating] = useState(false)

  // Countdown timer state - calculate time remaining to target date
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Set target date to be exactly 155 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 155);
  targetDate.setHours(0, 0, 0, 0); // Set to start of day

  // Countdown timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    // Check if email already exists in localStorage
    const existingEmails = JSON.parse(localStorage.getItem('biotap-beta-emails') || '[]')
    if (existingEmails.includes(email)) {
      toast.error('This email is already registered for the beta program!')
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
      
      // Increment beta user count and save to localStorage
      const newCount = betaUsers + 1
      setBetaUsers(newCount)
      localStorage.setItem('biotap-beta-users', newCount.toString())
      
      // Add email to registered emails list
      const updatedEmails = [...existingEmails, email]
      localStorage.setItem('biotap-beta-emails', JSON.stringify(updatedEmails))
      
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
      
      // Show success
      setIsSubmitted(true)
      setShowConfetti(true)
      toast.success(`🎉 Welcome to BioTap Beta! You're user #${newCount}! You'll be the first to try our app when it goes live!`)
      
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
          <h2 className="countdown-title">{t('beta.launch_date')}</h2>
        </div>

        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">{t('countdown.days')}</span>
          </div>
          <div className="countdown-separator">..</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">{t('countdown.hours')}</span>
          </div>
          <div className="countdown-separator">..</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">{t('countdown.mins')}</span>
          </div>
          <div className="countdown-separator">..</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">{t('countdown.secs')}</span>
          </div>
        </div>

        <div className="beta-users-section">
          <div className="beta-users-count">
            <span className={`beta-users-number ${isAnimating ? 'pulse' : ''}`}>
              {betaUsers.toLocaleString()}
            </span>
            <span className="beta-users-label">{t('beta.users')}</span>
          </div>
        </div>

            <div className="email-signup-section">
              <p className="signup-description">{t('beta.description')}</p>
              
              {/* Security Badges */}
              <div className="security-badges" style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                <div className="security-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>{t('beta.security')}</span>
                </div>
                <div className="security-badge">
                  <i className="fas fa-credit-card"></i>
                  <span>{t('beta.payments')}</span>
                </div>
                <div className="security-badge">
                  <i className="fas fa-user-check"></i>
                  <span>{t('beta.identity')}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="email-form">
                <input
                  type="email"
                  placeholder={t('beta.email_placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading || isSubmitted}
                  required
                />
                <button type="submit" disabled={isLoading || isSubmitted} className="btn-modern">
                  {isLoading ? t('beta.adding') : isSubmitted ? t('beta.joined') : t('beta.join')}
                </button>
              </form>
            </div>
      </div>
    </>
  )
}

export default BetaSignupCard
