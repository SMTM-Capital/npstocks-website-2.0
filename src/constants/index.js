import lightning from '../assets/icons/lightning.png';
import celluar from '../assets/icons/celluar.png';
import filter from '../assets/icons/filter.png';
import transaction from '../assets/icons/transaction.png';
import progress from '../assets/icons/progress.png';
import one from '../assets/icons/01.png';

export const navLinks = [
  { href: "#platforms", label: "Platforms" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact-us", label: "Contact Us" },
]

export const experienceText = {
  heading: 'Two unique experiences.',
  card1:
  {
    title: 'npstocks mobile offer users access to the essential for investors on the go',
    points: [
      'get notified on any significant actions on your stocks',
      'track your investments in realtime',
      'monitor live market with best in class insights',
      'browse investment ideas between your meeting',
    ]
  },
  card2:
  {
    title: 'npstocks web offers you more professional investment and trading tools on the web',
    points: [
      'complete company financials',
      'technical chart powered by npstocks insights and tools',
      'comprehensive broker analytics tool',
      'portfolio analyser',
    ]
  },
}

export const featureList = [
  { icon: lightning, label: "Fastest Price Feed" },
  { icon: one, label: "Fastest Digitised Financials EachDay" },
  { icon: progress, label: "Portfolio Manager" },
  { icon: filter, label: "Powerful Screeners" },
  { icon: transaction, label: "Floorsheet Analytics" },
  { icon: celluar, label: "Complete Securities info"}
];

export const pricings = [
  {
    price: '499',
    time: 'One Month',
  },
  {
    price: '2,500',
    time: 'One Year',
    offer: true,
    discountPrice: '2,081',
    discountPct: '15%',
    offerTitle: '2081 New Year Special'
  },
  {
    price: '2,499',
    time: 'One Year',
    popular: true
  }
]