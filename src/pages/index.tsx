import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={styles.buttons}
          style={{ display: "flex", gap: "20px", justifyContent: "center" }}
        >
          {/* ปุ่มที่ 1 */}
          <Link
            className="button button--primary button--lg custom-btn-primary"
            href="https://xcho.pea.co.th/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            เข้าสู่หน้าเว็บสร้างแบบฟอร์ม XCHO
          </Link>

          {/* ปุ่มที่ 2 */}
          <Link
            className="button button--secondary button--lg custom-btn-secondary"
            to="/docs/category/ภาพรวมวิธีการใช้งานระบบ-xcho"
          >
            คู่มือวิธีการใช้งานระบบ XCHO
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
