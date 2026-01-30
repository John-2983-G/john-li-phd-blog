interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Our World in Data – CO₂ and Greenhouse Gas Emissions',
    description:
      'Comprehensive interactive charts and downloadable datasets on global and country-level CO₂ emissions, energy transitions, and climate indicators. Widely cited in academic research.',
    href: 'https://ourworldindata.org/co2-and-greenhouse-gas-emissions',
  },
  {
    title: 'World Bank Carbon Pricing Dashboard',
    description:
      'Interactive global map and data on carbon taxes, emissions trading systems (ETS), and pricing mechanisms, including revenue and coverage statistics.',
    href: 'https://carbonpricingdashboard.worldbank.org/',
  },
  {
    title: 'IEA Greenhouse Gas Emissions Data',
    description:
      'Detailed energy-related CO₂ and GHG emissions statistics, forecasts, and sector breakdowns from the International Energy Agency.',
    href: 'https://www.iea.org/data-and-statistics/data-product/greenhouse-gas-emissions-from-energy',
  },
  {
    title: 'EDGAR Database (European Commission)',
    description:
      'Historical and current greenhouse gas emissions by country, sector, and gas type, with high-resolution grids and downloadable files.',
    href: 'https://edgar.jrc.ec.europa.eu/',
  },
  {
    title: 'Carbon Monitor',
    description:
      'Near-real-time daily CO₂ emissions estimates for major countries and sectors, useful for tracking short-term trends.',
    href: 'https://carbonmonitor.org/',
  },
  {
    title: 'Ember Climate Data',
    description:
      'Global electricity transition datasets, including power sector emissions, renewable shares, and country-level hourly data.',
    href: 'https://ember-climate.org/data/',
  },
  {
    title: 'Climate Watch (World Resources Institute)',
    description:
      'Country GHG emissions profiles, NDC tracking, and historical data aligned with UNFCCC reporting.',
    href: 'https://www.climatewatchdata.org/',
  },
  {
    title: 'Global Carbon Project',
    description:
      'Annual global carbon budget reports and datasets on fossil fuel emissions, land use, and atmospheric CO₂ growth.',
    href: 'https://www.globalcarbonproject.org/',
  },
]

export default projectsData
