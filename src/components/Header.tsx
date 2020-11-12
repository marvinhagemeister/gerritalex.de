import PwaInstallIcon from '@/assets/icon-plus.svg';
import { usePwaInstall } from '@/hooks/usePwaInstall';
import Link from 'next/link';

import { InternalLink } from './InternalLink';
import { ThemeToggle } from './ThemeToggle';

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img
        className="monochrome-img h-5 inline-block mr-2"
        width="20"
        height="20"
        src="/monochrome/logo.svg"
        alt="logo"
      />
      <strong className="text-lg text">gerritalex.de</strong>
    </div>
  );
}

export function Header(): JSX.Element {
  const { isReady, trigger } = usePwaInstall();

  return (
    <header className="flex justify-between items-center py-6">
      <div className="flex space-x-2">
        <Link href="/">
          <a aria-label="Gerrit Alex's personal site">
            <Logo />
          </a>
        </Link>
        <button
          type="button"
          style={{
            cursor: isReady ? 'auto' : 'none',
            opacity: isReady ? 1 : 0,
            transform: isReady
              ? 'translateX(0) rotate(0deg)'
              : 'translateX(-1rem) rotate(-270deg)',
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
          }}
          className="self-center w-5 h-5"
          onClick={() => {
            // eslint-disable-next-line no-console
            trigger().catch(console.error);
          }}
        >
          <img
            className="monochrome-img"
            src={PwaInstallIcon}
            alt="install PWA"
            loading="lazy"
          />
        </button>
      </div>
      <nav className="text-base leading-5 flex items-center">
        <InternalLink
          href="/blog"
          className="font-medium text-theme-text hover:text-theme-text"
        >
          Blog
        </InternalLink>
        <InternalLink
          href="/music"
          className="font-medium text-theme-text hover:text-theme-text"
        >
          Music Collection
        </InternalLink>
        <InternalLink
          href="/concerts"
          className="font-medium text-theme-text hover:text-theme-text"
        >
          Attended Concerts
        </InternalLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}