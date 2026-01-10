import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

// Icone de personne en SVG
const PersonIcon = ({ filled = true, color = '#3b82f6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="1.5">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
  </svg>
);

// Composant pour afficher une grille de personnes
const PersonGrid = ({ count, total, color, label }) => {
  const rows = Math.ceil(total / 10);
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-10 gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <PersonIcon
            key={i}
            filled={i < count}
            color={i < count ? color : '#334155'}
            size={20}
          />
        ))}
      </div>
      <p className="text-slate-400 text-sm mt-2">{label}</p>
    </div>
  );
};

// Donnees calculees
// Paris: 55 000 fonctionnaires / 2 000 000 habitants = 1 fonctionnaire pour 36 habitants
// UE: 32 000 fonctionnaires / 500 000 000 habitants = 1 fonctionnaire pour 15 625 habitants

const ratioData = [
  {
    name: 'Paris',
    ratio: 36,
    fonctionnaires: 55000,
    habitants: 2000000,
    color: '#ef4444'
  },
  {
    name: 'Commission UE',
    ratio: 15625,
    fonctionnaires: 32000,
    habitants: 500000000,
    color: '#3b82f6'
  },
];

const objectifData = [
  { name: 'Actuel', value: 55000, color: '#ef4444' },
  { name: 'Objectif', value: 27500, color: '#22c55e' },
];

export default function FonctionnairesChart() {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-2">Fonctionnaires : Paris vs Commission Europeenne</h3>
      <p className="text-slate-400 text-sm mb-8">
        Combien d'habitants sont geres par un fonctionnaire ?
      </p>

      {/* Visualisation pictographique principale */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">

        {/* Paris */}
        <div className="bg-slate-900/50 rounded-xl p-6 border border-red-500/30 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 rounded bg-red-500"></div>
            <h4 className="text-lg font-semibold text-white">Mairie de Paris</h4>
          </div>

          <div className="flex items-center justify-center gap-6 flex-1">
            {/* Fonctionnaire */}
            <div className="flex flex-col items-center w-24">
              <div className="bg-red-500/20 rounded-full p-4 mb-2">
                <PersonIcon filled={true} color="#ef4444" size={48} />
              </div>
              <p className="text-red-400 font-bold text-xl">1</p>
              <p className="text-slate-500 text-xs">fonctionnaire</p>
            </div>

            {/* Egal */}
            <div className="text-slate-500 text-3xl font-light">=</div>

            {/* Habitants */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-800 rounded-lg p-2 mb-2 w-28 h-24 flex items-center justify-center">
                <div className="grid grid-cols-6 gap-0.5">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <PersonIcon key={i} filled={true} color="#64748b" size={12} />
                  ))}
                </div>
              </div>
              <p className="text-white font-bold text-xl">36</p>
              <p className="text-slate-500 text-xs">habitants</p>
            </div>
          </div>

          <div className="text-center bg-red-500/10 rounded-lg p-3 mt-6">
            <p className="text-red-400 font-semibold">55 000 fonctionnaires</p>
            <p className="text-slate-400 text-sm">pour 2 millions d'habitants</p>
          </div>
        </div>

        {/* Commission UE */}
        <div className="bg-slate-900/50 rounded-xl p-6 border border-blue-500/30 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <h4 className="text-lg font-semibold text-white">Commission Europeenne</h4>
          </div>

          <div className="flex items-center justify-center gap-6 flex-1">
            {/* Fonctionnaire */}
            <div className="flex flex-col items-center w-24">
              <div className="bg-blue-500/20 rounded-full p-4 mb-2">
                <PersonIcon filled={true} color="#3b82f6" size={48} />
              </div>
              <p className="text-blue-400 font-bold text-xl">1</p>
              <p className="text-slate-500 text-xs">fonctionnaire</p>
            </div>

            {/* Egal */}
            <div className="text-slate-500 text-3xl font-light">=</div>

            {/* Habitants */}
            <div className="flex flex-col items-center">
              <div className="relative bg-slate-800 rounded-lg p-2 mb-2 w-28 h-24 overflow-hidden">
                <div className="grid grid-cols-12 gap-0.5">
                  {Array.from({ length: 180 }).map((_, i) => (
                    <PersonIcon key={i} filled={true} color="#64748b" size={12} />
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-slate-800 to-transparent flex items-end justify-center pb-0.5">
                  <span className="text-slate-400 text-xs font-medium">...</span>
                </div>
              </div>
              <p className="text-white font-bold text-xl">15 625</p>
              <p className="text-slate-500 text-xs">habitants</p>
            </div>
          </div>

          <div className="text-center bg-blue-500/10 rounded-lg p-3 mt-6">
            <p className="text-blue-400 font-semibold">32 000 fonctionnaires</p>
            <p className="text-slate-400 text-sm">pour 500 millions d'habitants</p>
          </div>
        </div>
      </div>

      {/* Comparaison choc */}
      <div className="bg-gradient-to-r from-red-500/10 via-slate-800 to-blue-500/10 rounded-xl p-8 mb-8">
        <h4 className="text-center text-white font-semibold mb-4">Le choc des chiffres</h4>
        <p className="text-center text-slate-400 text-sm mb-8">Nombre de fonctionnaires pour 1 000 habitants</p>

        <div className="flex items-end justify-center gap-8 md:gap-16">
          {/* Paris - Grand chiffre (trop de fonctionnaires) */}
          <div className="text-center">
            <p className="text-8xl md:text-9xl font-black text-red-500 leading-none">27,5</p>
            <p className="text-red-400 font-semibold mt-3">Paris</p>
            <p className="text-slate-500 text-xs mt-1">fonctionnaires</p>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center pb-12">
            <p className="text-slate-500 text-2xl font-light">vs</p>
          </div>

          {/* UE - Minuscule chiffre (efficace) */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-blue-400 leading-none">0,06</p>
            <p className="text-blue-400 font-semibold mt-3">Commission UE</p>
            <p className="text-slate-500 text-xs mt-1">fonctionnaire</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <span className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full">
            <span className="text-yellow-400 font-bold">Paris a 458x plus de fonctionnaires par habitant</span>
          </span>
        </div>
      </div>

      {/* Objectif de reduction */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-4 text-center">Objectif : diviser par 2</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={objectifData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
              <YAxis type="category" dataKey="name" stroke="#94a3b8" width={80} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                formatter={(value) => [`${value.toLocaleString()} fonctionnaires`, '']}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {objectifData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="value" position="right" fill="#f1f5f9" formatter={(v) => v.toLocaleString()} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
            <h5 className="text-green-400 font-semibold mb-3">Comment reduire ?</h5>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">1.</span>
                <span><strong>Privatisation</strong> des services (ex: ordures = 9 000 postes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">2.</span>
                <span><strong>Non-remplacement</strong> des 5 000 departs annuels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">3.</span>
                <span><strong>Resultat</strong> : -27 500 postes sur le mandat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
