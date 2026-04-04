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
      <section className="bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Left: Text */}
            <div>
              <h2 className="font-serif-display text-4xl md:text-5xl text-foreground mb-2">
                You found your people.
              </h2>
              <p className="font-serif-display italic text-lg md:text-xl text-muted-foreground mb-8">
                For the mom who's done buying things that didn't deliver
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                <div className="space-y-6">
                  <p className="font-serif-body text-sm leading-relaxed text-foreground">
                    If you're here, you're probably the mom who Googled this at 11pm while the baby finally slept. You've been let down by a review that made something sound essential, and then it wasn't. You've seen through the sponsored content. You've returned things you were sure about. You just want someone who will be straight with you. That's exactly why this site exists.
                  </p>
                  <p className="font-serif-body text-sm leading-relaxed text-foreground">
                    Its Mom Approved was built for the mom who doesn't have time to read ten conflicting reviews and figure out which ones are real. You need a team that already did the work and will give you the honest answer, including when that answer is: don't buy it.
                  </p>
                </div>
                <div>
                  <p className="font-serif-body text-sm leading-relaxed text-foreground">
                    We say skip it just as readily as we say buy it, and we back both with real research. Every recommendation on this site is earned, not paid for. We reviewed the safety data, dug through the one-star reviews, and looked at real-mom feedback before we said yes. When something didn't clear the bar, we tell you exactly what to get instead. One honest skip earns more trust than ten breathless recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="hidden lg:block">
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
              We help moms of babies and toddlers cut through the noise with honest, research-backed picks they can actually trust.
            </h2>
          </div>

          {/* Value / Mission / Commitment rows */}
          <div className="space-y-0">
            {/* OUR VALUE */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-x-16 gap-y-4 py-10 border-b border-border">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.15em] mb-3 text-foreground">OUR VALUE</h3>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  We earn trust by recommending less. Every product that makes it here cleared a real bar. Plenty didn't, and we tell you which ones and why.
                </p>
              </div>
              <div>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  Its Mom Approved was built on one idea: the most useful thing we can do for a mom who's close to a decision is be honest with her. That means naming the actual price, showing our research, and saying don't buy this when the data points that way.
                </p>
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-x-16 gap-y-4 py-10 border-b border-border">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.15em] mb-3 text-foreground">OUR MISSION</h3>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  To give every mom a clear, honest answer within seconds of landing here. No buried verdicts. No vague praise. Just the real call and exactly how we got there.
                </p>
              </div>
              <div>
                <p className="font-serif-display italic text-2xl md:text-3xl leading-snug text-foreground">
                  Our mission is to help moms spend less time researching and more time with the babies they're shopping for. We give you the real answer, and we show our work.
                </p>
              </div>
            </div>

            {/* OUR COMMITMENT */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-x-16 gap-y-4 py-10">
              <div>
                <h3 className="nav-link text-[11px] tracking-[0.15em] mb-3 text-foreground">OUR COMMITMENT</h3>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  We say skip it just as readily as we say buy it. And we always tell you what to get instead.
                </p>
              </div>
              <div>
                <p className="font-serif-body text-sm leading-relaxed text-foreground">
                  Every recommendation cleared a real threshold. We looked at the reviews, the safety data, the recalls, and the real-mom experience before we said yes. When something didn't clear the bar, we said so, and pointed you to something better.
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
