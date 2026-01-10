import FonctionnairesChart from './components/FonctionnairesChart'
import TaxeFonciereChart from './components/TaxeFonciereChart'
import DetteChart from './components/DetteChart'
import LogementChart from './components/LogementChart'

function App() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-400 font-medium">Municipales Paris 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Le Programme de Sarah Knafo
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Des graphiques clairs pour comprendre les propositions qui redonneront a Paris sa grandeur
          </p>
        </header>

        {/* Stats rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-red-400">10 Mds</p>
            <p className="text-slate-400 text-sm">Dette actuelle</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-green-400">10 Mds</p>
            <p className="text-slate-400 text-sm">Economies prevues</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-blue-400">/2</p>
            <p className="text-slate-400 text-sm">Fonctionnaires</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-purple-400">/2</p>
            <p className="text-slate-400 text-sm">Taxe fonciere</p>
          </div>
        </div>

        {/* Graphiques */}
        <div className="space-y-8">
          <FonctionnairesChart />
          <TaxeFonciereChart />
          <DetteChart />
          <LogementChart />
        </div>

        {/* Citation */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-slate-700">
          <blockquote className="text-xl md:text-2xl text-white text-center italic">
            "Le pouvoir d'achat, ce n'est pas l'argent que l'Etat vous donne, c'est celui qu'il ne vous prend pas."
          </blockquote>
          <p className="text-center text-slate-400 mt-4">- Sarah Knafo</p>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>Donnees basees sur les declarations publiques de Sarah Knafo</p>
          <p className="mt-2">Application de suivi - Municipales Paris 2025</p>
        </footer>
      </div>
    </div>
  )
}

export default App
