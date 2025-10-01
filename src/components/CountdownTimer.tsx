import { useEffect, useState, useRef } from "react"
import { FlipDigit } from './FlipDigital';

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const targetDate = new Date("2025-10-08T00:00:00")

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())
  const [glowingUnit, setGlowingUnit] = useState<string | null>(null)
  const prevTimeRef = useRef<TimeLeft>(timeLeft)
  const glowTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      const prevTime = prevTimeRef.current

      if (glowTimeoutRef.current) {
        clearTimeout(glowTimeoutRef.current)
      }

      let changedUnit: string | null = null

      if (newTimeLeft.seconds !== prevTime.seconds) {
        changedUnit = "seconds"
      } else if (newTimeLeft.minutes !== prevTime.minutes) {
        changedUnit = "minutes"
      } else if (newTimeLeft.hours !== prevTime.hours) {
        changedUnit = "hours"
      } else if (newTimeLeft.days !== prevTime.days) {
        changedUnit = "days"
      }

      if (changedUnit) {
        setGlowingUnit(changedUnit)
        glowTimeoutRef.current = setTimeout(() => {
          setGlowingUnit(null)
          glowTimeoutRef.current = null
        }, 500)
      }

      prevTimeRef.current = newTimeLeft
      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => {
      clearInterval(timer)
      if (glowTimeoutRef.current) {
        clearTimeout(glowTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <FlipDigit value={timeLeft.days} label="Días" isGlowing={glowingUnit === "days"} />
      <FlipDigit value={timeLeft.hours} label="Horas" isGlowing={glowingUnit === "hours"} />
      <FlipDigit value={timeLeft.minutes} label="Minutos" isGlowing={glowingUnit === "minutes"} />
      <FlipDigit value={timeLeft.seconds} label="Segundos" isGlowing={glowingUnit === "seconds"} />
    </div>
  )
}
