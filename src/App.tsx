import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const signatureRef = useRef<HTMLDivElement | null>(null);
  const signatureSVGRef = useRef<SVGPathElement | null>(null);
  const signatureLineRef = useRef<SVGLineElement | null>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !signatureRef.current ||
      !signatureSVGRef.current ||
      !signatureLineRef.current
    )
      return;

    const paragraphs =
      containerRef.current.querySelectorAll<HTMLParagraphElement>("p");
    const length = signatureSVGRef.current.getTotalLength();
    const lineLength = signatureLineRef.current.getTotalLength();

    // Create a master timeline
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });

    paragraphs.forEach((p) => {
      const words = p.innerText.split(" ");
      p.innerHTML = words
        .map((word) => `<span class="inline-block opacity-0">${word}</span>`)
        .join(" ");

      const spans = p.querySelectorAll<HTMLSpanElement>("span");

      // Create a timeline for each paragraph
      const tl = gsap.timeline();
      tl.to(spans, {
        opacity: 1,
        duration: 2,
        stagger: 0.05,
        ease: "power1.out",
      });

      // Add this paragraph timeline to master sequentially
      masterTl.add(tl);
    });

    masterTl.fromTo(
      signatureSVGRef.current,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
    );

    masterTl.fromTo(
      signatureLineRef.current,
      { strokeDasharray: lineLength, strokeDashoffset: lineLength },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
    );

    masterTl.to(signatureRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 mt-8 sm:mt-12 md:mt-16 lg:mt-20 font-serif">
      <h1 className="text-3xl sm:text-4xl md:text-5xl source-serif-bold">Teruntuk Zara,</h1>
      <div
        ref={containerRef}
        className="mt-6 sm:mt-8 tracking-tight flex flex-col sm:gap-4 text-justify gap-6 text-sm sm:text-base source-serif-4"
      >
        <p>Haloo sayangkuuuu, happy national girlfriendd dayy yaa!! ♡ </p>
        <p>
          Sorry yaa aku cuman bisa bikin surat lewat website soalnya kamu lagii
          jauh :( akuu pengen banget ketemuu ama kamuu tapi kayanya aku harus
          sabar2 nungguin kamu. But, enough about me missing you so much, today is
          about you! Aku cuman mau bilang, makasihh ya for being the best
          partner my lifee! Aku ngerasa kaya aku bener2 ga deserve someone like
          you in my life but aku bener2 bersyukur sama tuhan gara2 you came to
          my life.
        </p>
        <p>
          Aku inget pas aku nangis di pangku kamu ngeluahin all the things that
          are wrong in my life and the one who only cared about me is you and i
          really2 appreciate that. Aku juga inget all the fun times that we had
          while were going out to eat atau lagi dirumah kamu i feel like i can
          be myself when i was with you. Now that youre not here, it may seem
          like aku tu kaya ga peduli kalo kamu gaada tapi inside i really really
          really really really do! Aku ngerasa sepi, ngerasa gaada yang peduli,
          ama ngerasa aku tu kehilangan sesuatu yang sangat berharga banget di
          hidup aku.
        </p>
        <p>
          Kadang2 aku cemas aja kalo aku tu ga tahan kalo kamu gaada disini, aku
          cemas kalo ada something would happen to you, hidup aku gimana nanti
          :( Aku jujur gatahan kalo kamu misalkan uda gaada, aku kayanya bakal
          tulis surat tiap hari trus ngabisin duit buat beli bunga so i can
          pretend that youre there with me. Jujur now that i think about it, if
          i had a lot of money and udah married i would beliin the stuff that
          you want labubu, monchichi, makeups, cars, semua dahhh pokoknya.
          because i feel like kamu tuh berharga banget buat hidup aku. sorry ya
          aku kaya kadang2 judging mulu pas kamu mau beli barang2 yang kamu
          suka, lain kali kamu kalo aku kayak gitu lagi tegurin yaa, cubit
          sekalian for me in the future.
        </p>
        <p>
          Sorry i feel a bit emotional there tb tb think how would my life be
          without you, but thank god kamu masi ada, dan everyday aku bersyukur
          that kamu masi bernapas, kamu masi bisa ngomong ama aku, kamu masi mau
          sama aku, banyak lagii dehh! I just feel like i want to take care of
          you, forever. Anything you want ill try to accomplish :)
        </p>
        <p>
          Anywayss happy national girlfriend dayy sayanggg kuuu babyyy kuuuu myy
          loveeee ♡ semoga kita tahan ampe happy wife day yaa aminnnn
        </p>

        <div className="mt-12">
            <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 392.65 363.14"
            className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" // Added h-16 for smaller screens
            >
            <g id="Layer_1-2" data-name="Layer 1">
              <path
              className="stroke-3 stroke-neutral-950 fill-none"
              d="m.36,118.88S173.7-64.1,267.97,24.93c94.27,89.03-138.13,468.77-172.13,290.86-34-177.91,284.15-123.42,284.15-123.42"
              ref={signatureSVGRef}
              />
              <line
              className="stroke-3 stroke-neutral-950 fill-none"
              x1="166.72"
              y1="185.59"
              x2="387.32"
              y2="123.16"
              ref={signatureLineRef}
              />
            </g>
            </svg>
          <h1
            ref={signatureRef}
            className="text-xl sm:text-2xl opacity-0 mt-6 mb-10 source-serif-bold"
          >
            Yours Truly, Jakii
          </h1>
        </div>
      </div>
    </div>
  );
}
