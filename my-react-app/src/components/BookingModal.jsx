import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bus, Clock, Wifi, Wind, ChevronRight, Check, MapPin, Calendar, Users } from "lucide-react";
import { useLang } from "../context/LangContext";

const t = {
  en: {
    selectBus: "Select a bus",
    passenger: "Passenger details",
    confirm: "Confirm booking",
    from: "From",
    to: "To",
    date: "Date",
    availableRoutes: "Available buses",
    name: "Full name",
    phone: "Phone number",
    email: "Email address",
    seats: "Seats",
    book: "Book now",
    back: "Back",
    next: "Continue",
    success: "Booking confirmed!",
    successSub: "Your ticket has been sent to your email.",
    close: "Close",
    departs: "Departs",
    arrives: "Arrives",
    duration: "Duration",
    price: "Price",
    select: "Select",
    selected: "Selected",
    perSeat: "/ seat",
  },
  mr: {
    selectBus: "बस निवडा",
    passenger: "प्रवाशाचा तपशील",
    confirm: "बुकिंग पक्के करा",
    from: "कुठून",
    to: "कुठे",
    date: "तारीख",
    availableRoutes: "उपलब्ध बसेस",
    name: "पूर्ण नाव",
    phone: "फोन नंबर",
    email: "ईमेल पत्ता",
    seats: "जागा",
    book: "आता बुक करा",
    back: "मागे",
    next: "पुढे",
    success: "बुकिंग पक्के झाले!",
    successSub: "तुमचे तिकीट ईमेलवर पाठवले आहे.",
    close: "बंद करा",
    departs: "निघते",
    arrives: "पोहोचते",
    duration: "कालावधी",
    price: "किंमत",
    select: "निवडा",
    selected: "निवडले",
    perSeat: "/ जागा",
  },
};

const MOCK_BUSES = [
  { id: 1, type: "Shivneri AC",     departs: "06:00", arrives: "09:30", duration: "3h 30m", price: 450, seats: 32, amenities: ["wifi", "ac", "usb"] },
  { id: 2, type: "Asiad Semi-Luxury", departs: "08:30", arrives: "12:15", duration: "3h 45m", price: 280, seats: 18, amenities: ["ac"] },
  { id: 3, type: "Shivneri Premium", departs: "11:00", arrives: "14:20", duration: "3h 20m", price: 550, seats: 6,  amenities: ["wifi", "ac", "usb"] },
  { id: 4, type: "Ordinary",         departs: "14:00", arrives: "18:00", duration: "4h 00m", price: 180, seats: 24, amenities: [] },
];

const AmenityIcon = ({ type }) => {
  if (type === "wifi") return <Wifi className="h-3.5 w-3.5 text-ink-soft" />;
  if (type === "ac")   return <Wind className="h-3.5 w-3.5 text-ink-soft" />;
  if (type === "usb")  return <span className="text-[10px] font-semibold text-ink-soft">USB</span>;
  return null;
};

export function BookingModal({ isOpen, onClose, searchParams }) {
  const { lang } = useLang();
  const tx = t[lang];
  const [step, setStep] = useState(0); // 0=select bus, 1=passenger, 2=confirm, 3=done
  const [selectedBus, setSelectedBus] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", seats: 1 });

  const reset = () => { setStep(0); setSelectedBus(null); setForm({ name: "", phone: "", email: "", seats: 1 }); };
  const handleClose = () => { reset(); onClose(); };

  const steps = [tx.selectBus, tx.passenger, tx.confirm];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-xs text-ink-soft mb-1">
                  <MapPin className="h-3 w-3" />
                  {searchParams?.from} → {searchParams?.to}
                  <span className="mx-1">·</span>
                  <Calendar className="h-3 w-3" />
                  {searchParams?.date}
                </div>
                <h2 className="font-display text-xl">
                  {step < 3 ? steps[step] : tx.success}
                </h2>
              </div>
              <button onClick={handleClose} className="rounded-full p-2 hover:bg-muted/40 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Step indicator */}
            {step < 3 && (
              <div className="flex px-6 pt-4 gap-2">
                {steps.map((s, i) => (
                  <div key={s} className="flex-1 flex flex-col gap-1">
                    <div className={`h-1 rounded-full transition-colors ${i <= step ? "bg-red-600" : "bg-border"}`} />
                    <span className={`text-[10px] font-medium ${i === step ? "text-red-600" : "text-ink-soft"}`}>{s}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-5 max-h-[60vh] overflow-y-auto">

              {/* Step 0 — Bus list */}
              {step === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-ink-soft mb-4">{tx.availableRoutes}</p>
                  {MOCK_BUSES.map((bus) => (
                    <div
                      key={bus.id}
                      onClick={() => setSelectedBus(bus)}
                      className={`rounded-2xl border p-4 cursor-pointer transition-all ${
                        selectedBus?.id === bus.id
                          ? "border-red-600 bg-red-50"
                          : "border-border hover:border-ink/30 hover:bg-muted/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-muted/40 p-2.5">
                            <Bus className="h-5 w-5 text-ink-soft" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{bus.type}</div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              {bus.amenities.map((a) => <AmenityIcon key={a} type={a} />)}
                              <span className="text-[11px] text-ink-soft">{bus.seats} seats left</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-lg">₹{bus.price}</div>
                          <div className="text-[11px] text-ink-soft">{tx.perSeat}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                        <div className="text-center">
                          <div className="text-[10px] text-ink-soft uppercase tracking-wider">{tx.departs}</div>
                          <div className="font-display text-xl">{bus.departs}</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center gap-1 px-4">
                          <div className="text-[10px] text-ink-soft">{bus.duration}</div>
                          <div className="w-full flex items-center gap-1">
                            <div className="h-px flex-1 bg-border" />
                            <ChevronRight className="h-3 w-3 text-ink-soft" />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-[10px] text-ink-soft uppercase tracking-wider">{tx.arrives}</div>
                          <div className="font-display text-xl">{bus.arrives}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 1 — Passenger details */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-soft mb-1.5">{tx.name}</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Rajesh Kumar"
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-soft mb-1.5">{tx.phone}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-soft mb-1.5">{tx.email}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rajesh@example.com"
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-soft mb-1.5">{tx.seats}</label>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setForm({ ...form, seats: Math.max(1, form.seats - 1) })} className="h-10 w-10 rounded-xl border border-border text-xl font-light hover:bg-muted/40 transition-colors">−</button>
                      <span className="font-display text-2xl w-8 text-center">{form.seats}</span>
                      <button onClick={() => setForm({ ...form, seats: Math.min(6, form.seats + 1) })} className="h-10 w-10 rounded-xl border border-border text-xl font-light hover:bg-muted/40 transition-colors">+</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 — Confirm */}
              {step === 2 && selectedBus && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border p-5 space-y-3">
                    <Row label={tx.from}     value={searchParams?.from} />
                    <Row label={tx.to}       value={searchParams?.to} />
                    <Row label={tx.date}     value={searchParams?.date} />
                    <Row label="Bus"         value={selectedBus.type} />
                    <Row label={tx.departs}  value={selectedBus.departs} />
                    <Row label={tx.arrives}  value={selectedBus.arrives} />
                    <Row label={tx.name}     value={form.name} />
                    <Row label={tx.phone}    value={form.phone} />
                    <Row label={tx.seats}    value={form.seats} />
                    <div className="pt-3 border-t border-border flex justify-between items-center">
                      <span className="font-semibold text-sm">Total</span>
                      <span className="font-display text-2xl text-red-600">₹{selectedBus.price * form.seats}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 — Done */}
              {step === 3 && (
                <div className="flex flex-col items-center py-8 gap-4">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl">{tx.success}</h3>
                  <p className="text-sm text-ink-soft text-center">{tx.successSub}</p>
                  <div className="mt-2 rounded-2xl border border-border px-6 py-4 text-center">
                    <div className="text-[11px] text-ink-soft uppercase tracking-widest mb-1">Booking ID</div>
                    <div className="font-display text-xl tracking-widest">
                      MSRTC-{Math.random().toString(36).slice(2, 8).toUpperCase()}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer actions */}
            <div className="px-6 py-4 border-t border-border flex items-center justify-between">
              {step > 0 && step < 3 ? (
                <button onClick={() => setStep(step - 1)} className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">
                  ← {tx.back}
                </button>
              ) : <div />}

              {step === 0 && (
                <button
                  onClick={() => selectedBus && setStep(1)}
                  disabled={!selectedBus}
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-40 hover:bg-red-700 transition-colors"
                >
                  {tx.next} <ChevronRight className="h-4 w-4" />
                </button>
              )}
              {step === 1 && (
                <button
                  onClick={() => form.name && form.phone && setStep(2)}
                  disabled={!form.name || !form.phone}
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-40 hover:bg-red-700 transition-colors"
                >
                  {tx.next} <ChevronRight className="h-4 w-4" />
                </button>
              )}
              {step === 2 && (
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  {tx.book} <Check className="h-4 w-4" />
                </button>
              )}
              {step === 3 && (
                <button onClick={handleClose} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white hover:bg-ink/80 transition-colors">
                  {tx.close}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-ink-soft">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export default BookingModal;