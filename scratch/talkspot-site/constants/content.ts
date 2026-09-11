export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string[];
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
}

export interface Branch {
  name: string;
  address: string;
  phone: string[];
  email: string;
  mapEmbed?: string;
}

export interface Testimonial {
  author: string;
  text: string;
  rating: number;
  relation: string;
}

export const SITE_INFO = {
  name: "EchoStar",
  tagline: "Speech & Language Therapy Center",
  email: "echostar.india@gmail.com",
  primaryPhone: "+91-9812506562",
  whatsappUrl: "https://api.whatsapp.com/send?phone=+919812506562&text=Hello,I Want to Know About...",
  telUrl: "tel:+91-9812506562"
};

export const SERVICES: Service[] = [
  {
    slug: "abatherapy",
    title: "ABA Therapy",
    shortDesc: "Applied Behavior Analysis therapy focuses on improving specific behaviors, such as social skills, communication, reading, and academics.",
    image: "/images/services/aba-therapy.jpg",
    longDesc: [
      "Applied Behavior Analysis (ABA) is a type of therapy that focuses on improving specific behaviors, such as social skills, communication, reading, and academics as well as adaptive learning skills, such as fine motor dexterity, hygiene, grooming, domestic capabilities, punctuality, and job competence.",
      "ABA is effective for children and adults with psychological disorders in a variety of settings, including schools, workplaces, homes, and clinics. It has been shown that consistent ABA principles can significantly bring about positive changes in behavior and learning patterns.",
      "At EchoStar, our ABA program is highly customized. Each child undergoes a detailed assessment to identify their current skill levels and areas needing support. Our certified therapists then design a structured protocol focused on positive reinforcement, prompt fading, and task analysis, helping children achieve independence in daily life."
    ]
  },
  {
    slug: "speech",
    title: "Speech Therapy",
    shortDesc: "Professional speech therapy to treat speech delays, articulation issues, pronunciation, and other communicative disorders.",
    image: "/images/services/speech-therapy.jpg",
    longDesc: [
      "Speech therapy is an intervention service that focuses on improving a child's speech and ability to understand and express language, including nonverbal language.",
      "Speech-language pathologists (SLPs), or speech therapists, provide these services. The therapy helps with articulation (pronunciation), fluency (stuttering), resonance or voice issues, and oral feeding disorders (eating/swallowing difficulties).",
      "Our speech therapy sessions at EchoStar are interactive and engaging. We utilize specialized tools, games, and auditory-verbal prompts to encourage children to vocalize correctly, build vocabulary, and speak with confidence and clarity."
    ]
  },
  {
    slug: "language",
    title: "Language & Communication Therapy",
    shortDesc: "Therapy aimed at improving comprehension, sentence formation, vocabulary usage, and expressive communication skills.",
    image: "/images/services/language-therapy.jpg",
    longDesc: [
      "Language and communication therapy focuses on both receptive language (the ability to understand spoken and written words) and expressive language (the ability to use words, signs, and gestures to express ideas and requests).",
      "Many children experience speech delays where they can make sounds but cannot formulate sentences or understand commands. This therapy bridges that gap through structured communication exercises, social stories, and visual aids.",
      "At EchoStar, we address receptive-expressive language disorders by building vocabulary, improving sentence structure, and developing conversational skills so children can successfully interact with peers, family, and educators."
    ]
  },
  {
    slug: "oralfeeding",
    title: "Speech Clarity and Oral Feeding Therapy",
    shortDesc: "Specialized therapy targeting feeding difficulties, swallowing disorders, and improving muscle coordination for speech clarity.",
    image: "/images/services/oral-feeding.jpg",
    longDesc: [
      "Oral feeding and speech clarity therapy addresses difficulties related to the muscles of the mouth, jaw, lips, and tongue. It is designed for children who face feeding challenges (such as picky eating, trouble chewing, or swallowing) and clarity issues (difficulty pronouncing specific speech sounds clearly).",
      "Therapists work on strengthening oral motor muscles and coordination. By using specialized exercises, textures, and activities, we help children safely swallow food and improve their overall articulation.",
      "At EchoStar, we provide a safe and supportive environment for oral motor training, helping children transition from pureed to solid foods, reduce food sensitivity, and achieve clear, intelligible speech."
    ]
  },
  {
    slug: "stutering",
    title: "Stuttering & Stammering Therapy",
    shortDesc: "Focuses on speech fluency, rhythm, confidence, and reducing stuttering using specialized speech techniques.",
    image: "/images/services/stuttering.jpg",
    longDesc: [
      "Stuttering (also known as stammering) is a speech disorder that involves frequent and significant problems with the normal fluency and flow of speech. People who stutter know what they want to say, but have difficulty saying it.",
      "This therapy helps individuals control their speech rate, practice breathing techniques, and reduce anxiety or stress related to speaking in social settings. We focus on enhancing fluency and building high self-esteem.",
      "Our specialized stuttering program at EchoStar guides patients through prolonged speech techniques, diaphragmatic breathing, and desensitization, helping them speak smoothly in conversations, presentations, and phone calls."
    ]
  },
  {
    slug: "specialedu",
    title: "Special Education Therapy",
    shortDesc: "Customized learning strategies for children with learning difficulties, ADHD, Autism, and cognitive delays.",
    image: "/images/services/special-edu.jpg",
    longDesc: [
      "Special education therapy is designed to support children who have learning difficulties or disabilities. It provides tailored learning strategies, academic support, and behavioral interventions to help students keep pace with their schooling.",
      "It focuses on cognitive development, basic math, reading, writing skills, and attention span. Therapists work closely with parents and schools to design Individualized Education Plans (IEPs).",
      "EchoStar's special educators employ multi-sensory teaching approaches, simplified learning steps, and positive reinforcement to help children overcome academic barriers, improve focus, and develop school readiness skills."
    ]
  },
  {
    slug: "occupation",
    title: "Occupational Therapy",
    shortDesc: "Enhancing fine motor skills, sensory integration, hand-eye coordination, and independence in daily activities.",
    image: "/images/services/occupational-therapy.jpg",
    longDesc: [
      "Occupational Therapy (OT) helps children develop the cognitive, physical, sensory, and motor skills they need to perform everyday tasks independently.",
      "It is highly beneficial for children with sensory processing disorders, coordination difficulties, handwriting challenges, and balance issues. OT activities focus on fine motor skills (writing, cutting), gross motor skills (jumping, balance), and sensory integration.",
      "EchoStar features a fully equipped sensory integration gym where occupational therapists guide children through structured play, swing exercises, obstacle courses, and fine-motor tasks. This builds body awareness, self-regulation, and functional daily life skills."
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Akash Chauhan",
    role: "Director & Speech Therapist",
    experience: "5 Years Experience",
    image: "/nimg/akash-chauhan.jpg"
  },
  {
    name: "Vaishnavi Singh",
    role: "Language & ABA Therapist",
    experience: "5 Years Experience",
    image: "/images/team/vaishnavi.jpg"
  },
  {
    name: "Vikas Chauhan",
    role: "Speech & Swallow Specialist",
    experience: "Speech & Articulation Expert",
    image: "/images/team/vikas.jpg"
  }
];

export const BRANCHES: Branch[] = [
  {
    name: "Gurugram Centre",
    address: "Gurugram, Sohna, Faridabad, Delhi",
    phone: ["+91-9812506562"],
    email: "echostar.india@gmail.com"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Vishal Singha",
    text: "Excellent therapy center in Gurgaon. My son's speech has improved significantly in just 3 months. The therapists are extremely patient and professional.",
    rating: 5,
    relation: "Parent of 4yo Child"
  },
  {
    author: "Pooja Sharma",
    text: "Very dedicated team. Akash sir and Vaishnavi ma'am provide personalized attention. Highly recommend EchoStar for speech delay and behavioral therapy.",
    rating: 5,
    relation: "Parent of 5yo Child"
  },
  {
    author: "Rakesh Yadav",
    text: "The Occupational Therapy gym is very well-equipped. We have seen great improvement in my nephew's sensory regulation and fine motor coordination.",
    rating: 5,
    relation: "Uncle of 6yo Child"
  },
  {
    author: "Preeti Rao",
    text: "Best center in Rewari and Gurgaon. Therapists work with passion and guide parents on how to continue activities at home as well. Very professional.",
    rating: 5,
    relation: "Parent of 3.5yo Child"
  }
];

export const HERO_SLIDES = [
  {
    image: "/images/hero/hero-1.jpg",
    title: "Empowering Children with Better Communication",
    subtitle: "Professional Speech, Language & Behavior Therapy designed for your child's success."
  },
  {
    image: "/images/hero/hero-2.jpg",
    title: "Dedicated Speech & ABA Therapy Specialists",
    subtitle: "Customized therapy sessions to bridge speech delays and behavioral challenges."
  },
  {
    image: "/images/hero/hero-3.jpg",
    title: "Sensory & Occupational Integration Gym",
    subtitle: "Helping children develop physical, sensory, and fine motor skills for independence."
  }
];

export const GALLERY_IMAGES = [
  { src: "/images/gallery/gallery-1.jpg", alt: "Therapy session in progress" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Sensory integration gym" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Speech therapist working with child" },
  { src: "/images/gallery/gallery-4.jpg", alt: "ABA therapy session" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Cake cutting event celebration at center" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Our speech therapy materials and games" },
  { src: "/images/gallery/gallery-7.jpg", alt: "Team photo at EchoStar" },
  { src: "/images/gallery/gallery-8.jpg", alt: "Clinic play area for children" }
];
