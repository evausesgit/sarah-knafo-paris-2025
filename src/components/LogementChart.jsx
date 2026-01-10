import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const mesures = [
  {
    id: 1,
    titre: 'Moratoire logement social',
    description: 'Arret total des preemptions par la mairie',
    icon: '🛑',
    color: '#ef4444'
  },
  {
    id: 2,
    titre: 'Vente 10% du parc social',
    description: 'Priorite aux occupants pour acceder a la propriete',
    icon: '🏠',
    color: '#3b82f6'
  },
  {
    id: 3,
    titre: 'Deplafonnement des loyers',
    description: 'Liberer le marche pour augmenter l\'offre',
    icon: '📈',
    color: '#22c55e'
  },
];

const argentineData = [
  { name: 'Avant Milei', logements: 30, color: '#ef4444' },
  { name: '3 mois apres', logements: 100, color: '#22c55e' },
];

export default function LogementChart() {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-2">Politique du Logement</h3>
      <p className="text-slate-400 text-sm mb-6">
        Inspirer par le succes de Milei a Buenos Aires : deplafonnement des loyers = plus de logements disponibles
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-4">3 mesures cles</h4>
          <div className="space-y-3">
            {mesures.map((mesure) => (
              <div
                key={mesure.id}
                className="bg-slate-700/50 rounded-xl p-4 border-l-4 transition-transform hover:scale-[1.02]"
                style={{ borderColor: mesure.color }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{mesure.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{mesure.titre}</p>
                    <p className="text-slate-400 text-sm">{mesure.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-4 text-center">Exemple Argentine : Offre de logements</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={argentineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[0, 120]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                formatter={(value) => [`Indice: ${value}`, 'Offre de logements']}
              />
              <Bar dataKey="logements" radius={[4, 4, 0, 0]}>
                {argentineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="logements" position="top" fill="#f1f5f9" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <p className="text-center text-green-400 font-semibold mb-2">
              Resultat en 3 mois
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">+233%</p>
                <p className="text-slate-400 text-xs">Offre de logements</p>
              </div>
              <div className="h-12 w-px bg-slate-600"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">-15%</p>
                <p className="text-slate-400 text-xs">Prix des loyers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
