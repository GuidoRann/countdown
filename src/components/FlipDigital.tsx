interface FlipDigitProps {
  value: number
  label: string
  isGlowing?: boolean
}

export function FlipDigit({ value, label, isGlowing = false }: FlipDigitProps) {
  const digits = String(value).padStart(2, "0").split("")

  return (
    <div className="flex flex-col items-center gap-1 md:gap-3">
      <div className="flex gap-2">
        {digits.map((digit, index) => (
          <div
            key={index}
            className={`
              relative w-24 h-32 md:w-30 md:h-38
              bg-gradient-to-b from-slate-800 to-slate-900
              border-2 rounded-xl
              flex items-center justify-center
              transition-all duration-300 ease-out
              will-change-transform
              ${
                isGlowing
                  ? "border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(168,85,247,0.3)] scale-[1.02]"
                  : "border-purple-900/50 shadow-none scale-100"
              }
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/10 to-transparent pointer-events-none rounded-xl" />

            <span
              className={`
                text-8xl md:text-8xl font-bold font-mono
                transition-all duration-300 ease-out
                ${
                  isGlowing
                    ? "text-purple-300 drop-shadow-[0_0_15px_rgba(216,180,254,0.8)]"
                    : "text-purple-400/80 drop-shadow-none"
                }
              `}
            >
              {digit}
            </span>
          </div>
        ))}
      </div>
      <span className="text-sm lg:text-base font-semibold text-purple-300/70 uppercase tracking-widest">
        {label}
      </span>
    </div>
  )
}
