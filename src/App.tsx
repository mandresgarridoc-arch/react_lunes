import { useState } from 'react';
import { 
  Terminal, 
  ServerCrash, 
  DollarSign, 
  Globe, 
  ShieldAlert, 
  Crosshair,
  Activity,
  AlertTriangle,
  Lock,
  Unlock,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans p-4 md:p-8 selection:bg-red-600 selection:text-white">
      
      {/* Contenedor Principal de la Infografía */}
      <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20">
        
        {/* Cabecera / Hero Section */}
        <header className="relative bg-gradient-to-br from-red-950 to-black p-8 md:p-12 border-b border-red-900/50 overflow-hidden">
          {/* Fondo decorativo cyber */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute -right-20 -top-20 text-red-600/10 rotate-12">
            <ShieldAlert size={400} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-600 text-red-500 font-mono text-xs px-3 py-1 rounded-full mb-6 tracking-widest uppercase shadow-[0_0_10px_rgba(220,38,38,0.3)]">
              <Activity size={14} className="animate-pulse" />
              Incidente Crítico • 24 Mayo 2018
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
              EL GRAN HACKEO AL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">BANCO DE CHILE</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl border-l-4 border-red-500 pl-4 bg-black/40 p-3 rounded-r">
              Un atraco digital histórico donde se utilizó un virus destructivo como cortina de humo para infiltrar la red interbancaria SWIFT y extraer millones de dólares.
            </p>
          </div>
        </header>

        <div className="p-8 md:p-12 space-y-16">
          
          {/* Sección 1: Cifras del Impacto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-800 pb-2">
              <Terminal className="text-red-500" /> El Impacto en Números
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-red-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 text-slate-800 group-hover:text-red-900/50 transition-colors"><DollarSign size={64} /></div>
                <div className="relative z-10">
                  <p className="text-sm font-mono text-red-500 mb-1">FONDOS ROBADOS</p>
                  <p className="text-4xl font-black text-white mb-2">$10.000.000 <span className="text-xl text-slate-500">USD</span></p>
                  <p className="text-xs text-slate-500">Desviados a cuentas en Hong Kong mediante transacciones fraudulentas.</p>
                </div>
              </div>
              
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 text-slate-800 group-hover:text-orange-900/50 transition-colors"><ServerCrash size={64} /></div>
                <div className="relative z-10">
                  <p className="text-sm font-mono text-orange-500 mb-1">DAÑO COLATERAL</p>
                  <p className="text-4xl font-black text-white mb-2">~9.000 <span className="text-xl text-slate-500">PCs</span></p>
                  <p className="text-xs text-slate-500">Terminales de sucursales que quedaron inutilizados con la pantalla negra.</p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 text-slate-800 group-hover:text-purple-900/50 transition-colors"><Globe size={64} /></div>
                <div className="relative z-10">
                  <p className="text-sm font-mono text-purple-500 mb-1">SISTEMA VULNERADO</p>
                  <p className="text-4xl font-black text-white mb-2">SWIFT</p>
                  <p className="text-xs text-slate-500">La red internacional de mensajería segura entre instituciones financieras.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 2: Anatomía del Ataque (Línea de tiempo) */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-800 pb-2">
              <Crosshair className="text-red-500" /> Anatomía del Ataque
            </h2>
            
            <div className="relative border-l-2 border-red-900/50 pl-8 ml-4 space-y-6">
              
              {/* Paso 1 */}
              <div className="relative cursor-pointer group" onClick={() => setActiveStep(activeStep === 1 ? null : 1)}>
                <div className={`absolute -left-[41px] bg-slate-900 border-2 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${activeStep === 1 ? 'border-red-500 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'border-slate-700 text-slate-500 group-hover:border-red-500/50'}`}>1</div>
                <div className={`bg-slate-950 border rounded-lg p-6 transition-all ${activeStep === 1 ? 'border-slate-700 shadow-[0_0_20px_rgba(239,68,68,0.1)]' : 'border-slate-800 hover:border-slate-700'}`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <AlertTriangle className="text-yellow-500 w-5 h-5" /> La Cortina de Humo (El Señuelo)
                    </h3>
                    <ChevronDown className={`text-slate-500 transition-transform ${activeStep === 1 ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {activeStep === 1 && (
                    <div className="mt-4 animate-in slide-in-from-top-2 fade-in duration-200">
                      <p className="text-slate-400 mb-4">
                        Los atacantes inyectaron un malware tipo <strong>"Wiper" (MBR Killer)</strong> en la red del banco. A diferencia de un Ransomware que pide rescate, este virus simplemente borraba el sector de arranque de los discos duros, apagando y destruyendo miles de computadoras en sucursales de todo Chile.
                      </p>
                      <div className="bg-black/50 p-3 rounded border border-slate-800 font-mono text-xs text-red-400">
                        <span className="text-slate-600">{">"}</span> Objetivo: Crear pánico y obligar a todo el equipo de TI y ciberseguridad a enfocarse en levantar las sucursales apagadas.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative cursor-pointer group" onClick={() => setActiveStep(activeStep === 2 ? null : 2)}>
                <div className={`absolute -left-[41px] bg-slate-900 border-2 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${activeStep === 2 ? 'border-orange-500 text-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'border-slate-700 text-slate-500 group-hover:border-orange-500/50'}`}>2</div>
                <div className={`bg-slate-950 border rounded-lg p-6 transition-all ${activeStep === 2 ? 'border-slate-700 shadow-[0_0_20px_rgba(249,115,22,0.1)]' : 'border-slate-800 hover:border-slate-700'}`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Lock className="text-orange-500 w-5 h-5" /> La Infiltración Real
                    </h3>
                    <ChevronDown className={`text-slate-500 transition-transform ${activeStep === 2 ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {activeStep === 2 && (
                    <div className="mt-4 animate-in slide-in-from-top-2 fade-in duration-200">
                      <p className="text-slate-400">
                        Mientras el banco estaba en caos mediático y técnico intentando reparar las pantallas negras, los hackers aprovecharon la distracción para acceder en silencio a los servidores conectados a la <strong>red SWIFT</strong> del banco.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative cursor-pointer group" onClick={() => setActiveStep(activeStep === 3 ? null : 3)}>
                <div className={`absolute -left-[41px] bg-slate-900 border-2 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${activeStep === 3 ? 'border-red-600 text-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]' : 'border-slate-700 text-slate-500 group-hover:border-red-600/50'}`}>3</div>
                <div className={`bg-slate-950 border rounded-lg p-6 transition-all ${activeStep === 3 ? 'border-red-900/50 shadow-[inset_0_0_20px_rgba(220,38,38,0.05)]' : 'border-slate-800 hover:border-slate-700'}`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <DollarSign className="text-green-500 w-5 h-5" /> El Robo de Fondos
                    </h3>
                    <ChevronDown className={`text-slate-500 transition-transform ${activeStep === 3 ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {activeStep === 3 && (
                    <div className="mt-4 animate-in slide-in-from-top-2 fade-in duration-200">
                      <p className="text-slate-400">
                        Una vez dentro de SWIFT, generaron transacciones fraudulentas haciéndose pasar por el banco. Intentaron enviar mucho más dinero, pero el banco logró desconectarse a tiempo de la red internacional. Aún así, lograron concretar <strong className="text-white">4 transacciones por un total de 10 millones de dólares</strong> hacia cuentas en Asia.
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </section>

          {/* Sección 3: Atacantes y Consecuencias */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* El Atacante */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 relative overflow-hidden flex flex-col">
               <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
               <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                 <Terminal className="text-purple-500 w-5 h-5" /> Atribución del Ataque
               </h3>
               
               {!isDecrypted ? (
                 <div className="flex-1 flex flex-col items-center justify-center space-y-4 py-6">
                   <div className="text-slate-600 font-mono text-sm tracking-widest">[ DATOS ENCRIPTADOS ]</div>
                   <button 
                     onClick={() => setIsDecrypted(true)}
                     className="flex items-center gap-2 bg-purple-900/30 hover:bg-purple-900/60 border border-purple-500/50 text-purple-400 px-4 py-2 rounded transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] active:scale-95"
                   >
                     <Unlock size={16} /> Desencriptar Identidad
                   </button>
                 </div>
               ) : (
                 <div className="animate-in fade-in zoom-in-95 duration-500">
                   <p className="text-sm text-slate-400 mb-4">
                     Las investigaciones internacionales y firmas de ciberseguridad atribuyeron este ataque sofisticado al <strong className="text-purple-400 font-mono text-base bg-purple-950/50 px-2 py-0.5 rounded">Grupo Lazarus</strong>.
                   </p>
                   <ul className="text-sm space-y-2 text-slate-400">
                     <li className="flex items-start gap-2">
                       <span className="text-purple-500 mt-1">▪</span> 
                       Actor de amenaza patrocinado por el estado de Corea del Norte (APT38).
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-purple-500 mt-1">▪</span> 
                       Famosos por hackear a Sony Pictures en 2014 y crear el ransomware WannaCry en 2017.
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-purple-500 mt-1">▪</span> 
                       Usan el ciberdelito para evadir sanciones internacionales y financiar su país.
                     </li>
                   </ul>
                 </div>
               )}
            </div>

            {/* Lecciones Aprendidas */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
               <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                 <ShieldAlert className="text-emerald-500 w-5 h-5" /> Impacto en Chile
               </h3>
               <p className="text-sm text-slate-400 mb-4">
                 El ataque fue un "despertar" para la industria financiera chilena y las autoridades.
               </p>
               <ul className="text-sm space-y-2 text-slate-400">
                 <li className="flex items-start gap-2">
                   <span className="text-emerald-500 mt-1">▪</span> 
                   Ningún cliente del banco perdió su dinero (el robo fue de los fondos del propio banco).
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-emerald-500 mt-1">▪</span> 
                   La CMF actualizó drásticamente las Normativas de Ciberseguridad (RAN 20-10) obligando a los bancos a reportar incidentes en 30 minutos.
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-emerald-500 mt-1">▪</span> 
                   Aceleró la discusión de la nueva Ley Marco de Ciberseguridad de Chile.
                 </li>
               </ul>
            </div>

          </div>

        </div>

        {/* Footer */}
        <footer className="bg-black py-4 text-center text-xs font-mono text-slate-600 border-t border-slate-900">
          Infografía generada para análisis de casos • Curso de Ciberseguridad
        </footer>
      </div>
    </div>
  );
}