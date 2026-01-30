import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between gap-2">
          {/* Logo.png */}
          <div className="mr-1 h-8 w-8 flex-shrink-0">
            <img
              src="/data/Logo.png"
              alt="Logo PNG"
              className="h-full w-full object-contain drop-shadow-md"
            />
          </div>
          {/* logo.svg */}
          <div className="mr-2 h-8 w-8 flex-shrink-0">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-6 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group hover:text-primary-500 dark:hover:text-primary-400 relative text-sm font-medium text-gray-900 transition-colors duration-300 sm:text-base dark:text-gray-100"
              >
                {link.title}
                <span className="from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
