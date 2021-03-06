import { useTranslation } from 'react-i18next';

function Talk({ text }) {
  return (
    <button className="btn-link topic-tag topic-tag-link" type="button">
      {text}
    </button>
  );
}

export function Talks({ data }) {
  const { t } = useTranslation();

  return (
    data.length > 0 && (
      <>
        <p className="pinned-item-desc mt-2 text-gray">{t('talks-held')}:</p>
        <p className="mb-0 f6 text-gray d-inline-flex flex-wrap flex-items-center f6 my-1">
          {data.map(text => (
            <Talk text={text} key={text} />
          ))}
        </p>
      </>
    )
  );
}
