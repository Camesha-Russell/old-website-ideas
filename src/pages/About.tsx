import TopNavBar from "@/components/TopNavBar";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import NewsletterBlock from "@/components/NewsletterBlock";
import aboutHero from "@/assets/about-hero.jpg";
import aboutFounder from "@/assets/about-founder.png";
import aboutFriends from "@/assets/about-friends.png";
import aboutGroup from "@/assets/about-group.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      <MainHeader />

      {/* SECTION 1: HERO BANNER */}
      <section className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={aboutHero}
          alt="Mom working on laptop in cozy home"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="nav-link text-white/80 text-[10px] tracking-[0.2em] block mb-4">
            ITS MOM APPROVED
          </span>
          <h1 className="font-serif-display font-bold text-white text-3xl md:text-4xl lg:text-[44px] leading-snug">
            The honest answer for every baby product decision.
          </h1>
        </div>
      </section>

      {/* SECTION 2: FOUNDER — "You found your people" */}
      <section className="bg-background">
        <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-x-14 gap-y-10 items-start">
            {/* Left: headline + two text blocks */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Headline */}
              <div>
                <h2 className="font-serif-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-foreground mb-3">
                  You found your people.
                </h2>
                <p className="font-serif-display text-lg md:text-xl text-muted-foreground">
                  For the mom who's done buying things that didn't deliver
                </p>
              </div>

              {/* Two-column body text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-6">
                  <p className="font-serif-body text-[15px] leading-[1.85] text-foreground">
                    If you're here, you're probably the mom who Googled this at 11pm while the baby finally slept. You've been let down by a review that made something sound essential, and then it wasn't. You've seen through the sponsored content. You've returned things you were sure about. You just want someone who will be straight with you. That's exactly why this site exists.
                  </p>
                  <p className="font-serif-body text-[15px] leading-[1.85] text-foreground">
                    Its Mom Approved was built for the mom who doesn't have time to read ten conflicting reviews and figure out which ones are real. You need a team that already did the work and will give you the honest answer, including when that answer is: don't buy it.
                  </p>
                </div>
                <div>
                  <p className="font-serif-body text-[15px] leading-[1.85] text-foreground">
                    We say skip it just as readily as we say buy it, and we back both with real research. Every recommendation on this site is earned, not paid for. We reviewed the safety data, dug through the one-star reviews, and looked at real-mom feedback before we said yes. When something didn't clear the bar, we tell you exactly what to get instead. One honest skip earns more trust than ten breathless recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: stacked photos */}
            <div className="hidden lg:flex flex-col gap-5">
              <img
                src={aboutGroup}
                alt="Moms laughing together with kids"
                className="w-full h-auto object-cover rounded-sm"
                loading="lazy"
                width={640}
                height={430}
              />
              <img
                src={aboutFriends}
                alt="Women laughing together over smartphone"
                className="w-full h-auto object-cover rounded-sm"
                loading="lazy"
                width={640}
                height={430}
              />
              <img
                src={aboutFounder}
                alt="Moms chatting at the park"
                className="w-full h-auto object-cover rounded-sm"
                loading="lazy"
                width={640}
                height={430}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO */}
      <section className="bg-background border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32 lg:py-36">
          {/* Header */}
          <div className="text-center mb-20 md:mb-28">
            <span className="nav-link text-muted-foreground text-[11px] tracking-[0.25em] block mb-8">
              WHAT WE DO
            </span>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[52px] max-w-5xl mx-auto text-foreground text-center flex flex-col items-center gap-3 md:gap-5 lg:gap-6">
              <span className="block leading-[1.1]">We say yes when the research earns it.</span>
              <span className="block leading-[1.1]">We say no when it doesn't.</span>
              <span className="block leading-[1.1]">And we always show our work.</span>
            </h2>
          </div>

          {/* Value / Mission / Commitment rows */}
          <div className="divide-y divide-foreground/10">
            {/* OUR VALUE */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-16 gap-y-4 py-14 md:py-16">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.2em] text-muted-foreground mb-0">
                  OUR VALUE
                </h3>
              </div>
              <div className="space-y-6">
                <p className="font-serif-body text-[17px] leading-[1.8] text-foreground">
                  We recommend less so that what we do recommend actually means something. Every pick on this site earned its place. Most things didn't make it.
                </p>
                <p className="font-serif-body text-[15px] leading-[1.8] text-muted-foreground">
                  Its Mom Approved is built on one idea: a site that recommends everything is recommending nothing. We protect the yes by saying no often, with real research behind every call.
                </p>
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-16 gap-y-4 py-14 md:py-16">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.2em] text-muted-foreground mb-0">
                  OUR MISSION
                </h3>
              </div>
              <div className="space-y-6">
                <p className="font-serif-body text-[17px] leading-[1.8] text-foreground">
                  To get every mom to a clear, confident answer in seconds, not hours. No rabbit holes. No conflicting opinions. Just the real verdict.
                </p>
                <p className="font-serif-display text-2xl md:text-[28px] lg:text-[30px] leading-[1.45] text-foreground mt-4">
                  Less time researching. More time with your baby. That's the whole point.
                </p>
              </div>
            </div>

            {/* OUR COMMITMENT */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-16 gap-y-4 py-14 md:py-16">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.2em] text-muted-foreground mb-0">
                  OUR COMMITMENT
                </h3>
              </div>
              <div className="space-y-6">
                <p className="font-serif-body text-[17px] leading-[1.8] text-foreground">
                  Every recommendation is backed by real data. We look at the safety record, the reviews, the recalls, and the real-mom feedback. Then we tell you what we actually think.
                </p>
                <p className="font-serif-body text-[15px] leading-[1.8] text-muted-foreground">
                  When a product cleared the bar, we tell you why and what to look for. When it didn't, we say so and point you to what actually works. No vague praise. No buried verdicts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: NEWSLETTER */}
      <NewsletterBlock />

      <Footer />
    </div>
  );
};

export default About;
