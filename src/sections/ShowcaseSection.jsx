import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/cyber8.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
              Your Security Is Our Mission
              </h2>
              <p className="text-white-50 md:text-xl">
              Don’t wait for a breach to take action. Protect your data, your clients, and your reputation with a cybersecurity partner you can trust.

👉 Let’s talk security. Contact us today for a free consultation.


              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#fbfbfb]">
                <img
                  src="/images/cyber5.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>🔒 Cybersecurity Pro | CompTIA Security+ Certified </h2>
              <h3>Identify vulnerabilities before attackers do.</h3>
            </div> */}

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#fafafa]">
                <img src="/images/cyber7.png" alt="YC Directory App" />
              </div>
              <h2>🔒 Cybersecurity Pro | CompTIA Security+ Certified |</h2>
              <h3>Passionate about protecting digital assets and securing networks against modern threats. Equipped with hands-on experience, a strong technical foundation, and a proactive mindset to identify vulnerabilities, implement solutions, and keep businesses secure.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
