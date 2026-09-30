import { useEffect, useState } from 'react'
import { LogoMark } from './Brand.jsx'
import { SITE } from '../config/site.js'

/* Basic tier: static screen with a plain progress bar under the logo. */
export default function Loader({ onDone, duration = 5000 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setProgress(p)
      if (p < 1) raf = requestAnimationFrame(tick)
      else onDone()
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [duration, onDone])

  const pct = Math.round(progress * 100)

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg px-6 text-ink"
      role="status"
      aria-live="polite"
    >
      <LogoMark size="lg" />
      <p className="display mt-6 text-2xl">{SITE.businessName}</p>
      <div
        className="mt-8 h-1.5 w-60 overflow-hidden rounded-full bg-ink/15"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label="Loading"
      >
        <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-3 text-sm tabular-nums text-ink/60">{pct}%</p>
    </div>
  )
}
