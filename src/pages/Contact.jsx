import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import { interests, tours } from "../data";
import Countrycode from "./countycode";

const ENDPOINT = import.meta.env.VITE_BOOKING_ENDPOINT || "https://script.google.com/macros/s/AKfycbznp1pkQsDbfoFoGGb-AV4Ts8315Aga-yfH7UWC15g0zZaBPcYCp7eHYdUw3DeeOxk4/exec";
const today = new Date().toISOString().split("T")[0];

const defaultForm = {
  name: "",
  countryCode: "+250",
  date: "",
  travel: "1 travellers",
  interest: "Choose a direction",
  journey: "",
  message: ""
};

function makeReference() {
  return `IRS-${Date.now().toString().slice(-6)}`;
}

export default function Contact() {
  const [params] = useSearchParams();
  const initialInterest = params.get("interest") || "Choose a direction";
  const initialJourney = params.get("journey") || "";

  const [form, setForm] = useState({
    ...defaultForm,
    interest: interests.includes(initialInterest) ? initialInterest : defaultForm.interest,
    journey: tours.some((tour) => tour.title === initialJourney) ? initialJourney : ""
  });
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });

  const selectedJourney = useMemo(
    () => tours.find((tour) => tour.title === form.journey),
    [form.journey]
  );

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  };

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    const digits = form.phone.replace(/\D/g, "");
    if (!/^[\d\s()+.-]+$/.test(form.phone.trim()) || digits.length < 7 || digits.length > 15) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.date) nextErrors.date = "Please choose a travel date.";
    else if (form.date < today) nextErrors.date = "The travel date cannot be in the past.";
    if (form.interest === "Choose a direction") nextErrors.interest = "Please choose an interest.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function review(event) {
    event.preventDefault();
    if (!validate()) return;
    setStatus({ type: "", text: "" });
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function send() {
    if (!ENDPOINT) {
      setStatus({
        type: "error",
        text: "The booking endpoint is not configured. Please contact us by email or WhatsApp."
      });
      return;
    }

    setSending(true);
    setStatus({ type: "", text: "" });
    const ref = makeReference();
    const payload = {
      ...form,
      phone: `${form.countryCode} ${form.phone}`.trim(),
      reference: ref,
      submittedAt: new Date().toISOString(),
      source: "IMBONI Roots Tour"
    };

    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      setReference(ref);
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus({
        type: "error",
        text: "We could not send the enquiry. Please use the email or WhatsApp options below."
      });
    } finally {
      setSending(false);
    }
  }

  const fullPhone = `${form.countryCode} ${form.phone}`.trim();
  const whats = `https://wa.me/250791738615?text=${encodeURIComponent(
    `Hello IMBONI Roots Tour. My enquiry reference is ${reference || "new"}. I would like help planning a Rwanda trip.`
  )}`;

  return (
    <PageShell darkHeader>
      <main>
        <section className="contact-hero">
          <div className="container contact-hero-grid">
            <div>
              <p className="eyebrow gold">LET'S TALK</p>
              <h1 className="display">Your Rwanda<br /><em>starts here.</em></h1>
              <p className="hero-copy dark-copy">
                Tell us what you're dreaming about. We will help you turn the idea into a practical route before any payment is requested.
              </p>

              {selectedJourney ? (
                <div className="journey-inclusions" aria-live="polite">
                  <div className="journey-inclusions-heading">
                    <span className="journey-inclusions-kicker">YOUR SELECTED JOURNEY</span>
                    <h2>{selectedJourney.title}</h2>
                    <p>{selectedJourney.location} <span aria-hidden="true">·</span> {selectedJourney.duration}</p>
                  </div>
                  <div className="journey-inclusions-columns">
                    <div className="journey-inclusion-group">
                      <h3><span className="journey-inclusion-icon">✓</span> Included</h3>
                      <ul>{(selectedJourney.includes || []).map((item, index) => <li key={`included-${index}`}>{item}</li>)}</ul>
                    </div>
                    <div className="journey-inclusion-group journey-inclusion-group--excluded">
                      <h3><span className="journey-inclusion-icon">−</span> Not included</h3>
                      <ul>{(selectedJourney.notIncluded || []).map((item, index) => <li key={`excluded-${index}`}>{item}</li>)}</ul>
                    </div>
                  </div>
                  <Link className="arrow-link" to={`/tours/${selectedJourney.slug}`}>Explore journey <span>↗</span></Link>
                  <p className="journey-inclusions-note">
                    These are planning details, not a final contract. We will confirm the exact inclusions and exclusions in your personalised quote.
                  </p>
                </div>
              ) : (
                <div className="contact-details">
                  <div><span>Email</span><a href="mailto:imboni@rwandarootstour.com">imboni@rwandarootstour.com</a></div>
                  <div><span>Based in</span><p>Kigali, Rwanda</p></div>
                  <div><span>Response</span><p>Usually within 1 business day</p></div>
                  <div><span>Process</span><p>Enquiry → review → confirmation → payment</p></div>
                </div>
              )}
            </div>

            <div className="booking-form">
              <div className="form-progress"><span>0{step}</span><i /><span>{step === 1 ? "TRIP ENQUIRY" : step === 2 ? "REVIEW" : "CONFIRMED"}</span></div>

              {step === 1 && (
                <form onSubmit={review} noValidate>
                  <label className="form-label-required">
                    Your name
                    <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="What should we call you?" autoComplete="name" aria-invalid={!!errors.name} required />
                    {errors.name && <small className="form-error">{errors.name}</small>}
                  </label>

                  <label className="form-label-required">
                    Your number
                    <div className="phone-input-row">
                      <Countrycode value={form.countryCode} onChange={(code) => update("countryCode", code)} />
                      <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="781 234 567" autoComplete="tel-national" inputMode="tel" aria-invalid={!!errors.phone} required />
                    </div>
                    {errors.phone && <small className="form-error">{errors.phone}</small>}
                  </label>

                  <label className="form-label-required">
                    Email address
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" autoComplete="email" aria-invalid={!!errors.email} required />
                    {errors.email && <small className="form-error">{errors.email}</small>}
                  </label>

                  <div className="form-two">
                    <label className="form-label-required">
                      When?
                      <input type="date" min={today} value={form.date} onChange={(e) => update("date", e.target.value)} aria-invalid={!!errors.date} required />
                      {errors.date && <small className="form-error">{errors.date}</small>}
                    </label>
                    <label className="form-label-required">
                      Travellers
                      <select value={form.travellers} onChange={(e) => update("travellers", e.target.value)}>
                        <option>1 traveller</option><option>2 travellers</option><option>3–4 travellers</option><option>5+ travellers</option><option>Not sure yet</option>
                      </select>
                    </label>
                  </div>

                  <label className="form-label-required">
                    What are you curious about?
                    <select value={form.interest} onChange={(e) => update("interest", e.target.value)} aria-invalid={!!errors.interest} required>
                      {interests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}
                    </select>
                    {errors.interest && <small className="form-error">{errors.interest}</small>}
                  </label>

                  <label>
                    Journey (optional)
                    <select value={form.journey} onChange={(e) => update("journey", e.target.value)}>
                      <option value="">I need help choosing</option>
                      {tours.map((tour) => <option key={tour.id} value={tour.title}>{tour.title}</option>)}
                    </select>
                  </label>

                  <label>
                    Tell us more
                    <textarea rows="5" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="What kind of trip would feel right? Who are you travelling with? Anything you already know?" />
                  </label>

                  <button className="button button-green" type="submit">Review my enquiry <span>↗</span></button>
                  <small>Nothing is booked and no payment is taken at this stage.</small>
                </form>
              )}

              {step === 2 && (
                <div className="review-step">
                  <div className="booking-receipt">
                    <div className="receipt-header"><div><span className="receipt-label">STEP 02</span><h3>Check the details</h3></div><span className="receipt-number">Not submitted yet</span></div>
                    {[
                      ["Name", form.name], ["Email", form.email], ["Phone", fullPhone],
                      ["Travel date", form.date], ["Travellers", form.travellers],
                      ["Interest", form.interest], ["Journey", form.journey || "Help me choose"]
                    ].map(([label, value]) => <div className="receipt-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
                    <div className="receipt-message"><span>Your message</span><p>{form.message.trim() || "No additional message."}</p></div>
                    {selectedJourney && <div className="receipt-total"><span>Reference journey</span><strong>From ${selectedJourney.usd.toLocaleString()} pp*</strong></div>}
                  </div>
                  <div className="review-note"><strong>What happens next?</strong><p>We review your enquiry and contact you to refine the itinerary and price. Payment comes only after the trip is confirmed with you.</p></div>
                  <div className="checkout-actions">
                    <button className="button button-secondary" type="button" onClick={() => setStep(1)}>Edit enquiry</button>
                    <button className="button button-green" type="button" onClick={send} disabled={sending}>{sending ? "Sending…" : "Send enquiry"} <span>↗</span></button>
                  </div>
                  {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
                  <small>*Indicative journey price only; it is not a payment request.</small>
                </div>
              )}

              {step === 3 && (
                <div className="confirmation-step">
                  <div className="confirmation-mark">✓</div><p className="eyebrow gold">ENQUIRY RECEIVED</p>
                  <h2 className="heading">We have your<br /><em>IMBONI roots idea.</em></h2>
                  <p className="detail-lead">Your reference is <strong>{reference}</strong>. Keep it handy when you contact us.</p>
                  <div className="confirmation-list">
                    <div><span>Next step</span><strong>We review your request and reply with the next practical options.</strong></div>
                    <div><span>Payment</span><strong>No payment has been taken. Payment is discussed only after the trip is confirmed.</strong></div>
                  </div>
                  <div className="confirmation-actions">
                    <a className="button button-green" href={whats} target="_blank" rel="noreferrer">Message on WhatsApp <span>↗</span></a>
                    <a className="button button-secondary" href="mailto:imboni@rwandarootstour.com">Email us <span>↗</span></a>
                  </div>
                  <Link className="arrow-link" to="/">Return to IMBONI Roots <span>↗</span></Link>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="dark-section mini-contact"><div className="container"><p className="eyebrow gold">NO RUSH</p><h2 className="heading light">A good trip starts<br /><em>before the booking.</em></h2><p className="light-muted">Ask questions. Change your mind. Tell us what matters. The first step is simply a conversation.</p></div></section>
      </main>
    </PageShell>
  );
}
