import styles from './Statistics.module.css';
import { getRandomColor } from 'random';

export const Statistics = (props) => {
  return (
    <section className={styles.statistics}>
     { props.title && <h2 className={styles.title}>{props.title}</h2>}

      <ul className={styles['stat-list']}>
        {props.stats.map(item => {
          return (
            <li
              key={item.id}
              className={styles['stat-item']}
              style={{ background: getRandomColor() }}
            >
              <span className={styles['stat-item-label']}>{item.label}</span>
              <span className={styles['stat-item-percentage']}>
                {item.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};