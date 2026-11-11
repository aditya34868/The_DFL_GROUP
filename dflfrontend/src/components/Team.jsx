import React from "react";
import { useTranslation } from "react-i18next";
import { teamMembers } from "../data/siteData";

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white mt-8 py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1536px]">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
            {t("team.badge", "Our Leadership")}
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0B132A] sm:text-4xl">
            {t("team.heroTitle", "Meet The Minds Behind")}{" "}
            <span className="text-[#E66E19]">{t("team.heroTitleHighlight", "DFL Group")}</span>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            {t(
              "team.heroDesc",
              "At The DFL Group, we bring together a diverse team of supply chain strategists, trade compliance officers, and logistics veterans ensuring seamless global trade operations."
            )}
          </p>
        </div>

        {/* EXPERIENCE BREAKDOWN CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-md">
            <span className="inline-block rounded-md bg-[#E66E19]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E66E19]">
              {t("team.cards.0.exp", "30+ Years Exp.")}
            </span>
            <h3 className="mt-3 font-display text-base font-bold text-[#0B132A]">
              {t("team.cards.0.title", "Senior Leadership")}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              {t("team.cards.0.desc", "Steering long-term strategic growth and regulatory vision with three decades of freight mastery.")}
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B132A]/40 hover:shadow-md">
            <span className="inline-block rounded-md bg-[#0B132A]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0B132A]">
              {t("team.cards.1.exp", "10-20 Years Exp.")}
            </span>
            <h3 className="mt-3 font-display text-base font-bold text-[#0B132A]">
              {t("team.cards.1.title", "Industry Specialists")}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              {t("team.cards.1.desc", "Managing complex customs clearance, air charters, and multi-modal transit networks.")}
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-md">
            <span className="inline-block rounded-md bg-[#E66E19]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E66E19]">
              {t("team.cards.2.exp", "5+ Years Exp.")}
            </span>
            <h3 className="mt-3 font-display text-base font-bold text-[#0B132A]">
              {t("team.cards.2.title", "Operational Experts")}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              {t("team.cards.2.desc", "Executing day-to-day dispatch routing, live cargo tracking, and warehouse operations.")}
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B132A]/40 hover:shadow-md">
            <span className="inline-block rounded-md bg-[#0B132A]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0B132A]">
              {t("team.cards.3.exp", "Fresh Innovators")}
            </span>
            <h3 className="mt-3 font-display text-base font-bold text-[#0B132A]">
              {t("team.cards.3.title", "Graduate Associates")}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              {t("team.cards.3.desc", "Infusing tech automation, modern data analytics, and responsive client communication.")}
            </p>
          </div>
        </div>

        {/* TEAM MEMBERS SECTION */}
        <div className="mt-16">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-[#0B132A]">
              {t("team.boardTitle", "Executive & Operations Board")}
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              {t("team.boardSubtitle", "The dedicated team delivering logistics precision across global trade lanes.")}
            </p>
          </div>

          {/* FLEX CONTAINER: Automatically centers last 3 or any remaining cards */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={member.id || member.name}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="group relative flex w-full max-w-[260px] animate-fadeIn flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-xl"
              >
                {/* Top Accent Line */}
                <div className="w-full bg-[#E66E19] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Compact Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Member Details */}
                <div className="flex flex-1 flex-col justify-between p-4 text-center">
                  <div>
                    <h4 className="font-display text-base font-bold text-[#0B132A] transition-colors group-hover:text-[#E66E19]">
                      {member.name}
                    </h4>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#E66E19]">
                      {t(`team.members.${member.id}.role`, member.role)}
                    </p>

                    {member.bio && (
                      <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                        {t(`team.members.${member.id}.bio`, member.bio)}
                      </p>
                    )}
                  </div>

                  {/* Clean Text Links */}
                  {member.socials && (
                    <div className="mt-4 flex items-center justify-center gap-4 border-t border-slate-100 pt-3 text-xs font-semibold">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 transition-colors hover:text-[#0B132A]"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;