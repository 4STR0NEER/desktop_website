import { SPORTS } from '../../config/site.js'

export default function SportTabs({ value, onChange }) {
  const onKeyDown = (e) => {
    const idx = SPORTS.findIndex((s) => s.id === value)
    if (e.key === 'ArrowRight') onChange(SPORTS[(idx + 1) % SPORTS.length].id)
    if (e.key === 'ArrowLeft') onChange(SPORTS[(idx - 1 + SPORTS.length) % SPORTS.length].id)
  }

  return (
    <div
      role="tablist"
      aria-label="Sport"
      onKeyDown={onKeyDown}
      className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-raised p-1"
    >
      {SPORTS.map((s) => {
        const active = s.id === value
        return (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(s.id)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold ${
              active ? 'bg-primary text-on-primary' : 'text-ink/70 hover:bg-ink/8 hover:text-ink'
            }`}
          >
            {s.name}
          </button>
        )
      })}
    </div>
  )
}
