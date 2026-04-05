import TopNavBar from "@/components/TopNavBar";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutFounder from "@/assets/about-founder.png";
import aboutFriends from "@/assets/about-friends.png";
import aboutGroup from "@/assets/about-group.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      <MainHeader />

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={aboutHero}
          alt="Mom working on laptop in cozy home"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif-display font-bold text-white text-3xl md:text-4xl lg:text-[44px] leading-snug mb-4">
            The honest answer for every baby product decision.
          </h1>
          <p className="font-serif-body text-white/80 text-base md:text-lg">
            Research-backed recommendations from a team that says no more often than yes.
          </p>
        </div>
      </section>

      {/* SECTION 2: YOU FOUND YOUR PEOPLE */}
      <section className="bg-background">
        <div className="max-w-[1200px] mx-auto px-6 py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-x-14 gap-y-10 items-center">
            {/* Left column */}
            <div className="flex flex-col gap-8">
              <h2 className="font-serif-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-foreground">
                You found your people.
              </h2>
              <p className="font-serif-body text-[15px] leading-[1.85] text-foreground">
                If you're here, you're probably the mom who Googled this at 11pm while the baby finally slept. You've been let down by a review that made something sound essential, and then it wasn't. You've seen through the sponsored content. You've returned things you were sure about. You just want someone who will be straight with you. That's exactly why this site exists.
              </p>
              <p className="font-serif-body text-[15px] leading-[1.85] text-foreground">
                Its Mom Approved was built for the mom who doesn't have time to read ten conflicting reviews and figure out which ones are real. You need a team that already did the work and will give you the honest answer, including when that answer is: don't buy it.
              </p>
              <p className="font-serif-body text-[15px] leading-[1.85] text-foreground">
                We say skip it just as readily as we say buy it, and we back both with real research. Every recommendation on this site is earned, not paid for. We reviewed the safety data, dug through the one-star reviews, and looked at real-mom feedback before we said yes.
              </p>
            </div>

            {/* Right column: 3 stacked images */}
            <div className="hidden lg:flex flex-col gap-4">
              <img
                src={aboutGroup}
                alt="Moms laughing together with kids"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
                width={640}
                height={430}
              />
              <img
                src={aboutFriends}
                alt="Women laughing together over smartphone"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
                width={640}
                height={430}
              />
              <img
                src={aboutFounder}
                alt="Moms chatting at the park"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
                width={640}
                height={430}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION STATEMENT */}
      <section style={{ backgroundColor: "#F9F6F2" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-[100px] text-center">
          <span
            className="block mb-8 uppercase font-sans-nav font-semibold"
            style={{ fontSize: "12px", letterSpacing: "3px", color: "#C4836A" }}
          >
            WHAT WE DO
          </span>
          <h2 className="font-serif-display text-foreground text-[28px] md:text-[40px] lg:text-[48px] leading-[1.3]">
            We say yes when the research earns it.
            <br />
            We say no when it doesn't.
            <br />
            And we always show our work.
          </h2>
        </div>
      </section>

      {/* SECTION 4: VALUE / MISSION / COMMITMENT */}
      <section className="bg-background">
        <div className="max-w-[900px] mx-auto px-6">
          {/* OUR VALUE */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-16 gap-y-4 py-[60px] border-b border-foreground/10">
            <h3
              className="font-sans-nav uppercase text-muted-foreground mb-0"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              OUR VALUE
            </h3>
            <p className="font-serif-body text-[17px] leading-[1.7] text-foreground">
              We recommend less so that what we do recommend actually means something. Every pick on this site earned its place. Most things didn't make it. Its Mom Approved is built on one idea: a site that recommends everything is recommending nothing. We protect the yes by saying no often, with real research behind every call.
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-16 gap-y-4 py-[60px] border-b border-foreground/10">
            <h3
              className="font-sans-nav uppercase text-muted-foreground mb-0"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              OUR MISSION
            </h3>
            <p className="font-serif-body text-[17px] leading-[1.7] text-foreground">
              To get every mom to a clear, confident answer in seconds, not hours. No rabbit holes. No conflicting opinions. Just the real verdict. Less time researching. More time with your baby. That's the whole point.
            </p>
          </div>

          {/* OUR COMMITMENT */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-16 gap-y-4 py-[60px]">
            <h3
              className="font-sans-nav uppercase text-muted-foreground mb-0"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              OUR COMMITMENT
            </h3>
            <p className="font-serif-body text-[17px] leading-[1.7] text-foreground">
              Every recommendation is backed by real data. We look at the safety record, the reviews, the recalls, and the real-mom feedback. Then we tell you what we actually think. When a product cleared the bar, we tell you why. When it didn't, we say so and point you to what actually works. No vague praise. No buried verdicts.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: EMAIL SIGNUP */}
      <section className="bg-nearblack">
        <div className="max-w-[1200px] mx-auto px-6 py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <h2 className="font-serif-display italic text-white text-2xl md:text-3xl lg:text-4xl leading-snug">
              Be the first to know what's worth it, and what to skip.
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-3 rounded-sm border border-white/20 bg-white/10 font-sans-nav text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-sm border border-white/20 bg-white/10 font-sans-nav text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40"
              />
              <button
                className="whitespace-nowrap px-6 py-3 rounded-[20px] text-xs uppercase tracking-[0.1em] font-sans-nav font-medium transition-colors"
                style={{ backgroundColor: "#C4836A", color: "#fff" }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;