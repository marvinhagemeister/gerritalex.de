import i18next from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { OcticonX } from './icons';

export function Banner({ repoLink }) {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  const handleClick = () => setIsVisible(false);

  return isVisible ? (
    <div className="signup-prompt-bg rounded-1">
      <div className="signup-prompt p-4 text-center mb-4 rounded-1">
        <div className="position-relative">
          <button
            type="button"
            onClick={handleClick}
            className="position-absolute top-0 right-0 btn-link link-gray"
          >
            <OcticonX /> {t('disclaimer-4')}
          </button>
          <h3 className="pt-4 pt-lg-2">{t('disclaimer-1')}</h3>
          <p className="col-8 mx-auto">
            {t('disclaimer-2')}
            <br />
            {t('disclaimer-3')}{' '}
            <a href={repoLink} target="_blank" rel="noreferrer noopener">
              {i18next.language.includes('de') ? 'Repo' : 'repo'}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  ) : null;
}
