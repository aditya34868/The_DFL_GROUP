import React from "react";
import { useTranslation } from "react-i18next";
import { ItWhyChooseUs, ItServices, ItTeamMembers } from "../data/siteData";
import { FiArrowRight, FiLinkedin } from "react-icons/fi";

// Reusable Badge Component
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2.5 rounded-full bg-orange-100/80 border border-orange-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#E66E19] shadow-sm ${className}`}
  >
    {children}
  </span>
);

// Reusable Member Card Component
const MemberCard = ({ member, role, connectLabel, coreContributorLabel }) => (
  <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1.5 w-full max-w-md">
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative h-20 w-20 shrink-0">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full rounded-[14px] object-cover bg-slate-100"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[var(--color-brass)] transition-colors">
            {member.name}
          </h3>
          <p className="text-xs font-semibold text-orange-600 mt-0.5 uppercase tracking-wide">
            {role}
          </p>
        </div>
      </div>
    </div>

    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
        {coreContributorLabel}
      </span>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
      >
        <FiLinkedin className="h-3.5 w-3.5" />
        <span>{connectLabel}</span>
      </a>
    </div>
  </div>
);

export default function DflITSolutions() {
  const { t } = useTranslation();

  // Translated arrays from translation.json; icons stay in code and are matched by index
  const tServices = t("it.services", { returnObjects: true, defaultValue: [] });
  const tWhyItems = t("it.whyItems", { returnObjects: true, defaultValue: [] });
  const tRoles = t("it.teamRoles", { returnObjects: true, defaultValue: [] });

  const services = ItServices.map((s, i) => ({
    ...s,
    title: tServices[i]?.title ?? s.title,
    description: tServices[i]?.description ?? s.description,
  }));

  const whyItems = ItWhyChooseUs.map((item, i) => ({
    ...item,
    title: tWhyItems[i]?.title ?? item.title,
    description: tWhyItems[i]?.description ?? item.description,
  }));

  const leaderMember = ItTeamMembers[0];
  const otherMembers = ItTeamMembers.slice(1);

  const roleFor = (i) => tRoles[i] ?? ItTeamMembers[i]?.role;

  return (
    <div className="relative min-h-screen bg-white text-[var(--color-ivory)] overflow-hidden px-4 sm:px-6 py-20 md:px-8 lg:px-12 pt-32 font-sans">

      {/* BACKGROUND FLOATING GLOW ELEMENTS */}
      <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] relative z-10">

        {/* HERO SECTION */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#E66E19]/80" />
              <span className="relative inline-flex h-2.5 animate-ping w-2.5 rounded-full bg-[#E66E19]" />
            </span>
            {t("it.badge")}
          </Badge>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight font-display">
            {t("it.heroTitle")} <span className="text-[var(--color-brass)]">{t("it.heroTitleHighlight")}</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--color-slate)] font-medium">
            {t("it.heroPara")}
          </p>

          {/* DATA STREAM INDICATOR */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[var(--color-slate)] mb-1.5 px-1">
              <span>{t("it.cloudServer")}</span>
              <span className="text-[var(--color-brass)]">{t("it.liveDataStream")}</span>
              <span>{t("it.clientEndpoint")}</span>
            </div>

            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200 p-2">
              <div className="absolute top-2 left-1/4 h-5 w-24 animate-scan rounded-full bg-gradient-to-r bg-orange-400 shadow-md" />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="group flex items-center gap-2.5 rounded-full bg-[var(--color-brass)] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-[#d55f0f] hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <span>{t("it.getStarted")}</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* TEAM MEMBERS SECTION */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="rounded-full bg-orange-100/70 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brass)]">
              {t("it.teamBadge")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl font-display tracking-tight">
              {t("it.teamTitle")}
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto">
              {t("it.teamDesc")}
            </p>
          </div>

          <div className="flex flex-col gap-8 items-center">
            {/* ROW 1: FIRST MEMBER IN CENTER */}
            {leaderMember && (
              <div className="flex justify-center w-full">
                <MemberCard
                  member={leaderMember}
                  role={roleFor(0)}
                  connectLabel={t("it.connect")}
                  coreContributorLabel={t("it.coreContributor")}
                />
              </div>
            )}

            {/* ROW 2: OTHER MEMBERS - Responsive Grid for consistent card sizing on large screens */}
            <div className="flex flex-wrap justify-center gap-8 w-full ">
              {otherMembers.map((member, idx) => (
                <div key={idx} className="w-full max-w-md flex justify-center">
                  <MemberCard
                    member={member}
                    role={roleFor(idx + 1)}
                    connectLabel={t("it.connect")}
                    coreContributorLabel={t("it.coreContributor")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERTISE SERVICES GRID */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="rounded-full bg-orange-100/70 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brass)]">
              {t("it.servicesBadge")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl font-display">
              {t("it.servicesTitle")}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-slate)] font-medium max-w-xl mx-auto">
              {t("it.servicesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-[var(--color-panel)] p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-brass)] hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-orange-100/50 blur-xl transition-all duration-500 group-hover:bg-orange-200/70" />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-brass)] border border-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-brass)] group-hover:text-white group-hover:border-[var(--color-brass)] shadow-sm">
                      {React.isValidElement(service.icon) ? (
                        service.icon
                      ) : (
                        <IconComponent className="h-6 w-6" />
                      )}
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-[var(--color-brass)] font-display">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)] font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[var(--color-brass)] transition-colors">
                      {t("it.exploreSolution")}
                    </span>
                    <span className="text-[var(--color-brass)] font-bold transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="rounded-3xl border border-slate-200 bg-[var(--color-panel)] p-8 md:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-orange-100/80 to-transparent blur-2xl rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brass)]">
                {t("it.whyBadge")}
              </span>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl leading-tight font-display">
                {t("it.whyTitle")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-slate)] font-medium">
                {t("it.whyDesc")}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-2xl font-black text-[var(--color-brass)] font-display">99.9%</div>
                  <div className="text-xs font-semibold text-[var(--color-slate)] mt-1">{t("it.uptimeLabel")}</div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-2xl font-black text-[var(--color-brass)] font-display">24 / 7</div>
                  <div className="text-xs font-semibold text-[var(--color-slate)] mt-1">{t("it.supportLabel")}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyItems.map((item, idx) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[var(--color-brass)] hover:bg-white hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[var(--color-brass)] font-bold group-hover:bg-[var(--color-brass)] group-hover:text-white transition-colors">
                        {React.isValidElement(item.icon) ? (
                          item.icon
                        ) : (
                          <IconComponent className="h-5 w-5" />
                        )}
                      </div>
                      <h4 className="font-bold text-slate-900 font-display">{item.title}</h4>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[var(--color-slate)] font-medium">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}