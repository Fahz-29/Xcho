import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'สร้างแบบฟอร์มได้ง่าย รวดเร็ว และสะดวกกว่าที่เคย',
    Svg: require('@site/static/img/undraw_web-development_f0tp.svg').default,
    description: (
      <>
        ไม่ต้องเขียนโค้ด ไม่ซับซ้อน พร้อมใช้งานทันที ครบทุกฟังก์ชันที่คุณต้องการในที่เดียว
      </>
    ),
  },
  {
    title: 'จัดการแบบฟอร์มอย่างมืออาชีพ ด้วย Xcho',
    Svg: require('@site/static/img/undraw_google-docs_fwhy.svg').default,
    description: (
      <>
        รองรับการปรับแต่งได้หลากหลาย และเพิ่มประสิทธิภาพในการเก็บข้อมูลได้อย่างมั่นใจ
      </>
    ),
  },
  {
    title: 'สร้างแบบฟอร์มที่ใช้งานง่ายและทรงพลัง',
    Svg: require('@site/static/img/undraw_writing-online_x665.svg').default,
    description: (
      <>
        ตอบโจทย์ทุกการใช้งาน ตั้งแต่แบบฟอร์มทั่วไปไปจนถึงแบบฟอร์มเฉพาะทาง ออกแบบได้อิสระ
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
