import { CountdownTimer } from './components/CountdownTimer';

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-poppins">
      <div className="max-w-6xl w-full space-y-8 pt-2 md:space-y-16">
        
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight">
            <span className="text-white">Nos vamos a</span>
            <br />
            <span className="text-5xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300">
              Buenos Aires
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto">
            El 8 de octubre de 2025 nos vamos de viaje!
          </p>
        </div>

        <div className="flex justify-center md:pt-14">
          <CountdownTimer />
        </div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>
    </main>
  )
}