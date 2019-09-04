import React from 'react';
import { useTranslation } from 'react-i18next';

const Tag = ({ text }) => (
  <button className="btn-link topic-tag topic-tag-link" type="button">
    {text}
  </button>
);

const Tags = ({ tags }) => {
  const { t } = useTranslation();

  return (
    tags.length > 0 && (
      <>
        <p class="pinned-item-desc mt-2 text-gray">{t('tools-used')}:</p>
        <p className="mb-0 f6 text-gray d-inline-flex flex-wrap flex-items-center f6 my-1">
          {tags.map((text, key) => (
            <Tag text={text} key={key} />
          ))}
        </p>
      </>
    )
  );
};

export default Tags;
