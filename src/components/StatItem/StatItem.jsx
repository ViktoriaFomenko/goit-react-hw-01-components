import css from './StatItem.module.css';

export const StatItem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span classNAme={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
