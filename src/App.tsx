import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CalendarHeart, Clock, Phone, ChevronDown, Car, TrainFront, Info } from 'lucide-react';
import { useCountdown } from './useCountdown';

export default function App() {
  const targetDate = '2026-06-27T19:00:00';
  const timeLeft = useCountdown(targetDate);

  const mapsLink = 'https://maps.app.goo.gl/utaZecVkkuTRKvpLA';
  const address = 'Aynalı Çarşı, Barış, Açelya Cd. No:7, 34520 Beylikdüzü/İstanbul';

  return (
    <div className="min-h-screen bg-[#EBE7E0] flex justify-center selection:bg-[#D4AF37] selection:text-white">
      <div className="w-full max-w-[480px] bg-[#FAF8F5] text-[#2A2723] font-sans pb-32 sm:pb-36 overflow-x-hidden relative shadow-2xl min-h-screen">

        {/* Hero Section - 100dvh (Tam Ekran Sığan Yapı) */}
        <section className="relative h-[100dvh] w-full flex flex-col justify-end pb-10 sm:pb-12 text-center">
          
          {/* Background Image (Üst %60) ve Geçiş */}
          <div className="absolute inset-0 z-0 bg-[#FAF8F5] flex flex-col">
            <div className="w-full h-[65%] sm:h-[60%] relative">
                <img 
                  src="/bizz.png" 
                  alt="Merve & Zafer" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Resmin altından arka plan rengine çok yumuşak geçiş */}
                <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[#FAF8F5] to-transparent"></div>
            </div>
          </div>

          {/* Hero Content (Alt %35-40 - Kaydırmadan Görünür) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-20 flex flex-col items-center w-full px-4"
          >
            <p className="text-[11px] sm:text-[13px] tracking-[0.5em] uppercase text-[#CBA373] font-bold mb-3 sm:mb-4 drop-shadow-sm">
              Evleniyoruz
            </p>

            <div className="flex flex-col items-center justify-center leading-none">
                <h1 className="font-script text-[5.5rem] sm:text-8xl text-[#2A2723] m-0 p-0">
                  Merve
                </h1>
                <span className="font-serif italic text-2xl sm:text-3xl text-[#CBA373] -my-2 sm:-my-4 relative z-10">&</span>
                <h1 className="font-script text-[5.5rem] sm:text-8xl text-[#2A2723] m-0 p-0">
                  Zafer
                </h1>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="relative z-20 mt-4 sm:mt-6 flex flex-col items-center gap-1.5 cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
              <span className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase font-bold text-[#7A7265]">Aşağı Kaydır</span>
              <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="bg-white rounded-full p-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-[#E8E2D9] mt-1"
              >
                  <ChevronDown className="w-5 h-5 text-[#CBA373]" strokeWidth={2.5} />
              </motion.div>
          </motion.div>
        </section>

        {/* Invitation Text */}
        <section className="py-14 px-6 relative z-10">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center"
          >
              <p className="text-lg sm:text-[19px] font-serif text-[#5A544A] leading-relaxed italic">
                  "Hayatımızın en anlamlı gününde, sevincimizi paylaşmak üzere siz değerli dostlarımızı aramızda görmekten mutluluk duyarız."
              </p>
              <div className="w-16 h-[1px] bg-[#CBA373]/50 mx-auto mt-8"></div>
          </motion.div>
        </section>

        {/* Dates Section (Kına & Düğün) */}
        <section className="py-10 px-5">
          <div className="text-center">
              <CalendarHeart strokeWidth={1} className="w-8 h-8 mx-auto text-[#CBA373] mb-5" />
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2723] mb-8 uppercase tracking-[0.2em]">Tarihler</h2>

              <div className="flex flex-col gap-5">
                  {/* Kına */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-white border border-[#E8E2D9] shadow-sm p-8 rounded-3xl flex flex-col items-center relative overflow-hidden"
                  >
                      <div className="absolute top-0 w-full h-1 bg-[#CBA373]/20"></div>
                      <h3 className="font-serif text-2xl text-[#2A2723] mb-2">Kına</h3>
                      <p className="text-[19px] font-serif text-[#5A544A] mb-1">26 Haziran 2026</p>
                      <p className="text-[10px] tracking-[0.3em] text-[#A39785] uppercase mb-4">Cuma</p>
                      <div className="flex items-center gap-2 text-[#7A7265] bg-[#FAF8F5] px-4 py-2 rounded-full border border-[#E8E2D9]">
                          <Clock className="w-3.5 h-3.5 text-[#CBA373]" />
                          <span className="text-xs font-medium">19:00 - 23:00</span>
                      </div>
                  </motion.div>

                  {/* Düğün */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-white border border-[#E8E2D9] shadow-sm p-8 rounded-3xl flex flex-col items-center relative overflow-hidden"
                  >
                      <div className="absolute top-0 w-full h-1 bg-[#CBA373]/20"></div>
                      <h3 className="font-serif text-2xl text-[#2A2723] mb-2">Düğün</h3>
                      <p className="text-[19px] font-serif text-[#5A544A] mb-1">27 Haziran 2026</p>
                      <p className="text-[10px] tracking-[0.3em] text-[#A39785] uppercase mb-4">Cumartesi</p>
                      <div className="flex items-center gap-2 text-[#7A7265] bg-[#FAF8F5] px-4 py-2 rounded-full border border-[#E8E2D9]">
                          <Clock className="w-3.5 h-3.5 text-[#CBA373]" />
                          <span className="text-xs font-medium">19:00 - 23:00</span>
                      </div>
                  </motion.div>
              </div>
              
              <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="mt-6 inline-flex items-center gap-2 text-[11px] text-[#7A7265] italic"
              >
                  <Info className="w-3.5 h-3.5 text-[#CBA373]" />
                  <span>Kına ve Düğün törenimiz aynı mekanda gerçekleşecektir.</span>
              </motion.div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-14 px-4">
          <div className="text-center bg-white border border-[#E8E2D9] shadow-sm rounded-3xl p-8 mx-1">
              <h2 className="font-serif text-[13px] text-[#A39785] mb-8 tracking-[0.25em] uppercase font-semibold">Büyük Güne Kalan</h2>

              <div className="flex justify-center gap-2 sm:gap-4">
                  {[
                      { label: 'GÜN', value: timeLeft.days },
                      { label: 'SAAT', value: timeLeft.hours },
                      { label: 'DAKİKA', value: timeLeft.minutes },
                      { label: 'SANİYE', value: timeLeft.seconds },
                  ].map((item, idx) => (
                      <div key={item.label} className="flex flex-col items-center">
                          <motion.div 
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="flex flex-col items-center justify-center w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-[#FAF8F5] rounded-2xl border border-[#E8E2D9]"
                          >
                              <span className="font-serif text-2xl sm:text-3xl text-[#2A2723] mb-0">{item.value}</span>
                          </motion.div>
                          <span className="text-[7px] sm:text-[8px] font-semibold tracking-[0.2em] text-[#A39785] mt-2">{item.label}</span>
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* Venue Section & Map */}
        <section className="py-10 px-5 relative">
           <div className="text-center">
              <MapPin strokeWidth={1} className="w-8 h-8 mx-auto text-[#CBA373] mb-5" />
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2723] mb-4 uppercase tracking-[0.2em]">Mekan</h2>
              
              <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-4 mb-8 flex flex-col items-center"
              >
                  <h3 className="font-serif text-2xl text-[#2A2723] mb-2">Diamond Palace Wedding</h3>
                  <p className="text-[#7A7265] text-sm leading-relaxed px-4">
                      {address}
                  </p>
              </motion.div>

              {/* Google Maps Iframe */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full rounded-3xl overflow-hidden border-4 border-white shadow-md h-[300px] relative bg-white"
              >
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5367.9033353091545!2d28.657995609094165!3d41.00499400209026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fda61de780f%3A0x46693114ccdb9afc!2sDiamond%20Palace%20Wedding!5e1!3m2!1str!2str!4v1780998114865!5m2!1str!2str" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Diamond Palace Wedding Map"
                  ></iframe>
              </motion.div>
           </div>
        </section>

        {/* Transportation & Parking Section */}
        <section className="py-10 px-5">
            <div className="text-center">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2723] mb-8 uppercase tracking-[0.2em]">Ulaşım & Otopark</h2>
                
                <div className="flex flex-col gap-5">
                    {/* Metrobus Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-[#E8E2D9] shadow-sm rounded-3xl p-6 flex flex-col items-center text-center"
                    >
                        <TrainFront className="w-6 h-6 text-[#CBA373] mb-3" />
                        <h4 className="text-[#2A2723] text-[11px] tracking-widest uppercase mb-2 font-bold">Toplu Taşıma</h4>
                        <p className="text-[#7A7265] text-xs sm:text-[13px] leading-relaxed">
                            Metrobüsle gelecek misafirlerimiz <strong className="text-[#2A2723] font-bold">"Beylikdüzü Metrobüs Durağında"</strong> inmelidir.
                        </p>
                    </motion.div>

                    {/* Image Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden border-4 border-white shadow-md my-2 bg-white"
                    >
                        <img 
                            src="/yoltarifi.png" 
                            alt="Yol Tarifi ve Otopark" 
                            className="w-full h-auto object-contain"
                        />
                        {/* Migros Marker/Tag Overlay */}
                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-[#E8E2D9] text-[#7A7265] text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-semibold">
                            <Car className="w-3 h-3 text-[#CBA373]" />
                            Migros Otoparkı
                        </div>
                    </motion.div>

                    {/* Parking Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-[#E8E2D9] shadow-sm rounded-3xl p-6 flex flex-col items-center text-center"
                    >
                        <Car className="w-6 h-6 text-[#CBA373] mb-3" />
                        <h4 className="text-[#2A2723] text-[11px] tracking-widest uppercase mb-2 font-bold">Özel Araç</h4>
                        <p className="text-[#7A7265] text-xs sm:text-[13px] leading-relaxed">
                            Düğün salonunun önünde <span className="text-[#CBA373] font-semibold">kısıtlı araç park alanı</span> vardır. Aracınızı haritada belirtilen <strong className="text-[#2A2723] font-bold">Migros AVM otoparkına</strong> park edebilirsiniz.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Families Section */}
        <section className="py-14 bg-white border-y border-[#E8E2D9] mt-6 px-5">
          <div className="flex flex-col items-center">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2723] mb-10 uppercase tracking-[0.2em]">Aileler</h2>

              <div className="flex flex-col gap-10 text-center w-full">
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                  >
                      <p className="text-[10px] tracking-[0.4em] text-[#CBA373] font-semibold uppercase mb-3">Gelinin Ailesi</p>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#2A2723] mb-2 leading-relaxed">Semanur & Turgay<br/>GÜZEL</h3>
                      <a href="tel:+905320505169" className="inline-flex items-center gap-1.5 text-xs text-[#A39785] hover:text-[#CBA373] transition-colors mt-1">
                          <Phone className="w-3 h-3" />
                          <span className="tracking-widest">0532 050 51 69</span>
                      </a>
                  </motion.div>

                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                  >
                      <p className="text-[10px] tracking-[0.4em] text-[#CBA373] font-semibold uppercase mb-3">Damadın Ailesi</p>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#2A2723] mb-2 leading-relaxed">Gülnur & İsmail<br/>AYHAN</h3>
                      <a href="tel:+905335790621" className="inline-flex items-center gap-1.5 text-xs text-[#A39785] hover:text-[#CBA373] transition-colors mt-1">
                          <Phone className="w-3 h-3" />
                          <span className="tracking-widest">0533 579 06 21</span>
                      </a>
                  </motion.div>
              </div>
          </div>
        </section>

        {/* Decorative Footer Spacer */}
        <footer className="py-16 text-center">
            <p className="font-script text-5xl text-[#CBA373]">Merve & Zafer</p>
            <p className="mt-4 text-[10px] tracking-[0.4em] text-[#A39785] uppercase">Sonsuza Dek</p>
        </footer>

        {/* Floating Elegant "Yol Tarifi Al" Button */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[320px] px-4 z-50 flex justify-center">
          <motion.a 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center justify-center px-6 py-[18px] bg-gradient-to-r from-[#2A2723] to-[#1A1815] text-white rounded-full text-xs font-bold tracking-[0.25em] shadow-[0_15px_40px_rgba(42,39,35,0.4)] hover:shadow-[0_15px_40px_rgba(203,163,115,0.3)] hover:-translate-y-1 transition-all duration-500 gap-3 border border-[#403B35] relative overflow-hidden"
          >
              {/* Subtle gold shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBA373]/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <MapPin className="w-4 h-4 text-[#CBA373] relative z-10" />
              <span className="relative z-10 pt-[2px]">YOL TARİFİ AL</span>
          </motion.a>
        </div>

      </div>
    </div>
  );
}

