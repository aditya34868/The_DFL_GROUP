import React from "react";
import { teamMembers } from "../data/siteData";

const Team = () => {
  return (
    <section className=" border-slate-200 bg-white py-20 px-6 md:px-8 mt-10">
      <div className="mx-auto max-w-7xl">
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#0B132A] md:text-4xl">
            Meet The Minds Behind DFL Group
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            At <span className="font-semibold text-[#0B132A]">The DFL Group</span>, we bring together a diverse team of professionals with a broad range of experience and expertise, ensuring innovative solutions and exceptional results.
          </p>
        </div>

        {/* EXPERIENCE BREAKDOWN CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[#E66E19]/40 hover:bg-white hover:shadow-lg">
            <span className="inline-block rounded-lg bg-[#E66E19]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              30+ Years Exp.
            </span>
            <h3 className="mt-3 font-display text-lg font-bold text-[#0B132A]">
              Senior Leadership
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              With over 30 years of industry experience, our senior team members provide strategic direction and unparalleled expertise.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[#E66E19]/40 hover:bg-white hover:shadow-lg">
            <span className="inline-block rounded-lg bg-[#0B132A]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0B132A]">
              10-20 Years Exp.
            </span>
            <h3 className="mt-3 font-display text-lg font-bold text-[#0B132A]">
              Experienced Professionals
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Our team of professionals offer a deep understanding of industry trends and deliver specialized solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[#E66E19]/40 hover:bg-white hover:shadow-lg">
            <span className="inline-block rounded-lg bg-[#E66E19]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              5+ Years Exp.
            </span>
            <h3 className="mt-3 font-display text-lg font-bold text-[#0B132A]">
              Mid-Level Experts
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Professionals with 5 years of experience bring a balance of hands-on skills and fresh insights to drive growth.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[#E66E19]/40 hover:bg-white hover:shadow-lg">
            <span className="inline-block rounded-lg bg-[#0B132A]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0B132A]">
              Fresh Talent
            </span>
            <h3 className="mt-3 font-display text-lg font-bold text-[#0B132A]">
              Fresh Graduates
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We value the energy and innovation that recent graduates contribute, ensuring we stay agile and adaptable.
            </p>
          </div>
        </div>

        {/* TEAM MEMBERS GRID MAP */}
        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-[#0B132A] md:text-3xl">
          Executive & Operations Board
          </h3>
          <p className="mt-2 text-center text-sm text-slate-500">
            The dedicated people driving logistics excellence every day.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id || member.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Profile Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Member Info */}
                <div className="p-5 text-center">
                  <h4 className="font-display text-lg font-bold text-[#0B132A] transition-colors group-hover:text-[#E66E19]">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#E66E19]">
                    {member.role}
                  </p>
                  
                  {member.bio && (
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-2">
                      {member.bio}
                    </p>
                  )}

                  {/* Social Links (if present in object) */}
                  {member.socials && (
                    <div className="mt-4 flex justify-center gap-3 border-t border-slate-100 pt-3">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold text-slate-400 transition-colors hover:text-[#0B132A]"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="text-xs font-bold text-slate-400 transition-colors hover:text-[#E66E19]"
                        >
                          Email
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