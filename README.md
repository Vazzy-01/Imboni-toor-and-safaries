# Rwanda Roots Tour — production-ready front-end foundation

A React + Vite travel website rebuilt around the supplied Rwanda Roots Tour design and content.

## What changed

- Reusable React architecture with React Router.
- Dedicated pages for journeys, journey details, destinations, destination details, journal stories and enquiry flow.
- Proper enquiry UX: **Enquiry → Review → Sent**.
- No fake checkout: payment is explicitly postponed until the itinerary and price are confirmed.
- Client-side validation for name, email, date and trip interest.
- Accessible focus states, responsive navigation and reduced-motion support.
- Currency selector with live USD conversion when the public exchange-rate service is available; USD remains the fallback.
- Clear indicative-price language so displayed journey prices are not presented as final invoices.
- 404 route and scroll restoration.
- Vite React plugin configuration included, fixing the previous `React is not defined` setup problem.

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Enquiries

The form uses `VITE_BOOKING_ENDPOINT`. Copy `.env.example` to `.env` and set your real enquiry endpoint.

The included endpoint fallback preserves the endpoint from the supplied project, but for production you should move this to your own controlled backend/serverless function.

## Payments

The website does **not** pretend to process card, PayPal, MTN MoMo or Airtel Money payments. A real payment gateway should be connected only after an itinerary and final price are confirmed. Payment credentials and provider secrets must remain server-side.

## Deployment

Because this is a Vite single-page app, configure the hosting provider to return `index.html` for unknown application routes so URLs such as `/tours/into-the-mist` and `/journal/slower-kigali` work after refresh.
