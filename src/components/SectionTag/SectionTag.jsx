import './SectionTag.scss';

function SectionTag({ value }) {
  if (value === null || value === undefined) return null;
  const content = typeof value === 'object' ? JSON.stringify(value) : value;
  return <p className="section-tag">{content}</p>;
}

export default SectionTag;
