import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ReactNode } from "react";
import { useLang } from "../context/LangContext";
import SectionHead from "./sectionhead";

const t = {
  en: {
    eyebrow: "Stories",
    title: <>Messages from our <em className="font-display italic text-red-600">leadership</em>.</>,
    items: [
      {
        q: "I took charge as the Chairman of the State Transport Corporation and decided to face many tough challenges with my company. Regardless of the situation, the mood should be strong. I believe in mental strength, study and continuous effort.",
        n: "Shri. Pratap Indirabai Baburao Sarnaik",
        r: "Hon. Minister of Transport (Maharashtra State) & Chairman, MSRT Corporation",
      },
      {
        q: "Maharashtra State Road Transport Corporation is constantly striving to provide adequate, cost-effective, regular and efficient services to the people of the state. It is the only state transport corporation in the country to reach almost all the villages in Maharashtra.",
        n: "Dr. Madhav Kusekar (I.A.S.)",
        r: "Vice Chairman and Managing Director, MSRT Corporation",
      },
      {
        q: "The Shivneri class is the new standard. It made flying for 150km feel ridiculous.",
        n: "Rohan D.",
        r: "Engineer, Andheri",
      },
    ],
  },
  mr: {
    eyebrow: "संदेश",
    title: <>आमच्या <em className="font-display italic text-red-600">नेतृत्वाचे</em> संदेश.</>,
    items: [
      {
        q: "मी राज्य परिवहन महामंडळाचे अध्यक्षपद स्वीकारले आणि अनेक कठीण आव्हानांना तोंड देण्याचा निर्णय घेतला. परिस्थिती कशीही असो, मनोबल मजबूत असले पाहिजे. मानसिक शक्ती, अभ्यास आणि सतत प्रयत्नांवर माझा विश्वास आहे.",
        n: "श्री. प्रताप इंदिराबाई बाबूराव सरनाईक",
        r: "मा. परिवहन मंत्री (महाराष्ट्र राज्य) व अध्यक्ष, MSRT महामंडळ",
      },
      {
        q: "महाराष्ट्र राज्य मार्ग परिवहन महामंडळ राज्यातील जनतेला पुरेशा, किफायतशीर, नियमित आणि कार्यक्षम सेवा प्रदान करण्यासाठी सतत प्रयत्नशील आहे. महाराष्ट्रातील जवळपास सर्व गावांपर्यंत पोहोचणारी ही देशातील एकमेव राज्य परिवहन संस्था आहे.",
        n: "डॉ. माधव कुसेकर (IAS)",
        r: "उपाध्यक्ष व व्यवस्थापकीय संचालक, MSRT महामंडळ",
      },
      {
        q: "शिवनेरी क्लास हा नवा मानदंड आहे. १५० किमीसाठी विमानाने जाणे त्यामुळे विनोदी वाटले.",
        n: "रोहन डी.",
        r: "अभियंता, अंधेरी",
      },
    ],
  },
};

function Testimonials() {
  const { lang } = useLang();
const tx = t[lang as keyof typeof t];
  return (
    <section id="stories" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHead eyebrow={tx.eyebrow} title={tx.title} />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {tx.items.map((x, i) => (
          <motion.figure
            key={x.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="rounded-3xl border border-border bg-white p-8 shadow-soft"
          >
            <div className="flex gap-0.5 text-amber-500">
              {[1,2,3,4,5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <blockquote className="mt-6 font-display text-sm leading-snug">"{x.q}"</blockquote>
            <figcaption className="mt-8 text-sm">
              <div className="font-medium">{x.n}</div>
              <div className="text-ink-soft">{x.r}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;