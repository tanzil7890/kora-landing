import { motion } from "framer-motion";

const integrations = [
  { name: "Actimize", abbr: "ACT", color: "bg-blue-500" },
  { name: "ComplyAdvantage", abbr: "CA", color: "bg-emerald-500" },
  { name: "Snowflake", abbr: "❄️", color: "bg-cyan-400" },
  { name: "Fiserv", abbr: "FI", color: "bg-orange-500" },
  { name: "Oracle", abbr: "O", color: "bg-red-500" },
  { name: "SAP", abbr: "SAP", color: "bg-blue-700" },
  { name: "SAS", abbr: "SAS", color: "bg-indigo-500" },
  { name: "ServiceNow", abbr: "SN", color: "bg-green-500" },
  { name: "Jira", abbr: "J", color: "bg-blue-600" },
  { name: "Jack Henry", abbr: "JH", color: "bg-teal-500" },
  { name: "FIS", abbr: "FIS", color: "bg-purple-600" },
  { name: "Temenos", abbr: "T", color: "bg-rose-500" },
];

const FloatingLogos = () => {
  const leftLogos = integrations.slice(0, 6);
  const rightLogos = integrations.slice(6, 12);

  return (
    <>
      {/* Left side floating logos */}
      <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
        {leftLogos.map((integration, index) => (
          <motion.div
            key={integration.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className={`logo-card w-14 h-14 lg:w-16 lg:h-16 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            style={{ 
              marginLeft: index % 2 === 0 ? '0' : '24px',
            }}
          >
            <span className={`text-xs font-semibold ${integration.abbr.length <= 2 ? 'text-lg' : 'text-[10px]'} text-muted-foreground`}>
              {integration.abbr}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Right side floating logos */}
      <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
        {rightLogos.map((integration, index) => (
          <motion.div
            key={integration.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className={`logo-card w-14 h-14 lg:w-16 lg:h-16 ${index % 2 === 0 ? 'animate-float-delayed' : 'animate-float'}`}
            style={{ 
              marginRight: index % 2 === 0 ? '24px' : '0',
            }}
          >
            <span className={`text-xs font-semibold ${integration.abbr.length <= 2 ? 'text-lg' : 'text-[10px]'} text-muted-foreground`}>
              {integration.abbr}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FloatingLogos;