'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  {
    name: "Google Drive",
    icon: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png", 
    category: "Storage"
  },
  {
    name: "Adobe Creative",
    icon: "https://imgs.search.brave.com/IsfVgrnFVKTAI0TKeADtKR67yAXN_za40StBku3Kum4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUzMWYwMTE5/MDQxMGYyMGY3OGJj/ZjZmMmUyNzFmZDhh/NjJjYWM3MzY0YTlj/NzA0ZmM2M2U4NDY0/OTQ4MDkxOC93d3cu/YWRvYmUuY29tLw",
    category: "Design"
  },
  {
    name: "Jira", 
    icon: "https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png",
    category: "Project Management"
  },
  {
    name: "Gmail",
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
    category: "Communication"
  },
  {
    name: "Figma",
    icon: "https://static.figma.com/app/icon/1/favicon.png",
    category: "Design"
  },
  {
    name: "Microsoft Teams",
    icon: "https://imgs.search.brave.com/GoioUzv1tQvconkf9e8AF3x_NgdF8-931vQ4qdL5-e0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2M5L01p/Y3Jvc29mdF9PZmZp/Y2VfVGVhbXNfJTI4/MjAxOCVFMiU4MCU5/M3ByZXNlbnQlMjku/c3ZnLzIyMHB4LU1p/Y3Jvc29mdF9PZmZp/Y2VfVGVhbXNfJTI4/MjAxOCVFMiU4MCU5/M3ByZXNlbnQlMjku/c3ZnLnBuZw",
    category: "Communication"
  },
  {
    name: "Slack",
    icon: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
    category: "Communication"
  },
  {
    name: "Salesforce",
    icon: "https://www.salesforce.com/favicon.ico",
    category: "CRM"
  },
  {
    name: "Freshdesk",
    icon: "https://imgs.search.brave.com/fzgfmRMCpUontP3qmwmm-GI2o4oFsbfq_beIsno5V6c/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjQzNTJkN2Nj/NjkyMjgyYzQyNjc5/ZmUxMmQ1OTk3NzRi/ZTlhZGQxMWMzMmNl/OWFlNjZiZjZhM2Y0/ZmJlZjY0MS93d3cu/ZnJlc2h3b3Jrcy5j/b20v",
    category: "Support"
  },
  {
    name: "HubSpot",
    icon: "https://www.hubspot.com/hubfs/favicon.ico",
    category: "Marketing"
  },
  {
    name: "Intercom",
    icon: "https://imgs.search.brave.com/PGGzm1JeilikFOz3ox8W-E8JYacubyIA_F8aJVNlORQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWUyZmVlODcx/N2M3ZGViMzU5YzE0/NDg3Zjg5Nzc4NmZj/ZWY2NDJlYzE2MmEw/NjU5MTA1OTI2OGIz/ZDM0OWQyMS93d3cu/aW50ZXJjb20uY29t/Lw",
    category: "Support"
  },
  {
    name: "Google Calendar",
    icon: "https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_28_2x.png",
    category: "Productivity"
  },
  {
    name: "Supabase",
    icon: "https://imgs.search.brave.com/CCE91mFCHT0FBTXf4_YPuUoMsDMI2luQsculyEq80X8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmZhODZjMjE4/M2QwZTIzYThiMDky/NGYxNWQwYmEyNDkx/ODQyMmQ2ZTdlMDhi/MGU2Mjg5Mjc1ZTVj/Y2ZkMzM1Ni9zdXBh/YmFzZS5jb20v",
    category: "Database"
  }
];

export function IntegrationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-sm border border-gray-200 rounded-full px-4 py-1 text-sm text-gray-600"
          >
            Integrations
          </motion.div>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Connect integrations
            <span className="block mt-2 text-[#8B5CF6] font-medium">you use every day</span>
          </h2>
        </motion.div>

        {/* Top Row - Moving Right */}
        <motion.div 
          initial={{ x: -1000 }}
          animate={{ 
            x: [null, 1000, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-4 mb-4"
        >
          {integrations.slice(0, 7).map((integration) => (
            <div
              key={integration.name}
              className="flex-none w-[150px] aspect-square bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-center"
            >
              <Image
                src={integration.icon}
                alt={integration.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom Row - Moving Left */}
        <motion.div
          initial={{ x: 1000 }}
          animate={{
            x: [null, -1000, 1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-4"
        >
          {integrations.slice(7).map((integration) => (
            <div
              key={integration.name}
              className="flex-none w-[150px] aspect-square bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-center"
            >
              <Image
                src={integration.icon}
                alt={integration.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </motion.div>

        

      </div>
    </section>
  );
}