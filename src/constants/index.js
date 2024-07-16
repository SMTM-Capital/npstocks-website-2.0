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
    title: 'npstocks mobile offer users access to live NEPSE data for investors on the go',
    points: [
      'get notified on any significant actions on your NEPSE stocks',
      'track your investments in realtime',
      'monitor live market with best in class insights into NEPSE',
      'browse investment ideas between your meeting with npstocks',
    ]
  },
  card2:
  {
    title: 'npstocks web offers you more professional investment and trading tools on the web for NEPSE',
    points: [
      'complete company financials for listed companies on NEPSE',
      'NEPSE chart powered by npstocks insights and tools',
      'utilise a comprehensive broker analytics tool for Nepal Stock Exchange ',
      'Evaluate your investments with NEPSE portfolio analyser   ',
    ]
  },
}

export const featureList = [
  { icon: lightning, label: "Fastest NEPSE Feed" },
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
  // {
  //   price: '2,500',
  //   time: 'One Year',
  //   offer: true,
  //   discountPrice: '2,081',
  //   discountPct: '15%',
  //   offerTitle: '2081 New Year Special'
  // },
  {
    price: '999',
    time: 'Three Months'
  },
  {
    price: '2,499',
    time: 'One Year',
    popular: true
  }
]