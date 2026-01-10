import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';

const economiesData = [
  { name: 'Reduction masse salariale', value: 4, color: '#22c55e' },
  { name: 'Suppression subventions', value: 2, color: '#3b82f6' },
  { name: 'Privatisations', value: 2.5, color: '#8b5cf6' },
  { name: 'Autres economies', value: 1.5, color: '#f59e0b' },
];

const detteComparaison = [
  { name: 'Dette Paris', value: 10, color: '#ef4444' },
  { name: 'Economies prevues', value: 10, color: '#22c55e' },
];

export default function DetteChart() {
  const total = economiesData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-2">Dette et Plan d'Economies</h3>
      <p className="text-slate-400 text-sm mb-6">
        10 milliards de dette pour la capitale : un scandale. Plan de 10 milliards d'economies pour desendetter Paris.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-4 text-center">Repartition des economies (10 Mds)</h4>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={economiesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${value} Mds`}
                labelLine={{ stroke: '#64748b' }}
              >
                {economiesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                formatter={(value) => [`${value} milliards`, '']}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {economiesData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                <span className="text-slate-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-4 text-center">Dette vs Economies</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={detteComparaison} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" unit=" Mds" />
              <YAxis type="category" dataKey="name" stroke="#94a3b8" width={120} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                formatter={(value) => [`${value} milliards`, '']}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {detteComparaison.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="value" position="right" fill="#f1f5f9" formatter={(v) => `${v} Mds`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-4">
            <p className="text-center text-lg font-bold text-white mb-2">
              Objectif : 0 dette
            </p>
            <p className="text-center text-slate-400 text-sm">
              Economies = Dette actuelle
            </p>
            <div className="flex justify-center mt-3">
              <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
                <span className="text-green-400 font-bold">10 Mds</span>
                <span className="text-slate-400">=</span>
                <span className="text-green-400 font-bold">10 Mds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
