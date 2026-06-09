import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CalendarHeart, Clock, Phone } from 'lucide-react';
import { useCountdown } from './useCountdown';

export default function App() {
  // Hedef tarih: Düğün günü
  const targetDate = '2026-06-27T19:00:00';
  const timeLeft = useCountdown(targetDate);

  const mapsLink = 'https://maps.app.goo.gl/utaZecVkkuTRKvpLA';
  const address = 'Aynalı Çarşı, Barış, Açelya Cd. No:7, 34520 Beylikdüzü/İstanbul';

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#302D29] font-sans pb-32 sm:pb-36 overflow-x-hidden selection:bg-[#EAE5DF]">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 text-center">
        {/* Soft decorative inner frame */}
        <div className="absolute inset-4 sm:inset-6 border border-[#EBE7E0] rounded-2xl pointer-events-none"></div>
        <div className="absolute inset-5 sm:inset-8 border border-[#EBE7E0] rounded-2xl pointer-events-none opacity-40"></div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center max-w-2xl mx-auto z-10"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#8F8980] font-medium mb-12">
            Evleniyoruz
          </p>

          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-[#24211D] leading-none mb-2">
            Merve
          </h1>
          <span className="font-serif italic text-3xl sm:text-4xl text-[#BFA888] my-4">ile</span>
          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-[#24211D] leading-none mt-2 mb-14">
            Zafer
          </h1>

          <p className="text-base sm:text-lg font-serif text-[#6C6760] leading-relaxed px-4 max-w-sm">
            Bu mutlu günümüzde siz sevgili dostlarımızı da aramızda görmekten onur duyarız.
          </p>
        </motion.div>
      </section>

      {/* Dates Section (Kına & Düğün) */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <CalendarHeart strokeWidth={1} className="w-10 h-10 mx-auto text-[#BFA888] mb-8" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24211D] mb-12">Tarihler</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Kına */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-[#F2F0EB] flex flex-col items-center"
                >
                    <h3 className="font-serif text-2xl text-[#24211D] mb-3 border-b border-[#F2F0EB] pb-4 w-full">Kına</h3>
                    <p className="text-lg font-medium text-[#6C6760] mt-4 mb-1">26 Haziran 2026</p>
                    <p className="text-sm text-[#8F8980]">Cuma</p>
                </motion.div>

                {/* Düğün */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-[#F2F0EB] flex flex-col items-center"
                >
                    <h3 className="font-serif text-2xl text-[#24211D] mb-3 border-b border-[#F2F0EB] pb-4 w-full">Düğün</h3>
                    <p className="text-lg font-medium text-[#6C6760] mt-4 mb-1">27 Haziran 2026</p>
                    <p className="text-sm text-[#8F8980]">Cumartesi</p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#24211D] mb-10">Büyük Güne Kalan</h2>

            <div className="flex justify-center gap-3 sm:gap-6">
                {[
                    { label: 'GÜN', value: timeLeft.days },
                    { label: 'SAAT', value: timeLeft.hours },
                    { label: 'DAKİKA', value: timeLeft.minutes },
                    { label: 'SANİYE', value: timeLeft.seconds },
                ].map((item, idx) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        key={item.label} 
                        className="flex flex-col items-center justify-center w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full border border-[#EBE7E0] shadow-sm"
                    >
                        <span className="font-serif text-xl sm:text-3xl text-[#302D29] mb-1">{item.value}</span>
                        <span className="text-[8px] sm:text-[10px] font-medium tracking-[0.2em] text-[#8F8980]">{item.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-24 bg-[#F5F4F0] px-6 relative">
         <div className="max-w-3xl mx-auto text-center">
            <MapPin strokeWidth={1} className="w-10 h-10 mx-auto text-[#BFA888] mb-8" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24211D] mb-10">Mekan</h2>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-10 sm:p-14 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#EBE7E0]"
            >
                <h3 className="font-serif text-2xl sm:text-3xl text-[#302D29] mb-6">Aynalı Çarşı Düğün Salonu</h3>
                <p className="text-[#6C6760] text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-8">
                    {address}
                </p>
                <div className="flex justify-center items-center gap-3 text-[#8F8980] font-medium border-t border-[#F2F0EB] pt-8">
                    <Clock className="w-5 h-5" />
                    <span>Düğün Saati: 19:00 - 23:00</span>
                </div>
            </motion.div>
         </div>
      </section>

      {/* Families Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24211D] mb-16">Aileler</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 text-center w-full max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-[10px] tracking-[0.25em] text-[#A89F91] uppercase mb-4">Gelinin Ailesi</p>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#302D29] mb-3 leading-snug">Semanur & Turgay<br/>GÜZEL</h3>
                    <a href="tel:+905550000000" className="inline-flex items-center gap-2 text-sm text-[#8F8980] hover:text-[#BFA888] transition-colors mt-2">
                        <Phone className="w-3 h-3" />
                        <span className="tracking-widest">0555 000 00 00</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-[10px] tracking-[0.25em] text-[#A89F91] uppercase mb-4">Damadın Ailesi</p>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#302D29] mb-3 leading-snug">Gülnur & İsmail<br/>AYHAN</h3>
                    <a href="tel:+905550000001" className="inline-flex items-center gap-2 text-sm text-[#8F8980] hover:text-[#BFA888] transition-colors mt-2">
                        <Phone className="w-3 h-3" />
                        <span className="tracking-widest">0555 000 00 01</span>
                    </a>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Decorative Footer Spacer */}
      <footer className="py-16 text-center">
          <p className="font-script text-4xl sm:text-5xl text-[#C2B7A8]">Merve & Zafer</p>
      </footer>

      {/* Fixed Sticky Footer for "Yol Tarifi Al" */}
      <div className="fixed bottom-0 left-0 w-full p-4 sm:p-6 bg-white/85 backdrop-blur-xl border-t border-[#EBE7E0]/60 z-50 flex justify-center shadow-[0_-20px_40px_rgba(0,0,0,0.03)]">
        <a 
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[280px] max-w-md flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#3A3733] to-[#24211D] text-white rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.15em] hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.98] transition-all gap-3 shadow-lg"
        >
            <MapPin className="w-4 h-4" opacity={0.8} />
            YOL TARİFİ AL
        </a>
      </div>
    </div>
  );
}
