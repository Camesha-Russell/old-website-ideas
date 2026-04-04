import TopNavBar from "@/components/TopNavBar";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import NewsletterBlock from "@/components/NewsletterBlock";
import aboutHero from "@/assets/about-hero.jpg";
import aboutFounder from "@/assets/about-founder.jpg";

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

      {/* SECTION 2: FOUNDER */}
      <section className="bg-background">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          {/* Headline + subtitle */}
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-2">
            You found your people.
          </h2>
          <p className="font-serif-display italic text-lg md:text-xl text-muted-foreground mb-10">
            For the mom who's done buying things that didn't deliver
          </p>

          {/* 3-column grid: two text cols + photo */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.1fr] gap-x-10 gap-y-8 items-start">
            {/* Col 1 */}
            <div className="space-y-6">
              <p className="font-serif-body text-sm leading-relaxed text-foreground">
                If you're here, you're probably the mom who Googled this at 11pm while the baby finally slept. You've been let down by a review that made something sound essential, and then it wasn't. You've seen through the sponsored content. You've returned things you were sure about. You just want someone who will be straight with you. That's exactly why this site exists.
              </p>
              <p className="font-serif-body text-sm leading-relaxed text-foreground">
                Its Mom Approved was built for the mom who doesn't have time to read ten conflicting reviews and figure out which ones are real. You need a team that already did the work and will give you the honest answer, including when that answer is: don't buy it.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <p className="font-serif-body text-sm leading-relaxed text-foreground">
                We say skip it just as readily as we say buy it, and we back both with real research. Every recommendation on this site is earned, not paid for. We reviewed the safety data, dug through the one-star reviews, and looked at real-mom feedback before we said yes. When something didn't clear the bar, we tell you exactly what to get instead. One honest skip earns more trust than ten breathless recommendations.
              </p>
            </div>

            {/* Col 3: Photo */}
            <div className="hidden lg:block lg:row-span-1">
              <img
                src={aboutFounder}
                alt="Founder portrait"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={640}
                height={860}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO */}
      <section className="bg-background">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="nav-link text-muted-foreground text-[10px] tracking-[0.2em] block mb-4">
              WHAT WE DO
            </span>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[40px] leading-snug max-w-3xl mx-auto text-foreground">
              We say yes when the research earns it. We say no when it doesn't. And we always show our work.
            </h2>
          </div>

          {/* Value / Mission / Commitment rows */}
          <div className="space-y-0">
            {/* OUR VALUE */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-x-16 gap-y-4 py-10 border-b border-border">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.15em] mb-3 text-foreground">OUR VALUE</h3>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  We recommend less so that what we do recommend actually means something. Every pick on this site earned its place. Most things didn't make it.
                </p>
              </div>
              <div>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  Its Mom Approved is built on one idea: a site that recommends everything is recommending nothing. We protect the yes by saying no often, with real research behind every call.
                </p>
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-x-16 gap-y-4 py-10 border-b border-border">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.15em] mb-3 text-foreground">OUR MISSION</h3>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  To get every mom to a clear, confident answer in seconds, not hours. No rabbit holes. No conflicting opinions. Just the real verdict.
                </p>
              </div>
              <div>
                <p className="font-serif-display italic text-2xl md:text-3xl leading-snug text-foreground">
                  Less time researching. More time with your baby. That's the whole point.
                </p>
              </div>
            </div>

            {/* OUR COMMITMENT */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-x-16 gap-y-4 py-10">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.15em] mb-3 text-foreground">OUR COMMITMENT</h3>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  Every recommendation is backed by real data. We look at the safety record, the reviews, the recalls, and the real-mom feedback. Then we tell you what we actually think.
                </p>
              </div>
              <div>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
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
