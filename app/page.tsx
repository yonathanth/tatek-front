import Image from "next/image";
import Link from "next/link";
import { SchemaComponent } from "@/lib/schema-component";
import { reviewSchema, breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";
import {
  BUSINESS_LOCATION_LINE,
  OPENING_HOURS_HUMAN,
  PHONE_DISPLAY,
  PHONE_DISPLAY_SECONDARY,
  PHONE_E164,
  PHONE_E164_SECONDARY,
  SITE_BASE_URL,
  SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Premier Fitness & Wellness | Hawassa`,
  description:
    `Transform your body and mind at ${SITE_NAME} in Hawassa. Experience world-class fitness facilities, expert trainers, spa services, and wellness programs in the heart of Hawassa.`,
  openGraph: {
    title: `${SITE_NAME} — Hawassa's Premier Fitness Destination`,
    description:
      "Hawassa's leading gym and spa facility. Modern equipment, personal training, group classes, sauna, steam room, and complete wellness services.",
    url: SITE_BASE_URL,
  },
};

const heroSrc =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBD_ubbILvAn1VdV0XBZ-NLVSyyuLxIW2utRjOhw7N6waJpLEe5oaUbicIRAlF5wF3V0KaqYDbRY8LGbTXWByUB5yGQaj94MGVgmLw7CqhoSWFbdbyPLnt5DQaFeW8ZIq6bm3AcJpIj3pAxr6iJKYEyi8eT0ppGOgYLpDOe_s_zFXmk5RtHCGJW6giVy0x8dHHouHjdyKS_H0QusXgwTVeV4nqS1eMAKSFsXHXrPt47UuOmuMaEICzeolbYspjl4ZIJvXPXywHe2Wo";

const imgAerobics =
  "https://plus.unsplash.com/premium_photo-1661611110468-c592daec0a15?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&v=2";
const imgKickboxing =
  "https://images.unsplash.com/photo-1758778932703-7bfaaf1c42cd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imgSteam =
  "https://images.unsplash.com/photo-1755610146399-2bf78b0c1443?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imgSauna =
  "https://images.unsplash.com/photo-1749561531832-3d79bad2ffab?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-[#CCFF00] text-2xl">⚡</span>
          <span className="font-black uppercase tracking-tight">{SITE_NAME}</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
          <Link href="/services" className="hover:text-[#CCFF00] transition">Services</Link>
          <Link href="/about" className="hover:text-[#CCFF00] transition">About</Link>
          <Link href="/faq" className="hover:text-[#CCFF00] transition">FAQ</Link>
          <Link href="/contact" className="hover:text-[#CCFF00] transition">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/admin/login" className="text-sm font-medium hover:text-[#CCFF00] transition">
            Login
          </Link>
          <Link href="/register" className="bg-[#CCFF00] text-black text-sm px-5 py-2 rounded-full font-bold hover:bg-[#b8e600] transition">
            Join Now
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center py-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Shape Your Body,
            <br />
            Transform Your{" "}
            <span className="bg-[#CCFF00]/20 text-gray-900 px-2 rounded">
              Life
            </span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-md text-sm">
            Welcome to Hawassa's premier fitness and wellness destination. 
            Experience state-of-the-art equipment, expert trainers, and 
            comprehensive spa services designed to help you achieve your 
            health and fitness goals.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <Link href="/register" className="bg-[#CCFF00] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b8e600] transition">
              Join Now
            </Link>
            <Link href="/services" className="flex items-center gap-2 text-sm font-medium">
              <span className="bg-[#CCFF00]/20 rounded-full p-2">▶</span> View Services
            </Link>
          </div>
          <div className="flex gap-12 mt-10">
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-xs text-gray-500">EXPERT TRAINERS</p>
            </div>
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-xs text-gray-500">ACTIVE MEMBERS</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-900 rounded-3xl overflow-hidden aspect-[4/3] relative">
            <Image
              src="/hero-gym.jpg"
              alt="Trainer"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2 text-xs font-medium">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white" />
              </div>
              Certified Professional Trainers
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tatek Section */}
      <section className="px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center py-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Tatek Gym in Hawassa?
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
            Experience the perfect blend of fitness and wellness. Our facility 
            combines modern gym equipment, expert personal training, group classes, 
            and premium spa services to provide you with a complete health and 
            wellness experience.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm mb-6">
            <p className="flex items-center gap-2">
              <span className="text-[#CCFF00]">●</span> Modern Equipment
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#CCFF00]">●</span> Expert Trainers
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#CCFF00]">●</span> Spa & Wellness
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#CCFF00]">●</span> Group Classes
            </p>
          </div>
          <Link href="/services" className="bg-[#CCFF00] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b8e600] transition inline-block">
            Explore Services
          </Link>
        </div>
        <div className="rounded-3xl overflow-hidden aspect-square relative">
          <Image
            src="/gym-strength.jpg"
            alt="Strength training"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Flexible Access Section */}
      <section className="px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center py-16">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl overflow-hidden aspect-square relative">
            <Image src="/gym1.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden row-span-2 relative">
            <Image src="/gym2.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square relative">
            <Image src="/gym3.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Flexible Membership Plans That Fit Your Lifestyle
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
            Whether you're an early bird or a night owl, we offer flexible 
            membership options to suit your schedule. Train when it works for 
            you with our extended operating hours and convenient location in Hawassa.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <p className="font-semibold text-sm">✓ Extended Operating Hours:</p>
              <p className="text-gray-500 text-xs">
                Open {OPENING_HOURS_HUMAN.monSat} Monday to Saturday, {OPENING_HOURS_HUMAN.sunday} on Sundays.
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm">✓ Prime Location:</p>
              <p className="text-gray-500 text-xs">
                Conveniently located in the heart of Hawassa for easy access.
              </p>
            </div>
          </div>
          <Link href="/register" className="bg-[#CCFF00] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b8e600] transition inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Complete Wellness Section */}
      <section className="px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center py-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Complete Fitness & Wellness Experience
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
            Go beyond traditional fitness. Our comprehensive approach combines 
            cardio, strength training, functional fitness, group classes, and 
            premium spa services including sauna and steam rooms for complete 
            body recovery and wellness.
          </p>
          <div className="space-y-4 mb-6 text-sm">
            <div>
              <p className="font-semibold">01. Personal Training:</p>
              <p className="text-gray-500 text-xs">
                Work one-on-one with certified trainers to create customized workout plans.
              </p>
            </div>
            <div>
              <p className="font-semibold">02. Group Fitness Classes:</p>
              <p className="text-gray-500 text-xs">
                Join energizing group sessions including aerobics, yoga, and kickboxing.
              </p>
            </div>
            <div>
              <p className="font-semibold">03. Spa & Recovery:</p>
              <p className="text-gray-500 text-xs">
                Relax and recover with our sauna, steam room, and massage services.
              </p>
            </div>
          </div>
          <Link href="/services" className="bg-[#CCFF00] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b8e600] transition inline-block">
            View All Services
          </Link>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image src="/gym4.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-2xl overflow-hidden border-4 border-white">
            <Image src="/gym5.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Transform Your Life Section */}
      <section className="px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center py-16">
        <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
          <Image src="/gym6.jpg" alt="" fill className="object-cover" />
          <div className="absolute bottom-6 left-6 bg-violet-600 text-white rounded-xl p-4">
            <p className="text-xl font-bold">500+</p>
            <p className="text-xs">Happy Members</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Craft Your Physique, Transform Your Life
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
            Join Hawassa's most trusted fitness community. At Tatek Gym, 
            we provide everything you need to reach your fitness goals—from 
            cutting-edge equipment and expert guidance to a supportive community 
            that motivates you every step of the way.
          </p>
          <div className="flex gap-10 mb-6">
            <div>
              <p className="text-2xl font-bold">10+</p>
              <p className="text-xs text-gray-500">Expert Trainers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-xs text-gray-500">Active Members</p>
            </div>
            <div>
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs text-gray-500">Classes Weekly</p>
            </div>
          </div>
          <Link href="/about" className="bg-[#CCFF00] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b8e600] transition inline-block">
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="bg-gray-50 px-6 md:px-16 py-16 text-center">
        <h2 className="text-2xl font-bold mb-10">Premium Equipment & Trusted Brands</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center text-gray-400 font-semibold mb-8">
          <span>TECHNOGYM</span>
          <span>LIFE FITNESS</span>
          <span>PRECOR</span>
          <span>MATRIX</span>
          <span>HAMMER</span>
          <span>CYBEX</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center text-gray-400 font-semibold">
          <span>KEISER</span>
          <span>NAUTILUS</span>
          <span>ROGUE</span>
          <span>ELEIKO</span>
          <span>STAR TRAC</span>
        </div>
      </section>

      {/* Our Facilities & Services */}
      <section className="px-6 md:px-16 py-16">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Facilities & Services</h2>
            <p className="text-gray-500 text-sm max-w-md">
              Discover world-class facilities designed to support your fitness 
              journey. From cutting-edge gym equipment to relaxing spa services, 
              we have everything you need under one roof in Hawassa.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="border rounded-full w-10 h-10 flex items-center justify-center hover:border-[#CCFF00] transition">
              ←
            </button>
            <button className="bg-[#CCFF00] text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#b8e600] transition">
              →
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Cardio & Strength Training",
              desc: "State-of-the-art cardio machines and free weights for all fitness levels. Build strength and endurance with premium equipment.",
              color: "bg-pink-100 text-pink-500",
              icon: "💪",
            },
            {
              title: "Group Fitness Classes",
              desc: "Join our energizing group sessions including aerobics, yoga, kickboxing, and more. Expert instructors and supportive community.",
              color: "bg-blue-100 text-blue-500",
              icon: "🏃",
            },
            {
              title: "Sauna & Steam Room",
              desc: "Relax and recover in our premium spa facilities. Detoxify, relieve muscle tension, and rejuvenate your body after workouts.",
              color: "bg-teal-100 text-teal-500",
              icon: "♨",
            },
            {
              title: "Personal Training",
              desc: "One-on-one sessions with certified trainers. Get customized workout plans tailored to your goals and fitness level.",
              color: "bg-purple-100 text-purple-500",
              icon: "🎯",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${f.color}`}
              >
                {f.icon}
              </div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-xs mb-4">{f.desc}</p>
              <Link
                href="/services"
                className="text-[#CCFF00] text-xs font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center py-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
            Join hundreds of satisfied members who have transformed their lives 
            at Tatek Gym. Our community is our pride, and their success 
            stories inspire us every day.
          </p>
          <blockquote className="bg-[#CCFF00]/10 border-l-4 border-[#CCFF00] p-4 text-sm italic text-gray-600 max-w-sm">
            <span className="text-3xl text-[#CCFF00]/50">&ldquo;</span>
            Tatek has completely changed my approach to fitness. The trainers 
            are professional, the equipment is top-notch, and the spa facilities 
            are perfect for recovery. Best gym in Hawassa!
          </blockquote>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full border border-gray-200" />
          <div className="absolute inset-12 rounded-full border border-gray-200" />
          {[
            "top-0 left-1/3",
            "top-1/4 right-0",
            "bottom-1/4 left-0",
            "bottom-0 right-1/3",
            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "bottom-8 left-1/2",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow`}
            >
              <Image
                src={`/avatar${i + 1}.jpg`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 pb-0">
        <div className="bg-gradient-to-br from-[#CCFF00] to-[#a8d600] rounded-3xl text-center py-16 px-6">
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Fitness Journey? ☀ <br />
            <span className="underline">Join Tatek Today!</span>
          </h2>
          <Link href="/register" className="bg-black text-[#CCFF00] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition inline-block">
            Become a Member
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 px-6 md:px-16 py-16 mt-10">
        <div className="grid md:grid-cols-5 gap-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-white mb-4">
              <span className="text-[#CCFF00]">⚡</span> {SITE_NAME}
            </div>
            <p className="text-xs text-gray-500 max-w-xs">
              Hawassa's premier fitness and wellness destination. Transform your 
              body, elevate your mind, and join our thriving community.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              Our Services
            </h4>
            <ul className="text-xs space-y-2 text-gray-500">
              <li><Link href="/services" className="hover:text-[#CCFF00] transition">Gym & Fitness</Link></li>
              <li><Link href="/services" className="hover:text-[#CCFF00] transition">Personal Training</Link></li>
              <li><Link href="/services" className="hover:text-[#CCFF00] transition">Group Classes</Link></li>
              <li><Link href="/services" className="hover:text-[#CCFF00] transition">Spa & Wellness</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="text-xs space-y-2 text-gray-500">
              <li><Link href="/about" className="hover:text-[#CCFF00] transition">About Us</Link></li>
              <li><Link href="/register" className="hover:text-[#CCFF00] transition">Membership Plans</Link></li>
              <li><Link href="/faq" className="hover:text-[#CCFF00] transition">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#CCFF00] transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              Opening Hours
            </h4>
            <ul className="text-xs space-y-2 text-gray-500">
              <li>Mon - Sat: {OPENING_HOURS_HUMAN.monSat}</li>
              <li>Sunday: {OPENING_HOURS_HUMAN.sunday}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contact Us</h4>
            <p className="text-xs text-gray-500 mb-2">
              <a href={`tel:${PHONE_E164}`} className="hover:text-[#CCFF00] transition">{PHONE_DISPLAY}</a>
            </p>
            <p className="text-xs text-gray-500 mb-2">
              <a href={`tel:${PHONE_E164_SECONDARY}`} className="hover:text-[#CCFF00] transition">{PHONE_DISPLAY_SECONDARY}</a>
            </p>
            <p className="text-xs text-gray-500">Hawassa, Ethiopia</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <p>© 2024 - {SITE_NAME} · Hawassa's Premier Fitness Destination</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-[#CCFF00] cursor-pointer transition">Facebook</Link>
            <Link href="#" className="hover:text-[#CCFF00] cursor-pointer transition">Instagram</Link>
            <Link href="#" className="hover:text-[#CCFF00] cursor-pointer transition">TikTok</Link>
            <Link href="#" className="hover:text-[#CCFF00] cursor-pointer transition">Terms of Use</Link>
            <Link href="#" className="hover:text-[#CCFF00] cursor-pointer transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
