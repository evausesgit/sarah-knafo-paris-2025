import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList, ReferenceLine } from 'recharts';

const data = [
  {
    name: 'Avant Hidalgo',
    value: 100,
    color: '#3b82f6',
    label: 'Base 100'
  },
  {
    name: 'Sous Hidalgo',
    value: 160,
    color: '#ef4444',
    label: '+60%'
  },
  {
    name: 'Objectif Knafo',
    value: 80,
    color: '#22c55e',
    label: '-50%'
  },
];

const evolutionData = [
  { year: '2019', value: 100 },
  { year: '2020', value: 105 },
  { year: '2021', value: 110 },
  { year: '2022', value: 120 },
  { year: '2023', value: 160 },
  { year: '2024', value: 160 },
  { year: 'Objectif', value: 80 },
];

export default function TaxeFonciereChart() {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-2">Taxe Fonciere a Paris</h3>
      <p className="text-slate-400 text-sm mb-6">
        Hidalgo a augmente la taxe fonciere de 60% sans amelioration des services municipaux
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-4 text-center">Comparaison (base 100)</h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 12 }} />
              <YAxis stroke="#94a3b8" domain={[0, 180]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                formatter={(value, name, props) => [`Indice: ${value}`, props.payload.name]}
              />
              <ReferenceLine y={100} stroke="#64748b" strokeDasharray="5 5" label={{ value: 'Base', fill: '#94a3b8', fontSize: 12 }} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="label" position="top" fill="#f1f5f9" fontSize={14} fontWeight="bold" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  +60%
                </div>
                <div>
                  <p className="text-red-400 font-semibold">Hausse Hidalgo</p>
                  <p className="text-slate-400 text-sm">Sans amelioration des services</p>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  /2
                </div>
                <div>
                  <p className="text-green-400 font-semibold">Objectif Knafo</p>
                  <p className="text-slate-400 text-sm">Division par 2 de la taxe fonciere</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  <span className="text-2xl">&#10003;</span>
                </div>
                <div>
                  <p className="text-blue-400 font-semibold">Remboursement</p>
                  <p className="text-slate-400 text-sm">Cheque de remboursement aux Parisiens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
